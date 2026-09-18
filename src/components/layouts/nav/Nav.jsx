import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { useCart } from "../../../context/CartContext";

function Nav() {
  const { getCartQuantity } = useCart();
  const totalCards = getCartQuantity();

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
            🛒{" "}
            {totalCards > 0 && (
              <span className={styles.count}>{totalCards}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
