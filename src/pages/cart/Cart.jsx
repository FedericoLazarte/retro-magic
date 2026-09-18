import Card from "../../components/card/Card";
import Counter from "../../components/counter/Counter";
import Button from "../../components/button/Button";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, clearCart, removeFromCart, setQuantity } = useCart();
  const navigate = useNavigate();

  const handleIncrease = (card) => {
    if (card.count >= card.stock) return;
    setQuantity(card.id, card.count + 1);
  };

  const handleDecrease = (card) => {
    setQuantity(card.id, card.count - 1);
  };

  const handleRemove = (card) => {
    removeFromCart(card.id);
  };

  const handleBuy = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <>
        <h1>Carrito de compras</h1>
        <p>Carrito vacío, agregue algún producto para verlo en el carrito.</p>
      </>
    );
  }

  return (
    <>
      <h1>Carrito de compras</h1>
      <section className={styles.section}>
        <div className={styles.container}>
          {cart.map((card) => (
            <Card key={card.id} {...card}>
              <Counter
                count={card.count}
                onIncrease={() => handleIncrease(card)}
                onDecrease={() => handleDecrease(card)}
              />
              <Button onClick={() => handleRemove(card)}>Eliminar</Button>
            </Card>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button onClick={handleBuy}>Comprar</Button>
          {cart.length > 1 && (
            <Button onClick={clearCart}>Vaciar carrito</Button>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
