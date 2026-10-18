import ProductFormContainer from "../../components/form/ProductFormContainer/ProductFormContainer";
import styles from "./NewProduct.module.css";

function NewProduct() {
  return (
    <section className={styles.section}>
      <h1>Agregar Producto</h1>
      <ProductFormContainer />
    </section>
  );
}

export default NewProduct;
