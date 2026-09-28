import { at } from "@/lib/asset";
import { profile } from "@/data/portfolio";
import { Img } from "./Img";
import styles from "./About.module.css";

const icons = {
  pin: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.4 7H3.9l.1 1.2 8 5.4 8-5.4V7h-.4z",
  instagram:
    "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm4.5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.3 5.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d={icons[name]} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export default function About() {
  const { contact } = profile;
  return (
    <section id="about" className={`slide ${styles.about}`} data-reveal aria-labelledby="about-name">
      {/* Decorations first so they sit behind the text. */}
      <Img name="star" alt="" className={`abs ${styles.star}`} style={at(0, 650, 185)} />
      <Img name="splash" alt="" className={`abs ${styles.splash}`} style={at(1280, 0, 160)} />

      <Img name="profile-photo" alt="Portrait of Veena" className={`abs ${styles.photo}`} style={at(132, 86, 240)} />

      <div className={`abs ${styles.intro}`} style={at(392, 79, 260)}>
        <h2 id="about-name" className={styles.name}>
          {profile.name}
        </h2>
        <p>{profile.role}</p>
      </div>

      <div className={`abs ${styles.block}`} style={at(137, 409, 334)}>
        <h3>About me</h3>
        <p className={styles.justify}>{profile.about}</p>
      </div>

      <ul className={`abs ${styles.contact}`} style={at(137, 664, 260)}>
        <li>
          <Icon name="pin" />
          {contact.location}
        </li>
        <li>
          <Icon name="mail" />
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <Icon name="instagram" />
          <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer">
            Instagram: @{contact.instagram}
          </a>
        </li>
      </ul>

      <div className={`abs ${styles.block}`} style={at(572, 212, 320)}>
        <h3>Education</h3>
        {profile.education.map((e) => (
          <p key={e.title} className={styles.entry}>
            {e.title}
            <br />
            {e.place}
          </p>
        ))}
      </div>

      <div className={`abs ${styles.block}`} style={at(572, 376, 317)}>
        <h3>Projects</h3>
        {profile.projects.map((p) => (
          <div key={p.title} className={styles.project}>
            <h4>{p.title}</h4>
            {p.lines.map((line) => (
              <p key={line} className={styles.justify}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className={`abs ${styles.block}`} style={at(989, 117, 310)}>
        <h3>Software skills</h3>
        <Img name="software-icons" alt={profile.software.join(", ")} className={styles.software} />
      </div>

      <div className={`abs ${styles.block}`} style={at(989, 247, 300)}>
        <h3>Skills</h3>
        <ul className={styles.list}>
          {profile.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className={`abs ${styles.block}`} style={at(989, 559, 300)}>
        <h3>Soft skills</h3>
        <ul className={styles.list}>
          {profile.softSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}
