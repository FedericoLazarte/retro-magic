import Button from "../../components/button/Button";
import CardList from "../../components/card-list/CardList";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, clearCart, deleteToCart } = useCart();

  return (
    <>
      <h1>Carrito de compras</h1>
      {cart.length === 0 && (
        <p>Carrito vacío, agregue algún produco para verlo en el carrito.</p>
      )}
      <section className={styles.section}>
        <CardList
          cards={cart}
          content="Quitar del carrito"
          onClick={deleteToCart}
        />
        {cart.length > 1 && (
          <div className={styles.btnContainer}>
            <Button>Comprar</Button>
            <Button onClick={clearCart}>Eliminar Todas</Button>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart;
