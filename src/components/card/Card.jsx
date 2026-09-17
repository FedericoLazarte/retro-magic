import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Card.module.css";

function Card({
  id,
  name,
  img,
  alternativeText,
  description,
  price,
  onClick,
  content,
}) {
  return (
    <article className={styles.card}>
      <Link to={`/details/${id}`}>
        <img src={img} alt={alternativeText} className={styles.img} />
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.price}>${price}</p>
      <Button onClick={onClick}>{content}</Button>
    </article>
  );
}

export default Card;
