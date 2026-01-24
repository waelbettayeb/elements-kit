import { signal } from "@/signals";
import { VALUE, DISPOSABLES, type ReactiveElement } from "@/core";

// Signal setter type
type SignalSetter<T> = ((value?: T) => T) & ((value: T) => T);

/**
 * A context object that can be provided and injected.
 */
export interface Context<T> {
  /** Unique identifier for this context */
  readonly id: symbol;
  /** Default value if no provider is found */
  readonly defaultValue: T;
}

/**
 * Create a new context with a default value.
 *
 * @example
 * ```ts
 * const ThemeContext = createContext<"light" | "dark">("light");
 *
 * // Provide a value
 * provide(ThemeContext, "dark", app);
 *
 * // Inject the value
 * const theme = inject(ThemeContext);
 * ```
 */
export function createContext<T>(defaultValue: T): Context<T> {
  return {
    id: Symbol("context"),
    defaultValue,
  };
}

// Internal context storage - maps context IDs to their value stacks
const contextStacks = new Map<symbol, SignalSetter<unknown>[]>();

/**
 * Provide a context value for a subtree of elements.
 * The value is automatically cleaned up when the element is disposed.
 *
 * @example
 * ```ts
 * const UserContext = createContext<User | null>(null);
 *
 * const app = div();
 * provide(UserContext, { name: "Alice" }, app);
 *
 * // All children can now inject UserContext
 * ```
 */
export function provide<T, E extends Element>(
  context: Context<T>,
  value: T,
  element: ReactiveElement<E> | E
): void {
  let stack = contextStacks.get(context.id);
  if (!stack) {
    stack = [];
    contextStacks.set(context.id, stack);
  }

  // Create a signal for this context value
  const valueSignal = signal(value) as SignalSetter<unknown>;
  stack.push(valueSignal);

  // Get the raw element
  const el = (element as ReactiveElement<E>)[VALUE] ?? element;

  // Cleanup when element is disposed
  if (DISPOSABLES in el) {
    (el as unknown as { [DISPOSABLES]: Set<() => void> })[DISPOSABLES].add(() => {
      const idx = stack!.indexOf(valueSignal);
      if (idx > -1) {
        stack!.splice(idx, 1);
      }
    });
  }
}

/**
 * Inject a context value from the nearest provider.
 * Returns a getter function that reads the current value.
 *
 * @example
 * ```ts
 * const ThemeContext = createContext<"light" | "dark">("light");
 *
 * // In a child component
 * const theme = inject(ThemeContext);
 * div().className(computed(() => `theme-${theme()}`));
 * ```
 */
export function inject<T>(context: Context<T>): () => T {
  const stack = contextStacks.get(context.id);

  // Return a getter that reads from the top of the stack
  return () => {
    if (!stack || stack.length === 0) {
      return context.defaultValue;
    }
    // Read from the most recent provider (top of stack)
    return stack[stack.length - 1]() as T;
  };
}

/**
 * Update a provided context value.
 * Must be called with the same context and element that was used in provide().
 *
 * @example
 * ```ts
 * const CountContext = createContext(0);
 *
 * provide(CountContext, 0, app);
 *
 * // Later, update the value
 * updateContext(CountContext, 5);
 * ```
 */
export function updateContext<T>(context: Context<T>, value: T): void {
  const stack = contextStacks.get(context.id);
  if (stack && stack.length > 0) {
    // Update the most recent provider
    const topSignal = stack[stack.length - 1] as SignalSetter<T>;
    topSignal(value);
  }
}
