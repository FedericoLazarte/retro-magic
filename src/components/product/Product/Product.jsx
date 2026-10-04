import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({
  id,
  name,
  img,
  alternativeText,
  description,
  price,
  children,
}) {
  return (
    <article className={styles.card}>
      <Link to={`/details/${id}`}>
        <img src={img} alt={alternativeText} className={styles.img} />
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.price}>${price}</p>
      {children}
    </article>
  );
}

export default Product;
