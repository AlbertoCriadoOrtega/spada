import React, { Component } from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./PestanaUsuario.css";

let apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

/*
 * Cerrar la sesion del usuario
 * @returns {void}
 */
let cerrarSesion = () => {
  fetch(apiUrl + ":8000/api/logout", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      localStorage.setItem("session", false);
      localStorage.setItem("token", null);
      alert("Sesión cerrada correctamente");
      window.location.href = "/";
    })
    .catch((error) => {
      alert("Ha habido un error intenta de nuevo");
    });
};

export default class PestanaUsuario extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="col-12 fondoUsuario d-flex flex-column">
          <div className="col-12 pt-3">
            <div>
              <h1 className="text-center">Pestaña de usuario</h1>
            </div>
            <div className="d-flex justify-content-center Enfasis">
              <h1>Hola Usuario</h1>
            </div>
          </div>
          <div className="mt-auto d-flex col-12 justify-content-center flex-wrap">
            <div className="col-4  d-flex justify-content-center">
              <p className="btn fs-2 btn-primary col-10" onClick={cerrarSesion}>
                Cerrar sesion
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <a
                className="btn fs-2 btn-primary col-10 mb-3"
                href="/usuario/pedidos"
              >
                Ver pedidos
              </a>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <a
                className="btn fs-2 btn-primary col-10 mb-3"
                href="/cambiar-datos"
              >
                Cambia tus datos
              </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}
