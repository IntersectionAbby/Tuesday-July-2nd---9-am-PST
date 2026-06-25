import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = path.join(
  root,
  "hubspot-design-manager/templates/finding-winners-webinar.html",
);
const out = path.join(root, "finding-winners-webinar.html");

const html = fs.readFileSync(source, "utf8");
fs.writeFileSync(out, html);

console.log(`Wrote ${out} (${html.split("\n").length} lines)`);
