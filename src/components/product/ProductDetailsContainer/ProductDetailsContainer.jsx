import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

function ProductDetailsContainer() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/card/cards.json");

        if (!response.ok) {
          throw new Error("No se pudo obtener información del producto.");
        }

        const data = await response.json();

        const card = data.find((p) => p.id === parseInt(id));
        setCard(card);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <p>Cargando detalle del producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>{card ? <ProductDetails {...card} /> : <p>Producto no encontrado</p>}</>
  );
}

export default ProductDetailsContainer;
