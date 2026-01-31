export interface AttrChangeHandler<T> {
  (this: T, value: string | null, oldValue?: string | null): void;
}

/**
 * handle attribute change based on static `attributes` map defined on the class
 * @example
 * ```ts
 * class MyElement extends HTMLElement {
 *   static attributes: Attributes<MyElement> = {
 *     count(value) {
 *       this.#count = Number(value);
 *     },
 *   };
 *   static observedAttributes: string[] = Object.keys(MyElement.attributes);
 *   attributeChangedCallback = attributeChangedCallback.bind(this);
 * }
 * ```
 */
export function attributeChangedCallback<
  T extends {
    constructor: {
      attributes: Record<string, AttrChangeHandler<T>>;
    };
  },
>(this: T, name: string, oldValue: string | null, newValue: string | null) {
  let cls: any = this.constructor;
  while (cls) {
    if (cls.attributes && name in cls.attributes) {
      cls.attributes[name].call(this, newValue, oldValue);
      return true;
    }
    cls = Object.getPrototypeOf(cls);
  }
}

export type Attributes<T> = Record<string, AttrChangeHandler<T>>;

export interface CustomElementLifecycle {
  connectedCallback(): void;
  disconnectedCallback(): void;
  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void;
  adoptedCallback?(): void; // This one is rarely used, so optional
}

/**
 * Returns a deduplicated array of all observed attribute names for a custom element class and its ancestors.
 *
 * Call after defining static `attributes`, and assign to static `observedAttributes`.
 *
 * Example:
 * ```ts
 * class MyElement extends HTMLElement {
 *   static attributes: Attributes<MyElement> = {
 *     count(value) {
 *       this.#count = Number(value);
 *     },
 *   };
 *   static observedAttributes: string[] = observedAttributes(MyElement);
 * }
 *
 * class ChildElement extends MyElement {
 *   static attributes: Attributes<ChildElement> = {
 *     bar(value) {
 *       // ...
 *     },
 *   };
 *   static observedAttributes: string[] = observedAttributes(ChildElement);
 * }
 * // ChildElement.observedAttributes will include both 'count' and 'bar', deduplicated.
 * ```
 *
 * @param cls The custom element class constructor
 * @returns Array of unique attribute names to observe
 */
export function observedAttributes(cls) {
  const s = new Set<string>(Object.keys(cls.attributes || {}));
  let _cls = Object.getPrototypeOf(cls);
  while (_cls) {
    if (_cls.observedAttributes) {
      _cls.observedAttributes.forEach((attr: string) => s.add(attr));
    }
    _cls = Object.getPrototypeOf(_cls);
  }
  return Array.from(s);
}
