import { profile } from "@/data/portfolio";
import styles from "./ThankYou.module.css";

export default function ThankYou() {
  const { contact } = profile;
  return (
    <footer id="contact" className={`slide ${styles.thanks}`} data-reveal>
      <h2 className={styles.title}>Thank You</h2>
      <nav className={styles.links} aria-label="Contact">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer">
          @{contact.instagram}
        </a>
      </nav>
      <p className={styles.copy}>
        © {new Date().getFullYear()} {profile.fullName} · {profile.role}
      </p>
    </footer>
  );
}
