import { computed, signal } from "../../src/signals";
import { div, span, button, h1, h2, p, input, pre, code, header, canvas, nav, a } from "../../src/dom";
import { REF, ON, VALUE } from "../../src/core";

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
            .width("400")
            .height("120")
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
// Example Registry
// ============================================
const examples: Example[] = [
  { id: "counter", title: "Reactive Counter", icon: "⚡", component: counterExample },
  { id: "binding", title: "Two-way Binding", icon: "🔗", component: bindingExample },
  { id: "styles", title: "Dynamic Styles", icon: "🎨", component: styleExample },
  { id: "colors", title: "Color Picker", icon: "🌈", component: colorPickerExample },
  { id: "toggle", title: "Conditional Display", icon: "👁", component: conditionalExample },
  { id: "canvas", title: "Canvas Drawing", icon: "✏️", component: refExample },
];

// ============================================
// Header Component
// ============================================
function headerComponent() {
  const sidebarOpen = signal(false);

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
        .href("https://github.com/anthropics/elements-kit")
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
