import { defineConfig } from "tsdown";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  dts: true,
  entry: ["src/core.ts", "src/signals.ts", "src/dom.ts"],
  alias: {
    "@": resolve(__dirname, "src"),
  },
});
