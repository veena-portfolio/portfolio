import assets from "@/data/assets.json";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Returns { src, width, height } for an extracted image, with the GitHub Pages
// base path applied (plain <img> tags don't get it automatically).
export function image(name) {
  const img = assets.images[name];
  if (!img) throw new Error(`Unknown image "${name}" — run npm run extract-assets`);
  return { ...img, src: basePath + img.src };
}

// Positions an element on the 1440 x 810 slide grid of the original PDF
// (values in PDF points). Only applied on wide screens, see .abs in globals.css.
export function at(x, y, w, h) {
  const style = { "--x": x, "--y": y };
  if (w !== undefined) style["--w"] = w;
  if (h !== undefined) style["--h"] = h;
  return style;
}
