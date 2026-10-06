import styles from "./ProductCheckout.module.css";

function ProductCheckout({ product }) {
  return (
    <div className={`${styles.card} ${styles.checkoutItem}`}>
      <img src={product.urlImg} alt={`Foto de ${product.name}`} />
      <h3>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
      <p>x {product.count}</p>
    </div>
  );
}

export default ProductCheckout;
