// Renders the artwork of the portfolio PDF into public/images and writes
// data/assets.json (image paths and pixel sizes) for the site.
//
// Usage: npm run extract-assets -- "<path-to-portfolio.pdf>"
//
// Rects are in PDF points (page = 1440 x 810). `text: false` renders the region
// with all text removed because the website re-creates that copy in HTML.
import fs from "fs";
import path from "path";
import { openPdf, stripText, renderRegion } from "./pdf-render.mjs";

const src = process.argv[2];
if (!src) throw new Error('Pass the PDF path: npm run extract-assets -- "file.pdf"');

const OUT_DIR = "public/images";
const DATA_FILE = "data/assets.json";

const CONTENTS_PANELS = [
  [204, 227, 482, 641],
  [460, 227, 738, 641],
  [706, 227, 984, 641],
  [960, 227, 1238, 641],
];

const ASSETS = [
  // 1 — cover (the "Portfolio" lettering is part of the artwork)
  { name: "cover", page: 1, rect: [0, 0, 1440, 810], scale: 2, text: true },
  { name: "cover-mobile", page: 1, rect: [190, 40, 1250, 770], scale: 1.4, text: true },
  // 2 — profile
  { name: "profile-photo", page: 2, rect: [132, 86, 372, 364], scale: 2.5 },
  { name: "software-icons", page: 2, rect: [986, 164, 1296, 214], scale: 3, png: true },
  // `erase` paints over the contact icons that overlap the star (the site draws its own).
  { name: "star", page: 2, rect: [0, 650, 185, 810], scale: 2, png: true, erase: [[132, 650, 160, 726]] },
  { name: "splash", page: 2, rect: [1280, 0, 1440, 810], scale: 2, png: true },
  // 3 — contents panels
  ...CONTENTS_PANELS.map((rect, i) => ({ name: `contents-${i + 1}`, page: 3, rect, scale: 2.2 })),
  // Flame in Bloom
  { name: "flame-moodboard", page: 4, rect: [420, 75, 1370, 745], scale: 1.8, text: true },
  { name: "flame-sketches", page: 5, rect: [0, 0, 1440, 810], scale: 2 },
  { name: "flame-lineup", page: 6, rect: [222, 52, 1218, 758], scale: 1.8 },
  // Endless Rhythm
  { name: "rhythm-moodboard", page: 7, rect: [405, 65, 1370, 725], scale: 1.8, text: true },
  { name: "rhythm-sketches", page: 8, rect: [0, 0, 1440, 810], scale: 2 },
  { name: "rhythm-lineup", page: 9, rect: [258, 52, 1222, 758], scale: 1.8 },
  // Plumage
  { name: "plumage-moodboard", page: 10, rect: [405, 60, 1370, 755], scale: 1.8, text: true },
  { name: "plumage-lineup", page: 11, rect: [253, 86, 1213, 748], scale: 1.8 },
  // Tech pack
  { name: "techpack-illustration", page: 12, rect: [160, 196, 466, 725], scale: 2.5 },
  { name: "techpack-detail-1", page: 12, rect: [1077, 312, 1186, 384], scale: 3 },
  { name: "techpack-detail-2", page: 12, rect: [1202, 312, 1280, 384], scale: 3 },
  { name: "techpack-detail-3", page: 12, rect: [1077, 401, 1186, 524], scale: 3 },
  { name: "techpack-detail-4", page: 12, rect: [1203, 401, 1292, 548], scale: 3 },
  { name: "techpack-detail-5", page: 12, rect: [1077, 542, 1187, 685], scale: 3 },
  // Look book
  { name: "lookbook-1", page: 13, rect: [183, 179, 443, 729], scale: 2.4 },
  { name: "lookbook-2", page: 13, rect: [457, 81, 690, 729], scale: 2.4 },
  { name: "lookbook-3", page: 13, rect: [705, 150, 936, 729], scale: 2.4 },
  { name: "lookbook-4", page: 13, rect: [950, 81, 1246, 729], scale: 2.4 },
];

const BG = [250, 249, 245];

// Fills rects (PDF points) of a rendered region with the page background.
function erase(pix, region, rects, scale) {
  const px = pix.getPixels();
  const w = pix.getWidth();
  const n = pix.getNumberOfComponents();
  for (const [x0, y0, x1, y1] of rects) {
    for (let y = Math.round((y0 - region[1]) * scale); y < Math.round((y1 - region[1]) * scale); y++) {
      for (let x = Math.round((x0 - region[0]) * scale); x < Math.round((x1 - region[0]) * scale); x++) {
        if (x < 0 || y < 0 || x >= w || y >= pix.getHeight()) continue;
        px.set(BG, (y * w + x) * n);
      }
    }
  }
}

const withText = openPdf(src);
const textless = openPdf(src);
for (let i = 0; i < textless.countPages(); i++) stripText(textless, i);

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });

const images = {};
for (const a of ASSETS) {
  const doc = a.text ? withText : textless;
  const pix = renderRegion(doc, a.page - 1, a.rect, a.scale);
  if (a.erase) erase(pix, a.rect, a.erase, a.scale);
  const file = `${a.name}.${a.png ? "png" : "jpg"}`;
  fs.writeFileSync(path.join(OUT_DIR, file), a.png ? pix.asPNG() : pix.asJPEG(86));
  images[a.name] = { src: `/images/${file}`, width: pix.getWidth(), height: pix.getHeight() };
  console.log(`${file.padEnd(28)} ${pix.getWidth()}x${pix.getHeight()}`);
}

const data = { images };
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n");
console.log(`wrote ${DATA_FILE}`);
