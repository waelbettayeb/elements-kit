# ElementsKit

ElementsKit is a lightweight reactive UI library that transforms native HTMLElements into reactive elements. Perfect for framework-agnostic applications and web component development.

```ts
import { signal } from "elements-kit/signals"
import { div } from "elements-kit/dom"
import { ReactiveElement, element } from "elements-kit"

const externalSignal = signal("something")

function Elements(property1, property2, children): ReactiveElement{
    const value = signal(0)
    return div()
        .style.color("green")
        .title("tooltip")(
            header("This is my header"),
            main("Second children"),
            b(value),
            span(externalSignal),
            ...children
        )
}

document.body.appendChild(element(Elements))
```

## Principles

- **Direct DOM Manipulation** - Work directly with native HTMLElements, no virtual DOM or diffing overhead
- **Zero Magic** - Explicit, predictable behavior with no hidden transformations or implicit state management
- **No Build Step Required** - Use vanilla JavaScript/TypeScript without JSX transpilation or custom syntax
- **Framework-Agnostic** - Integrate seamlessly with any existing project or use standalone
- **Reactive by Design** - Fine-grained reactivity through signals that automatically update the DOM
- **Type-Safe** - Full TypeScript support with comprehensive type inference
- **Minimal Abstraction** - Thin layer over standard DOM APIs, learn once and use anywhere
- **Composable** - Build complex UIs from simple, reusable reactive elements

## Event Listeners

Attach event listeners using the `.[ON]()` method with full TypeScript inference and standard [EventListener options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options).

```ts
import { ON } from "elements-kit/core"
const count = signal(0);

button()
  .textContent("Click me")
  [ON]("click", (e) => {
    count(count() + 1);
    console.log("Clicked!", e.target);
  }, { once: true });
```

## Make Existing Objects Reactive

Transform any existing element reference into a reactive builder using the `reactive()` function.

```ts
const canvasRef = document.createElement("canvas");
// setup the canvas...
// const ctx = canvas.getContext("2d");
// ...

const canvas = reactive(canvasRef)
  .width("400")
  .height("300");
```

## Element Reference

Access the underlying DOM element directly using the `[REF]` symbol when you need to use native APIs or third-party libraries.

> **Note:** Direct DOM manipulation via `[REF]` bypasses reactivity. Wrap changes in `effect()` for reactive updates.

```ts
import { REF } from "elements-kit/core";
import { signal, effect } from "elements-kit/signals";

const canvasRef = signal<HTMLCanvasElement | null>(null);
const color = signal("blue");

const chart = canvas()
  [REF]((canvas) => {
    canvasRef(canvas); // Store reference for later use
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Reactive drawing - redraws when color changes
    return effect(() => {
      ctx.fillStyle = color();
      ctx.fillRect(0, 0, 150, 100);
    });
  })
  .width("300")
  .height("200");

// Later: change color triggers redraw
color("red");
```

## TO-DO

- [ ] Complete type safety
- [ ] Function calling (like classList reactive adder, attributes)
- [ ] Async signal
- [ ] URLPattern signal <https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API>
- [ ] document reactive element (set and get cookies, delegate events)
- [ ] Builder extensions (like style extensions)

- [ ] Context?
- [ ] Conditional rendering?
- [ ] List rendering?
