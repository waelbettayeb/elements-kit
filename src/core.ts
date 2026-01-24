import { effect, isReactiveValue } from "@/signals";

export const DISPOSABLES: unique symbol = Symbol("disposables");
export const DISPOSE: unique symbol = Symbol("dispose");
export const VALUE: unique symbol = Symbol("value");
export const REF: unique symbol = Symbol("ref");
export const APPLY: unique symbol = Symbol("apply");
export const EFFECT: unique symbol = Symbol("effect");
export const ON: unique symbol = Symbol("on");
export const CLASSES: unique symbol = Symbol("classes");
export const ATTR: unique symbol = Symbol("attr");

// NOTE: typescript doesn't allow to extract setter argument types directly
// check: https://github.com/microsoft/TypeScript/issues/21759
export type ReactiveValue<T> = (() => T) | T;

/** Child types that can be appended to an element */
type Child = ElementBuilder<any> | Element | DocumentFragment | string | number;

/**
 * The main reactive element interface.
 * Property setters are defined in the specific builder interfaces in dom.ts.
 */
export interface ReactiveElement<T extends Element> {
  /** Append children to the element, returns the raw DOM element */
  (...children: ReactiveValue<Child>[]): T;

  /** The underlying DOM element */
  readonly [VALUE]: T;

  /** Access the element reference for direct manipulation */
  [REF](apply: (ref: T) => void | (() => void)): this;

  /** Register a reactive effect */
  [EFFECT](fn: () => void): this;

  /** Add an event listener */
  [ON]<K extends keyof HTMLElementEventMap>(
    eventType: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ): this;
  [ON](
    eventType: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): this;

  /** Dispose the element and cleanup all effects */
  [DISPOSE](): void;

  /** Add/remove/toggle CSS classes reactively */
  [CLASSES]: ClassListHelper<this>;

  /** Set/get attributes reactively */
  [ATTR](name: string, value?: ReactiveValue<string | boolean | null>): this;

  /** Style property for chaining */
  style: CSSStyleSetters<this>;
}

/** Helper for classList manipulation */
interface ClassListHelper<R> {
  /** Add one or more classes */
  add(...classes: ReactiveValue<string>[]): R;
  /** Remove one or more classes */
  remove(...classes: ReactiveValue<string>[]): R;
  /** Toggle a class based on condition */
  toggle(className: string, condition?: ReactiveValue<boolean>): R;
  /** Set classes from an object { className: condition } */
  set(classMap: Record<string, ReactiveValue<boolean>>): R;
}

/** Internal classList helper type for ElementBuilder */
type ClassListHelperImpl<T extends Element> = {
  add(...classes: ReactiveValue<string>[]): ElementBuilder<T>;
  remove(...classes: ReactiveValue<string>[]): ElementBuilder<T>;
  toggle(className: string, condition?: ReactiveValue<boolean>): ElementBuilder<T>;
  set(classMap: Record<string, ReactiveValue<boolean>>): ElementBuilder<T>;
};

/** CSS style properties as chainable setters */
type CSSStyleSetters<R> = {
  [K in keyof CSSStyleDeclaration as CSSStyleDeclaration[K] extends string
    ? K
    : never]: (value: ReactiveValue<string>) => R;
};

// Re-export conditional after types are defined
export { when, show, each } from "@/conditional";

// Re-export context API
export { createContext, provide, inject, updateContext, type Context } from "@/context";

// Re-export async signals
export { asyncSignal, asyncComputed, resource, type AsyncSignal, type AsyncState } from "@/async";

// Re-export router
export { navigate, pathname, searchParams, hash, param, createRoute, createRouter, link, disposeRouter, type RouteMatch } from "@/router";

// Re-export document utilities
export { cookie, delegate, documentTitle, windowScroll, windowSize, mediaQuery, onlineStatus, type ReactiveCookie, type CookieOptions } from "@/document";

class ElementBuilder<T extends Element = Element> {
  /** The underlying DOM element */
  [VALUE]: T;
  // TODO: should we track effects separately?
  /** A set of cleanup functions to run when disposing the element */
  private [DISPOSABLES] = new Set<() => void>();
  /** Dispose the reactive element and run all cleanup functions */
  [DISPOSE]() {
    this[DISPOSABLES].forEach((dispose) => dispose());
    this[DISPOSABLES].clear();
  }
  private constructor(el: T) {
    this[VALUE] = el;
  }

  static create<T extends Element>(el: T): ReactiveElement<T> {
    const builder = new ElementBuilder<T>(el);
    return new Proxy(builder[APPLY], {
      apply(_target, _thisArg, argArray) {
        return Reflect.apply(builder[APPLY], builder, argArray);
      },
      get(_target, key, receiver) {
        const el = builder[VALUE];
        if (key in builder) {
          return Reflect.get(builder, key, receiver);
        }

        return setterOrValue(receiver as ElementBuilder<T>, el, key);
      },
    }) as unknown as ReactiveElement<T>;
  }

  [APPLY](
    this: ElementBuilder,
    ...children: ReactiveValue<ElementBuilder | Element | string | number>[]
  ) {
    const el = this[VALUE];
    if (children.length === 0) return el;

    children.forEach((child) => {
      if (isReactiveValue(child)) {
        const markerStart = document.createComment("{");
        const markerEnd = document.createComment("}");
        const value = toNode(child());
        el.appendChild(markerStart);
        el.appendChild(value);
        el.appendChild(markerEnd);

        this[EFFECT](() => {
          const value = toNode(child());
          let node = markerStart.nextSibling;
          while (node && node !== markerEnd) {
            el.removeChild(node);
            node = node.nextSibling;
          }
          markerStart.after(value);
        });

        return;
      }
      el.appendChild(toNode(child));
    });

    return el;
  }

  [REF](apply: (ref: T) => void | (() => void)) {
    const result = apply(this[VALUE]);
    if (typeof result === "function") {
      this[DISPOSABLES].add(result);
    }
    return this;
  }

  [EFFECT](fn: () => void) {
    this[DISPOSABLES].add(effect(fn));
    return this;
  }

  [ON](
    eventType: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) {
    this[VALUE].addEventListener(eventType, listener, options);
    this[DISPOSABLES].add(() => {
      this[VALUE].removeEventListener(eventType, listener, options);
    });
    return this;
  }

  get [CLASSES](): ClassListHelperImpl<T> {
    const el = this[VALUE];
    const builder = this;

    return {
      add(...classes: ReactiveValue<string>[]): ElementBuilder<T> {
        classes.forEach((cls) => {
          if (isReactiveValue(cls)) {
            let prevClass = "";
            builder[DISPOSABLES].add(
              effect(() => {
                const newClass = cls();
                if (prevClass) el.classList.remove(prevClass);
                if (newClass) el.classList.add(newClass);
                prevClass = newClass;
              })
            );
          } else if (cls) {
            el.classList.add(cls);
          }
        });
        return builder;
      },

      remove(...classes: ReactiveValue<string>[]): ElementBuilder<T> {
        classes.forEach((cls) => {
          if (isReactiveValue(cls)) {
            builder[DISPOSABLES].add(
              effect(() => {
                const className = cls();
                if (className) el.classList.remove(className);
              })
            );
          } else if (cls) {
            el.classList.remove(cls);
          }
        });
        return builder;
      },

      toggle(className: string, condition?: ReactiveValue<boolean>): ElementBuilder<T> {
        if (condition === undefined) {
          el.classList.toggle(className);
        } else if (isReactiveValue(condition)) {
          builder[DISPOSABLES].add(
            effect(() => {
              el.classList.toggle(className, condition());
            })
          );
        } else {
          el.classList.toggle(className, condition);
        }
        return builder;
      },

      set(classMap: Record<string, ReactiveValue<boolean>>): ElementBuilder<T> {
        for (const className in classMap) {
          const condition = classMap[className];
          if (isReactiveValue(condition)) {
            builder[DISPOSABLES].add(
              effect(() => {
                el.classList.toggle(className, condition());
              })
            );
          } else {
            el.classList.toggle(className, condition);
          }
        }
        return builder;
      },
    };
  }

  [ATTR](name: string, value?: ReactiveValue<string | boolean | null>) {
    const el = this[VALUE];

    if (value === undefined) {
      // Getter mode - just return for chaining
      return this;
    }

    if (isReactiveValue(value)) {
      this[DISPOSABLES].add(
        effect(() => {
          const v = value();
          if (v === null || v === false) {
            el.removeAttribute(name);
          } else if (v === true) {
            el.setAttribute(name, "");
          } else {
            el.setAttribute(name, v);
          }
        })
      );
    } else {
      if (value === null || value === false) {
        el.removeAttribute(name);
      } else if (value === true) {
        el.setAttribute(name, "");
      } else {
        el.setAttribute(name, value);
      }
    }

    return this;
  }
}

class ChainContext<T> {
  readonly builder: ElementBuilder;
  readonly chain: T;
  readonly key: string | symbol;
  constructor(builder: ElementBuilder, chain: T, key: string | symbol) {
    this.builder = builder;
    this.chain = chain;
    this.key = key;
  }

  setter(value: unknown) {
    if (isReactiveValue(value)) {
      this.builder[DISPOSABLES].add(
        effect(() => {
          this.chain[this.key] = value();
        }),
      );
      return this.builder;
    }
    this.chain[this.key] = value;
    return this.builder;
  }
}

function setterOrValue<T extends object = object>(
  builder: ElementBuilder,
  chainParent: T,
  key: string | symbol,
) {
  const chain = chainParent[key];
  const context = new ChainContext(builder, chainParent, key);

  return new Proxy(context.setter.bind(context), {
    apply(target, _thisArg, argArray) {
      return target.apply(builder, argArray);
    },
    get(_, subkey) {
      if (isObject(chain)) {
        return setterOrValue(builder, chain, subkey);
      }
      return chain[subkey];
    },
  });
}

function toNode(c: ElementBuilder | Element | string | number) {
  if (typeof c === "string" || typeof c === "number") {
    return document.createTextNode(String(c));
  }
  return c[VALUE] ?? c;
}

function isObject(v: unknown): v is Record<string | symbol, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function reactive<T extends Element>(el: T) {
  return ElementBuilder.create(el);
}
