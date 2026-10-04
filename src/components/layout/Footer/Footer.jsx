import styles from "./Footer.module.css";
import TeamContainer from "../../team/TeamContainer/TeamContainer";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>&copy; Retro Magic - 2026</p>
      <TeamContainer title="Nuestro equipo de desarrolladores" />
    </footer>
  );
}

export default Footer;
