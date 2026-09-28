"use client";

import { useEffect, useState } from "react";
import styles from "./Effects.module.css";

// Page-wide behaviour: reveal-on-scroll for [data-reveal] sections and a
// lightbox for any button with data-zoom (set by <Zoomable>).
export default function Effects() {
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    const onClick = (e) => {
      const trigger = e.target.closest("[data-zoom]");
      if (trigger) setZoomed({ src: trigger.dataset.zoom, alt: trigger.getAttribute("aria-label") || "" });
    };
    document.addEventListener("click", onClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => e.key === "Escape" && setZoomed(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  if (!zoomed) return null;
  return (
    <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={zoomed.alt} onClick={() => setZoomed(null)}>
      <button className={styles.close} aria-label="Close" autoFocus>
        ×
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={zoomed.src} alt={zoomed.alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
