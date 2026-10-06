import ProductCheckout from "../ProductCheckout/ProductCheckout.jsx";
import Button from "../../ui/Button/Button";
import styles from "./ProductCheckoutList.module.css";

function ProductCheckoutList({ cart, total, onBuy, onToCart }) {
  return (
    <>
      <div>
        {cart.map((c) => (
          <ProductCheckout key={c.id} product={c} />
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

export default ProductCheckoutList;
