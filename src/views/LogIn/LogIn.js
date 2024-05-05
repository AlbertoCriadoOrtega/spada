import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./LogIn.css";

export default function LogIn() {
  return (
    <>
      <Navegacion />
      <div className="d-flex justify-content-center">
        <div className="row mt-5 mb-5 col-12 col-md-10 col-lg-6 ps-4 pe-4">
          <div className="login-container col-12">
            <h2 className="text-center mb-4">Crar cuenta</h2>
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
                ></input>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn mt-5 col-5 col-md-3 col-lg-3"
                  id="botonLogIn"
                >
                  Accede
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}