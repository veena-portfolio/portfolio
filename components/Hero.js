/* eslint-disable @next/next/no-img-element */
import { image } from "@/lib/asset";
import styles from "./Hero.module.css";

export default function Hero() {
  const desktop = image("cover");
  const mobile = image("cover-mobile");
  return (
    <header id="top" className={`slide ${styles.hero}`}>
      <h1 className="sr-only">Veena S — Fashion and Apparel Design Portfolio</h1>
      <picture>
        <source media="(min-width: 1100px)" srcSet={desktop.src} width={desktop.width} height={desktop.height} />
        <img
          src={mobile.src}
          width={mobile.width}
          height={mobile.height}
          alt="Portfolio — Fashion and Apparel Design. Black and white portrait of Veena behind a blue wave ribbon."
          className={styles.cover}
          fetchPriority="high"
        />
      </picture>
      <a href="#about" className={styles.scroll} aria-label="Scroll to about">
        <span />
      </a>
    </header>
  );
}
