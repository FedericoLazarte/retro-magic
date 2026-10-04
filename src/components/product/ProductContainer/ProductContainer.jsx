import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Button from "../../ui/Button/Button";
import { useCart } from "../../../context/CartContext";
import styles from "./ProductContainer.module.css";
import Counter from "../../ui/Counter/Counter.jsx";

function CardContainer() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({});

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/card/cards.json");

        if (!response.ok) {
          throw new Error("No se pudo cargar la información de las cartas");
        }

        const data = await response.json();
        setCards(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (card, quantity) => {
    addToCart(card, quantity);
    setCounts((prev) => ({ ...prev, [card.id]: 0 }));
  };

  const handleIncrease = (card) => {
    setCounts((prev) => {
      const current = prev[card.id] ?? 0;

      if (current >= card.stock) return prev;

      return { ...prev, [card.id]: current + 1 };
    });
  };

  const handleDecrease = (card) => {
    setCounts((prev) => {
      const current = prev[card.id] ?? 0;

      if (current <= 0) return prev;

      return { ...prev, [card.id]: current - 1 };
    });
  };

  if (loading) return <p>Cargando productos, por favor espere...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      {cards.map((card) => {
        const count = counts[card.id] ?? 0;
        return (
          <Product key={card.id} {...card}>
            <Button onClick={() => handleAddToCart(card, count)} type="button">
              Agregar al carrito
            </Button>
            <Counter
              count={count}
              onIncrease={() => handleIncrease(card)}
              onDecrease={() => handleDecrease(card)}
            />
          </Product>
        );
      })}
    </div>
  );
}

export default CardContainer;
