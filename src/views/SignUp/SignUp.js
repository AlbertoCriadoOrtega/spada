import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./SignUp.css";
import IMG from "../../Assets/images/SignUp/SignUpFoto.jpg";

export default function SignUp() {
  return (
    <>
      <Navegacion />
      <div className="d-flex justify-content-center">
        <div className="d-none d-lg-block col-2"></div>
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
                  placeholder="introduce tu Correo"
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
                ></input>
              </div>
              <div className="form-group col-12 mt-3">
                <label htmlFor="password" className="ps-3">
                  Nombre
                </label>
                <input
                  type="password"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="password"
                  placeholder="introduce tu nombre"
                ></input>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="username" className="ps-3">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="username"
                  placeholder="introduce tu teléfono"
                ></input>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn mt-5 col-5 col-md-3 col-lg-6"
                  id="botonLogIn"
                >
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-none d-lg-block col-5 d-flex text-center">
          <img
            alt="imagenSignUp"
            src={IMG}
            className="img-fluid mt-5 mb-5 w-50"
            id="imagenSignUp"
          ></img>
        </div>
      </div>

      <Footer />
    </>
  );
}
