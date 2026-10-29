import Product from "../Product/Product";
import Button from "../../ui/Button/Button";
import Counter from "../../ui/Counter/Counter.jsx";
import styles from "./ProductList.module.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function ProductList({
  cards,
  counts,
  onAddToCart,
  onIncrease,
  onDecrease,
  favorites,
  onToggleFavorite,
}) {
  return (
    <div className={styles.container}>
      {cards.map((card) => {
        const count = counts[card.id] ?? 0;
        return (
          <Product key={card.id} {...card}>
            <Button onClick={() => onAddToCart(card, count)} type="button">
              Agregar al carrito
            </Button>
            <Counter
              count={count}
              onIncrease={() => onIncrease(card)}
              onDecrease={() => onDecrease(card)}
            />
            <span onClick={() => onToggleFavorite(card)}>
              {favorites[card.id] ? <FaStar /> : <FaRegStar />}
            </span>
          </Product>
        );
      })}
    </div>
  );
}

export default ProductList;
