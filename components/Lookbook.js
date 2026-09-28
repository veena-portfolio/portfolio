import { at } from "@/lib/asset";
import { lookbook } from "@/data/portfolio";
import { Zoomable } from "./Img";
import styles from "./Lookbook.module.css";

const POSES = ["front", "side", "back", "seated"];

export default function Lookbook() {
  return (
    <section id="look-book" className={`slide ${styles.lookbook}`} data-reveal aria-labelledby="lookbook-title">
      <h2 id="lookbook-title" className={`abs ${styles.title}`} style={at(81, 71)}>
        Look book
      </h2>
      <div className={styles.grid}>
        {lookbook.map(([name, x, y, w, h], i) => (
          <Zoomable
            key={name}
            name={name}
            alt={`Look book — Plumage macramé evening dress, ${POSES[i]} view`}
            className={`abs ${styles.photo}`}
            style={at(x, y, w, h)}
          />
        ))}
      </div>
    </section>
  );
}
