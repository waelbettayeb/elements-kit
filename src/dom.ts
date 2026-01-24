// Auto-generated file

import { reactive, ReactiveElement, ReactiveValue } from "@/core";

interface EventTargetBuilder {}

interface NodeBuilder extends EventTargetBuilder {
  nodeValue(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
}

interface ElementBuilder extends NodeBuilder {
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
}

interface HTMLElementBuilder extends ElementBuilder {
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
}

interface HTMLAnchorElementBuilder extends HTMLElementBuilder {
  charset(value: ReactiveValue<string>): this;
  coords(value: ReactiveValue<string>): this;
  download(value: ReactiveValue<string>): this;
  href(value: ReactiveValue<string>): this;
  hreflang(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  ping(value: ReactiveValue<string>): this;
  referrerPolicy(value: ReactiveValue<string>): this;
  rel(value: ReactiveValue<string>): this;
  relList(value: ReactiveValue<string>): this;
  rev(value: ReactiveValue<string>): this;
  shape(value: ReactiveValue<string>): this;
  target(value: ReactiveValue<string>): this;
  text(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const a = () =>
  reactive(
    document.createElement("a") as unknown as HTMLAnchorElement,
  ) as ReactiveElement<HTMLAnchorElement> & HTMLAnchorElementBuilder;

export const abbr = () =>
  reactive(
    document.createElement("abbr") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const address = () =>
  reactive(
    document.createElement("address") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLAreaElementBuilder extends HTMLElementBuilder {
  alt(value: ReactiveValue<string>): this;
  coords(value: ReactiveValue<string>): this;
  download(value: ReactiveValue<string>): this;
  noHref(value: ReactiveValue<boolean>): this;
  ping(value: ReactiveValue<string>): this;
  referrerPolicy(value: ReactiveValue<string>): this;
  rel(value: ReactiveValue<string>): this;
  relList(value: ReactiveValue<string>): this;
  shape(value: ReactiveValue<string>): this;
  target(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const area = () =>
  reactive(
    document.createElement("area") as unknown as HTMLAreaElement,
  ) as ReactiveElement<HTMLAreaElement> & HTMLAreaElementBuilder;

export const article = () =>
  reactive(
    document.createElement("article") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const aside = () =>
  reactive(
    document.createElement("aside") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLAudioElementBuilder {}

export const audio = () =>
  reactive(
    document.createElement("audio") as unknown as HTMLAudioElement,
  ) as ReactiveElement<HTMLAudioElement> & HTMLAudioElementBuilder;

export const b = () =>
  reactive(
    document.createElement("b") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLBaseElementBuilder extends HTMLElementBuilder {
  href(value: ReactiveValue<string>): this;
  target(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const base = () =>
  reactive(
    document.createElement("base") as unknown as HTMLBaseElement,
  ) as ReactiveElement<HTMLBaseElement> & HTMLBaseElementBuilder;

export const bdi = () =>
  reactive(
    document.createElement("bdi") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const bdo = () =>
  reactive(
    document.createElement("bdo") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLQuoteElementBuilder extends HTMLElementBuilder {
  cite(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const blockquote = () =>
  reactive(
    document.createElement("blockquote") as unknown as HTMLQuoteElement,
  ) as ReactiveElement<HTMLQuoteElement> & HTMLQuoteElementBuilder;

interface HTMLBodyElementBuilder extends HTMLElementBuilder {
  aLink(value: ReactiveValue<string>): this;
  background(value: ReactiveValue<string>): this;
  bgColor(value: ReactiveValue<string>): this;
  link(value: ReactiveValue<string>): this;
  text(value: ReactiveValue<string>): this;
  vLink(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const body = () =>
  reactive(
    document.createElement("body") as unknown as HTMLBodyElement,
  ) as ReactiveElement<HTMLBodyElement> & HTMLBodyElementBuilder;

interface HTMLBRElementBuilder extends HTMLElementBuilder {
  clear(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const br = () =>
  reactive(
    document.createElement("br") as unknown as HTMLBRElement,
  ) as ReactiveElement<HTMLBRElement> & HTMLBRElementBuilder;

interface HTMLButtonElementBuilder extends HTMLElementBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  formAction(value: ReactiveValue<string>): this;
  formEnctype(value: ReactiveValue<string>): this;
  formMethod(value: ReactiveValue<string>): this;
  formNoValidate(value: ReactiveValue<boolean>): this;
  formTarget(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<"submit" | "reset" | "button">): this;
  value(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const button = () =>
  reactive(
    document.createElement("button") as unknown as HTMLButtonElement,
  ) as ReactiveElement<HTMLButtonElement> & HTMLButtonElementBuilder;

interface HTMLCanvasElementBuilder extends HTMLElementBuilder {
  height(value: ReactiveValue<number>): this;
  width(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const canvas = () =>
  reactive(
    document.createElement("canvas") as unknown as HTMLCanvasElement,
  ) as ReactiveElement<HTMLCanvasElement> & HTMLCanvasElementBuilder;

interface HTMLTableCaptionElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const caption = () =>
  reactive(
    document.createElement("caption") as unknown as HTMLTableCaptionElement,
  ) as ReactiveElement<HTMLTableCaptionElement> &
    HTMLTableCaptionElementBuilder;

export const cite = () =>
  reactive(
    document.createElement("cite") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const code = () =>
  reactive(
    document.createElement("code") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLTableColElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  ch(value: ReactiveValue<string>): this;
  chOff(value: ReactiveValue<string>): this;
  span(value: ReactiveValue<number>): this;
  vAlign(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const col = () =>
  reactive(
    document.createElement("col") as unknown as HTMLTableColElement,
  ) as ReactiveElement<HTMLTableColElement> & HTMLTableColElementBuilder;

export const colgroup = () =>
  reactive(
    document.createElement("colgroup") as unknown as HTMLTableColElement,
  ) as ReactiveElement<HTMLTableColElement> & HTMLTableColElementBuilder;

interface HTMLDataElementBuilder extends HTMLElementBuilder {
  value(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const data = () =>
  reactive(
    document.createElement("data") as unknown as HTMLDataElement,
  ) as ReactiveElement<HTMLDataElement> & HTMLDataElementBuilder;

interface HTMLDataListElementBuilder extends HTMLElementBuilder {
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const datalist = () =>
  reactive(
    document.createElement("datalist") as unknown as HTMLDataListElement,
  ) as ReactiveElement<HTMLDataListElement> & HTMLDataListElementBuilder;

export const dd = () =>
  reactive(
    document.createElement("dd") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLModElementBuilder extends HTMLElementBuilder {
  cite(value: ReactiveValue<string>): this;
  dateTime(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const del = () =>
  reactive(
    document.createElement("del") as unknown as HTMLModElement,
  ) as ReactiveElement<HTMLModElement> & HTMLModElementBuilder;

interface HTMLDetailsElementBuilder extends HTMLElementBuilder {
  name(value: ReactiveValue<string>): this;
  open(value: ReactiveValue<boolean>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const details = () =>
  reactive(
    document.createElement("details") as unknown as HTMLDetailsElement,
  ) as ReactiveElement<HTMLDetailsElement> & HTMLDetailsElementBuilder;

export const dfn = () =>
  reactive(
    document.createElement("dfn") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLDialogElementBuilder extends HTMLElementBuilder {
  open(value: ReactiveValue<boolean>): this;
  returnValue(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const dialog = () =>
  reactive(
    document.createElement("dialog") as unknown as HTMLDialogElement,
  ) as ReactiveElement<HTMLDialogElement> & HTMLDialogElementBuilder;

interface HTMLDivElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const div = () =>
  reactive(
    document.createElement("div") as unknown as HTMLDivElement,
  ) as ReactiveElement<HTMLDivElement> & HTMLDivElementBuilder;

interface HTMLDListElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const dl = () =>
  reactive(
    document.createElement("dl") as unknown as HTMLDListElement,
  ) as ReactiveElement<HTMLDListElement> & HTMLDListElementBuilder;

export const dt = () =>
  reactive(
    document.createElement("dt") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const em = () =>
  reactive(
    document.createElement("em") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLEmbedElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  height(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const embed = () =>
  reactive(
    document.createElement("embed") as unknown as HTMLEmbedElement,
  ) as ReactiveElement<HTMLEmbedElement> & HTMLEmbedElementBuilder;

interface HTMLFieldSetElementBuilder extends HTMLElementBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  name(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const fieldset = () =>
  reactive(
    document.createElement("fieldset") as unknown as HTMLFieldSetElement,
  ) as ReactiveElement<HTMLFieldSetElement> & HTMLFieldSetElementBuilder;

export const figcaption = () =>
  reactive(
    document.createElement("figcaption") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const figure = () =>
  reactive(
    document.createElement("figure") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const footer = () =>
  reactive(
    document.createElement("footer") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLFormElementBuilder extends HTMLElementBuilder {
  acceptCharset(value: ReactiveValue<string>): this;
  action(value: ReactiveValue<string>): this;
  autocomplete(value: ReactiveValue<AutoFillBase>): this;
  encoding(value: ReactiveValue<string>): this;
  enctype(value: ReactiveValue<string>): this;
  method(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  noValidate(value: ReactiveValue<boolean>): this;
  rel(value: ReactiveValue<string>): this;
  relList(value: ReactiveValue<string>): this;
  target(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const form = () =>
  reactive(
    document.createElement("form") as unknown as HTMLFormElement,
  ) as ReactiveElement<HTMLFormElement> & HTMLFormElementBuilder;

interface HTMLHeadingElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const h1 = () =>
  reactive(
    document.createElement("h1") as unknown as HTMLHeadingElement,
  ) as ReactiveElement<HTMLHeadingElement> & HTMLHeadingElementBuilder;

export const h2 = () =>
  reactive(
    document.createElement("h2") as unknown as HTMLHeadingElement,
  ) as ReactiveElement<HTMLHeadingElement> & HTMLHeadingElementBuilder;

export const h3 = () =>
  reactive(
    document.createElement("h3") as unknown as HTMLHeadingElement,
  ) as ReactiveElement<HTMLHeadingElement> & HTMLHeadingElementBuilder;

export const h4 = () =>
  reactive(
    document.createElement("h4") as unknown as HTMLHeadingElement,
  ) as ReactiveElement<HTMLHeadingElement> & HTMLHeadingElementBuilder;

export const h5 = () =>
  reactive(
    document.createElement("h5") as unknown as HTMLHeadingElement,
  ) as ReactiveElement<HTMLHeadingElement> & HTMLHeadingElementBuilder;

export const h6 = () =>
  reactive(
    document.createElement("h6") as unknown as HTMLHeadingElement,
  ) as ReactiveElement<HTMLHeadingElement> & HTMLHeadingElementBuilder;

interface HTMLHeadElementBuilder extends HTMLElementBuilder {
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const head = () =>
  reactive(
    document.createElement("head") as unknown as HTMLHeadElement,
  ) as ReactiveElement<HTMLHeadElement> & HTMLHeadElementBuilder;

export const header = () =>
  reactive(
    document.createElement("header") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const hgroup = () =>
  reactive(
    document.createElement("hgroup") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLHRElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  color(value: ReactiveValue<string>): this;
  noShade(value: ReactiveValue<boolean>): this;
  size(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const hr = () =>
  reactive(
    document.createElement("hr") as unknown as HTMLHRElement,
  ) as ReactiveElement<HTMLHRElement> & HTMLHRElementBuilder;

interface HTMLHtmlElementBuilder extends HTMLElementBuilder {
  version(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const html = () =>
  reactive(
    document.createElement("html") as unknown as HTMLHtmlElement,
  ) as ReactiveElement<HTMLHtmlElement> & HTMLHtmlElementBuilder;

export const i = () =>
  reactive(
    document.createElement("i") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLIFrameElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  allow(value: ReactiveValue<string>): this;
  allowFullscreen(value: ReactiveValue<boolean>): this;
  frameBorder(value: ReactiveValue<string>): this;
  height(value: ReactiveValue<string>): this;
  loading(value: ReactiveValue<"eager" | "lazy">): this;
  longDesc(value: ReactiveValue<string>): this;
  marginHeight(value: ReactiveValue<string>): this;
  marginWidth(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  referrerPolicy(value: ReactiveValue<ReferrerPolicy>): this;
  sandbox(value: ReactiveValue<string>): this;
  scrolling(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  srcdoc(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const iframe = () =>
  reactive(
    document.createElement("iframe") as unknown as HTMLIFrameElement,
  ) as ReactiveElement<HTMLIFrameElement> & HTMLIFrameElementBuilder;

interface HTMLImageElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  alt(value: ReactiveValue<string>): this;
  border(value: ReactiveValue<string>): this;
  crossOrigin(value: ReactiveValue<string>): this;
  decoding(value: ReactiveValue<"async" | "sync" | "auto">): this;
  fetchPriority(value: ReactiveValue<"auto" | "high" | "low">): this;
  height(value: ReactiveValue<number>): this;
  hspace(value: ReactiveValue<number>): this;
  isMap(value: ReactiveValue<boolean>): this;
  loading(value: ReactiveValue<"eager" | "lazy">): this;
  longDesc(value: ReactiveValue<string>): this;
  lowsrc(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  referrerPolicy(value: ReactiveValue<string>): this;
  sizes(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  srcset(value: ReactiveValue<string>): this;
  useMap(value: ReactiveValue<string>): this;
  vspace(value: ReactiveValue<number>): this;
  width(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const img = () =>
  reactive(
    document.createElement("img") as unknown as HTMLImageElement,
  ) as ReactiveElement<HTMLImageElement> & HTMLImageElementBuilder;

interface HTMLInputElementBuilder extends HTMLElementBuilder {
  accept(value: ReactiveValue<string>): this;
  align(value: ReactiveValue<string>): this;
  alt(value: ReactiveValue<string>): this;
  autocomplete(value: ReactiveValue<AutoFill>): this;
  capture(value: ReactiveValue<string>): this;
  checked(value: ReactiveValue<boolean>): this;
  defaultChecked(value: ReactiveValue<boolean>): this;
  defaultValue(value: ReactiveValue<string>): this;
  dirName(value: ReactiveValue<string>): this;
  disabled(value: ReactiveValue<boolean>): this;
  files(value: ReactiveValue<FileList>): this;
  formAction(value: ReactiveValue<string>): this;
  formEnctype(value: ReactiveValue<string>): this;
  formMethod(value: ReactiveValue<string>): this;
  formNoValidate(value: ReactiveValue<boolean>): this;
  formTarget(value: ReactiveValue<string>): this;
  height(value: ReactiveValue<number>): this;
  indeterminate(value: ReactiveValue<boolean>): this;
  max(value: ReactiveValue<string>): this;
  maxLength(value: ReactiveValue<number>): this;
  min(value: ReactiveValue<string>): this;
  minLength(value: ReactiveValue<number>): this;
  multiple(value: ReactiveValue<boolean>): this;
  name(value: ReactiveValue<string>): this;
  pattern(value: ReactiveValue<string>): this;
  placeholder(value: ReactiveValue<string>): this;
  readOnly(value: ReactiveValue<boolean>): this;
  required(value: ReactiveValue<boolean>): this;
  selectionDirection(
    value: ReactiveValue<"forward" | "backward" | "none">,
  ): this;
  selectionEnd(value: ReactiveValue<number>): this;
  selectionStart(value: ReactiveValue<number>): this;
  size(value: ReactiveValue<number>): this;
  src(value: ReactiveValue<string>): this;
  step(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  useMap(value: ReactiveValue<string>): this;
  value(value: ReactiveValue<string>): this;
  valueAsDate(value: ReactiveValue<Date>): this;
  valueAsNumber(value: ReactiveValue<number>): this;
  webkitdirectory(value: ReactiveValue<boolean>): this;
  width(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const input = () =>
  reactive(
    document.createElement("input") as unknown as HTMLInputElement,
  ) as ReactiveElement<HTMLInputElement> & HTMLInputElementBuilder;

export const ins = () =>
  reactive(
    document.createElement("ins") as unknown as HTMLModElement,
  ) as ReactiveElement<HTMLModElement> & HTMLModElementBuilder;

export const kbd = () =>
  reactive(
    document.createElement("kbd") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLLabelElementBuilder extends HTMLElementBuilder {
  htmlFor(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const label = () =>
  reactive(
    document.createElement("label") as unknown as HTMLLabelElement,
  ) as ReactiveElement<HTMLLabelElement> & HTMLLabelElementBuilder;

interface HTMLLegendElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const legend = () =>
  reactive(
    document.createElement("legend") as unknown as HTMLLegendElement,
  ) as ReactiveElement<HTMLLegendElement> & HTMLLegendElementBuilder;

interface HTMLLIElementBuilder extends HTMLElementBuilder {
  type(value: ReactiveValue<string>): this;
  value(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const li = () =>
  reactive(
    document.createElement("li") as unknown as HTMLLIElement,
  ) as ReactiveElement<HTMLLIElement> & HTMLLIElementBuilder;

interface HTMLLinkElementBuilder extends HTMLElementBuilder {
  as(value: ReactiveValue<string>): this;
  blocking(value: ReactiveValue<string>): this;
  charset(value: ReactiveValue<string>): this;
  crossOrigin(value: ReactiveValue<string>): this;
  disabled(value: ReactiveValue<boolean>): this;
  fetchPriority(value: ReactiveValue<"auto" | "high" | "low">): this;
  href(value: ReactiveValue<string>): this;
  hreflang(value: ReactiveValue<string>): this;
  imageSizes(value: ReactiveValue<string>): this;
  imageSrcset(value: ReactiveValue<string>): this;
  integrity(value: ReactiveValue<string>): this;
  media(value: ReactiveValue<string>): this;
  referrerPolicy(value: ReactiveValue<string>): this;
  rel(value: ReactiveValue<string>): this;
  relList(value: ReactiveValue<string>): this;
  rev(value: ReactiveValue<string>): this;
  sizes(value: ReactiveValue<string>): this;
  target(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const link = () =>
  reactive(
    document.createElement("link") as unknown as HTMLLinkElement,
  ) as ReactiveElement<HTMLLinkElement> & HTMLLinkElementBuilder;

export const main = () =>
  reactive(
    document.createElement("main") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLMapElementBuilder extends HTMLElementBuilder {
  name(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const map = () =>
  reactive(
    document.createElement("map") as unknown as HTMLMapElement,
  ) as ReactiveElement<HTMLMapElement> & HTMLMapElementBuilder;

export const mark = () =>
  reactive(
    document.createElement("mark") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLMenuElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const menu = () =>
  reactive(
    document.createElement("menu") as unknown as HTMLMenuElement,
  ) as ReactiveElement<HTMLMenuElement> & HTMLMenuElementBuilder;

interface HTMLMetaElementBuilder extends HTMLElementBuilder {
  content(value: ReactiveValue<string>): this;
  httpEquiv(value: ReactiveValue<string>): this;
  media(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  scheme(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const meta = () =>
  reactive(
    document.createElement("meta") as unknown as HTMLMetaElement,
  ) as ReactiveElement<HTMLMetaElement> & HTMLMetaElementBuilder;

interface HTMLMeterElementBuilder extends HTMLElementBuilder {
  high(value: ReactiveValue<number>): this;
  low(value: ReactiveValue<number>): this;
  max(value: ReactiveValue<number>): this;
  min(value: ReactiveValue<number>): this;
  optimum(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const meter = () =>
  reactive(
    document.createElement("meter") as unknown as HTMLMeterElement,
  ) as ReactiveElement<HTMLMeterElement> & HTMLMeterElementBuilder;

export const nav = () =>
  reactive(
    document.createElement("nav") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const noscript = () =>
  reactive(
    document.createElement("noscript") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLObjectElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  archive(value: ReactiveValue<string>): this;
  border(value: ReactiveValue<string>): this;
  code(value: ReactiveValue<string>): this;
  codeBase(value: ReactiveValue<string>): this;
  codeType(value: ReactiveValue<string>): this;
  data(value: ReactiveValue<string>): this;
  declare(value: ReactiveValue<boolean>): this;
  height(value: ReactiveValue<string>): this;
  hspace(value: ReactiveValue<number>): this;
  name(value: ReactiveValue<string>): this;
  standby(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  useMap(value: ReactiveValue<string>): this;
  vspace(value: ReactiveValue<number>): this;
  width(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const object = () =>
  reactive(
    document.createElement("object") as unknown as HTMLObjectElement,
  ) as ReactiveElement<HTMLObjectElement> & HTMLObjectElementBuilder;

interface HTMLOListElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
  reversed(value: ReactiveValue<boolean>): this;
  start(value: ReactiveValue<number>): this;
  type(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const ol = () =>
  reactive(
    document.createElement("ol") as unknown as HTMLOListElement,
  ) as ReactiveElement<HTMLOListElement> & HTMLOListElementBuilder;

interface HTMLOptGroupElementBuilder extends HTMLElementBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  label(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const optgroup = () =>
  reactive(
    document.createElement("optgroup") as unknown as HTMLOptGroupElement,
  ) as ReactiveElement<HTMLOptGroupElement> & HTMLOptGroupElementBuilder;

interface HTMLOptionElementBuilder extends HTMLElementBuilder {
  defaultSelected(value: ReactiveValue<boolean>): this;
  disabled(value: ReactiveValue<boolean>): this;
  label(value: ReactiveValue<string>): this;
  selected(value: ReactiveValue<boolean>): this;
  text(value: ReactiveValue<string>): this;
  value(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const option = () =>
  reactive(
    document.createElement("option") as unknown as HTMLOptionElement,
  ) as ReactiveElement<HTMLOptionElement> & HTMLOptionElementBuilder;

interface HTMLOutputElementBuilder extends HTMLElementBuilder {
  defaultValue(value: ReactiveValue<string>): this;
  htmlFor(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  value(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const output = () =>
  reactive(
    document.createElement("output") as unknown as HTMLOutputElement,
  ) as ReactiveElement<HTMLOutputElement> & HTMLOutputElementBuilder;

interface HTMLParagraphElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const p = () =>
  reactive(
    document.createElement("p") as unknown as HTMLParagraphElement,
  ) as ReactiveElement<HTMLParagraphElement> & HTMLParagraphElementBuilder;

interface HTMLPictureElementBuilder extends HTMLElementBuilder {
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const picture = () =>
  reactive(
    document.createElement("picture") as unknown as HTMLPictureElement,
  ) as ReactiveElement<HTMLPictureElement> & HTMLPictureElementBuilder;

interface HTMLPreElementBuilder extends HTMLElementBuilder {
  width(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const pre = () =>
  reactive(
    document.createElement("pre") as unknown as HTMLPreElement,
  ) as ReactiveElement<HTMLPreElement> & HTMLPreElementBuilder;

interface HTMLProgressElementBuilder extends HTMLElementBuilder {
  max(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const progress = () =>
  reactive(
    document.createElement("progress") as unknown as HTMLProgressElement,
  ) as ReactiveElement<HTMLProgressElement> & HTMLProgressElementBuilder;

export const q = () =>
  reactive(
    document.createElement("q") as unknown as HTMLQuoteElement,
  ) as ReactiveElement<HTMLQuoteElement> & HTMLQuoteElementBuilder;

export const rp = () =>
  reactive(
    document.createElement("rp") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const rt = () =>
  reactive(
    document.createElement("rt") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const ruby = () =>
  reactive(
    document.createElement("ruby") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const s = () =>
  reactive(
    document.createElement("s") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const samp = () =>
  reactive(
    document.createElement("samp") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLScriptElementBuilder extends HTMLElementBuilder {
  async(value: ReactiveValue<boolean>): this;
  blocking(value: ReactiveValue<string>): this;
  charset(value: ReactiveValue<string>): this;
  crossOrigin(value: ReactiveValue<string>): this;
  defer(value: ReactiveValue<boolean>): this;
  event(value: ReactiveValue<string>): this;
  fetchPriority(value: ReactiveValue<"auto" | "high" | "low">): this;
  htmlFor(value: ReactiveValue<string>): this;
  integrity(value: ReactiveValue<string>): this;
  noModule(value: ReactiveValue<boolean>): this;
  referrerPolicy(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  text(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const script = () =>
  reactive(
    document.createElement("script") as unknown as HTMLScriptElement,
  ) as ReactiveElement<HTMLScriptElement> & HTMLScriptElementBuilder;

export const search = () =>
  reactive(
    document.createElement("search") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const section = () =>
  reactive(
    document.createElement("section") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLSelectElementBuilder extends HTMLElementBuilder {
  autocomplete(value: ReactiveValue<AutoFill>): this;
  disabled(value: ReactiveValue<boolean>): this;
  length(value: ReactiveValue<number>): this;
  multiple(value: ReactiveValue<boolean>): this;
  name(value: ReactiveValue<string>): this;
  required(value: ReactiveValue<boolean>): this;
  selectedIndex(value: ReactiveValue<number>): this;
  size(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const select = () =>
  reactive(
    document.createElement("select") as unknown as HTMLSelectElement,
  ) as ReactiveElement<HTMLSelectElement> & HTMLSelectElementBuilder;

interface HTMLSlotElementBuilder extends HTMLElementBuilder {
  name(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const slot = () =>
  reactive(
    document.createElement("slot") as unknown as HTMLSlotElement,
  ) as ReactiveElement<HTMLSlotElement> & HTMLSlotElementBuilder;

export const small = () =>
  reactive(
    document.createElement("small") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLSourceElementBuilder extends HTMLElementBuilder {
  height(value: ReactiveValue<number>): this;
  media(value: ReactiveValue<string>): this;
  sizes(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  srcset(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<number>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const source = () =>
  reactive(
    document.createElement("source") as unknown as HTMLSourceElement,
  ) as ReactiveElement<HTMLSourceElement> & HTMLSourceElementBuilder;

interface HTMLSpanElementBuilder extends HTMLElementBuilder {
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const span = () =>
  reactive(
    document.createElement("span") as unknown as HTMLSpanElement,
  ) as ReactiveElement<HTMLSpanElement> & HTMLSpanElementBuilder;

export const strong = () =>
  reactive(
    document.createElement("strong") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLStyleElementBuilder extends HTMLElementBuilder {
  blocking(value: ReactiveValue<string>): this;
  disabled(value: ReactiveValue<boolean>): this;
  media(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const style = () =>
  reactive(
    document.createElement("style") as unknown as HTMLStyleElement,
  ) as ReactiveElement<HTMLStyleElement> & HTMLStyleElementBuilder;

export const sub = () =>
  reactive(
    document.createElement("sub") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const summary = () =>
  reactive(
    document.createElement("summary") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

export const sup = () =>
  reactive(
    document.createElement("sup") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLTableElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  bgColor(value: ReactiveValue<string>): this;
  border(value: ReactiveValue<string>): this;
  caption(value: ReactiveValue<HTMLTableCaptionElement>): this;
  cellPadding(value: ReactiveValue<string>): this;
  cellSpacing(value: ReactiveValue<string>): this;
  frame(value: ReactiveValue<string>): this;
  rules(value: ReactiveValue<string>): this;
  summary(value: ReactiveValue<string>): this;
  tFoot(value: ReactiveValue<HTMLTableSectionElement>): this;
  tHead(value: ReactiveValue<HTMLTableSectionElement>): this;
  width(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const table = () =>
  reactive(
    document.createElement("table") as unknown as HTMLTableElement,
  ) as ReactiveElement<HTMLTableElement> & HTMLTableElementBuilder;

interface HTMLTableSectionElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  ch(value: ReactiveValue<string>): this;
  chOff(value: ReactiveValue<string>): this;
  vAlign(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const tbody = () =>
  reactive(
    document.createElement("tbody") as unknown as HTMLTableSectionElement,
  ) as ReactiveElement<HTMLTableSectionElement> &
    HTMLTableSectionElementBuilder;

interface HTMLTableCellElementBuilder extends HTMLElementBuilder {
  abbr(value: ReactiveValue<string>): this;
  align(value: ReactiveValue<string>): this;
  axis(value: ReactiveValue<string>): this;
  bgColor(value: ReactiveValue<string>): this;
  ch(value: ReactiveValue<string>): this;
  chOff(value: ReactiveValue<string>): this;
  colSpan(value: ReactiveValue<number>): this;
  headers(value: ReactiveValue<string>): this;
  height(value: ReactiveValue<string>): this;
  noWrap(value: ReactiveValue<boolean>): this;
  rowSpan(value: ReactiveValue<number>): this;
  scope(value: ReactiveValue<string>): this;
  vAlign(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const td = () =>
  reactive(
    document.createElement("td") as unknown as HTMLTableCellElement,
  ) as ReactiveElement<HTMLTableCellElement> & HTMLTableCellElementBuilder;

interface HTMLTemplateElementBuilder extends HTMLElementBuilder {
  shadowRootClonable(value: ReactiveValue<boolean>): this;
  shadowRootDelegatesFocus(value: ReactiveValue<boolean>): this;
  shadowRootMode(value: ReactiveValue<string>): this;
  shadowRootSerializable(value: ReactiveValue<boolean>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const template = () =>
  reactive(
    document.createElement("template") as unknown as HTMLTemplateElement,
  ) as ReactiveElement<HTMLTemplateElement> & HTMLTemplateElementBuilder;

interface HTMLTextAreaElementBuilder extends HTMLElementBuilder {
  autocomplete(value: ReactiveValue<AutoFill>): this;
  cols(value: ReactiveValue<number>): this;
  defaultValue(value: ReactiveValue<string>): this;
  dirName(value: ReactiveValue<string>): this;
  disabled(value: ReactiveValue<boolean>): this;
  maxLength(value: ReactiveValue<number>): this;
  minLength(value: ReactiveValue<number>): this;
  name(value: ReactiveValue<string>): this;
  placeholder(value: ReactiveValue<string>): this;
  readOnly(value: ReactiveValue<boolean>): this;
  required(value: ReactiveValue<boolean>): this;
  rows(value: ReactiveValue<number>): this;
  selectionDirection(
    value: ReactiveValue<"forward" | "backward" | "none">,
  ): this;
  selectionEnd(value: ReactiveValue<number>): this;
  selectionStart(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<string>): this;
  wrap(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const textarea = () =>
  reactive(
    document.createElement("textarea") as unknown as HTMLTextAreaElement,
  ) as ReactiveElement<HTMLTextAreaElement> & HTMLTextAreaElementBuilder;

export const tfoot = () =>
  reactive(
    document.createElement("tfoot") as unknown as HTMLTableSectionElement,
  ) as ReactiveElement<HTMLTableSectionElement> &
    HTMLTableSectionElementBuilder;

export const th = () =>
  reactive(
    document.createElement("th") as unknown as HTMLTableCellElement,
  ) as ReactiveElement<HTMLTableCellElement> & HTMLTableCellElementBuilder;

export const thead = () =>
  reactive(
    document.createElement("thead") as unknown as HTMLTableSectionElement,
  ) as ReactiveElement<HTMLTableSectionElement> &
    HTMLTableSectionElementBuilder;

interface HTMLTimeElementBuilder extends HTMLElementBuilder {
  dateTime(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const time = () =>
  reactive(
    document.createElement("time") as unknown as HTMLTimeElement,
  ) as ReactiveElement<HTMLTimeElement> & HTMLTimeElementBuilder;

interface HTMLTitleElementBuilder extends HTMLElementBuilder {
  text(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const title = () =>
  reactive(
    document.createElement("title") as unknown as HTMLTitleElement,
  ) as ReactiveElement<HTMLTitleElement> & HTMLTitleElementBuilder;

interface HTMLTableRowElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  bgColor(value: ReactiveValue<string>): this;
  ch(value: ReactiveValue<string>): this;
  chOff(value: ReactiveValue<string>): this;
  vAlign(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const tr = () =>
  reactive(
    document.createElement("tr") as unknown as HTMLTableRowElement,
  ) as ReactiveElement<HTMLTableRowElement> & HTMLTableRowElementBuilder;

interface HTMLTrackElementBuilder extends HTMLElementBuilder {
  default(value: ReactiveValue<boolean>): this;
  kind(value: ReactiveValue<string>): this;
  label(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  srclang(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const track = () =>
  reactive(
    document.createElement("track") as unknown as HTMLTrackElement,
  ) as ReactiveElement<HTMLTrackElement> & HTMLTrackElementBuilder;

export const u = () =>
  reactive(
    document.createElement("u") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLUListElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
  type(value: ReactiveValue<string>): this;
  accessKey(value: ReactiveValue<string>): this;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(value: ReactiveValue<string>): this;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(value: ReactiveValue<boolean>): this;
  inert(value: ReactiveValue<boolean>): this;
  innerText(value: ReactiveValue<string>): this;
  lang(value: ReactiveValue<string>): this;
  outerText(value: ReactiveValue<string>): this;
  popover(value: ReactiveValue<string>): this;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(value: ReactiveValue<string>): this;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const ul = () =>
  reactive(
    document.createElement("ul") as unknown as HTMLUListElement,
  ) as ReactiveElement<HTMLUListElement> & HTMLUListElementBuilder;

export const mathVar = () =>
  reactive(
    document.createElement("var") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface HTMLVideoElementBuilder {
  disablePictureInPicture(value: ReactiveValue<boolean>): this;
  height(value: ReactiveValue<number>): this;
  playsInline(value: ReactiveValue<boolean>): this;
  poster(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<number>): this;
}

export const video = () =>
  reactive(
    document.createElement("video") as unknown as HTMLVideoElement,
  ) as ReactiveElement<HTMLVideoElement> & HTMLVideoElementBuilder;

export const wbr = () =>
  reactive(
    document.createElement("wbr") as unknown as HTMLElement,
  ) as ReactiveElement<HTMLElement> & HTMLElementBuilder;

interface SVGElementBuilder extends ElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
}

interface SVGGraphicsElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

interface SVGAElementBuilder extends SVGGraphicsElementBuilder {
  rel(value: ReactiveValue<string>): this;
  relList(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

interface SVGAnimateElementBuilder {}

export const animate = () =>
  reactive(
    document.createElement("animate") as unknown as SVGAnimateElement,
  ) as ReactiveElement<SVGAnimateElement> & SVGAnimateElementBuilder;

interface SVGAnimateMotionElementBuilder {}

export const animateMotion = () =>
  reactive(
    document.createElement(
      "animateMotion",
    ) as unknown as SVGAnimateMotionElement,
  ) as ReactiveElement<SVGAnimateMotionElement> &
    SVGAnimateMotionElementBuilder;

interface SVGAnimateTransformElementBuilder {}

export const animateTransform = () =>
  reactive(
    document.createElement(
      "animateTransform",
    ) as unknown as SVGAnimateTransformElement,
  ) as ReactiveElement<SVGAnimateTransformElement> &
    SVGAnimateTransformElementBuilder;

interface SVGCircleElementBuilder {}

export const circle = () =>
  reactive(
    document.createElement("circle") as unknown as SVGCircleElement,
  ) as ReactiveElement<SVGCircleElement> & SVGCircleElementBuilder;

interface SVGClipPathElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const clipPath = () =>
  reactive(
    document.createElement("clipPath") as unknown as SVGClipPathElement,
  ) as ReactiveElement<SVGClipPathElement> & SVGClipPathElementBuilder;

interface SVGDefsElementBuilder extends SVGGraphicsElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const defs = () =>
  reactive(
    document.createElement("defs") as unknown as SVGDefsElement,
  ) as ReactiveElement<SVGDefsElement> & SVGDefsElementBuilder;

interface SVGDescElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const desc = () =>
  reactive(
    document.createElement("desc") as unknown as SVGDescElement,
  ) as ReactiveElement<SVGDescElement> & SVGDescElementBuilder;

interface SVGEllipseElementBuilder {}

export const ellipse = () =>
  reactive(
    document.createElement("ellipse") as unknown as SVGEllipseElement,
  ) as ReactiveElement<SVGEllipseElement> & SVGEllipseElementBuilder;

interface SVGFEBlendElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feBlend = () =>
  reactive(
    document.createElement("feBlend") as unknown as SVGFEBlendElement,
  ) as ReactiveElement<SVGFEBlendElement> & SVGFEBlendElementBuilder;

interface SVGFEColorMatrixElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feColorMatrix = () =>
  reactive(
    document.createElement(
      "feColorMatrix",
    ) as unknown as SVGFEColorMatrixElement,
  ) as ReactiveElement<SVGFEColorMatrixElement> &
    SVGFEColorMatrixElementBuilder;

interface SVGFEComponentTransferElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feComponentTransfer = () =>
  reactive(
    document.createElement(
      "feComponentTransfer",
    ) as unknown as SVGFEComponentTransferElement,
  ) as ReactiveElement<SVGFEComponentTransferElement> &
    SVGFEComponentTransferElementBuilder;

interface SVGFECompositeElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feComposite = () =>
  reactive(
    document.createElement("feComposite") as unknown as SVGFECompositeElement,
  ) as ReactiveElement<SVGFECompositeElement> & SVGFECompositeElementBuilder;

interface SVGFEConvolveMatrixElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feConvolveMatrix = () =>
  reactive(
    document.createElement(
      "feConvolveMatrix",
    ) as unknown as SVGFEConvolveMatrixElement,
  ) as ReactiveElement<SVGFEConvolveMatrixElement> &
    SVGFEConvolveMatrixElementBuilder;

interface SVGFEDiffuseLightingElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feDiffuseLighting = () =>
  reactive(
    document.createElement(
      "feDiffuseLighting",
    ) as unknown as SVGFEDiffuseLightingElement,
  ) as ReactiveElement<SVGFEDiffuseLightingElement> &
    SVGFEDiffuseLightingElementBuilder;

interface SVGFEDisplacementMapElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feDisplacementMap = () =>
  reactive(
    document.createElement(
      "feDisplacementMap",
    ) as unknown as SVGFEDisplacementMapElement,
  ) as ReactiveElement<SVGFEDisplacementMapElement> &
    SVGFEDisplacementMapElementBuilder;

interface SVGFEDistantLightElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feDistantLight = () =>
  reactive(
    document.createElement(
      "feDistantLight",
    ) as unknown as SVGFEDistantLightElement,
  ) as ReactiveElement<SVGFEDistantLightElement> &
    SVGFEDistantLightElementBuilder;

interface SVGFEDropShadowElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feDropShadow = () =>
  reactive(
    document.createElement("feDropShadow") as unknown as SVGFEDropShadowElement,
  ) as ReactiveElement<SVGFEDropShadowElement> & SVGFEDropShadowElementBuilder;

interface SVGFEFloodElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feFlood = () =>
  reactive(
    document.createElement("feFlood") as unknown as SVGFEFloodElement,
  ) as ReactiveElement<SVGFEFloodElement> & SVGFEFloodElementBuilder;

interface SVGFEFuncAElementBuilder {}

export const feFuncA = () =>
  reactive(
    document.createElement("feFuncA") as unknown as SVGFEFuncAElement,
  ) as ReactiveElement<SVGFEFuncAElement> & SVGFEFuncAElementBuilder;

interface SVGFEFuncBElementBuilder {}

export const feFuncB = () =>
  reactive(
    document.createElement("feFuncB") as unknown as SVGFEFuncBElement,
  ) as ReactiveElement<SVGFEFuncBElement> & SVGFEFuncBElementBuilder;

interface SVGFEFuncGElementBuilder {}

export const feFuncG = () =>
  reactive(
    document.createElement("feFuncG") as unknown as SVGFEFuncGElement,
  ) as ReactiveElement<SVGFEFuncGElement> & SVGFEFuncGElementBuilder;

interface SVGFEFuncRElementBuilder {}

export const feFuncR = () =>
  reactive(
    document.createElement("feFuncR") as unknown as SVGFEFuncRElement,
  ) as ReactiveElement<SVGFEFuncRElement> & SVGFEFuncRElementBuilder;

interface SVGFEGaussianBlurElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feGaussianBlur = () =>
  reactive(
    document.createElement(
      "feGaussianBlur",
    ) as unknown as SVGFEGaussianBlurElement,
  ) as ReactiveElement<SVGFEGaussianBlurElement> &
    SVGFEGaussianBlurElementBuilder;

interface SVGFEImageElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feImage = () =>
  reactive(
    document.createElement("feImage") as unknown as SVGFEImageElement,
  ) as ReactiveElement<SVGFEImageElement> & SVGFEImageElementBuilder;

interface SVGFEMergeElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feMerge = () =>
  reactive(
    document.createElement("feMerge") as unknown as SVGFEMergeElement,
  ) as ReactiveElement<SVGFEMergeElement> & SVGFEMergeElementBuilder;

interface SVGFEMergeNodeElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feMergeNode = () =>
  reactive(
    document.createElement("feMergeNode") as unknown as SVGFEMergeNodeElement,
  ) as ReactiveElement<SVGFEMergeNodeElement> & SVGFEMergeNodeElementBuilder;

interface SVGFEMorphologyElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feMorphology = () =>
  reactive(
    document.createElement("feMorphology") as unknown as SVGFEMorphologyElement,
  ) as ReactiveElement<SVGFEMorphologyElement> & SVGFEMorphologyElementBuilder;

interface SVGFEOffsetElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feOffset = () =>
  reactive(
    document.createElement("feOffset") as unknown as SVGFEOffsetElement,
  ) as ReactiveElement<SVGFEOffsetElement> & SVGFEOffsetElementBuilder;

interface SVGFEPointLightElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const fePointLight = () =>
  reactive(
    document.createElement("fePointLight") as unknown as SVGFEPointLightElement,
  ) as ReactiveElement<SVGFEPointLightElement> & SVGFEPointLightElementBuilder;

interface SVGFESpecularLightingElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feSpecularLighting = () =>
  reactive(
    document.createElement(
      "feSpecularLighting",
    ) as unknown as SVGFESpecularLightingElement,
  ) as ReactiveElement<SVGFESpecularLightingElement> &
    SVGFESpecularLightingElementBuilder;

interface SVGFESpotLightElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feSpotLight = () =>
  reactive(
    document.createElement("feSpotLight") as unknown as SVGFESpotLightElement,
  ) as ReactiveElement<SVGFESpotLightElement> & SVGFESpotLightElementBuilder;

interface SVGFETileElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feTile = () =>
  reactive(
    document.createElement("feTile") as unknown as SVGFETileElement,
  ) as ReactiveElement<SVGFETileElement> & SVGFETileElementBuilder;

interface SVGFETurbulenceElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const feTurbulence = () =>
  reactive(
    document.createElement("feTurbulence") as unknown as SVGFETurbulenceElement,
  ) as ReactiveElement<SVGFETurbulenceElement> & SVGFETurbulenceElementBuilder;

interface SVGFilterElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const filter = () =>
  reactive(
    document.createElement("filter") as unknown as SVGFilterElement,
  ) as ReactiveElement<SVGFilterElement> & SVGFilterElementBuilder;

interface SVGForeignObjectElementBuilder extends SVGGraphicsElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const foreignObject = () =>
  reactive(
    document.createElement(
      "foreignObject",
    ) as unknown as SVGForeignObjectElement,
  ) as ReactiveElement<SVGForeignObjectElement> &
    SVGForeignObjectElementBuilder;

interface SVGGElementBuilder extends SVGGraphicsElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const g = () =>
  reactive(
    document.createElement("g") as unknown as SVGGElement,
  ) as ReactiveElement<SVGGElement> & SVGGElementBuilder;

interface SVGImageElementBuilder extends SVGGraphicsElementBuilder {
  crossOrigin(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const image = () =>
  reactive(
    document.createElement("image") as unknown as SVGImageElement,
  ) as ReactiveElement<SVGImageElement> & SVGImageElementBuilder;

interface SVGLineElementBuilder {}

export const line = () =>
  reactive(
    document.createElement("line") as unknown as SVGLineElement,
  ) as ReactiveElement<SVGLineElement> & SVGLineElementBuilder;

interface SVGLinearGradientElementBuilder {}

export const linearGradient = () =>
  reactive(
    document.createElement(
      "linearGradient",
    ) as unknown as SVGLinearGradientElement,
  ) as ReactiveElement<SVGLinearGradientElement> &
    SVGLinearGradientElementBuilder;

interface SVGMarkerElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const marker = () =>
  reactive(
    document.createElement("marker") as unknown as SVGMarkerElement,
  ) as ReactiveElement<SVGMarkerElement> & SVGMarkerElementBuilder;

interface SVGMaskElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const mask = () =>
  reactive(
    document.createElement("mask") as unknown as SVGMaskElement,
  ) as ReactiveElement<SVGMaskElement> & SVGMaskElementBuilder;

interface SVGMetadataElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const metadata = () =>
  reactive(
    document.createElement("metadata") as unknown as SVGMetadataElement,
  ) as ReactiveElement<SVGMetadataElement> & SVGMetadataElementBuilder;

interface SVGMPathElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const mpath = () =>
  reactive(
    document.createElement("mpath") as unknown as SVGMPathElement,
  ) as ReactiveElement<SVGMPathElement> & SVGMPathElementBuilder;

interface SVGPathElementBuilder {}

export const path = () =>
  reactive(
    document.createElement("path") as unknown as SVGPathElement,
  ) as ReactiveElement<SVGPathElement> & SVGPathElementBuilder;

interface SVGPatternElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const pattern = () =>
  reactive(
    document.createElement("pattern") as unknown as SVGPatternElement,
  ) as ReactiveElement<SVGPatternElement> & SVGPatternElementBuilder;

interface SVGPolygonElementBuilder {}

export const polygon = () =>
  reactive(
    document.createElement("polygon") as unknown as SVGPolygonElement,
  ) as ReactiveElement<SVGPolygonElement> & SVGPolygonElementBuilder;

interface SVGPolylineElementBuilder {}

export const polyline = () =>
  reactive(
    document.createElement("polyline") as unknown as SVGPolylineElement,
  ) as ReactiveElement<SVGPolylineElement> & SVGPolylineElementBuilder;

interface SVGRadialGradientElementBuilder {}

export const radialGradient = () =>
  reactive(
    document.createElement(
      "radialGradient",
    ) as unknown as SVGRadialGradientElement,
  ) as ReactiveElement<SVGRadialGradientElement> &
    SVGRadialGradientElementBuilder;

interface SVGRectElementBuilder {}

export const rect = () =>
  reactive(
    document.createElement("rect") as unknown as SVGRectElement,
  ) as ReactiveElement<SVGRectElement> & SVGRectElementBuilder;

interface SVGScriptElementBuilder extends SVGElementBuilder {
  type(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

interface SVGSetElementBuilder {}

export const set = () =>
  reactive(
    document.createElement("set") as unknown as SVGSetElement,
  ) as ReactiveElement<SVGSetElement> & SVGSetElementBuilder;

interface SVGStopElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const stop = () =>
  reactive(
    document.createElement("stop") as unknown as SVGStopElement,
  ) as ReactiveElement<SVGStopElement> & SVGStopElementBuilder;

interface SVGStyleElementBuilder extends SVGElementBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  media(value: ReactiveValue<string>): this;
  title(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

interface SVGSVGElementBuilder extends SVGGraphicsElementBuilder {
  currentScale(value: ReactiveValue<number>): this;
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const svg = () =>
  reactive(
    document.createElement("svg") as unknown as SVGSVGElement,
  ) as ReactiveElement<SVGSVGElement> & SVGSVGElementBuilder;

interface SVGSwitchElementBuilder extends SVGGraphicsElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const svgSwitch = () =>
  reactive(
    document.createElement("switch") as unknown as SVGSwitchElement,
  ) as ReactiveElement<SVGSwitchElement> & SVGSwitchElementBuilder;

interface SVGSymbolElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const symbol = () =>
  reactive(
    document.createElement("symbol") as unknown as SVGSymbolElement,
  ) as ReactiveElement<SVGSymbolElement> & SVGSymbolElementBuilder;

interface SVGTextElementBuilder {}

export const text = () =>
  reactive(
    document.createElement("text") as unknown as SVGTextElement,
  ) as ReactiveElement<SVGTextElement> & SVGTextElementBuilder;

interface SVGTextPathElementBuilder {}

export const textPath = () =>
  reactive(
    document.createElement("textPath") as unknown as SVGTextPathElement,
  ) as ReactiveElement<SVGTextPathElement> & SVGTextPathElementBuilder;

interface SVGTitleElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

interface SVGTSpanElementBuilder {}

export const tspan = () =>
  reactive(
    document.createElement("tspan") as unknown as SVGTSpanElement,
  ) as ReactiveElement<SVGTSpanElement> & SVGTSpanElementBuilder;

interface SVGUseElementBuilder extends SVGGraphicsElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const use = () =>
  reactive(
    document.createElement("use") as unknown as SVGUseElement,
  ) as ReactiveElement<SVGUseElement> & SVGUseElementBuilder;

interface SVGViewElementBuilder extends SVGElementBuilder {
  classList(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
  style(value: ReactiveValue<string>): this;
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

export const view = () =>
  reactive(
    document.createElement("view") as unknown as SVGViewElement,
  ) as ReactiveElement<SVGViewElement> & SVGViewElementBuilder;

interface MathMLElementBuilder extends ElementBuilder {
  classList(value: ReactiveValue<string>): this;
  className(value: ReactiveValue<string>): this;
  id(value: ReactiveValue<string>): this;
  innerHTML(value: ReactiveValue<string>): this;
  outerHTML(value: ReactiveValue<string>): this;
  part(value: ReactiveValue<string>): this;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(value: ReactiveValue<number>): this;
  slot(value: ReactiveValue<string>): this;
  textContent(value: ReactiveValue<string>): this;
  nodeValue(value: ReactiveValue<string>): this;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(value: ReactiveValue<string>): this;
  role(value: ReactiveValue<string>): this;
}

export const annotation = () =>
  reactive(
    document.createElement("annotation") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const annotationXml = () =>
  reactive(
    document.createElement("annotation-xml") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const maction = () =>
  reactive(
    document.createElement("maction") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const math = () =>
  reactive(
    document.createElement("math") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const merror = () =>
  reactive(
    document.createElement("merror") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mfrac = () =>
  reactive(
    document.createElement("mfrac") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mi = () =>
  reactive(
    document.createElement("mi") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mmultiscripts = () =>
  reactive(
    document.createElement("mmultiscripts") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mn = () =>
  reactive(
    document.createElement("mn") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mo = () =>
  reactive(
    document.createElement("mo") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mover = () =>
  reactive(
    document.createElement("mover") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mpadded = () =>
  reactive(
    document.createElement("mpadded") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mphantom = () =>
  reactive(
    document.createElement("mphantom") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mprescripts = () =>
  reactive(
    document.createElement("mprescripts") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mroot = () =>
  reactive(
    document.createElement("mroot") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mrow = () =>
  reactive(
    document.createElement("mrow") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const ms = () =>
  reactive(
    document.createElement("ms") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mspace = () =>
  reactive(
    document.createElement("mspace") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const msqrt = () =>
  reactive(
    document.createElement("msqrt") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mstyle = () =>
  reactive(
    document.createElement("mstyle") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const msub = () =>
  reactive(
    document.createElement("msub") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const msubsup = () =>
  reactive(
    document.createElement("msubsup") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const msup = () =>
  reactive(
    document.createElement("msup") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mtable = () =>
  reactive(
    document.createElement("mtable") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mtd = () =>
  reactive(
    document.createElement("mtd") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mtext = () =>
  reactive(
    document.createElement("mtext") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const mtr = () =>
  reactive(
    document.createElement("mtr") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const munder = () =>
  reactive(
    document.createElement("munder") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const munderover = () =>
  reactive(
    document.createElement("munderover") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;

export const semantics = () =>
  reactive(
    document.createElement("semantics") as unknown as MathMLElement,
  ) as ReactiveElement<MathMLElement> & MathMLElementBuilder;
