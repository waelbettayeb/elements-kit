import { computed, signal } from "../../src/signals";
import { span, div, button } from "../../src/dom";
import { REF, ON } from "../../src/core";
import {
  attributeChangedCallback,
  Attributes,
  ElementLifecycle,
  observedAttributes,
} from "../../src/attributes";
import { Slot } from "../../src/slot";

const value = signal(0);
const doubleValue = computed(() => value() * 2);
const doubledMessage = computed(() => `The double value is: ${doubleValue()}`);

class MyElement extends HTMLElement implements ElementLifecycle {
  #connected = signal(false);

  readonly child = new Slot();
  // {{{ Attributes
  static attributes: Attributes<MyElement> = {
    count(value) {
      this.count = Number(value);
    },
  };
  static observedAttributes: string[] = observedAttributes(MyElement);
  attributeChangedCallback = attributeChangedCallback.bind(this);
  // }}}

  #count = signal(0);
  set count(v: number) {
    this.#count(v);
  }
  get count() {
    return this.#count();
  }

  connectedCallback() {
    const children = div()(
      this.#count,
      this.child.slot(),
      button()[ON]("click", () => {
        this.count = this.count + 1;
      })("Click"),
    );

    this.append(children);
    this.#connected(true);
  }
  disconnectedCallback() {
    this.#connected(false);
  }
}
customElements.define("custom-element", MyElement);

const myelement = div()
  [REF]((el) => console.log("Created element:", el))
  .style.backgroundColor("lightblue")
  .style.padding("20px")(
  "Click the button to increment the value:",
  document.createElement("br"),
  button()
    .textContent("Increment")
    [ON]("click", () => {
      value(value() + 1);
    }),
  span()
    .style.display("block")
    .textContent(computed(() => `Current value: ${value()}`)),
  doubledMessage,
  document.createElement("br"),
  document.createElement("custom-element"),
);

const interval = setInterval(() => {
  console.log("incrementing", value());
  value(value() + 1);
}, 1000);

document.getElementById("app")?.appendChild(myelement);
