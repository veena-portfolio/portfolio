/* eslint-disable @next/next/no-img-element -- static export, images are pre-sized */
import { image } from "@/lib/asset";

export function Img({ name, alt, className, style, eager = false }) {
  const { src, width, height } = image(name);
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

// An image that opens full-screen in the lightbox (handled by <Effects>).
export function Zoomable({ name, alt, className, style }) {
  return (
    <button type="button" className={`zoomable ${className ?? ""}`} style={style} data-zoom={image(name).src} aria-label={alt}>
      <Img name={name} alt={alt} />
    </button>
  );
}
