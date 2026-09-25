import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link to="/" className={styles.logo}>
        RetroMagic
      </Link>
    </div>
  );
}

export default Logo;
