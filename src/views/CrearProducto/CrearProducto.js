import React, { useState } from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

export default function CrearProducto() {
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const previewImagen = (event) => {
    const input = event.target;
    const file = input.files && input.files[0]; // Ensure file is selected
    if (!file) {
      setImagePreview("");
      setErrorMessage("");
      return;
    }

    const reader = new FileReader();
    const img = new Image();

    img.onload = function () {
      const width = img.width;
      const height = img.height;

      // Set your desired width and height
      const desiredWidth = 600;
      const desiredHeight = 300;

      if (width === desiredWidth && height === desiredHeight) {
        const dataURL = reader.result;
        setImagePreview(dataURL);
        setErrorMessage("");
      } else {
        setErrorMessage(
          `Las dimensiones de la imagen deben ser ${desiredWidth}x${desiredHeight}px`
        );
        setImagePreview("");
        input.value = "";
      }
    };

    reader.onload = function () {
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Header />
      <div className="col-12">
        <div className="col-12 text-center">
          <h1 className="Enfasis text-uppercase Enfasis">Crear producto</h1>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap">
        <div className="col-12 col-md-8">
          <form className="row justify-content-center">
            <div className="col-md-8 mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción
              </label>
              <input type="text" className="form-control" id="descripcion" />
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="precio" className="form-label">
                Precio
              </label>
              <input type="number" className="form-control" id="precio" />
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="tipoPieza" className="form-label">
                Tipo de pieza
              </label>
              <select className="form-select" id="tipoPieza">
                <option>Frenos</option>
                <option>Motores</option>
                <option>Cristales</option>
                <option>Diferenciales</option>
                <option>Suspensiones</option>
                <option>Amortiguadores</option>
                <option>Alerones</option>
              </select>
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="modeloPieza" className="form-label">
                Modelo de la pieza
              </label>
              <input type="text" className="form-control" id="modeloPieza" />
            </div>
            <div className="col-md-8 mb-3 d-flex flex-wrap">
              <label htmlFor="imagen" className="form-label">
                Imagen
              </label>
              <input
                type="file"
                className="form-control"
                id="imagen"
                accept="image/*"
                onChange={previewImagen}
              />
              <small className="Enfasis col-12">
                Dimensiones obligatorias: 600x300
              </small>
              <div className="d-none d-md-block col-12">
                {errorMessage && (
                  <div className="text-danger mt-2">{errorMessage}</div>
                )}
                {imagePreview && (
                  <img
                    id="previewImagen"
                    src={imagePreview}
                    alt="Imagen de la pieza a crear"
                    className="img-fluid mt-3"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="d-none d-md-flex col-md-4">
          {errorMessage && (
            <div className="text-danger mt-2">{errorMessage}</div>
          )}
          {imagePreview && (
            <img
              id="previewImagen"
              src={imagePreview}
              alt="Imagen de la pieza a crear"
              className="img-fluid mt-3"
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
