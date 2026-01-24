import { computed, signal } from "@/signals";
import { div, span, button, h1, h2, p, input, pre, code, header, canvas, nav, a, ul, li } from "@/dom";
import { REF, ON, VALUE, when, show, each, createContext, provide, inject, updateContext, asyncSignal, CLASSES, ATTR, pathname, windowSize, mediaQuery, onlineStatus } from "@/core";

// ============================================
// Example Registry
// ============================================
type Example = {
  id: string;
  title: string;
  icon: string;
  component: () => HTMLElement;
};

const activeExampleId = signal("counter");

// ============================================
// Example 1: Counter with Signals
// ============================================
function counterExample() {
  const count = signal(0);
  const doubleCount = computed(() => count() * 2);

  return div().className("example-card")(
    h2()("Reactive Counter"),
    p().className("description")("Signals automatically update the DOM when values change. Computed values derive from signals."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.alignItems("center")
        .style.gap("16px")(
          button()
            .textContent("-")
            .style.width("40px")
            [ON]("click", () => count(count() - 1)),
          span()
            .style.fontSize("2rem")
            .style.fontWeight("bold")
            .style.minWidth("60px")
            .style.textAlign("center")
            .textContent(computed(() => String(count()))),
          button()
            .textContent("+")
            .style.width("40px")
            [ON]("click", () => count(count() + 1)),
          span().style.color("#888").style.marginLeft("20px")(
            "Double: ",
            span().textContent(computed(() => String(doubleCount())))
          )
        )
    ),
    pre().className("code-block")(
      code()(`const count = signal(0);
const doubleCount = computed(() => count() * 2);

button()[ON]("click", () => count(count() + 1));
span().textContent(computed(() => String(count())));`)
    )
  );
}

// ============================================
// Example 2: Two-way Binding
// ============================================
function bindingExample() {
  const text = signal("Hello, ElementsKit!");

  return div().className("example-card")(
    h2()("Two-way Binding"),
    p().className("description")("Bind input values to signals for reactive form handling."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("12px")(
          input()
            .type("text")
            .value(text())
            .style.width("100%")
            [ON]("input", (e) => text((e.target as HTMLInputElement).value)),
          div()
            .style.display("flex")
            .style.justifyContent("space-between")(
              span().style.fontSize("1.1rem")(
                "Preview: ",
                span().textContent(computed(() => text()))
              ),
              span().className("badge").textContent(computed(() => `${text().length} chars`))
            )
        )
    ),
    pre().className("code-block")(
      code()(`const text = signal("Hello, ElementsKit!");

input()
  .value(text())
  [ON]("input", (e) => text(e.target.value));

span().textContent(computed(() => text()));`)
    )
  );
}

// ============================================
// Example 3: Dynamic Styles
// ============================================
function styleExample() {
  const hue = signal(180);
  const size = signal(100);

  return div().className("example-card")(
    h2()("Dynamic Styles"),
    p().className("description")("Reactive style properties update smoothly with signal changes."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.alignItems("center")
        .style.gap("24px")(
          div()
            .style.width(computed(() => `${size()}px`))
            .style.height(computed(() => `${size()}px`))
            .style.backgroundColor(computed(() => `hsl(${hue()}, 70%, 50%)`))
            .style.borderRadius("12px")
            .style.transition("all 0.3s ease")
            .style.boxShadow(computed(() => `0 8px 32px hsla(${hue()}, 70%, 50%, 0.4)`)),
          div()
            .style.display("flex")
            .style.flexDirection("column")
            .style.gap("12px")(
              div()(
                span().style.display("block").style.marginBottom("4px")(
                  "Hue: ",
                  span().textContent(computed(() => String(hue())))
                ),
                input()
                  .type("range")
                  .min("0")
                  .max("360")
                  .value(String(hue()))
                  .style.width("200px")
                  [ON]("input", (e) => hue(Number((e.target as HTMLInputElement).value)))
              ),
              div()(
                span().style.display("block").style.marginBottom("4px")(
                  "Size: ",
                  span().textContent(computed(() => `${size()}px`))
                ),
                input()
                  .type("range")
                  .min("50")
                  .max("150")
                  .value(String(size()))
                  .style.width("200px")
                  [ON]("input", (e) => size(Number((e.target as HTMLInputElement).value)))
              )
            )
        )
    ),
    pre().className("code-block")(
      code()(`const hue = signal(180);
const size = signal(100);

div()
  .style.width(computed(() => \`\${size()}px\`))
  .style.backgroundColor(computed(() => \`hsl(\${hue()}, 70%, 50%)\`));`)
    )
  );
}

// ============================================
// Example 4: Element Reference
// ============================================
function refExample() {
  const message = signal("Draw on the canvas!");
  let canvasEl: HTMLCanvasElement | null = null;

  return div().className("example-card")(
    h2()("Element Reference [REF]"),
    p().className("description")("Access the underlying DOM element for advanced use cases like canvas drawing."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("12px")(
          canvas()
            .width(400)
            .height(120)
            .style.borderRadius("8px")
            .style.backgroundColor("#1a1a2e")
            .style.cursor("crosshair")
            [REF]((el) => {
              canvasEl = el;
              const ctx = el.getContext("2d");
              if (!ctx) return;

              ctx.strokeStyle = "#00d9ff";
              ctx.lineWidth = 2;
              ctx.lineCap = "round";

              let isDrawing = false;
              let lastX = 0;
              let lastY = 0;

              el.addEventListener("mousedown", (e) => {
                isDrawing = true;
                [lastX, lastY] = [e.offsetX, e.offsetY];
                message("Drawing...");
              });

              el.addEventListener("mousemove", (e) => {
                if (!isDrawing) return;
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                [lastX, lastY] = [e.offsetX, e.offsetY];
              });

              el.addEventListener("mouseup", () => {
                isDrawing = false;
                message("Nice drawing!");
              });

              el.addEventListener("mouseleave", () => {
                isDrawing = false;
              });
            }),
          div()
            .style.display("flex")
            .style.justifyContent("space-between")
            .style.alignItems("center")(
              span().textContent(computed(() => message())),
              button()
                .textContent("Clear")
                [ON]("click", () => {
                  if (canvasEl) {
                    const ctx = canvasEl.getContext("2d");
                    ctx?.clearRect(0, 0, 400, 120);
                    message("Canvas cleared!");
                  }
                })
            )
        )
    ),
    pre().className("code-block")(
      code()(`canvas()
  [REF]((el) => {
    const ctx = el.getContext("2d");
    // Direct DOM access for canvas drawing
    el.addEventListener("mousemove", draw);
  });`)
    )
  );
}

// ============================================
// Example 5: Conditional Display
// ============================================
function conditionalExample() {
  const isVisible = signal(true);
  const toggleCount = signal(0);

  return div().className("example-card")(
    h2()("Conditional Display"),
    p().className("description")("Use reactive styles for smooth show/hide animations."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          div()
            .style.display("flex")
            .style.alignItems("center")
            .style.gap("12px")(
              button()
                .textContent(computed(() => isVisible() ? "Hide Box" : "Show Box"))
                [ON]("click", () => {
                  isVisible(!isVisible());
                  toggleCount(toggleCount() + 1);
                }),
              span().style.color("#888")(
                "Toggled ",
                span().textContent(computed(() => String(toggleCount()))),
                " times"
              )
            ),
          div()
            .style.opacity(computed(() => isVisible() ? "1" : "0"))
            .style.transform(computed(() => isVisible() ? "translateY(0)" : "translateY(-10px)"))
            .style.transition("all 0.3s ease")
            .style.padding("20px")
            .style.background("rgba(0, 217, 255, 0.1)")
            .style.borderRadius("8px")
            .style.border("1px solid rgba(0, 217, 255, 0.3)")(
              "This box can be toggled!"
            )
        )
    ),
    pre().className("code-block")(
      code()(`const isVisible = signal(true);

button()[ON]("click", () => isVisible(!isVisible()));

div()
  .style.opacity(computed(() => isVisible() ? "1" : "0"))
  .style.transform(computed(() =>
    isVisible() ? "translateY(0)" : "translateY(-10px)"
  ));`)
    )
  );
}

// ============================================
// Example 6: Color Picker
// ============================================
function colorPickerExample() {
  const color = signal("#00d9ff");
  const text = signal("Styled Text");

  return div().className("example-card")(
    h2()("Nested Style Properties"),
    p().className("description")("Chain nested properties like .style.color() for intuitive DOM manipulation."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.alignItems("center")
        .style.gap("20px")(
          div()
            .style.padding("16px 24px")
            .style.borderRadius("8px")
            .style.fontSize("1.2rem")
            .style.fontWeight("bold")
            .style.color(computed(() => color()))
            .style.border(computed(() => `2px solid ${color()}`))
            .textContent(computed(() => text())),
          div()
            .style.display("flex")
            .style.flexDirection("column")
            .style.gap("8px")(
              input()
                .type("text")
                .value(text())
                .placeholder("Enter text...")
                [ON]("input", (e) => text((e.target as HTMLInputElement).value)),
              input()
                .type("color")
                .value(color())
                .style.width("100%")
                .style.height("36px")
                .style.cursor("pointer")
                [ON]("input", (e) => color((e.target as HTMLInputElement).value))
            )
        )
    ),
    pre().className("code-block")(
      code()(`const color = signal("#00d9ff");

div()
  .style.color(computed(() => color()))
  .style.border(computed(() => \`2px solid \${color()}\`));

input()
  .type("color")
  [ON]("input", (e) => color(e.target.value));`)
    )
  );
}

// ============================================
// Example 7: Conditional Rendering
// ============================================
function conditionalRenderingExample() {
  const isLoggedIn = signal(false);
  const showDetails = signal(true);

  return div().className("example-card")(
    h2()("Conditional Rendering"),
    p().className("description")("Use when() to swap elements and show() to toggle visibility based on signals."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("24px")(
          // when() example
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("when() - Element Swapping"),
            div()
              .style.display("flex")
              .style.alignItems("center")
              .style.gap("16px")(
                when(
                  () => isLoggedIn(),
                  () => div()
                    .style.display("flex")
                    .style.alignItems("center")
                    .style.gap("12px")(
                      span()
                        .style.padding("8px 16px")
                        .style.background("rgba(0, 217, 255, 0.1)")
                        .style.borderRadius("8px")
                        .style.border("1px solid rgba(0, 217, 255, 0.3)")("Welcome back, User!"),
                      button()
                        .textContent("Logout")
                        [ON]("click", () => isLoggedIn(false))
                    ),
                  () => button()
                    .textContent("Login")
                    .style.padding("8px 20px")
                    [ON]("click", () => isLoggedIn(true))
                )
              )
          ),
          // show() example
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("show() - Visibility Toggle"),
            div()
              .style.display("flex")
              .style.flexDirection("column")
              .style.gap("12px")(
                button()
                  .textContent(computed(() => showDetails() ? "Hide Details" : "Show Details"))
                  .style.alignSelf("flex-start")
                  [ON]("click", () => showDetails(!showDetails())),
                show(
                  () => showDetails(),
                  div()
                    .style.padding("16px")
                    .style.background("rgba(0, 217, 255, 0.1)")
                    .style.borderRadius("8px")
                    .style.border("1px solid rgba(0, 217, 255, 0.3)")(
                      p().style.margin("0")("This content can be toggled with show()."),
                      p().style.margin("8px 0 0 0").style.color("#888")("Unlike when(), the element stays in the DOM but is hidden with display: none.")
                    )
                )
              )
          )
        )
    ),
    pre().className("code-block")(
      code()(`// when() - swaps elements in/out of DOM
const isLoggedIn = signal(false);

when(
  () => isLoggedIn(),
  () => span()("Welcome back!"),
  () => button().textContent("Login")
);

// show() - toggles visibility (display: none)
const visible = signal(true);

show(
  () => visible(),
  div()("I can be hidden")
);`)
    )
  );
}

// ============================================
// Example 8: Reactive Children (Signal Children)
// ============================================
function reactiveChildrenExample() {
  const message = signal("Hello");
  const counter = signal(0);

  return div().className("example-card")(
    h2()("Reactive Children"),
    p().className("description")("Pass signals directly as children - they update automatically when the signal changes."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("20px")(
          // Dynamic text content
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("Dynamic Text with Signals as Children"),
            div()
              .style.display("flex")
              .style.alignItems("center")
              .style.gap("12px")(
                button()
                  .textContent("-")
                  .style.width("36px")
                  [ON]("click", () => counter(counter() - 1)),
                span().style.fontSize("1.1rem")(
                  "Count: ",
                  computed(() => String(counter())),
                  " | Doubled: ",
                  computed(() => String(counter() * 2))
                ),
                button()
                  .textContent("+")
                  .style.width("36px")
                  [ON]("click", () => counter(counter() + 1))
              )
          ),
          // Message input demo
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("Inline Signal Interpolation"),
            div()
              .style.display("flex")
              .style.flexDirection("column")
              .style.gap("12px")(
                input()
                  .type("text")
                  .value(message())
                  .placeholder("Type a message...")
                  [ON]("input", (e) => message((e.target as HTMLInputElement).value)),
                div()
                  .style.padding("12px")
                  .style.background("rgba(59, 130, 246, 0.1)")
                  .style.borderRadius("8px")
                  .style.border("1px solid rgba(59, 130, 246, 0.3)")(
                    "You typed: ",
                    computed(() => message()),
                    " (",
                    computed(() => String(message().length)),
                    " characters)"
                  )
              )
          )
        )
    ),
    pre().className("code-block")(
      code()(`const counter = signal(0);
const message = signal("Hello");

// Signals as direct children - auto-update!
span()(
  "Count: ",
  computed(() => String(counter())),
  " | Doubled: ",
  computed(() => String(counter() * 2))
);

// Mix static and reactive children
div()(
  "You typed: ",
  computed(() => message()),
  " (",
  computed(() => String(message().length)),
  " characters)"
);`)
    )
  );
}

// ============================================
// Example 9: List Rendering
// ============================================
function listRenderingExample() {
  const items = signal([
    { id: 1, text: "Learn ElementsKit", done: false },
    { id: 2, text: "Build something awesome", done: false },
    { id: 3, text: "Share with others", done: true },
  ]);
  const newItemText = signal("");
  let nextId = 4;

  const addItem = () => {
    const text = newItemText().trim();
    if (text) {
      items([...items(), { id: nextId++, text, done: false }]);
      newItemText("");
    }
  };

  const toggleItem = (id: number) => {
    items(items().map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  const removeItem = (id: number) => {
    items(items().filter(item => item.id !== id));
  };

  return div().className("example-card")(
    h2()("List Rendering"),
    p().className("description")("Use each() to render reactive lists with efficient keyed updates."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          // Add item form
          div()
            .style.display("flex")
            .style.gap("8px")(
              input()
                .type("text")
                .placeholder("Add a new item...")
                .value(newItemText())
                .style.flex("1")
                [ON]("input", (e) => newItemText((e.target as HTMLInputElement).value))
                [ON]("keydown", (e) => {
                  if (e.key === "Enter") addItem();
                }),
              button()
                .textContent("Add")
                [ON]("click", addItem)
            ),
          // List items
          ul()
            .style.listStyle("none")
            .style.padding("0")
            .style.margin("0")(
              each(
                () => items(),
                (item) => li()
                  .style.display("flex")
                  .style.alignItems("center")
                  .style.justifyContent("space-between")
                  .style.padding("12px")
                  .style.marginBottom("8px")
                  .style.background("rgba(59, 130, 246, 0.1)")
                  .style.borderRadius("8px")
                  .style.border("1px solid rgba(59, 130, 246, 0.2)")(
                    div()
                      .style.display("flex")
                      .style.alignItems("center")
                      .style.gap("12px")(
                        input()
                          .type("checkbox")
                          .checked(item.done)
                          [ON]("change", () => toggleItem(item.id)),
                        span()
                          .style.textDecoration(item.done ? "line-through" : "none")
                          .style.opacity(item.done ? "0.6" : "1")
                          .textContent(item.text)
                      ),
                    button()
                      .textContent("×")
                      .style.background("transparent")
                      .style.color("#888")
                      .style.fontSize("1.2rem")
                      .style.padding("0 8px")
                      [ON]("click", () => removeItem(item.id))
                  ),
                { key: (item) => item.id }
              )
            ),
          // Stats
          div()
            .style.color("#888")
            .style.fontSize("0.875rem")(
              computed(() => {
                const total = items().length;
                const done = items().filter(i => i.done).length;
                return `${done}/${total} completed`;
              })
            )
        )
    ),
    pre().className("code-block")(
      code()(`const items = signal([
  { id: 1, text: "Learn ElementsKit", done: false },
  { id: 2, text: "Build something", done: true },
]);

ul()(
  each(
    () => items(),
    (item) => li()(
      span().textContent(item.text),
      button().textContent("×")
        [ON]("click", () => removeItem(item.id))
    ),
    { key: (item) => item.id }
  )
);`)
    )
  );
}

// ============================================
// Example 10: Context API
// ============================================

// Define a theme context
const ThemeContext = createContext<"light" | "dark">("light");

function contextExample() {
  // Container where we'll provide context
  const container = div().className("example-card");

  // Provide initial theme
  provide(ThemeContext, "dark", container);

  // Child component that uses context
  function ThemedBox() {
    const theme = inject(ThemeContext);

    return div()
      .style.padding("20px")
      .style.borderRadius("8px")
      .style.transition("all 0.3s ease")
      .style.background(computed(() =>
        theme() === "dark" ? "rgba(30, 30, 40, 0.9)" : "rgba(240, 240, 245, 0.9)"
      ))
      .style.color(computed(() =>
        theme() === "dark" ? "#e5e5e5" : "#1a1a1a"
      ))
      .style.border(computed(() =>
        theme() === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)"
      ))(
        div()
          .style.fontWeight("bold")
          .style.marginBottom("8px")(
            "Current theme: ",
            computed(() => theme())
          ),
        p().style.margin("0").style.opacity("0.8")(
          "This box reads the theme from context. No prop drilling needed!"
        )
      );
  }

  // Another nested child
  function NestedComponent() {
    const theme = inject(ThemeContext);

    return div()
      .style.marginTop("12px")
      .style.padding("12px")
      .style.borderRadius("6px")
      .style.background(computed(() =>
        theme() === "dark" ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)"
      ))
      .style.border(computed(() =>
        theme() === "dark" ? "1px solid rgba(59, 130, 246, 0.4)" : "1px solid rgba(59, 130, 246, 0.3)"
      ))(
        span()
          .style.fontSize("0.875rem")(
            "Nested component also reads theme: ",
            span()
              .style.fontWeight("bold")
              .textContent(computed(() => theme()))
          )
      );
  }

  return container(
    h2()("Context API"),
    p().className("description")("Share state between components without prop drilling using provide/inject."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          div()
            .style.display("flex")
            .style.gap("8px")(
              button()
                .textContent("Light Theme")
                [ON]("click", () => updateContext(ThemeContext, "light")),
              button()
                .textContent("Dark Theme")
                [ON]("click", () => updateContext(ThemeContext, "dark"))
            ),
          ThemedBox(),
          NestedComponent()
        )
    ),
    pre().className("code-block")(
      code()(`// Create a context with default value
const ThemeContext = createContext<"light" | "dark">("light");

// Provide context to a subtree
const app = div();
provide(ThemeContext, "dark", app);

// Inject in any child component
function ThemedBox() {
  const theme = inject(ThemeContext);

  return div()
    .style.background(computed(() =>
      theme() === "dark" ? "#1a1a1a" : "#fff"
    ));
}

// Update context value
button()[ON]("click", () => updateContext(ThemeContext, "light"));`)
    )
  );
}

// ============================================
// Example 11: Async Signals
// ============================================
function asyncExample() {
  // Simulated API call
  const fetchUser = () => new Promise<{ name: string; email: string }>((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", email: "john@example.com" });
    }, 1500);
  });

  const user = asyncSignal(fetchUser);

  // Simulated API with random failure
  const fetchData = () => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded successfully!");
      } else {
        reject(new Error("Network error - try again"));
      }
    }, 1000);
  });

  const data = asyncSignal(fetchData, { immediate: false });

  return div().className("example-card")(
    h2()("Async Signals"),
    p().className("description")("Handle async data fetching with built-in loading and error states."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("24px")(
          // User fetch example
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("Auto-fetch on mount"),
            when(
              () => user.loading(),
              () => div()
                .style.padding("16px")
                .style.background("rgba(59, 130, 246, 0.1)")
                .style.borderRadius("8px")
                .style.display("flex")
                .style.alignItems("center")
                .style.gap("12px")(
                  span().style.opacity("0.7")("Loading user...")
                ),
              () => div()
                .style.padding("16px")
                .style.background("rgba(34, 197, 94, 0.1)")
                .style.border("1px solid rgba(34, 197, 94, 0.3)")
                .style.borderRadius("8px")(
                  div().style.fontWeight("bold")(computed(() => user()?.name ?? "")),
                  div().style.opacity("0.7").style.fontSize("0.875rem")(
                    computed(() => user()?.email ?? "")
                  )
                )
            )
          ),
          // Manual fetch with error handling
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("Manual fetch with error handling"),
            div()
              .style.display("flex")
              .style.flexDirection("column")
              .style.gap("12px")(
                button()
                  .textContent(computed(() => data.loading() ? "Loading..." : "Fetch Data (50% fail rate)"))
                  .disabled(computed(() => data.loading()))
                  [ON]("click", () => data.refetch().catch(() => {})),
                when(
                  () => data.error() !== undefined,
                  () => div()
                    .style.padding("12px")
                    .style.background("rgba(239, 68, 68, 0.1)")
                    .style.border("1px solid rgba(239, 68, 68, 0.3)")
                    .style.borderRadius("8px")
                    .style.color("#ef4444")(
                      computed(() => data.error()?.message ?? "")
                    ),
                  () => when(
                    () => data() !== undefined,
                    () => div()
                      .style.padding("12px")
                      .style.background("rgba(34, 197, 94, 0.1)")
                      .style.border("1px solid rgba(34, 197, 94, 0.3)")
                      .style.borderRadius("8px")
                      .style.color("#22c55e")(
                        computed(() => data() ?? "")
                      ),
                    () => div()
                      .style.padding("12px")
                      .style.background("rgba(100, 100, 100, 0.1)")
                      .style.borderRadius("8px")
                      .style.opacity("0.6")(
                        "Click the button to fetch data"
                      )
                  )
                )
              )
          )
        )
    ),
    pre().className("code-block")(
      code()(`// Create async signal - fetches immediately
const user = asyncSignal(() =>
  fetch('/api/user').then(r => r.json())
);

// Access data and states
user();           // data or undefined
user.loading();   // boolean
user.error();     // Error or undefined
user.refetch();   // refetch data

// Defer fetching
const data = asyncSignal(fetchFn, { immediate: false });
data.refetch(); // manually trigger

// Use with conditional rendering
when(
  () => user.loading(),
  () => span()("Loading..."),
  () => span()(user()?.name)
);`)
    )
  );
}

// ============================================
// Example 12: Classes & Attributes
// ============================================
function classesExample() {
  const isActive = signal(false);
  const isHighlighted = signal(false);
  const size = signal<"small" | "medium" | "large">("medium");
  const disabled = signal(false);

  return div().className("example-card")(
    h2()("Classes & Attributes"),
    p().className("description")("Reactively add/remove classes and set attributes with [CLASSES] and [ATTR]."),
    // Add some CSS for the demo
    div()
      [REF]((el) => {
        const style = document.createElement("style");
        style.textContent = `
          .demo-box { padding: 20px; border-radius: 8px; transition: all 0.3s; background: #2a2a2a; }
          .demo-box.active { background: rgba(59, 130, 246, 0.3); border: 2px solid #3b82f6; }
          .demo-box.highlighted { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          .demo-box.small { padding: 10px; font-size: 0.8rem; }
          .demo-box.medium { padding: 20px; font-size: 1rem; }
          .demo-box.large { padding: 30px; font-size: 1.2rem; }
        `;
        el.appendChild(style);
      }),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          // Controls
          div()
            .style.display("flex")
            .style.flexWrap("wrap")
            .style.gap("8px")(
              button()
                .textContent(computed(() => isActive() ? "Deactivate" : "Activate"))
                [ON]("click", () => isActive(!isActive())),
              button()
                .textContent(computed(() => isHighlighted() ? "Remove Highlight" : "Add Highlight"))
                [ON]("click", () => isHighlighted(!isHighlighted())),
              button()
                .textContent("Small")
                [ON]("click", () => size("small")),
              button()
                .textContent("Medium")
                [ON]("click", () => size("medium")),
              button()
                .textContent("Large")
                [ON]("click", () => size("large")),
              button()
                .textContent(computed(() => disabled() ? "Enable" : "Disable"))
                [ON]("click", () => disabled(!disabled()))
            ),
          // Demo box with reactive classes
          div()
            .className("demo-box")
            [CLASSES].toggle("active", () => isActive())
            [CLASSES].toggle("highlighted", () => isHighlighted())
            [CLASSES].add(computed(() => size()))
            [ATTR]("data-state", computed(() => isActive() ? "active" : "inactive"))
            [ATTR]("aria-disabled", computed(() => disabled()))(
              "This box has reactive classes!",
              div()
                .style.marginTop("8px")
                .style.fontSize("0.875rem")
                .style.opacity("0.7")(
                  "Classes: demo-box ",
                  computed(() => isActive() ? "active " : ""),
                  computed(() => isHighlighted() ? "highlighted " : ""),
                  computed(() => size())
                )
            )
        )
    ),
    pre().className("code-block")(
      code()(`const isActive = signal(false);
const size = signal("medium");

div()
  .className("box")
  [CLASSES].toggle("active", () => isActive())
  [CLASSES].add(computed(() => size()))
  [ATTR]("data-state", computed(() =>
    isActive() ? "active" : "inactive"
  ))
  [ATTR]("aria-disabled", computed(() => disabled()));

// Available methods:
// [CLASSES].add(...classes)
// [CLASSES].remove(...classes)
// [CLASSES].toggle(name, condition?)
// [CLASSES].set({ className: condition })`)
    )
  );
}

// ============================================
// Example 13: Router
// ============================================
function routerExample() {
  // Simulated current route for demo (since we can't actually change URL in iframe)
  const demoPath = signal("/");

  const simulateNavigation = (path: string) => {
    demoPath(path);
  };

  return div().className("example-card")(
    h2()("Router"),
    p().className("description")("Client-side routing with URLPattern API and reactive path matching."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          // Navigation buttons
          div()(
            div()
              .style.marginBottom("8px")
              .style.fontWeight("bold")("Simulated Navigation"),
            div()
              .style.display("flex")
              .style.flexWrap("wrap")
              .style.gap("8px")(
                button()
                  .textContent("Home (/)")
                  [ON]("click", () => simulateNavigation("/")),
                button()
                  .textContent("Users (/users)")
                  [ON]("click", () => simulateNavigation("/users")),
                button()
                  .textContent("User 123 (/users/123)")
                  [ON]("click", () => simulateNavigation("/users/123")),
                button()
                  .textContent("Settings (/settings)")
                  [ON]("click", () => simulateNavigation("/settings"))
              )
          ),
          // Current path display
          div()
            .style.padding("16px")
            .style.background("rgba(59, 130, 246, 0.1)")
            .style.borderRadius("8px")
            .style.border("1px solid rgba(59, 130, 246, 0.3)")(
              div()
                .style.marginBottom("8px")(
                  "Current path: ",
                  span()
                    .style.fontWeight("bold")
                    .style.fontFamily("monospace")
                    .textContent(computed(() => demoPath()))
                ),
              div()
                .style.marginBottom("8px")(
                  "Actual pathname(): ",
                  span()
                    .style.fontFamily("monospace")
                    .style.opacity("0.7")
                    .textContent(computed(() => pathname()))
                )
            ),
          // Route matching demo
          div()(
            div()
              .style.marginBottom("8px")
              .style.fontWeight("bold")("Route Matching"),
            div()
              .style.display("flex")
              .style.flexDirection("column")
              .style.gap("8px")(
                ...["/", "/users", "/users/:id", "/settings"].map(pattern => {
                  return div()
                    .style.padding("8px 12px")
                    .style.background("rgba(100, 100, 100, 0.1)")
                    .style.borderRadius("4px")
                    .style.fontFamily("monospace")
                    .style.fontSize("0.875rem")(
                      span().style.opacity("0.6")(`"${pattern}"`),
                      " → ",
                      span()
                        .style.color(computed(() => {
                          // Manually check if demo path matches
                          if (pattern === "/") return demoPath() === "/" ? "#22c55e" : "#888";
                          if (pattern === "/users") return demoPath() === "/users" ? "#22c55e" : "#888";
                          if (pattern === "/users/:id") return demoPath().startsWith("/users/") && demoPath() !== "/users" ? "#22c55e" : "#888";
                          if (pattern === "/settings") return demoPath() === "/settings" ? "#22c55e" : "#888";
                          return "#888";
                        }))
                        .textContent(computed(() => {
                          if (pattern === "/") return demoPath() === "/" ? "matched" : "no match";
                          if (pattern === "/users") return demoPath() === "/users" ? "matched" : "no match";
                          if (pattern === "/users/:id") {
                            if (demoPath().startsWith("/users/") && demoPath() !== "/users") {
                              const id = demoPath().split("/")[2];
                              return `matched { id: "${id}" }`;
                            }
                            return "no match";
                          }
                          if (pattern === "/settings") return demoPath() === "/settings" ? "matched" : "no match";
                          return "no match";
                        }))
                    );
                })
              )
          )
        )
    ),
    pre().className("code-block")(
      code()(`// Create a router with named routes
const router = createRouter({
  home: "/",
  users: "/users",
  user: "/users/:id",
});

// Check current route
router.current();     // "home" | "users" | "user" | null
router.params();      // { id: "123" }
router.isActive("user"); // boolean

// Navigate programmatically
navigate("/users/456");
router.go("user", { id: "789" });

// Use in components
when(
  () => router.isActive("home"),
  () => HomePage(),
  () => when(
    () => router.isActive("user"),
    () => UserPage(router.params().id)
  )
);`)
    )
  );
}

// ============================================
// Example 14: Document Utilities
// ============================================
function documentExample() {
  const viewport = windowSize();
  const isMobile = mediaQuery("(max-width: 768px)");
  const prefersDark = mediaQuery("(prefers-color-scheme: dark)");
  const online = onlineStatus();

  return div().className("example-card")(
    h2()("Document Utilities"),
    p().className("description")("Reactive document-level APIs: viewport size, media queries, online status."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          // Viewport size
          div()
            .style.padding("16px")
            .style.background("rgba(59, 130, 246, 0.1)")
            .style.borderRadius("8px")
            .style.border("1px solid rgba(59, 130, 246, 0.3)")(
              div()
                .style.fontWeight("bold")
                .style.marginBottom("8px")("Viewport Size"),
              div()(
                "Width: ",
                span()
                  .style.fontFamily("monospace")
                  .textContent(computed(() => `${viewport.width()}px`)),
                " | Height: ",
                span()
                  .style.fontFamily("monospace")
                  .textContent(computed(() => `${viewport.height()}px`))
              )
            ),
          // Media queries
          div()
            .style.padding("16px")
            .style.background("rgba(34, 197, 94, 0.1)")
            .style.borderRadius("8px")
            .style.border("1px solid rgba(34, 197, 94, 0.3)")(
              div()
                .style.fontWeight("bold")
                .style.marginBottom("8px")("Media Queries"),
              div()
                .style.display("flex")
                .style.flexDirection("column")
                .style.gap("4px")(
                  div()(
                    "Mobile (max-width: 768px): ",
                    span()
                      .style.fontWeight("bold")
                      .style.color(computed(() => isMobile() ? "#22c55e" : "#888"))
                      .textContent(computed(() => isMobile() ? "Yes" : "No"))
                  ),
                  div()(
                    "Prefers Dark Mode: ",
                    span()
                      .style.fontWeight("bold")
                      .style.color(computed(() => prefersDark() ? "#22c55e" : "#888"))
                      .textContent(computed(() => prefersDark() ? "Yes" : "No"))
                  )
                )
            ),
          // Online status
          div()
            .style.padding("16px")
            .style.background(computed(() =>
              online() ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)"
            ))
            .style.borderRadius("8px")
            .style.border(computed(() =>
              online() ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(239, 68, 68, 0.3)"
            ))(
              div()
                .style.fontWeight("bold")
                .style.marginBottom("8px")("Online Status"),
              div()(
                "Status: ",
                span()
                  .style.fontWeight("bold")
                  .style.color(computed(() => online() ? "#22c55e" : "#ef4444"))
                  .textContent(computed(() => online() ? "Online" : "Offline"))
              ),
              p()
                .style.fontSize("0.875rem")
                .style.opacity("0.7")
                .style.margin("8px 0 0 0")(
                  "Try disconnecting your network to see this change!"
                )
            )
        )
    ),
    pre().className("code-block")(
      code()(`// Reactive viewport size
const viewport = windowSize();
div().style.padding(computed(() =>
  viewport.width() < 768 ? "10px" : "20px"
));

// Media query matching
const isMobile = mediaQuery("(max-width: 768px)");
const prefersDark = mediaQuery("(prefers-color-scheme: dark)");

// Online/offline detection
const online = onlineStatus();
when(
  () => !online(),
  () => div()("You are offline")
);

// Reactive cookies
const theme = cookie("theme");
theme.set("dark", { expires: 365 });

// Document title
const title = documentTitle();
title(\`\${count()} notifications\`);`)
    )
  );
}

// ============================================
// Example Registry
// ============================================
const examples: Example[] = [
  { id: "counter", title: "Reactive Counter", icon: "⚡", component: counterExample },
  { id: "binding", title: "Two-way Binding", icon: "🔗", component: bindingExample },
  { id: "styles", title: "Dynamic Styles", icon: "🎨", component: styleExample },
  { id: "colors", title: "Color Picker", icon: "🌈", component: colorPickerExample },
  { id: "toggle", title: "Conditional Display", icon: "👁", component: conditionalExample },
  { id: "conditional", title: "Conditional Rendering", icon: "🔀", component: conditionalRenderingExample },
  { id: "reactive-children", title: "Reactive Children", icon: "🧩", component: reactiveChildrenExample },
  { id: "list-rendering", title: "List Rendering", icon: "📋", component: listRenderingExample },
  { id: "context", title: "Context API", icon: "🔄", component: contextExample },
  { id: "classes", title: "Classes & Attrs", icon: "🏷️", component: classesExample },
  { id: "async", title: "Async Signals", icon: "🌐", component: asyncExample },
  { id: "router", title: "Router", icon: "🧭", component: routerExample },
  { id: "document", title: "Document Utils", icon: "📄", component: documentExample },
  { id: "canvas", title: "Canvas Drawing", icon: "✏️", component: refExample },
];

// ============================================
// Header Component
// ============================================
function headerComponent() {
  return header().className("top-header")(
    div().className("logo")(
      button()
        .className("menu-toggle")
        .textContent("☰")
        [ON]("click", () => {
          const sidebar = document.querySelector(".sidebar");
          sidebar?.classList.toggle("open");
        }),
      div().className("logo-icon")("E"),
      h1()("ElementsKit")
    ),
    div().className("header-links")(
      a()
        .href("https://github.com/waelbettayeb/elements-kit")
        .target("_blank")
        .textContent("GitHub"),
      a()
        .href("#")
        .textContent("Docs")
    )
  );
}

// ============================================
// Sidebar Component
// ============================================
function sidebarComponent() {
  return nav().className("sidebar")(
    div().className("sidebar-title")("Examples"),
    div().className("sidebar-nav")(
      ...examples.map((example) =>
        div()
          .className(computed(() =>
            `nav-item${activeExampleId() === example.id ? " active" : ""}`
          ))
          [ON]("click", () => {
            activeExampleId(example.id);
            // Close sidebar on mobile after selection
            const sidebar = document.querySelector(".sidebar");
            if (window.innerWidth <= 768) {
              sidebar?.classList.remove("open");
            }
          })(
            span().className("nav-arrow").textContent("▸"),
            span().textContent(example.title)
          )
      )
    )
  );
}

// ============================================
// Main Content Component
// ============================================
function mainContent() {
  const contentContainer = div().className("main-content");

  // Create a container for the active example
  const contentWrapper = div().className("content-wrapper");

  // Initial render
  const initialExample = examples.find((e) => e.id === activeExampleId());
  if (initialExample) {
    contentWrapper[VALUE].appendChild(initialExample.component());
  }

  // Update content when active example changes
  let currentId = activeExampleId();
  const checkForUpdate = () => {
    if (activeExampleId() !== currentId) {
      currentId = activeExampleId();
      const example = examples.find((e) => e.id === currentId);
      if (example) {
        contentWrapper[VALUE].innerHTML = "";
        contentWrapper[VALUE].appendChild(example.component());
      }
    }
    requestAnimationFrame(checkForUpdate);
  };
  requestAnimationFrame(checkForUpdate);

  return contentContainer(contentWrapper);
}

// ============================================
// Main App
// ============================================
const app = div()(
  headerComponent(),
  div().className("layout")(
    sidebarComponent(),
    mainContent()
  )
);

document.getElementById("app")?.appendChild(app);
