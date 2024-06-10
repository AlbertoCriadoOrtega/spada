import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./CambiarDatosUser.css";

let apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

export default function CambiarDatosUser() {
  let enseñarDatosActuales = () => {
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    fetch(apiUrl + ":8000/api/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("nombre", data.nombre);
        name.value = data.nombre;

        phone.value = data.telefono;
        localStorage.setItem("telefono", data.telefono);

        localStorage.setItem("direccion", data.direccion);
        address.value = data.direccion;
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud Fetch:", error);
      });
  };

  setTimeout(() => {
    enseñarDatosActuales();
  }, 0);

  let conseguirID = async () => {
    try {
      let response = await fetch(apiUrl + ":8000/api/me", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }

      let data = await response.json();
      return data.id;
    } catch (error) {
      console.error("Hubo un problema con la solicitud Fetch:", error);
    }
  };

  let actualizar = async () => {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let idUser = await conseguirID();

    if (name === "") {
      name = localStorage.getItem("nombre");
    }

    if (phone === "") {
      phone = localStorage.getItem("telefono");
    }

    if (address === "") {
      address = localStorage.getItem("direccion");
    }

    fetch(apiUrl + ":8000/api/modificar-usuario", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nombre: name,
        telefono: phone,
        direccion: address,
        id: idUser,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        alert("Datos actualizados");
        window.location.reload();
      })
      .catch((error) => {});
  };

  async function validarCampos() {
    let validation = "true";

    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");

    let nameRegex = /^(?=.{6,101}$)([a-zA-Z]{1,50})\s([a-zA-Z]{1,50})$/;
    let phoneRegex = /^[0-9]{8,12}$/;

    if (!nameRegex.test(name.value.trim())) {
      name.style.borderColor = "red";
      alert("El campo nombre no cumple con los requisitos");
      validation = "false";
    }
    if (!phoneRegex.test(phone.value.trim())) {
      phone.style.borderColor = "red";
      alert("El telefono no cumple el formato");
      validation = "false";
    }
    if (address.value.trim() === "") {
      address.style.borderColor = "red";
      alert("La direccion es un campo obligatorio");
      validation = "false";
    }

    if (validation === "true") {
      if (window.confirm("¿Estas seguro que quieres actualizar tus datos?")) {
        await actualizar();
      }
    }
  }

  return (
    <>
      <div className="col-12 d-flex justify-content-center flex-wrap">
        <Navegacion />
        <div className="col-12 d-flex justify-content-center pb-5 fondoDatosActualizar">
          <div className=" mt-5 mb-5 col-12 col-md-12 col-lg-6 ps-4 pe-4">
            <div className="col-12">
              <h2 className="text-center mb-4">Tus datos</h2>
              <form className="col-12">
                <div className="form-group col-12 mt-3">
                  <label htmlFor="name" className="ps-3">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3"
                    id="name"
                    placeholder="introduce tu nombre"
                    required
                  ></input>
                  <small className="ps-3">
                    Formato: nombre y primer apellido
                  </small>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="phone" className="ps-3">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3"
                    id="phone"
                    placeholder="introduce tu teléfono"
                    required
                  ></input>
                </div>
                <div className="form-group mt-3 mb-5">
                  <label htmlFor="address" className="ps-3">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3"
                    id="address"
                    placeholder="introduce tu dirección"
                    required
                  ></input>
                </div>
                <span className="text-danger">
                  Si dejas un campo vacio se rellenara <br></br>con tus datos
                  actuales
                </span>

                <div className="col-12 d-flex justify-content-center">
                  <p
                    type="submit"
                    className="btn mt-5 col-5 col-md-3 col-lg-6"
                    id="botonLogIn"
                    onClick={validarCampos}
                  >
                    Actualizar datos
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
