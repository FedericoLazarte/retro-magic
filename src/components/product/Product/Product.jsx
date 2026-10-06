import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ id, name, urlImg, description, price, children }) {
  return (
    <article className={styles.card}>
      <Link to={`/details/${id}`}>
        <img src={urlImg} alt={`Foto de ${name}`} className={styles.img} />
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.price}>${price}</p>
      {children}
    </article>
  );
}

export default Product;
