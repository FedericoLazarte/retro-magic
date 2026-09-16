import { useState } from "react";
import ContactForm from "../form/ContactForm.jsx";

function ContactFormContainer() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert("Se envío el formulario");
  };

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <ContactForm
      dataForm={dataForm}
      onSubmit={handleSubmitForm}
      onChangeData={handleChangeData}
    />
  );
}

export default ContactFormContainer;
