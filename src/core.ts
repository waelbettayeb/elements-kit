import { isSignal, effect } from "./signals";

const DISPOSE: unique symbol = Symbol("dispose");
const RENDER: unique symbol = Symbol("render");
const EFFECT: unique symbol = Symbol("effect");

function isObject(v: unknown): v is Record<string | symbol, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function dispose(v: ReactiveElement) {
  v[DISPOSE]();
}

export function render(v: ReactiveElement): Element {
  return v[RENDER]();
}

interface ReactiveElement extends Element {
  [DISPOSE](): void;
  [EFFECT](fn: () => void): void;
  [RENDER](): Element;
}

function objectOrSetter<T extends Record<string | symbol, unknown>>(
  root: ReactiveElement,
  obj: T,
  key: keyof T
) {
  const property = obj[key as keyof T];
  function handler(...args) {
    if (args.length === 0) {
      return root;
    }
    const value = args[0];
    if (isSignal(value)) {
      root[EFFECT](() => {
        obj[key] = value();
      });
    } else {
      obj[key] = value;
    }
    return root;
  }
  return new Proxy(handler, {
    get(_, subkey) {
      if (isObject(property)) {
        return objectOrSetter(root, property, subkey);
      }
      return obj[subkey as keyof T];
    },
    apply(_, __, argArray) {
      return handler(...argArray);
    },
  });
}

export function reactive(el: Element): ReactiveElement {
  const effects = new Set<() => () => void>();
  const disposables = new Set<() => void>();

  const dispatchEffects = () => {
    effects.forEach((effect) => disposables.add(effect()));
    effects.clear();
  };
  const dispose = () => {
    disposables.forEach((dispose) => dispose());
    disposables.clear();
  };
  const proxy = new Proxy(el, {
    get(target, key: keyof Element, receiver) {
      if ("dispose" in Symbol && key === Symbol.dispose) {
        return dispose;
      }
      if ((key as unknown as symbol) === DISPOSE) {
        return dispose;
      }
      if ((key as unknown as symbol) === EFFECT) {
        return (fn: () => () => void) => {
          effects.add(fn);
        };
      }
      if ((key as unknown as symbol) === RENDER) {
        return () => {
          dispatchEffects();
          return target;
        };
      }

      if (typeof target[key] === "function") return target[key];

      if (isObject(target[key])) {
        return objectOrSetter(receiver, target, key);
      }

      return (...args) => {
        if (args.length === 0) {
          return receiver;
        }
        const value = args[0];
        if (isSignal(value)) {
          effects.add(() =>
            effect(() => {
              console.log("updating", key.toString(), "to", value());
              el[key] = value();
            })
          );
        } else {
          el[key] = value;
        }
        return receiver;
      };
    },
  });

  return proxy;
}
