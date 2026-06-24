import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const css = fs.readFileSync(
  path.join(root, "hubspot-design-manager/css/finding-winners-webinar.css"),
  "utf8",
);
const js = fs.readFileSync(
  path.join(root, "hubspot-design-manager/js/finding-winners-webinar.js"),
  "utf8",
);
let html = fs.readFileSync(
  path.join(root, "hubspot-design-manager/templates/finding-winners-webinar.html"),
  "utf8",
);

html = html
  .replace('lang="{{ html_lang }}" {{ html_lang_dir }}', 'lang="en"')
  .replace(
    "{% if page_meta.html_title %}<title>{{ page_meta.html_title }}</title>{% endif %}",
    "<title>Finding Winners: How I Built a $120M Position | Intersection Capital</title>",
  )
  .replace(
    '{% if page_meta.meta_description %}<meta name="description" content="{{ page_meta.meta_description }}" />{% endif %}',
    '<meta name="description" content="A live webinar from Intersection Capital on finding private-company winners, building conviction, and evaluating opportunities before they become obvious." />',
  )
  .replace(
    '<meta property="og:type" content="website" />',
    '<meta property="og:url" content="https://intersectioncapital.com/finding-winners-webinar" />\n  <meta property="og:type" content="website" />',
  )
  .replace(
    '<link rel="dns-prefetch" href="https://js-na2.hsforms.net" />',
    '<link rel="dns-prefetch" href="https://js-na2.hsforms.net" />\n  <link rel="dns-prefetch" href="https://js.hs-scripts.com" />',
  )
  .replace(
    '{{ require_css(get_asset_url("../css/finding-winners-webinar.css")) }}',
    `<style>\n${css}\n  </style>`,
  )
  .replace(
    '{{ require_js(get_asset_url("../js/finding-winners-webinar.js")) }}',
    `<script>\n${js}\n  </script>`,
  );

if (!html.includes("{{ standard_header_includes }}")) {
  throw new Error("Missing {{ standard_header_includes }}");
}
if (!html.includes("{{ standard_footer_includes }}")) {
  throw new Error("Missing {{ standard_footer_includes }}");
}

const out = path.join(root, "finding-winners-webinar.html");
fs.writeFileSync(out, html);
console.log(`Wrote ${out} (${html.split("\n").length} lines)`);
