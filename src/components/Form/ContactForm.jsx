import styles from "./ContactForm.module.css";
import Button from "../Button/Button.jsx";

function ContactForm({ dataForm, onSubmit, onChangeData, status }) {
  if (status === "success") {
    return (
      <p
        style={{
          textAlign: "center",
        }}
      >
        ¡Se envío el formulario correctamente!
      </p>
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
          disabled={status === "submitting"}
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
          disabled={status === "submitting"}
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
          disabled={status === "submitting"}
        ></textarea>
      </div>
      <Button
        disabled={
          dataForm.name.length === 0 ||
          dataForm.email.length === 0 ||
          dataForm.message.length === 0 ||
          status === "submitting"
        }
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
}

export default ContactForm;
