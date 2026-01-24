import { signal, effect } from "@/signals";

/**
 * Represents the state of an async operation
 */
export type AsyncState<T> =
  | { status: "pending"; data: undefined; error: undefined }
  | { status: "loading"; data: T | undefined; error: undefined }
  | { status: "success"; data: T; error: undefined }
  | { status: "error"; data: T | undefined; error: Error };

/**
 * An async signal that handles promises with loading/error states
 */
export interface AsyncSignal<T> {
  /** Get current data (undefined if not loaded) */
  (): T | undefined;
  /** Get the full async state */
  state: () => AsyncState<T>;
  /** Check if currently loading */
  loading: () => boolean;
  /** Get error if any */
  error: () => Error | undefined;
  /** Refetch the data */
  refetch: () => Promise<T>;
  /** Mutate the data optimistically */
  mutate: (data: T | ((prev: T | undefined) => T)) => void;
}

/**
 * Create an async signal from a promise or async function.
 * Automatically tracks loading and error states.
 *
 * @example
 * ```ts
 * // From a promise-returning function
 * const user = asyncSignal(() => fetch('/api/user').then(r => r.json()));
 *
 * // Use in components
 * div()(
 *   when(
 *     () => user.loading(),
 *     () => span().textContent("Loading..."),
 *     () => when(
 *       () => user.error() !== undefined,
 *       () => span().textContent("Error loading user"),
 *       () => span().textContent(user()?.name ?? "")
 *     )
 *   )
 * )
 * ```
 *
 * @example With refetch
 * ```ts
 * const posts = asyncSignal(() => fetchPosts());
 *
 * button()[ON]("click", () => posts.refetch());
 * ```
 */
export function asyncSignal<T>(
  fetcher: () => Promise<T>,
  options?: {
    /** Initial data before first fetch */
    initialData?: T;
    /** Whether to fetch immediately (default: true) */
    immediate?: boolean;
  }
): AsyncSignal<T> {
  const immediate = options?.immediate ?? true;
  const initialData = options?.initialData;

  const state = signal<AsyncState<T>>(
    initialData !== undefined
      ? { status: "success", data: initialData, error: undefined }
      : { status: "pending", data: undefined, error: undefined }
  );

  let currentPromise: Promise<T> | null = null;

  const doFetch = async (): Promise<T> => {
    const currentState = state();
    state({
      status: "loading",
      data: currentState.data,
      error: undefined,
    });

    const promise = fetcher();
    currentPromise = promise;

    try {
      const data = await promise;
      // Only update if this is still the current request
      if (currentPromise === promise) {
        state({ status: "success", data, error: undefined });
      }
      return data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      // Only update if this is still the current request
      if (currentPromise === promise) {
        state({
          status: "error",
          data: currentState.data,
          error,
        });
      }
      throw error;
    }
  };

  // Fetch immediately if requested
  if (immediate) {
    doFetch().catch(() => {
      // Error is already captured in state
    });
  }

  const asyncSignal = (() => state().data) as AsyncSignal<T>;

  asyncSignal.state = () => state();
  asyncSignal.loading = () => state().status === "loading";
  asyncSignal.error = () => state().error;
  asyncSignal.refetch = doFetch;
  asyncSignal.mutate = (data: T | ((prev: T | undefined) => T)) => {
    const currentState = state();
    const newData = typeof data === "function"
      ? (data as (prev: T | undefined) => T)(currentState.data)
      : data;
    state({ status: "success", data: newData, error: undefined });
  };

  return asyncSignal;
}

/**
 * Create an async signal that depends on other reactive values.
 * Automatically refetches when dependencies change.
 *
 * @example
 * ```ts
 * const userId = signal(1);
 * const user = asyncComputed(
 *   () => fetch(`/api/users/${userId()}`).then(r => r.json())
 * );
 *
 * // When userId changes, user automatically refetches
 * userId(2);
 * ```
 */
export function asyncComputed<T>(
  fetcher: () => Promise<T>,
  options?: {
    /** Initial data before first fetch */
    initialData?: T;
  }
): AsyncSignal<T> {
  const initialData = options?.initialData;

  const state = signal<AsyncState<T>>(
    initialData !== undefined
      ? { status: "success", data: initialData, error: undefined }
      : { status: "pending", data: undefined, error: undefined }
  );

  let version = 0;

  const doFetch = async (): Promise<T> => {
    const myVersion = ++version;
    const currentState = state();

    state({
      status: "loading",
      data: currentState.data,
      error: undefined,
    });

    const promise = fetcher();

    try {
      const data = await promise;
      // Only update if this is still the current request
      if (version === myVersion) {
        state({ status: "success", data, error: undefined });
      }
      return data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      // Only update if this is still the current request
      if (version === myVersion) {
        state({
          status: "error",
          data: currentState.data,
          error,
        });
      }
      throw error;
    }
  };

  // Set up effect to track dependencies and refetch
  effect(() => {
    // The fetcher is called here to track dependencies
    // Then we actually execute the fetch
    doFetch().catch(() => {
      // Error is already captured in state
    });
  });

  const asyncSignal = (() => state().data) as AsyncSignal<T>;

  asyncSignal.state = () => state();
  asyncSignal.loading = () => state().status === "loading";
  asyncSignal.error = () => state().error;
  asyncSignal.refetch = doFetch;
  asyncSignal.mutate = (data: T | ((prev: T | undefined) => T)) => {
    const currentState = state();
    const newData = typeof data === "function"
      ? (data as (prev: T | undefined) => T)(currentState.data)
      : data;
    state({ status: "success", data: newData, error: undefined });
  };

  return asyncSignal;
}

/**
 * Resource pattern - combines data fetching with source tracking.
 * Similar to SolidJS createResource.
 *
 * @example
 * ```ts
 * const userId = signal(1);
 * const [user, { refetch, mutate }] = resource(
 *   () => userId(),
 *   (id) => fetch(`/api/users/${id}`).then(r => r.json())
 * );
 *
 * // Access data
 * user(); // User data or undefined
 * user.loading(); // boolean
 * user.error(); // Error or undefined
 * ```
 */
export function resource<T, S>(
  source: () => S,
  fetcher: (source: S) => Promise<T>,
  options?: {
    initialData?: T;
  }
): [AsyncSignal<T>, { refetch: () => Promise<T>; mutate: (data: T | ((prev: T | undefined) => T)) => void }] {
  const initialData = options?.initialData;

  const state = signal<AsyncState<T>>(
    initialData !== undefined
      ? { status: "success", data: initialData, error: undefined }
      : { status: "pending", data: undefined, error: undefined }
  );

  let currentSource: S;

  const doFetch = async (): Promise<T> => {
    const sourceValue = source();
    currentSource = sourceValue;

    const currentState = state();
    state({
      status: "loading",
      data: currentState.data,
      error: undefined,
    });

    try {
      const data = await fetcher(sourceValue);
      // Only update if source hasn't changed
      if (currentSource === sourceValue) {
        state({ status: "success", data, error: undefined });
      }
      return data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      if (currentSource === sourceValue) {
        state({
          status: "error",
          data: currentState.data,
          error,
        });
      }
      throw error;
    }
  };

  // Track source and refetch when it changes
  effect(() => {
    source(); // Track dependency
    doFetch().catch(() => {
      // Error captured in state
    });
  });

  const asyncSignal = (() => state().data) as AsyncSignal<T>;

  asyncSignal.state = () => state();
  asyncSignal.loading = () => state().status === "loading";
  asyncSignal.error = () => state().error;
  asyncSignal.refetch = doFetch;
  asyncSignal.mutate = (data: T | ((prev: T | undefined) => T)) => {
    const currentState = state();
    const newData = typeof data === "function"
      ? (data as (prev: T | undefined) => T)(currentState.data)
      : data;
    state({ status: "success", data: newData, error: undefined });
  };

  return [asyncSignal, { refetch: doFetch, mutate: asyncSignal.mutate }];
}
