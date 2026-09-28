import { at } from "@/lib/asset";
import { contents } from "@/data/portfolio";
import { Img } from "./Img";
import styles from "./Contents.module.css";

// Left edge of each slanted panel on the PDF page (points).
const PANEL_X = [204, 460, 706, 960];

export default function Contents() {
  return (
    <section id="contents" className={`slide ${styles.contents}`} data-reveal aria-labelledby="contents-title">
      <h2 id="contents-title" className={`abs ${styles.title}`} style={at(800, 72)}>
        Contents
      </h2>

      <ol className={styles.list}>
        {contents.map((item, i) => {
          const Tag = item.href ? "a" : "div";
          return (
            <li key={item.no} className={`abs ${styles.item}`} style={at(PANEL_X[i], 227, 278)}>
              <Tag href={item.href} className={styles.link}>
                <span className={styles.panel}>
                  <Img name={`contents-${i + 1}`} alt="" />
                </span>
                <span className={styles.no}>{item.no}</span>
                <span className={styles.name}>{item.title}</span>
              </Tag>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
