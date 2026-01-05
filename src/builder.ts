import type { ReactiveValue } from "./types";
export interface HTMLElementBuilder {
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

export interface HTMLHyperlinkElementUtilsBuilder {
  hash(value: ReactiveValue<string>): this;
  host(value: ReactiveValue<string>): this;
  hostname(value: ReactiveValue<string>): this;
  href(value: ReactiveValue<string>): this;
  password(value: ReactiveValue<string>): this;
  pathname(value: ReactiveValue<string>): this;
  port(value: ReactiveValue<string>): this;
  protocol(value: ReactiveValue<string>): this;
  search(value: ReactiveValue<string>): this;
  username(value: ReactiveValue<string>): this;
}

export interface HTMLAnchorElementBuilder extends HTMLElementBuilder, HTMLHyperlinkElementUtilsBuilder {
  charset(value: ReactiveValue<string>): this;
  coords(value: ReactiveValue<string>): this;
  download(value: ReactiveValue<string>): this;
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
}

export interface HTMLAreaElementBuilder extends HTMLElementBuilder, HTMLHyperlinkElementUtilsBuilder {
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
}

export interface HTMLMediaElementBuilder extends HTMLElementBuilder {
  autoplay(value: ReactiveValue<boolean>): this;
  controls(value: ReactiveValue<boolean>): this;
  crossOrigin(value: ReactiveValue<string>): this;
  currentTime(value: ReactiveValue<number>): this;
  defaultMuted(value: ReactiveValue<boolean>): this;
  defaultPlaybackRate(value: ReactiveValue<number>): this;
  disableRemotePlayback(value: ReactiveValue<boolean>): this;
  loop(value: ReactiveValue<boolean>): this;
  muted(value: ReactiveValue<boolean>): this;
  playbackRate(value: ReactiveValue<number>): this;
  preload(value: ReactiveValue<"" | "none" | "metadata" | "auto">): this;
  preservesPitch(value: ReactiveValue<boolean>): this;
  src(value: ReactiveValue<string>): this;
  srcObject(value: ReactiveValue<MediaProvider>): this;
  volume(value: ReactiveValue<number>): this;
}

export interface HTMLAudioElementBuilder extends HTMLMediaElementBuilder {
}

export interface HTMLBaseElementBuilder extends HTMLElementBuilder {
  href(value: ReactiveValue<string>): this;
  target(value: ReactiveValue<string>): this;
}

export interface HTMLQuoteElementBuilder extends HTMLElementBuilder {
  cite(value: ReactiveValue<string>): this;
}

export interface WindowEventHandlersBuilder {
}

export interface HTMLBodyElementBuilder extends HTMLElementBuilder, WindowEventHandlersBuilder {
  aLink(value: ReactiveValue<string>): this;
  background(value: ReactiveValue<string>): this;
  bgColor(value: ReactiveValue<string>): this;
  link(value: ReactiveValue<string>): this;
  text(value: ReactiveValue<string>): this;
  vLink(value: ReactiveValue<string>): this;
}

export interface HTMLBRElementBuilder extends HTMLElementBuilder {
  clear(value: ReactiveValue<string>): this;
}

export interface PopoverInvokerElementBuilder {
  popoverTargetAction(value: ReactiveValue<string>): this;
  popoverTargetElement(value: ReactiveValue<Element>): this;
}

export interface HTMLButtonElementBuilder extends HTMLElementBuilder, PopoverInvokerElementBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  formAction(value: ReactiveValue<string>): this;
  formEnctype(value: ReactiveValue<string>): this;
  formMethod(value: ReactiveValue<string>): this;
  formNoValidate(value: ReactiveValue<boolean>): this;
  formTarget(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<"submit" | "reset" | "button">): this;
  value(value: ReactiveValue<string>): this;
}

export interface HTMLCanvasElementBuilder extends HTMLElementBuilder {
  height(value: ReactiveValue<number>): this;
  width(value: ReactiveValue<number>): this;
}

export interface HTMLTableCaptionElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
}

export interface HTMLTableColElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  ch(value: ReactiveValue<string>): this;
  chOff(value: ReactiveValue<string>): this;
  span(value: ReactiveValue<number>): this;
  vAlign(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
}

export interface HTMLDataElementBuilder extends HTMLElementBuilder {
  value(value: ReactiveValue<string>): this;
}

export interface HTMLDataListElementBuilder extends HTMLElementBuilder {
}

export interface HTMLModElementBuilder extends HTMLElementBuilder {
  cite(value: ReactiveValue<string>): this;
  dateTime(value: ReactiveValue<string>): this;
}

export interface HTMLDetailsElementBuilder extends HTMLElementBuilder {
  name(value: ReactiveValue<string>): this;
  open(value: ReactiveValue<boolean>): this;
}

export interface HTMLDialogElementBuilder extends HTMLElementBuilder {
  open(value: ReactiveValue<boolean>): this;
  returnValue(value: ReactiveValue<string>): this;
}

export interface HTMLDivElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
}

export interface HTMLDListElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
}

export interface HTMLEmbedElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  height(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
}

export interface HTMLFieldSetElementBuilder extends HTMLElementBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  name(value: ReactiveValue<string>): this;
}

export interface HTMLFormElementBuilder extends HTMLElementBuilder {
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
}

export interface HTMLHeadingElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
}

export interface HTMLHeadElementBuilder extends HTMLElementBuilder {
}

export interface HTMLHRElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  color(value: ReactiveValue<string>): this;
  noShade(value: ReactiveValue<boolean>): this;
  size(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<string>): this;
}

export interface HTMLHtmlElementBuilder extends HTMLElementBuilder {
  version(value: ReactiveValue<string>): this;
}

export interface HTMLIFrameElementBuilder extends HTMLElementBuilder {
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
}

export interface HTMLImageElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  alt(value: ReactiveValue<string>): this;
  border(value: ReactiveValue<string>): this;
  crossOrigin(value: ReactiveValue<string>): this;
  decoding(value: ReactiveValue<"auto" | "async" | "sync">): this;
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
}

export interface HTMLInputElementBuilder extends HTMLElementBuilder, PopoverInvokerElementBuilder {
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
  selectionDirection(value: ReactiveValue<"none" | "forward" | "backward">): this;
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
}

export interface HTMLLabelElementBuilder extends HTMLElementBuilder {
  htmlFor(value: ReactiveValue<string>): this;
}

export interface HTMLLegendElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
}

export interface HTMLLIElementBuilder extends HTMLElementBuilder {
  type(value: ReactiveValue<string>): this;
  value(value: ReactiveValue<number>): this;
}

export interface LinkStyleBuilder {
}

export interface HTMLLinkElementBuilder extends HTMLElementBuilder, LinkStyleBuilder {
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
}

export interface HTMLMapElementBuilder extends HTMLElementBuilder {
  name(value: ReactiveValue<string>): this;
}

export interface HTMLMenuElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
}

export interface HTMLMetaElementBuilder extends HTMLElementBuilder {
  content(value: ReactiveValue<string>): this;
  httpEquiv(value: ReactiveValue<string>): this;
  media(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  scheme(value: ReactiveValue<string>): this;
}

export interface HTMLMeterElementBuilder extends HTMLElementBuilder {
  high(value: ReactiveValue<number>): this;
  low(value: ReactiveValue<number>): this;
  max(value: ReactiveValue<number>): this;
  min(value: ReactiveValue<number>): this;
  optimum(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<number>): this;
}

export interface HTMLObjectElementBuilder extends HTMLElementBuilder {
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
}

export interface HTMLOListElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
  reversed(value: ReactiveValue<boolean>): this;
  start(value: ReactiveValue<number>): this;
  type(value: ReactiveValue<string>): this;
}

export interface HTMLOptGroupElementBuilder extends HTMLElementBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  label(value: ReactiveValue<string>): this;
}

export interface HTMLOptionElementBuilder extends HTMLElementBuilder {
  defaultSelected(value: ReactiveValue<boolean>): this;
  disabled(value: ReactiveValue<boolean>): this;
  label(value: ReactiveValue<string>): this;
  selected(value: ReactiveValue<boolean>): this;
  text(value: ReactiveValue<string>): this;
  value(value: ReactiveValue<string>): this;
}

export interface HTMLOutputElementBuilder extends HTMLElementBuilder {
  defaultValue(value: ReactiveValue<string>): this;
  htmlFor(value: ReactiveValue<string>): this;
  name(value: ReactiveValue<string>): this;
  value(value: ReactiveValue<string>): this;
}

export interface HTMLParagraphElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
}

export interface HTMLPictureElementBuilder extends HTMLElementBuilder {
}

export interface HTMLPreElementBuilder extends HTMLElementBuilder {
  width(value: ReactiveValue<number>): this;
}

export interface HTMLProgressElementBuilder extends HTMLElementBuilder {
  max(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<number>): this;
}

export interface HTMLScriptElementBuilder extends HTMLElementBuilder {
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
}

export interface HTMLSelectElementBuilder extends HTMLElementBuilder {
  autocomplete(value: ReactiveValue<AutoFill>): this;
  disabled(value: ReactiveValue<boolean>): this;
  length(value: ReactiveValue<number>): this;
  multiple(value: ReactiveValue<boolean>): this;
  name(value: ReactiveValue<string>): this;
  required(value: ReactiveValue<boolean>): this;
  selectedIndex(value: ReactiveValue<number>): this;
  size(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<string>): this;
}

export interface HTMLSlotElementBuilder extends HTMLElementBuilder {
  name(value: ReactiveValue<string>): this;
}

export interface HTMLSourceElementBuilder extends HTMLElementBuilder {
  height(value: ReactiveValue<number>): this;
  media(value: ReactiveValue<string>): this;
  sizes(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  srcset(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<number>): this;
}

export interface HTMLSpanElementBuilder extends HTMLElementBuilder {
}

export interface HTMLStyleElementBuilder extends HTMLElementBuilder, LinkStyleBuilder {
  blocking(value: ReactiveValue<string>): this;
  disabled(value: ReactiveValue<boolean>): this;
  media(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
}

export interface HTMLTableElementBuilder extends HTMLElementBuilder {
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
}

export interface HTMLTableSectionElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  ch(value: ReactiveValue<string>): this;
  chOff(value: ReactiveValue<string>): this;
  vAlign(value: ReactiveValue<string>): this;
}

export interface HTMLTableCellElementBuilder extends HTMLElementBuilder {
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
}

export interface HTMLTemplateElementBuilder extends HTMLElementBuilder {
  shadowRootClonable(value: ReactiveValue<boolean>): this;
  shadowRootDelegatesFocus(value: ReactiveValue<boolean>): this;
  shadowRootMode(value: ReactiveValue<string>): this;
  shadowRootSerializable(value: ReactiveValue<boolean>): this;
}

export interface HTMLTextAreaElementBuilder extends HTMLElementBuilder {
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
  selectionDirection(value: ReactiveValue<"none" | "forward" | "backward">): this;
  selectionEnd(value: ReactiveValue<number>): this;
  selectionStart(value: ReactiveValue<number>): this;
  value(value: ReactiveValue<string>): this;
  wrap(value: ReactiveValue<string>): this;
}

export interface HTMLTimeElementBuilder extends HTMLElementBuilder {
  dateTime(value: ReactiveValue<string>): this;
}

export interface HTMLTitleElementBuilder extends HTMLElementBuilder {
  text(value: ReactiveValue<string>): this;
}

export interface HTMLTableRowElementBuilder extends HTMLElementBuilder {
  align(value: ReactiveValue<string>): this;
  bgColor(value: ReactiveValue<string>): this;
  ch(value: ReactiveValue<string>): this;
  chOff(value: ReactiveValue<string>): this;
  vAlign(value: ReactiveValue<string>): this;
}

export interface HTMLTrackElementBuilder extends HTMLElementBuilder {
  default(value: ReactiveValue<boolean>): this;
  kind(value: ReactiveValue<string>): this;
  label(value: ReactiveValue<string>): this;
  src(value: ReactiveValue<string>): this;
  srclang(value: ReactiveValue<string>): this;
}

export interface HTMLUListElementBuilder extends HTMLElementBuilder {
  compact(value: ReactiveValue<boolean>): this;
  type(value: ReactiveValue<string>): this;
}

export interface HTMLVideoElementBuilder extends HTMLMediaElementBuilder {
  disablePictureInPicture(value: ReactiveValue<boolean>): this;
  height(value: ReactiveValue<number>): this;
  playsInline(value: ReactiveValue<boolean>): this;
  poster(value: ReactiveValue<string>): this;
  width(value: ReactiveValue<number>): this;
}

export interface SVGGraphicsElementBuilder {
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

export interface SVGURIReferenceBuilder {
}

export interface SVGAElementBuilder extends SVGGraphicsElementBuilder, SVGURIReferenceBuilder {
  rel(value: ReactiveValue<string>): this;
  relList(value: ReactiveValue<string>): this;
}

export interface SVGElementBuilder {
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

export interface SVGTestsBuilder {
}

export interface SVGAnimationElementBuilder extends SVGElementBuilder, SVGTestsBuilder {
}

export interface SVGAnimateElementBuilder extends SVGAnimationElementBuilder {
}

export interface SVGAnimateMotionElementBuilder extends SVGAnimationElementBuilder {
}

export interface SVGAnimateTransformElementBuilder extends SVGAnimationElementBuilder {
}

export interface SVGGeometryElementBuilder extends SVGGraphicsElementBuilder {
}

export interface SVGCircleElementBuilder extends SVGGeometryElementBuilder {
}

export interface SVGClipPathElementBuilder extends SVGElementBuilder {
}

export interface SVGDefsElementBuilder extends SVGGraphicsElementBuilder {
}

export interface SVGDescElementBuilder extends SVGElementBuilder {
}

export interface SVGEllipseElementBuilder extends SVGGeometryElementBuilder {
}

export interface SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEBlendElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEColorMatrixElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEComponentTransferElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFECompositeElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEConvolveMatrixElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEDiffuseLightingElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEDisplacementMapElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEDistantLightElementBuilder extends SVGElementBuilder {
}

export interface SVGFEDropShadowElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEFloodElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGComponentTransferFunctionElementBuilder extends SVGElementBuilder {
}

export interface SVGFEFuncAElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

export interface SVGFEFuncBElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

export interface SVGFEFuncGElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

export interface SVGFEFuncRElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

export interface SVGFEGaussianBlurElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEImageElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder, SVGURIReferenceBuilder {
}

export interface SVGFEMergeElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEMergeNodeElementBuilder extends SVGElementBuilder {
}

export interface SVGFEMorphologyElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEOffsetElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFEPointLightElementBuilder extends SVGElementBuilder {
}

export interface SVGFESpecularLightingElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFESpotLightElementBuilder extends SVGElementBuilder {
}

export interface SVGFETileElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFETurbulenceElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

export interface SVGFilterElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
}

export interface SVGForeignObjectElementBuilder extends SVGGraphicsElementBuilder {
}

export interface SVGGElementBuilder extends SVGGraphicsElementBuilder {
}

export interface SVGImageElementBuilder extends SVGGraphicsElementBuilder, SVGURIReferenceBuilder {
  crossOrigin(value: ReactiveValue<string>): this;
}

export interface SVGLineElementBuilder extends SVGGeometryElementBuilder {
}

export interface SVGGradientElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
}

export interface SVGLinearGradientElementBuilder extends SVGGradientElementBuilder {
}

export interface SVGFitToViewBoxBuilder {
}

export interface SVGMarkerElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder {
}

export interface SVGMaskElementBuilder extends SVGElementBuilder {
}

export interface SVGMetadataElementBuilder extends SVGElementBuilder {
}

export interface SVGMPathElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
}

export interface SVGPathElementBuilder extends SVGGeometryElementBuilder {
}

export interface SVGPatternElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder, SVGURIReferenceBuilder {
}

export interface SVGAnimatedPointsBuilder {
}

export interface SVGPolygonElementBuilder extends SVGGeometryElementBuilder, SVGAnimatedPointsBuilder {
}

export interface SVGPolylineElementBuilder extends SVGGeometryElementBuilder, SVGAnimatedPointsBuilder {
}

export interface SVGRadialGradientElementBuilder extends SVGGradientElementBuilder {
}

export interface SVGRectElementBuilder extends SVGGeometryElementBuilder {
}

export interface SVGScriptElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
  type(value: ReactiveValue<string>): this;
}

export interface SVGSetElementBuilder extends SVGAnimationElementBuilder {
}

export interface SVGStopElementBuilder extends SVGElementBuilder {
}

export interface SVGStyleElementBuilder extends SVGElementBuilder, LinkStyleBuilder {
  disabled(value: ReactiveValue<boolean>): this;
  media(value: ReactiveValue<string>): this;
  title(value: ReactiveValue<string>): this;
  type(value: ReactiveValue<string>): this;
}

export interface SVGSVGElementBuilder extends SVGGraphicsElementBuilder, SVGFitToViewBoxBuilder, WindowEventHandlersBuilder {
  currentScale(value: ReactiveValue<number>): this;
}

export interface SVGSwitchElementBuilder extends SVGGraphicsElementBuilder {
}

export interface SVGSymbolElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder {
}

export interface SVGTextContentElementBuilder extends SVGGraphicsElementBuilder {
}

export interface SVGTextPositioningElementBuilder extends SVGTextContentElementBuilder {
}

export interface SVGTextElementBuilder extends SVGTextPositioningElementBuilder {
}

export interface SVGTextPathElementBuilder extends SVGTextContentElementBuilder, SVGURIReferenceBuilder {
}

export interface SVGTitleElementBuilder extends SVGElementBuilder {
}

export interface SVGTSpanElementBuilder extends SVGTextPositioningElementBuilder {
}

export interface SVGUseElementBuilder extends SVGGraphicsElementBuilder, SVGURIReferenceBuilder {
}

export interface SVGViewElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder {
}

export interface MathMLElementBuilder {
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
  autofocus(value: ReactiveValue<boolean>): this;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(value: ReactiveValue<number>): this;
}

