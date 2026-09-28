// Shared helpers for rendering regions of the portfolio PDF.
import * as mupdf from "mupdf";
import fs from "fs";

export function openPdf(src) {
  return mupdf.Document.openDocument(fs.readFileSync(src), "application/pdf");
}

// Removes every text object (BT ... ET) from a content stream so artwork can be
// rendered without the copy that the website re-creates in HTML.
function stripTextFromStream(obj) {
  // latin1 keeps binary glyph codes (including NUL bytes) intact.
  const src = Buffer.from(obj.readStream().asUint8Array()).toString("latin1");
  const out = src.replace(/(^|\s)BT\s[\s\S]*?\sET(?=\s|$)/g, "$1");
  if (out !== src) obj.writeStream(Buffer.from(out, "latin1"));
}

function stripTextFromResources(resources, seen) {
  const xobjects = resources?.get("XObject");
  if (!xobjects || !xobjects.isDictionary()) return;
  xobjects.forEach((xobj) => {
    if (!xobj.isStream() || xobj.get("Subtype").toString() !== "/Form") return;
    const key = xobj.isIndirect() ? xobj.asIndirect() : xobj;
    if (seen.has(key)) return;
    seen.add(key);
    stripTextFromStream(xobj);
    stripTextFromResources(xobj.get("Resources"), seen);
  });
}

export function stripText(doc, pageIndex) {
  const pageObj = doc.loadPage(pageIndex).getObject();
  const contents = pageObj.get("Contents");
  if (contents.isArray()) contents.forEach((c) => stripTextFromStream(c));
  else stripTextFromStream(contents);
  stripTextFromResources(pageObj.get("Resources"), new Set());
}

// Renders rect [x0, y0, x1, y1] (PDF points) of a page at `scale` px per point.
export function renderRegion(doc, pageIndex, rect, scale) {
  const page = doc.loadPage(pageIndex);
  const [x0, y0, x1, y1] = rect;
  const matrix = mupdf.Matrix.concat(
    mupdf.Matrix.translate(-x0, -y0),
    mupdf.Matrix.scale(scale, scale)
  );
  const bbox = [0, 0, Math.round((x1 - x0) * scale), Math.round((y1 - y0) * scale)];
  const pix = new mupdf.Pixmap(mupdf.ColorSpace.DeviceRGB, bbox, false);
  pix.clear(255);
  const device = new mupdf.DrawDevice(mupdf.Matrix.identity, pix);
  page.run(device, matrix);
  device.close();
  return pix;
}
