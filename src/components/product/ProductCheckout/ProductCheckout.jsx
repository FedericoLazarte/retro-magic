import styles from "./ProductCheckout.module.css";
import Button from "../../ui/Button/Button";

function ProductCheckout({ cart, total, onBuy, onToCart }) {
  return (
    <>
      <div>
        {cart.map((c) => (
          <div className={`${styles.card} ${styles.checkoutItem}`} key={c.id}>
            <img src={c.urlImg} alt={`Foto de ${c.name}`} />
            <h3>{c.name}</h3>
            <p className={styles.price}>${c.price}</p>
            <p>x {c.count}</p>
          </div>
        ))}
        <p className={styles.total}>Total: ${total}</p>
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={onBuy} type="button">
          Comprar
        </Button>
        <Button onClick={onToCart} type="button">
          Volver al carrito
        </Button>
      </div>
    </>
  );
}

export default ProductCheckout;
