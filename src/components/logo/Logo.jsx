import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <a href="" className={styles.logo}>
        RetroMagic
      </a>
    </div>
  );
}

export default Logo;
