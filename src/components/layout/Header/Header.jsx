import Logo from "../../ui/Logo/Logo";
import Nav from "../Nav/Nav";
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
