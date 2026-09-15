import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <a href="" className={styles.link}>
            Inicio
          </a>
        </li>
        <li>
          <a href="" className={styles.link}>
            Contacto
          </a>
        </li>
        <li>
          <a href="" className={styles.link}>
            Carrito
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
