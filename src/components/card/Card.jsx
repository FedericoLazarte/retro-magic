import Button from "../button/Button";
import styles from "./Card.module.css";

function Card({
  name,
  img,
  alternativeText,
  description,
  price,
  onAddToCart,
  content,
}) {
  return (
    <article className={styles.card}>
      <img src={img} alt={alternativeText} className={styles.img} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.price}>${price}</p>
      <Button onClick={() => onAddToCart(name)}>{content}</Button>
    </article>
  );
}

export default Card;
