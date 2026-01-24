import { effect } from "./signals";
import { DISPOSE, VALUE, type ReactiveElement } from "./core";

type Child = ReactiveElement<Element> | Element | string | number;

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
  const el = (element[VALUE] ?? element) as HTMLElement;
  const originalDisplay = el.style.display;

  // Set initial visibility
  if (!condition()) {
    el.style.display = "none";
  }

  // Set up reactive effect
  effect(() => {
    if (condition()) {
      el.style.display = originalDisplay;
    } else {
      el.style.display = "none";
    }
  });

  return element;
}
