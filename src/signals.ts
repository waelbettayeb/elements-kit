export * from "alien-signals";
import { isSignal, isComputed } from "alien-signals";

export function isReactiveValue<T>(
  value: (() => void) | T
): value is () => void {
  return isSignal(value as () => void) || isComputed(value as () => void);
}
