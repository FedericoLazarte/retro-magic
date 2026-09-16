import ContactFormContainer from "../../components/contact-form-container/ContactFormContainer";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <h1>Contacto</h1>
      <ContactFormContainer />
    </section>
  );
}

export default Contact;
