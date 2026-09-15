import Nav from "../nav/Nav";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/*Provicional*/}
      <div>
        <a href="">RetroMagic</a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
