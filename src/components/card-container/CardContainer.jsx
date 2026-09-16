import { useEffect, useState } from "react";
import CardList from "../card-list/CardList";
import styles from "./CardContainer.module.css";

function CardContainer() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleAddToCart = (name) => {
    alert(`Agregaste la carta ${name}`);
  };

  if (loading) {
    return <p>Cargando productos, por favor espere...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <CardList
        cards={cards}
        onAddToCart={handleAddToCart}
        content="Agregar al carrito"
      />
    </div>
  );
}

export default CardContainer;
