import { computed, signal } from "../../src/signals";
import { span, div, button } from "../../src/dom";
import { REF, ON } from "../../src/core";

const value = signal(0);

const myelement = div()
  [REF]((el) => console.log("Created element:", el))
  .style.backgroundColor("lightblue")
  .style.padding("20px")(
  button()
    .textContent("Increment")
    .[ON]("click", () => {
      value(value() + 1);
    }),
  span()
    .style.marginLeft("10px")
    .textContent(computed(() => `Current value: ${value()}`)),
);

const interval = setInterval(() => {
  console.log("incrementing", value());
  value(value() + 1);
}, 1000);

document.getElementById("app")?.appendChild(myelement);
