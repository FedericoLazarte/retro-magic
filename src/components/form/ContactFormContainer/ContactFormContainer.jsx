import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";

function ContactFormContainer() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("typing");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1500);
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
      status={status}
    />
  );
}

export default ContactFormContainer;
