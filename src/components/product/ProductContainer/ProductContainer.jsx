import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import ProductList from "../ProductList/ProductList.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore/config";

function CardContainer() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({});
  const [favorites, setFavorites] = useState({});

  const { addToCart } = useCart();

  useEffect(() => {
    const cardsDB = collection(db, "cards");

    getDocs(cardsDB)
      .then((res) => {
        setCards(
          res.docs.map((d) => {
            return { ...d.data(), id: d.id };
          }),
        );
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
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

  const handleToggleFavorite = (card) => {
    setFavorites((prev) => ({
      ...prev,
      [card.id]: !prev[card.id],
    }));
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
      favorites={favorites}
      onToggleFavorite={handleToggleFavorite}
    />
  );
}

export default CardContainer;
