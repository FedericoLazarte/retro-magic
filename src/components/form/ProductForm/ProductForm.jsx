import styles from "./ProductForm.module.css";
import Button from "../../ui/Button/Button.jsx";

function ProductForm({
  dataForm,
  onSubmit,
  onChangeData,
  onChangeImage,
  status,
  isFormValid,
  error,
}) {
  const isSubmitting = status === "submitting";

  if (status === "success") {
    return (
      <p className={styles.success}>¡Se envío el formulario correctamente!</p>
    );
  }

  return (
    <form action="" className={styles.contactForm} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={dataForm.name}
          required
          placeholder="Ingrese su nombre..."
          onChange={onChangeData}
          disabled={isSubmitting}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={dataForm.description}
          required
          placeholder="Ingrese la descripción de la carta..."
          disabled={isSubmitting}
          onChange={onChangeData}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="type">Tipo de carta:</label>
        <input
          type="text"
          name="type"
          id="type"
          value={dataForm.type}
          placeholder="Ingrese el tipo de carta. Ej: Combate/Trampa/etc..."
          onChange={onChangeData}
          disabled={isSubmitting}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={dataForm.stock}
          placeholder="Ingrese la cantidad de cartas. Ej: 10"
          onChange={onChangeData}
          disabled={isSubmitting}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="element">Elemento:</label>
        <input
          type="text"
          id="element"
          name="element"
          value={dataForm.element}
          placeholder="Ingrese el elemento de la carta. Ej: Fuego/Mágico/etc"
          onChange={onChangeData}
          disabled={isSubmitting}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="rank">Ranking:</label>
        <input
          type="number"
          id="rank"
          name="rank"
          value={dataForm.rank}
          placeholder="Ingrese el ranking de la carta. Ej: 4"
          onChange={onChangeData}
          disabled={isSubmitting}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={dataForm.price}
          placeholder="Ingrese el precio de la carta. Ej: 500"
          onChange={onChangeData}
          disabled={isSubmitting}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="urlImg">Carta:</label>
        <input
          type="file"
          id="urlImg"
          name="urlImg"
          placeholder="Ingrese una imagen de la carta"
          onChange={onChangeImage}
          disabled={isSubmitting}
          required
        />
      </div>
      {error && <p className={styles.error}>Error: {error}</p>}
      <Button disabled={!isFormValid || isSubmitting} type="submit">
        Enviar
      </Button>
    </form>
  );
}

export default ProductForm;
