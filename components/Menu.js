"use client";

import { useEffect, useState } from "react";
import styles from "./Menu.module.css";

const LINKS = [
  ["About", "#about"],
  ["Contents", "#contents"],
  ["Flame in Bloom", "#flame-in-bloom"],
  ["Endless Rhythm", "#endless-rhythm"],
  ["Plumage", "#plumage"],
  ["Tech Pack", "#tech-pack"],
  ["Look Book", "#look-book"],
  ["Contact", "#contact"],
];

// Floating menu button + full-screen index, so no fixed bar covers the slides.
export default function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <nav id="site-menu" className={`${styles.panel} ${open ? styles.panelOpen : ""}`} aria-hidden={!open} inert={!open}>
        <p className={styles.brand}>Veena s</p>
        <ol className={styles.links}>
          {LINKS.map(([label, href], i) => (
            <li key={href} style={{ "--i": i }}>
              <a href={href} onClick={() => setOpen(false)}>
                <span className={styles.no}>{String(i + 1).padStart(2, "0")}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
