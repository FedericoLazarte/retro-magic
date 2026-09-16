import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "../card-details/CardDetails";

function CardDetailsContainer() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch("/data/cards.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ha surgido un error al realizar la petición.");
        }
        return res.json();
      })
      .then((data) => {
        const getCard = data.find((p) => p.id === parseInt(id));
        setCard(getCard);
      })
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, [id]);

  if (!card) {
    return <h2>Cargando detalle del producto...</h2>;
  }

  if (!card.id) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <>
      <CardDetails {...card} />
    </>
  );
}

export default CardDetailsContainer;
