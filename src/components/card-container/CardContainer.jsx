import { useEffect, useState } from "react";
import Card from "../card/Card";
import Button from "../button/Button";
import { useCart } from "../../context/CartContext";
import styles from "./CardContainer.module.css";
import Counter from "../counter/Counter.jsx";

function CardContainer() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({});

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data/cards.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar la información de las cartas");
        }
        return res.json();
      })
      .then((data) => setCards(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
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
          <Card key={card.id} {...card}>
            <Button onClick={() => handleAddToCart(card, count)}>
              Agregar al carrito
            </Button>
            <Counter
              count={count}
              onIncrease={() => handleIncrease(card)}
              onDecrease={() => handleDecrease(card)}
            />
          </Card>
        );
      })}
    </div>
  );
}

export default CardContainer;
