import styles from "./ContactForm.module.css";
import Button from "../button/Button.jsx";

function FormContact({ dataForm, onSubmit, onChangeData }) {
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
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={dataForm.email}
          required
          placeholder="Ingrese su email: ejemplo@email.com..."

          onChange={onChangeData}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          id="message"
          value={dataForm.message}
          placeholder="Ingrese su mensaje..."
          onChange={onChangeData}
        ></textarea>
      </div>
      <Button>Enviar</Button>
    </form>
  );
}

export default FormContact;
