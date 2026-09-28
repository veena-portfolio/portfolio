import { at } from "@/lib/asset";
import { techPack as tp } from "@/data/portfolio";
import { Zoomable } from "./Img";
import styles from "./TechPack.module.css";

// Table cells of the second row: [label, value, x, width] in PDF points.
const INFO = [
  ["Style no", tp.styleNo, 82, 206],
  ["Category", tp.category, 288, 274],
  ["Season", tp.season, 562, 324],
  ["Date", tp.date, 886, 187],
  ["Designer", tp.designer, 1073, 285],
];

function List({ items, tight = false }) {
  return (
    <ul className={`${styles.bullets} ${tight ? styles.tight : ""}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TechPack() {
  return (
    <section id="tech-pack" className={`slide ${styles.techpack}`} data-reveal aria-labelledby="techpack-title">
      {/* Table frame and cells (the body cells are empty boxes on laptops). */}
      <div className={`abs ${styles.frame}`} style={at(82, 82, 1276, 645)} aria-hidden="true" />
      <div className={`abs ${styles.cell}`} style={at(82, 82, 258, 66)}>
        <h2 id="techpack-title" className={styles.title}>
          Tech pack
        </h2>
      </div>
      <div className={`abs ${styles.cell} ${styles.styleName}`} style={at(340, 82, 1018, 66)}>
        STYLE NAME : {tp.styleName}
      </div>
      <dl className={styles.info}>
        {INFO.map(([label, value, x, w]) => (
          <div key={label} className={`abs ${styles.cell}`} style={at(x, 148, w, 43)}>
            <dt>{label.toUpperCase()} :</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className={`abs ${styles.cell} ${styles.bodyCell}`} style={at(82, 191, 386, 536)} aria-hidden="true" />
      <div className={`abs ${styles.cell} ${styles.bodyCell}`} style={at(468, 191, 890, 536)} aria-hidden="true" />

      <h3 className={`abs ${styles.label} ${styles.illustrationLabel}`} style={at(91, 195, 130)}>
        Design illustration
      </h3>
      <Zoomable
        name="techpack-illustration"
        alt="Design illustration of the macramé evening dress, front and back"
        className={`abs ${styles.illustration}`}
        style={at(160, 196, 306)}
      />

      <div className={`abs ${styles.group}`} style={at(507, 257, 250)}>
        <h3 className={styles.label}>Description</h3>
        <p>{tp.description}</p>
      </div>
      <div className={`abs ${styles.group}`} style={at(507, 424, 250)}>
        <h3 className={styles.label}>Fabric</h3>
        <List items={tp.fabric} tight />
      </div>
      <div className={`abs ${styles.group}`} style={at(507, 585, 250)}>
        <h3 className={styles.label}>Trims</h3>
        <List items={tp.trims} tight />
      </div>
      <div className={`abs ${styles.group}`} style={at(799, 257, 205)}>
        <h3 className={styles.label}>
          Construction &amp;
          <br />
          technique
        </h3>
        <List items={tp.construction} />
      </div>

      <div className={styles.details}>
        <h3 className={`abs ${styles.label}`} style={at(1082, 257)}>
          Details
        </h3>
        <div className={styles.photos}>
          {tp.details.map(([name, x, y, w, h], i) => (
            <Zoomable key={name} name={name} alt={`Garment detail ${i + 1}`} className={`abs ${styles.photo}`} style={at(x, y, w, h)} />
          ))}
        </div>
      </div>
    </section>
  );
}
