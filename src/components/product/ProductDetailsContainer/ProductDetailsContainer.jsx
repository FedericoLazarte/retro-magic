import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firestore/config";

function ProductDetailsContainer() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const docRef = doc(db, "cards", id);

      getDoc(docRef)
        .then((res) => {
          if (res.exists()) {
            setCard({ ...res.data(), id: res.id });
          } else {
            console.log("No se encontró el producto.");
          }
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
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
