import { useEffect, useState } from "react";
import ContactForm from "../ProductForm/ProductForm.jsx";

function ProductFormContainer() {
  const [dataForm, setDataForm] = useState({
    name: "",
    description: "",
    type: "",
    stock: "",
    element: "",
    rank: "",
    price: "",
  });
  const [status, setStatus] = useState("typing");
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);

  const isSuccess = status === "success";

  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSuccess]);

  const textFields = ["name", "description", "type", "element"];
  const numberFields = ["stock", "rank", "price"];

  const isFormValid =
    textFields.every((f) => dataForm[f].length > 0) &&
    numberFields.every((f) => Number(dataForm[f]) > 0);

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeImage = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setError(null);

    if (!imageFile) {
      alert("Por favor, selecciona una imagen para el producto");
      return;
    }
    setStatus("submitting");

    const apiKey = import.meta.env.VITE_API_KEY;
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      console.log("Subiendo imagen a Imgbb...");
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const dataImgbb = await response.json();

      if (dataImgbb.success) {
        console.log("Imagen subida con éxito. URL:", dataImgbb.data.url);

        const newProduct = {
          ...dataForm,
          urlImg: dataImgbb.data.url,
        };

        console.log(
          "Enviando los siguientes datos completos a la API:",
          newProduct,
        );

        setStatus("success");
      } else {
        throw new Error("La subida de la imagen a Imgbb falló.");
      }
    } catch (err) {
      setError(err.message);
      setStatus("typing");
    }
  };

  return (
    <ContactForm
      dataForm={dataForm}
      onSubmit={handleSubmitForm}
      onChangeData={handleChangeData}
      onChangeImage={handleChangeImage}
      status={status}
      isFormValid={isFormValid}
      error={error}
    />
  );
}

export default ProductFormContainer;
