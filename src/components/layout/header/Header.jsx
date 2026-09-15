import Logo from "../../logo/Logo";
import Nav from "../nav/Nav";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
