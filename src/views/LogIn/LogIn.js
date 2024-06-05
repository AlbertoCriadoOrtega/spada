import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./LogIn.css";

let apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

/*
 * validar que los campos esten completos
 * @returns {void}
 */
function validacionLogIn() {
  let validation = "true";

  let email = document.getElementById("username");
  let password = document.getElementById("password");

  if (email.value === "") {
    email.style.borderColor = "red";
    validation = "false";
    alert("El correo es un campo obligatorio");
  } else if (password.value === "") {
    password.style.borderColor = "red";
    validation = "false";
    alert("La contraseña es un campo obligatorio");
  }

  if (validation === "true") {
    iniciarSesion(email, password);
  }
}

/*
 * Inicia la sesion
 * @returns {void}
 */
function iniciarSesion(email, password) {
  let valorEmail = email.value;
  let valorPassword = password.value;
  fetch(apiUrl + ":8000/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: valorEmail,
      password: valorPassword,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("la contraseña o el correo son incorrectos");
      }
      return response.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("session", true);
        alert("Sesión iniciada correctamente");
        window.location.href = "/";
      }
    })
    .catch((error) => {
      alert(error);
      email.style.borderColor = "red";
      password.style.borderColor = "red";
    });
}

export default function LogIn() {
  return (
    <>
      <Navegacion />
      <div className="d-flex justify-content-center fondoCreacionCuenta">
        <div className="row mt-5 mb-5 col-12 col-md-10 col-lg-6 ps-4 pe-4">
          <div className="login-container col-12">
            <h2 className="text-center mb-4">Inicio de Sesión</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username" className="ps-3">
                  Correo
                </label>
                <input
                  type="text"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="username"
                  placeholder="introduce tu correo"
                ></input>
              </div>
              <div className="form-group col-12 mt-3">
                <label htmlFor="password" className="ps-3">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="password"
                  placeholder="introduce tu contraseña"
                  autoComplete="current-password"
                ></input>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <p
                  type="submit"
                  className="btn mt-5 col-5 col-md-3 col-lg-3"
                  id="botonLogIn"
                  onClick={validacionLogIn}
                >
                  Accede
                </p>
              </div>
            </form>
            <div className="text-center">
              <a className="Enfasis text-center col-12" href="/registro">
                No tienes cuenta, registrate!
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
