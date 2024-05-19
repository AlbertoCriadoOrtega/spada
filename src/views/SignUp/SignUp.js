import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./SignUp.css";
import IMG from "../../Assets/images/SignUp/SignUpFoto.jpg";

function validacionSignUp() {
  let validation = "true";

  let email = document.getElementById("username");
  let password = document.getElementById("password");
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");

  let passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/;
  let nameRegex = /^(?=.{6,101}$)([a-zA-Z]{1,50})\s([a-zA-Z]{1,50})$/;
  let phoneRegex = /^[0-9]{8,12}$/;

  if (email.value === "") {
    email.style.borderColor = "red";
    alert("El correo es un campo obligatorio");
    validation = "false";
  }
  if (!passwordRegex.test(password.value)) {
    password.style.borderColor = "red";
    alert("La contraseña debe tener entre 8 y 12 caracteres");
    validation = "false";
  }
  if (!nameRegex.test(name.value)) {
    name.style.borderColor = "red";
    alert("El campo nombre no cumple con los requisitos");
    validation = "false";
  }
  if (!phoneRegex.test(phone.value)) {
    phone.style.borderColor = "red";
    alert("El telefono no cumple el formato");
    validation = "false";
  }
  if (address.value === "") {
    address.style.borderColor = "red";
    alert("La dirección es obligatoria");
    validation = "false";
  }

  if (validation === "true") {
    if (window.confirm("¿Quieres crear tu cuenta?")) {
      window.location.replace("/");
    }
  }
}

export default function SignUp() {
  return (
    <>
      <div className="col-12 d-flex justify-content-center flex-wrap">
        <Navegacion />
        <div className="col-12 d-flex justify-content-center pb-5">
          <div className="d-none d-lg-block col-2"></div>
          <div className="col mt-5 mb-5 col-12 col-md-10 col-lg-6 ps-4 pe-4">
            <div className="login-container col-12">
              <h2 className="text-center mb-4">Crear cuenta</h2>
              <form className="col-12">
                <div className="form-group">
                  <label htmlFor="username" className="ps-3">
                    Correo<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3"
                    id="username"
                    placeholder="introduce tu Correo"
                    required
                  ></input>
                </div>
                <div className="form-group col-12 mt-3">
                  <label htmlFor="password" className="ps-3">
                    Contraseña<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3"
                    id="password"
                    placeholder="introduce tu contraseña"
                    required
                  ></input>
                  <small className="ps-3">
                    De 6 a 12 caracteres alfanumericos con al menos 1 numero y
                    al menos un caracter especial
                  </small>
                </div>
                <div className="form-group col-12 mt-3">
                  <label htmlFor="name" className="ps-3">
                    Nombre<span className="text-danger">*</span>
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
                    Teléfono<span className="text-danger">*</span>
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
                    Dirección<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3"
                    id="address"
                    placeholder="introduce tu dirección"
                    required
                  ></input>
                </div>
                <span className="text-danger">Campo obligatorio: *</span>

                <div className="col-12 d-flex justify-content-center">
                  <p
                    type="submit"
                    className="btn mt-5 col-5 col-md-3 col-lg-6"
                    id="botonLogIn"
                    onClick={validacionSignUp}
                  >
                    Crear cuenta
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="d-none d-lg-block col-4 d-flex text-center">
            <img
              alt="imagen de coche"
              src={IMG}
              className="img-fluid mt-5 mb-5 w-50"
              id="imagenSignUp"
            ></img>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
