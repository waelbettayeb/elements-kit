import { effect } from "@/signals";
import { DISPOSE, VALUE, type ReactiveElement } from "@/core";

type Child = ReactiveElement<Element> | Element | DocumentFragment | string | number;

/**
 * Convert a child value to a DOM node
 */
function toNode(c: Child): Node {
  if (typeof c === "string" || typeof c === "number") {
    return document.createTextNode(String(c));
  }
  return c[VALUE] ?? c;
}

/**
 * Dispose an element if it has the DISPOSE symbol
 */
function disposeIfNeeded(node: Node): void {
  if (node && DISPOSE in node) {
    (node as unknown as { [DISPOSE]: () => void })[DISPOSE]();
  }
}

/**
 * Conditional rendering based on a boolean signal.
 * Renders trueBranch when condition is true, falseBranch when false.
 *
 * @example
 * ```ts
 * const isLoggedIn = signal(false);
 *
 * div()(
 *   when(
 *     () => isLoggedIn(),
 *     () => span().textContent("Welcome back!"),
 *     () => button().textContent("Login")
 *   )
 * )
 * ```
 */
export function when(
  condition: () => boolean,
  trueBranch: () => Child,
  falseBranch?: () => Child
): DocumentFragment {
  const markerStart = document.createComment("{when");
  const markerEnd = document.createComment("}when");

  // Render initial content
  const initialValue = condition();
  let currentNode: Node | null = null;

  if (initialValue) {
    currentNode = toNode(trueBranch());
  } else if (falseBranch) {
    currentNode = toNode(falseBranch());
  }

  // Create fragment with markers and initial content
  const fragment = document.createDocumentFragment();
  fragment.appendChild(markerStart);
  if (currentNode) {
    fragment.appendChild(currentNode);
  }
  fragment.appendChild(markerEnd);

  // Set up reactive effect
  let lastValue = initialValue;
  effect(() => {
    const newValue = condition();

    // Only update if condition actually changed
    if (newValue === lastValue) return;
    lastValue = newValue;

    // Dispose current element if needed
    if (currentNode) {
      disposeIfNeeded(currentNode);
    }

    // Remove all nodes between markers
    const range = document.createRange();
    range.setStartAfter(markerStart);
    range.setEndBefore(markerEnd);
    range.deleteContents();

    // Render new branch
    if (newValue) {
      currentNode = toNode(trueBranch());
      markerStart.after(currentNode);
    } else if (falseBranch) {
      currentNode = toNode(falseBranch());
      markerStart.after(currentNode);
    } else {
      currentNode = null;
    }
  });

  return fragment;
}

/**
 * Toggle element visibility based on a boolean signal.
 * Uses display: none to hide the element.
 *
 * @example
 * ```ts
 * const visible = signal(true);
 *
 * div()(
 *   show(() => visible(), div().textContent("I can be hidden"))
 * )
 * ```
 */
export function show<T extends Element>(
  condition: () => boolean,
  element: ReactiveElement<T> | T
): ReactiveElement<T> | T {
  const el = (element[VALUE] ?? element) as T;

  // Check if the element has a style property (HTMLElement or SVGElement)
  if (!("style" in el)) {
    return element;
  }

  const styledEl = el as unknown as { style: CSSStyleDeclaration };
  const originalDisplay = styledEl.style.display;

  // Set initial visibility
  if (!condition()) {
    styledEl.style.display = "none";
  }

  // Set up reactive effect
  effect(() => {
    if (condition()) {
      styledEl.style.display = originalDisplay;
    } else {
      styledEl.style.display = "none";
    }
  });

  return element;
}

/**
 * Options for the each() function
 */
interface EachOptions<T> {
  /** Function to extract a unique key from each item for efficient updates */
  key?: (item: T, index: number) => string | number;
}

/**
 * Render a list of items reactively.
 * Re-renders efficiently when the array signal changes.
 *
 * @example
 * ```ts
 * const items = signal(["Apple", "Banana", "Cherry"]);
 *
 * ul()(
 *   each(
 *     () => items(),
 *     (item, index) => li().textContent(`${index() + 1}. ${item}`)
 *   )
 * )
 * ```
 *
 * @example With keyed rendering for efficient updates
 * ```ts
 * const todos = signal([
 *   { id: 1, text: "Learn ElementsKit" },
 *   { id: 2, text: "Build something" }
 * ]);
 *
 * ul()(
 *   each(
 *     () => todos(),
 *     (todo) => li().textContent(todo.text),
 *     { key: (todo) => todo.id }
 *   )
 * )
 * ```
 */
export function each<T>(
  items: () => T[],
  template: (item: T, index: () => number) => Child,
  options?: EachOptions<T>
): DocumentFragment {
  const markerStart = document.createComment("{each");
  const markerEnd = document.createComment("}each");

  // Track rendered nodes by key or index
  const nodeMap = new Map<string | number, { node: Node; item: T }>();
  let currentNodes: Node[] = [];

  const getKey = options?.key ?? ((_item: T, index: number) => index);

  // Render initial items
  const initialItems = items();
  const fragment = document.createDocumentFragment();
  fragment.appendChild(markerStart);

  initialItems.forEach((item, index) => {
    const key = getKey(item, index);
    const node = toNode(template(item, () => index));
    nodeMap.set(key, { node, item });
    currentNodes.push(node);
    fragment.appendChild(node);
  });

  fragment.appendChild(markerEnd);

  // Set up reactive effect
  effect(() => {
    const newItems = items();
    const newKeys = newItems.map((item, index) => getKey(item, index));
    const newKeySet = new Set(newKeys);

    // Remove nodes that are no longer in the list
    for (const [key, { node }] of nodeMap) {
      if (!newKeySet.has(key)) {
        disposeIfNeeded(node);
        node.parentNode?.removeChild(node);
        nodeMap.delete(key);
      }
    }

    // Build new node list
    const newNodes: Node[] = [];
    let insertBefore: Node = markerEnd;

    // Process items in reverse order for efficient insertion
    for (let i = newItems.length - 1; i >= 0; i--) {
      const item = newItems[i];
      const key = newKeys[i];
      const existing = nodeMap.get(key);

      let node: Node;
      if (existing) {
        node = existing.node;
        // Move node if needed
        if (node.nextSibling !== insertBefore) {
          insertBefore.parentNode?.insertBefore(node, insertBefore);
        }
      } else {
        // Create new node
        const index = i;
        node = toNode(template(item, () => index));
        nodeMap.set(key, { node, item });
        insertBefore.parentNode?.insertBefore(node, insertBefore);
      }

      newNodes.unshift(node);
      insertBefore = node;
    }

    currentNodes = newNodes;
  });

  return fragment;
}
