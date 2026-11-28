import ProductContainer from "../../components/product/ProductContainer/ProductContainer";
import styles from "./Products.module.css";

function Products() {
  return (
    <section className={styles.products}>
      <h1>Cartas a la Venta</h1>
      <p className={styles.subtitle}>
        Explorá el catálogo completo de cartas de{" "}
        <i lang="en">Arcane Duel Masters</i>.
      </p>
      <ProductContainer />
    </section>
  );
}

export default Products;
