import { useEffect, useState } from "react";
import CardList from "../card-list/CardList";
import { useCart } from "../../context/CartContext";

function CardContainer() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data/cards.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar la información de las cartas");
        }
        return res.json();
      })
      .then((data) => {
        setCards(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (card) => {
    addToCart(card, card.quantity);
    alert(`Agregaste la carta ${card.name}`);
  };

  if (loading) {
    return <p>Cargando productos, por favor espere...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <CardList
        cards={cards}
        onClick={handleAddToCart}
        content="Agregar al carrito"
      />
    </>
  );
}

export default CardContainer;
