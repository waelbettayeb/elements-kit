import { signal, effect } from "@/signals";

/**
 * Reactive cookie access
 */
export interface ReactiveCookie {
  /** Get cookie value reactively */
  (): string | null;
  /** Set cookie value */
  set(value: string, options?: CookieOptions): void;
  /** Delete the cookie */
  remove(): void;
  /** Stop polling for cookie changes */
  dispose(): void;
}

export interface CookieOptions {
  /** Expiration date or max-age in days */
  expires?: Date | number;
  /** Path for the cookie */
  path?: string;
  /** Domain for the cookie */
  domain?: string;
  /** Secure flag */
  secure?: boolean;
  /** SameSite attribute */
  sameSite?: "strict" | "lax" | "none";
}

/**
 * Create a reactive cookie accessor
 *
 * @example
 * ```ts
 * const theme = cookie("theme");
 *
 * // Read reactively
 * div().className(computed(() => `theme-${theme() ?? "light"}`));
 *
 * // Set value
 * theme.set("dark", { expires: 365 });
 *
 * // Delete
 * theme.remove();
 *
 * // Stop watching (cleanup)
 * theme.dispose();
 * ```
 */
export function cookie(name: string): ReactiveCookie {
  // Pre-compile the regex pattern once
  const cookieRegex = new RegExp(`(^| )${name}=([^;]+)`);

  const getCookie = (): string | null => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(cookieRegex);
    return match ? decodeURIComponent(match[2]) : null;
  };

  const value = signal(getCookie());
  let intervalId: ReturnType<typeof setInterval> | null = null;

  // Poll for changes (since there's no cookie change event)
  if (typeof window !== "undefined") {
    let lastValue = getCookie();
    const checkCookie = () => {
      const currentValue = getCookie();
      if (currentValue !== lastValue) {
        lastValue = currentValue;
        value(currentValue);
      }
    };
    // Check every 500ms for cookie changes (reduced from 100ms for better performance)
    intervalId = setInterval(checkCookie, 500);
  }

  const cookieSignal = (() => value()) as ReactiveCookie;

  cookieSignal.set = (newValue: string, options?: CookieOptions) => {
    if (typeof document === "undefined") return;

    let cookieString = `${name}=${encodeURIComponent(newValue)}`;

    if (options?.expires) {
      if (typeof options.expires === "number") {
        const date = new Date();
        date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        cookieString += `; expires=${date.toUTCString()}`;
      } else {
        cookieString += `; expires=${options.expires.toUTCString()}`;
      }
    }

    if (options?.path) cookieString += `; path=${options.path}`;
    if (options?.domain) cookieString += `; domain=${options.domain}`;
    if (options?.secure) cookieString += "; secure";
    if (options?.sameSite) cookieString += `; samesite=${options.sameSite}`;

    document.cookie = cookieString;
    value(newValue);
  };

  cookieSignal.remove = () => {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    value(null);
  };

  cookieSignal.dispose = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  return cookieSignal;
}

/**
 * Event delegation helper - attach a single handler for events on child elements
 *
 * @example
 * ```ts
 * // Handle all button clicks in a container
 * div()
 *   [REF](delegate("click", "button", (e, target) => {
 *     console.log("Button clicked:", target.textContent);
 *   }))
 *   (
 *     button()("Button 1"),
 *     button()("Button 2"),
 *     button()("Button 3")
 *   )
 * ```
 */
export function delegate<K extends keyof HTMLElementEventMap>(
  eventType: K,
  selector: string,
  handler: (event: HTMLElementEventMap[K], target: Element) => void
): (container: Element) => () => void {
  return (container: Element) => {
    const listener = (event: Event) => {
      const target = (event.target as Element).closest(selector);
      if (target && container.contains(target)) {
        handler(event as HTMLElementEventMap[K], target);
      }
    };

    container.addEventListener(eventType, listener);
    return () => container.removeEventListener(eventType, listener);
  };
}

/**
 * Document title as a reactive signal
 *
 * @example
 * ```ts
 * const title = documentTitle();
 *
 * // Read current title
 * console.log(title());
 *
 * // Set title reactively
 * effect(() => {
 *   title(`${unreadCount()} messages - My App`);
 * });
 * ```
 */
export function documentTitle(): {
  (): string;
  (newTitle: string): void;
} {
  const titleSignal = signal(typeof document !== "undefined" ? document.title : "");

  effect(() => {
    if (typeof document !== "undefined") {
      document.title = titleSignal();
    }
  });

  return ((newTitle?: string) => {
    if (newTitle === undefined) {
      return titleSignal();
    }
    titleSignal(newTitle);
  }) as { (): string; (newTitle: string): void };
}

/**
 * Reactive window scroll position
 *
 * @example
 * ```ts
 * const scroll = windowScroll();
 *
 * div()
 *   .style.opacity(computed(() =>
 *     scroll.y() > 100 ? "1" : "0"
 *   ))
 *
 * // Cleanup when done
 * scroll.dispose();
 * ```
 */
export function windowScroll(): {
  x: () => number;
  y: () => number;
  scrollTo: (x: number, y: number, behavior?: ScrollBehavior) => void;
  dispose: () => void;
} {
  const x = signal(typeof window !== "undefined" ? window.scrollX : 0);
  const y = signal(typeof window !== "undefined" ? window.scrollY : 0);
  let listener: (() => void) | null = null;

  if (typeof window !== "undefined") {
    listener = () => {
      x(window.scrollX);
      y(window.scrollY);
    };
    window.addEventListener("scroll", listener, { passive: true });
  }

  return {
    x: () => x(),
    y: () => y(),
    scrollTo: (newX: number, newY: number, behavior?: ScrollBehavior) => {
      if (typeof window !== "undefined") {
        window.scrollTo({ left: newX, top: newY, behavior });
      }
    },
    dispose: () => {
      if (listener && typeof window !== "undefined") {
        window.removeEventListener("scroll", listener);
        listener = null;
      }
    },
  };
}

/**
 * Reactive window dimensions
 *
 * @example
 * ```ts
 * const viewport = windowSize();
 *
 * div()
 *   .style.fontSize(computed(() =>
 *     viewport.width() < 768 ? "14px" : "16px"
 *   ))
 *
 * // Cleanup when done
 * viewport.dispose();
 * ```
 */
export function windowSize(): {
  width: () => number;
  height: () => number;
  dispose: () => void;
} {
  const width = signal(typeof window !== "undefined" ? window.innerWidth : 0);
  const height = signal(typeof window !== "undefined" ? window.innerHeight : 0);
  let listener: (() => void) | null = null;

  if (typeof window !== "undefined") {
    listener = () => {
      width(window.innerWidth);
      height(window.innerHeight);
    };
    window.addEventListener("resize", listener, { passive: true });
  }

  return {
    width: () => width(),
    height: () => height(),
    dispose: () => {
      if (listener && typeof window !== "undefined") {
        window.removeEventListener("resize", listener);
        listener = null;
      }
    },
  };
}

/**
 * Reactive media query matcher
 *
 * @example
 * ```ts
 * const isMobile = mediaQuery("(max-width: 768px)");
 * const prefersDark = mediaQuery("(prefers-color-scheme: dark)");
 *
 * div()
 *   .style.padding(computed(() => isMobile() ? "10px" : "20px"))
 *
 * // Cleanup when done
 * isMobile.dispose();
 * ```
 */
export function mediaQuery(query: string): (() => boolean) & { dispose: () => void } {
  if (typeof window === "undefined") {
    const fn = (() => false) as (() => boolean) & { dispose: () => void };
    fn.dispose = () => {};
    return fn;
  }

  const mql = window.matchMedia(query);
  const matches = signal(mql.matches);

  const listener = (e: MediaQueryListEvent) => {
    matches(e.matches);
  };
  mql.addEventListener("change", listener);

  const fn = (() => matches()) as (() => boolean) & { dispose: () => void };
  fn.dispose = () => {
    mql.removeEventListener("change", listener);
  };

  return fn;
}

/**
 * Reactive online/offline status
 *
 * @example
 * ```ts
 * const online = onlineStatus();
 *
 * when(
 *   () => !online(),
 *   () => div()("You are offline")
 * )
 *
 * // Cleanup when done
 * online.dispose();
 * ```
 */
export function onlineStatus(): (() => boolean) & { dispose: () => void } {
  const online = signal(typeof navigator !== "undefined" ? navigator.onLine : true);
  let onlineListener: (() => void) | null = null;
  let offlineListener: (() => void) | null = null;

  if (typeof window !== "undefined") {
    onlineListener = () => online(true);
    offlineListener = () => online(false);
    window.addEventListener("online", onlineListener);
    window.addEventListener("offline", offlineListener);
  }

  const fn = (() => online()) as (() => boolean) & { dispose: () => void };
  fn.dispose = () => {
    if (typeof window !== "undefined") {
      if (onlineListener) window.removeEventListener("online", onlineListener);
      if (offlineListener) window.removeEventListener("offline", offlineListener);
      onlineListener = null;
      offlineListener = null;
    }
  };

  return fn;
}
