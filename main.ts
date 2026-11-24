// Last Text at One Percent — entry program (node22).
// Writes the phone's final text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Battery 1%. I kept your draft to Dan since 2:14 am. It just says 'u up'. I'm sending it now. Good luck.";

// The gate only accepts 1-200 characters of real text, so refuse to emit
// anything outside that range instead of writing an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
