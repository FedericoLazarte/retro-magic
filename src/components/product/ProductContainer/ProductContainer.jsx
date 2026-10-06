import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import ProductList from "../ProductList/ProductList.jsx";

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
      } catch (err) {
        setError(err.message);
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
    <ProductList
      cards={cards}
      counts={counts}
      onAddToCart={handleAddToCart}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
}

export default CardContainer;
