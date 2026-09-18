import styles from "./CardDetails.module.css";
import Button from "../button/Button.jsx";
import { Link } from "react-router-dom";

function CardDetails({
  name,
  img,
  alternativeText,
  description,
  type,
  stock,
  element,
  rank,
  price,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alternativeText} />
      </div>
      <div className={styles.detailsContainer}>
        <Link to="/" className={styles.closeBtn}>
          X
        </Link>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Carta de tipo {type}</p>
        <p>Cantidad disponible: {stock}</p>
        <p>Elemento de la carta: {element}</p>
        <p>Ranking: {rank}</p>
        <p>Precio de venta ${price}</p>
      </div>
    </div>
  );
}

export default CardDetails;
