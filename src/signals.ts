export * from "alien-signals";
import { isSignal, isComputed } from "alien-signals";
import type { ReactiveValue } from "@/core";

export function isReactiveValue<T>(value: ReactiveValue<T>): value is () => T {
  return isSignal(value as () => T) || isComputed(value as () => T);
}
