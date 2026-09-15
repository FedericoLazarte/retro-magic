import styles from "./Card.module.css";

function Card({ name, img, alternativeText, description, price }) {
  return (
    <article className={styles.card}>
      <img src={img} alt={alternativeText} className={styles.img} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.price}>${price}</p>
      <button>Agregar al carrito</button>
    </article>
  );
}

export default Card;
