import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useCart } from "../../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  const { getCartQuantity } = useCart();
  const totalCards = getCartQuantity();

  const getClassName = ({ isActive }) => {
    const classes = [styles.link];

    if (isActive) {
      classes.push(styles.active);
    }

    return classes.join(" ");
  };

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={getClassName}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getClassName}>
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={getClassName}>
            <FaShoppingCart/>{" "}
            {totalCards > 0 && (
              <span className={styles.count}>{totalCards}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
