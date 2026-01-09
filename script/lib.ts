export function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

const TAG_TRANSFORMS: Record<string, string> = {
  var: "mathVar",
  switch: "svgSwitch",
};

export function transformTagName(tag: string): string {
  return toCamelCase(TAG_TRANSFORMS[tag] || tag);
}
