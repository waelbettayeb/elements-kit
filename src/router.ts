import { signal } from "@/signals";

// URLPattern type declaration for browsers that support it
declare class URLPattern {
  constructor(init: { pathname: string });
  exec(input: URL | string): { pathname: { groups: Record<string, string> } } | null;
}

/**
 * Reactive URL signal that tracks the current location
 */
const currentUrl = signal(
  typeof window !== "undefined"
    ? new URL(window.location.href)
    : new URL("http://localhost/")
);

// Store cleanup function for popstate listener
let popstateCleanup: (() => void) | null = null;

// Listen for navigation events
if (typeof window !== "undefined") {
  const handlePopstate = () => {
    currentUrl(new URL(window.location.href));
  };
  window.addEventListener("popstate", handlePopstate);
  popstateCleanup = () => window.removeEventListener("popstate", handlePopstate);
}

/**
 * Cleanup the router's global event listeners.
 * Call this when you no longer need the router (e.g., in tests or when unmounting).
 */
export function disposeRouter(): void {
  if (popstateCleanup) {
    popstateCleanup();
    popstateCleanup = null;
  }
}

/**
 * Navigate to a new URL programmatically
 */
export function navigate(url: string | URL, options?: { replace?: boolean }): void {
  if (typeof window === "undefined") return;

  const newUrl = typeof url === "string" ? new URL(url, window.location.origin) : url;

  if (options?.replace) {
    window.history.replaceState(null, "", newUrl.href);
  } else {
    window.history.pushState(null, "", newUrl.href);
  }

  currentUrl(newUrl);
}

/**
 * Get the current pathname reactively
 */
export function pathname(): string {
  return currentUrl().pathname;
}

/**
 * Get the current search params reactively
 */
export function searchParams(): URLSearchParams {
  return currentUrl().searchParams;
}

/**
 * Get the current hash reactively
 */
export function hash(): string {
  return currentUrl().hash;
}

/**
 * Get a specific search param reactively
 */
export function param(name: string): string | null {
  return currentUrl().searchParams.get(name);
}

/**
 * Route match result
 */
export interface RouteMatch {
  /** Whether the route matched */
  matched: boolean;
  /** Extracted path parameters */
  params: Record<string, string>;
  /** The matched pathname */
  pathname: string;
}

/**
 * Create a reactive route matcher using URLPattern API
 *
 * @example
 * ```ts
 * const userRoute = createRoute("/users/:id");
 *
 * // Check if current URL matches
 * if (userRoute.matched()) {
 *   const userId = userRoute.params().id;
 * }
 * ```
 */
export function createRoute(pattern: string): {
  /** Whether the current URL matches this pattern */
  matched: () => boolean;
  /** Get the extracted route parameters */
  params: () => Record<string, string>;
  /** Get the full match result */
  match: () => RouteMatch;
} {
  // Create URLPattern if available, with error handling for invalid patterns
  let urlPattern: URLPattern | null = null;
  if (typeof URLPattern !== "undefined") {
    try {
      urlPattern = new URLPattern({ pathname: pattern });
    } catch {
      // Invalid pattern, fall back to regex matching
      urlPattern = null;
    }
  }

  const getMatch = (): RouteMatch => {
    const url = currentUrl();

    if (urlPattern) {
      const result = urlPattern.exec(url);
      if (result) {
        return {
          matched: true,
          params: result.pathname.groups as Record<string, string>,
          pathname: url.pathname,
        };
      }
    } else {
      // Fallback regex-based matching for browsers without URLPattern
      const regexPattern = pattern
        .replace(/:[a-zA-Z]+/g, "([^/]+)")
        .replace(/\*/g, "(.*)");
      const regex = new RegExp(`^${regexPattern}$`);
      const match = url.pathname.match(regex);

      if (match) {
        // Extract param names from pattern
        const paramNames = (pattern.match(/:[a-zA-Z]+/g) || [])
          .map((p: string) => p.slice(1));
        const params: Record<string, string> = {};
        paramNames.forEach((name, i) => {
          params[name] = match[i + 1];
        });

        return {
          matched: true,
          params,
          pathname: url.pathname,
        };
      }
    }

    return {
      matched: false,
      params: {},
      pathname: url.pathname,
    };
  };

  return {
    matched: () => getMatch().matched,
    params: () => getMatch().params,
    match: getMatch,
  };
}

/**
 * Create a router with multiple routes
 *
 * @example
 * ```ts
 * const router = createRouter({
 *   home: "/",
 *   users: "/users",
 *   user: "/users/:id",
 *   notFound: "*",
 * });
 *
 * // Get current route name
 * router.current(); // "home" | "users" | "user" | "notFound" | null
 *
 * // Get params for current route
 * router.params(); // { id: "123" }
 * ```
 */
export function createRouter<T extends Record<string, string>>(routes: T): {
  /** Get the name of the current matched route */
  current: () => keyof T | null;
  /** Get the params of the current matched route */
  params: () => Record<string, string>;
  /** Check if a specific route is active */
  isActive: (routeName: keyof T) => boolean;
  /** Navigate to a named route */
  go: (routeName: keyof T, params?: Record<string, string>) => void;
} {
  const routeMatchers: { name: keyof T; pattern: string; matcher: ReturnType<typeof createRoute> }[] = [];
  for (const name in routes) {
    routeMatchers.push({
      name: name as keyof T,
      pattern: routes[name],
      matcher: createRoute(routes[name]),
    });
  }

  const getCurrentMatch = () => {
    for (const { name, matcher } of routeMatchers) {
      const match = matcher.match();
      if (match.matched) {
        return { name, match };
      }
    }
    return null;
  };

  return {
    current: () => {
      const result = getCurrentMatch();
      return result?.name ?? null;
    },
    params: () => {
      const result = getCurrentMatch();
      return result?.match.params ?? {};
    },
    isActive: (routeName: keyof T) => {
      const result = getCurrentMatch();
      return result?.name === routeName;
    },
    go: (routeName: keyof T, params?: Record<string, string>) => {
      let path: string = routes[routeName];

      // Extract required params from the route pattern
      const requiredParams = (path.match(/:[a-zA-Z]+/g) || []).map((p: string) => p.slice(1));

      if (requiredParams.length > 0) {
        if (!params) {
          console.warn(
            `[Router] Route "${String(routeName)}" requires params: ${requiredParams.join(", ")}`
          );
          return;
        }

        // Check all required params are provided
        const missingParams = requiredParams.filter((p) => !(p in params));
        if (missingParams.length > 0) {
          console.warn(
            `[Router] Missing required params for route "${String(routeName)}": ${missingParams.join(", ")}`
          );
          return;
        }

        // Replace params in path
        for (const key in params) {
          path = path.replace(`:${key}`, encodeURIComponent(params[key]));
        }
      }

      navigate(path);
    },
  };
}

/**
 * Link component helper - intercepts clicks for SPA navigation
 *
 * @example
 * ```ts
 * a()
 *   .href("/users/123")
 *   [ON]("click", link())
 *   .textContent("View User")
 * ```
 */
export function link(options?: { replace?: boolean }): (e: MouseEvent) => void {
  return (e: MouseEvent) => {
    // Only handle left clicks without modifiers
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute("href");

    if (!href || href.startsWith("http") || href.startsWith("//")) {
      return; // External link, let browser handle it
    }

    e.preventDefault();
    navigate(href, options);
  };
}
