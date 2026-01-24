import { signal, effect } from "./signals";

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
 * ```
 */
export function cookie(name: string): ReactiveCookie {
  const getCookie = (): string | null => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const value = signal(getCookie());

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
    // Check every 100ms for cookie changes
    setInterval(checkCookie, 100);
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
 * ```
 */
export function windowScroll(): {
  x: () => number;
  y: () => number;
  scrollTo: (x: number, y: number, behavior?: ScrollBehavior) => void;
} {
  const x = signal(typeof window !== "undefined" ? window.scrollX : 0);
  const y = signal(typeof window !== "undefined" ? window.scrollY : 0);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      x(window.scrollX);
      y(window.scrollY);
    }, { passive: true });
  }

  return {
    x: () => x(),
    y: () => y(),
    scrollTo: (newX: number, newY: number, behavior?: ScrollBehavior) => {
      if (typeof window !== "undefined") {
        window.scrollTo({ left: newX, top: newY, behavior });
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
 * ```
 */
export function windowSize(): {
  width: () => number;
  height: () => number;
} {
  const width = signal(typeof window !== "undefined" ? window.innerWidth : 0);
  const height = signal(typeof window !== "undefined" ? window.innerHeight : 0);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      width(window.innerWidth);
      height(window.innerHeight);
    }, { passive: true });
  }

  return {
    width: () => width(),
    height: () => height(),
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
 * ```
 */
export function mediaQuery(query: string): () => boolean {
  if (typeof window === "undefined") {
    return () => false;
  }

  const mql = window.matchMedia(query);
  const matches = signal(mql.matches);

  mql.addEventListener("change", (e) => {
    matches(e.matches);
  });

  return () => matches();
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
 * ```
 */
export function onlineStatus(): () => boolean {
  const online = signal(typeof navigator !== "undefined" ? navigator.onLine : true);

  if (typeof window !== "undefined") {
    window.addEventListener("online", () => online(true));
    window.addEventListener("offline", () => online(false));
  }

  return () => online();
}
