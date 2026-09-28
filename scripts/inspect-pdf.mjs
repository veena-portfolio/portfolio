// Lists the images embedded on each page of the portfolio PDF with their
// on-page bounding boxes (PDF points, page is 1440x810).
// Usage: node scripts/inspect-pdf.mjs <path-to-pdf>
import * as mupdf from "mupdf";
import fs from "fs";

const src = process.argv[2];
if (!src) throw new Error("Pass the PDF path as the first argument");

const doc = mupdf.Document.openDocument(fs.readFileSync(src), "application/pdf");
for (let i = 0; i < doc.countPages(); i++) {
  const page = doc.loadPage(i);
  const rows = [];
  page.toStructuredText("preserve-images").walk({
    onImageBlock(bbox, _transform, image) {
      rows.push(`  ${bbox.map(Math.round).join(",")}  (${image.getWidth()}x${image.getHeight()})`);
    },
  });
  console.log(`page ${i + 1}: ${rows.length} images\n${rows.join("\n")}`);
}
