import { computed, signal } from "../../src/signals";
import { element, reactive } from "../../src/core";
import { span, div } from "../../src/builder";

const value = signal(0);

const myelement = div()
  .textContent(computed(() => `The value is: ${value()}`))
  .style.backgroundColor("lightblue")
  .style.padding("20px");

const child = span()
  .textContent(computed(() => `The value is: ${value()}`))
  .classList("child-span");

const interval = setInterval(() => {
  console.log("incrementing", value());
  value(value() + 1);
}, 1000);

document.getElementById("app")?.appendChild(element(myelement));
