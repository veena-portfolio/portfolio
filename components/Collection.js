import { at } from "@/lib/asset";
import { Zoomable } from "./Img";
import styles from "./Collection.module.css";

function SwipeHint() {
  return (
    <p className="swipe-hint" aria-hidden="true">
      Swipe to explore →
    </p>
  );
}

export function Moodboard({ collection }) {
  const { id, title, accent, description, layout, moodboard } = collection;
  return (
    <section id={id} className={`slide ${styles.moodboard}`} style={{ "--accent": accent }} data-reveal aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={`abs ${styles.signature}`} style={at(...layout.title)}>
        {title}
      </h2>
      <p className={`abs ${styles.description}`} style={at(...layout.text)}>
        {description}
      </p>
      <Zoomable name={moodboard} alt={`${title} mood board and colour palette`} className={`abs ${styles.art}`} style={at(...layout.art)} />
    </section>
  );
}

export function Sketches({ collection }) {
  const { title, sketches } = collection;
  return (
    <section className={`slide ${styles.sketches}`} data-reveal aria-label={`${title} — form exploration`}>
      <h3 className={`abs ${styles.flourish}`} style={at(...sketches.title)}>
        Form Exploration
      </h3>
      <div className="abs scroller" style={at(0, 0, 1440)}>
        <Zoomable name={sketches.image} alt={`${title} — form exploration sketches`} />
      </div>
      <SwipeHint />
    </section>
  );
}

export function Lineup({ collection }) {
  const { title, accent, lineup } = collection;
  const [x, y, w] = lineup.rect;
  return (
    <section className={`slide ${styles.lineup}`} style={{ "--accent": accent }} data-reveal aria-label={`${title} — final lineup`}>
      <h3 className={`abs ${styles.signature}`} style={at(...lineup.title)}>
        Final lineup
      </h3>
      <div className="abs scroller" style={at(x, y, w)}>
        <Zoomable name={lineup.image} alt={`${title} — final lineup of four looks`} />
      </div>
      <SwipeHint />
    </section>
  );
}
