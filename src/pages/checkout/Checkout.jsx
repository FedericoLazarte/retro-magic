import { useCart } from "../../context/CartContext";
import styles from "./Checkout.module.css";
import Button from "../../components/button/Button.jsx";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();
  const navigate = useNavigate();

  const handleToCart = () => {
    navigate("/cart");
  };

  const handleBuy = () => {
    alert("Compra realizada con éxito.");
    clearCart();
    navigate("/");
  };

  return (
    <>
      <h1>Checkout</h1>
      <div>
        {cart.map((c) => (
          <div className={`${styles.card} ${styles.checkoutItem}`} key={c.id}>
            <img src={c.img} alt={c.alternativeText} />
            <h3>{c.name}</h3>
            <p className={styles.price}>${c.price}</p>
            <p>x {c.count}</p>
          </div>
        ))}
        <p className={styles.total}>Total: ${total}</p>
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={handleBuy}>Comprar</Button>
        <Button onClick={handleToCart}>Volver al carrito</Button>
      </div>
    </>
  );
}

export default Checkout;
