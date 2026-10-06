import { useCart } from "../../../context/CartContext";
import ProductCheckout from "../ProductCheckout/ProductCheckout";
import { useNavigate } from "react-router-dom";

function ProductCheckoutContainer() {
  const { cart, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();
  const navigate = useNavigate();

  const handleToCart = () => navigate("/cart");

  const handleBuy = () => {
    alert("Compra realizada con éxito.");
    clearCart();
    navigate("/");
  };

  return (
    <ProductCheckout
      cart={cart}
      total={total}
      onBuy={handleBuy}
      onToCart={handleToCart}
    />
  );
}

export default ProductCheckoutContainer;
