import { useCart } from "../../context/CartContext";
import styles from "./Checkout.module.css";

function Checkout() {
  const { cart, getCartTotal } = useCart();
  const total = getCartTotal();
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
    </>
  );
}

export default Checkout;
