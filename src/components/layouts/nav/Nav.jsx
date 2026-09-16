import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.link}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/cart" className={styles.link}>
            Carrito
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
