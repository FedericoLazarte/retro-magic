import wsppIcon from "../../../assets/whatsapp.png";
import instagramIcon from "../../../assets/instagram.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>&copy; Retro Magic - 2026</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="">
            <img src={instagramIcon} alt="" className={styles.img} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="">
            <img src={wsppIcon} alt="" className={styles.img} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
