import { access, readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = new URL("../site/", import.meta.url);
const required = ["index.html", "shopping.html", "kb/index.html"];
const forbiddenShoppingText = [
  "underbust 65–70",
  "JP 65 = US 34",
  "Pepper — Signature All You Bra",
];

for (const path of required) {
  await access(new URL(path, root));
}

const shopping = await readFile(new URL("shopping.html", root), "utf8");
for (const phrase of forbiddenShoppingText) {
  if (shopping.includes(phrase)) {
    throw new Error(`shopping.html contains stale guidance: ${phrase}`);
  }
}
if (!shopping.includes("78.0 cm snug underbust") || !shopping.includes("AAA80")) {
  throw new Error("shopping.html is missing the corrected sizing baseline");
}

const allowed = new Set([".html", ".css", ".js", ".json", ".md", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"]);
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`symlinks are forbidden: ${relative(root.pathname, path)}`);
    if (entry.name.startsWith(".")) throw new Error(`hidden site entry is forbidden: ${entry.name}`);
    if (entry.isDirectory()) await walk(path);
    else if (!allowed.has(extname(entry.name).toLowerCase())) {
      throw new Error(`unsupported site extension: ${relative(root.pathname, path)}`);
    }
  }
}
await walk(root.pathname);
console.log("bra-research static site validation passed");
