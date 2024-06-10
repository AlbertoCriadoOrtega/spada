import React, { useState } from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

let apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

export default function CrearProducto() {
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /*
   * Previsualiza la imagen seleccionada
   * @param {event} event - evento de seleccionar una imagen
   * @returns {void}
   */
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

      const desiredWidth = 300;
      const desiredHeight = 200;

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

  const validarDatos = () => {
    let validacion = true;
    let nombre = document.getElementById("nombre");
    let precio = document.getElementById("precio");
    let descripcion = document.getElementById("descripcion");
    let tipo = document.getElementById("tipoPieza");
    let modelo = document.getElementById("modeloPieza");

    if (nombre.value.trim() === "") {
      alert("El nombre es un campo obligatorio");
      nombre.style.borderColor = "red";
      validacion = false;
    }

    if (nombre.value.length > 50) {
      alert("El nombre es demasiado extenso");
      nombre.style.borderColor = "red";
      validacion = false;
    }

    if (descripcion.value.trim() === "") {
      alert("la descripcion es un campo obligatorio");
      descripcion.style.borderColor = "red";
      validacion = false;
    }

    if (descripcion.value.length > 255) {
      alert("la descripcion es demasiado extensa");
      descripcion.style.borderColor = "red";
      validacion = false;
    }

    if (precio.value.trim() === "") {
      alert("El precio es un campo obligatorio");
      precio.style.borderColor = "red";
      validacion = false;
    }

    if (precio.value.length <= 0) {
      alert("El precio es demasiado bajo");
      precio.style.borderColor = "red";
      validacion = false;
    }

    if (tipo.value.trim() === "") {
      alert("El tipo es un campo obligatorio");
      tipo.style.borderColor = "red";
      validacion = false;
    }

    if (tipo.value.length > 50) {
      alert("El tipo es demasiado extenso");
      tipo.style.borderColor = "red";
      validacion = false;
    }

    if (modelo.value.trim() === "") {
      alert("El nombre del modelo es un campo obligatorio");
      modelo.style.borderColor = "red";
      validacion = false;
    }

    if (modelo.value.length > 50) {
      alert("El nombre del modelo es demasiado extenso");
      modelo.style.borderColor = "red";
      validacion = false;
    }

    if (validacion) {
      actualizarProducto(
        nombre.value.trim(),
        precio.value.trim(),
        descripcion.value.trim(),
        tipo.value.trim(),
        modelo.value.trim()
      );
    }
  };

  function actualizarProducto(nombre, precio, descripcion, tipo, modelo) {
    let imagen = document.getElementById("imagen");
    const imagenParaEnviar = imagen.files[0];

    if (imagenParaEnviar) {
      const reader = new FileReader();
      reader.onloadend = function () {
        const imagenBase64 = reader.result.split(",")[1];
        const extension = imagenParaEnviar.name.split(".")[1];

        fetch(apiUrl + ":8000/api/piezas", {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          method: "POST",
          body: JSON.stringify({
            id: localStorage.getItem("id"),
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            tipo: tipo,
            modelo: modelo,
            imagen: "data:image/" + extension + ";base64," + imagenBase64,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error en la solicitud: " + response.status);
            }
            return response.json();
          })
          .then((data) => {
            alert("Se ha creado el producto correctamente");
            window.location = "/tienda";
          })
          .catch((error) => {
            console.error("Hubo un problema con la solicitud Fetch:", error);
          });
      };

      reader.readAsDataURL(imagenParaEnviar);
    } else {
      alert(
        "Por favor, seleccione una imagen antes de actualizar el producto."
      );
    }
  }

  return (
    <>
      <Header />
      <div className="col-12">
        <div className="col-12 text-center">
          <h1 className="Enfasis text-uppercase Enfasis">Crear producto</h1>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap" style={{ minHeight: "72vh" }}>
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
                Dimensiones obligatorias: 300x200
              </small>
              <div className="col-12 d-flex justify-content-center">
                <a
                  className="btn btn-primary col-6 fs-5"
                  onClick={validarDatos}
                >
                  Crear producto
                </a>
              </div>
              <div className="d-none d-md-flex flex-wrap col-12">
                {errorMessage && (
                  <div className="text-danger mt-2 d-none d-md-block">
                    {errorMessage}
                  </div>
                )}
                {imagePreview && (
                  <img
                    id="previewImagen"
                    src={imagePreview}
                    alt="Imagen de la pieza a actualizar"
                    className="img-fluid mt-3 d-block d-md-none"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="d-none d-md-flex flex-wrap col-md-4">
          {errorMessage && (
            <div className="text-danger mt-2 d-none d-md-block">
              {errorMessage}
            </div>
          )}
          {imagePreview && (
            <img
              id="previewImagen"
              src={imagePreview}
              alt="Imagen de la pieza a crear"
              className="img-fluid mt-3 d-none d-md-block"
              style={{ width: "300px", height: "200px" }}
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
