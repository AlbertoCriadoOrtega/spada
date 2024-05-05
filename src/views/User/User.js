import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import IMG from "../../Assets/images/SignUp/SignUpFoto.jpg";

export default function User() {
  return (
    <>
      <Navegacion />
      <div className="d-flex justify-content-center">
        <div className="d-none d-lg-block col-2"></div>
        <div className="row mt-5 mb-5 col-12 col-md-10 col-lg-6 ps-4 pe-4">
          <div className="login-container col-12">
            <h2 className="text-center mb-4">Actualizar los datos</h2>

            <form>
              <div className="form-group">
                <label htmlFor="currentPassword" className="ps-3">
                  Contraseña actual
                </label>
                <input
                  type="password"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="currentPassword"
                  placeholder="Contraseña actual"
                ></input>
              </div>
              <div className="form-group col-12 mt-5">
                <label htmlFor="newPassword" className="ps-3">
                  Contraseña nueva
                </label>
                <input
                  type="password"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="newPassword"
                  placeholder="Cambia tu contraseña"
                ></input>
              </div>
              <div className="form-group col-12 mt-3">
                <label htmlFor="name" className="ps-3">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="name"
                  placeholder="Cambia tu nombre"
                ></input>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="phone" className="ps-3">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control mt-1 col-12 col-md-3 col-lg-3"
                  id="phone"
                  placeholder="Cambia tu télefono"
                ></input>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn mt-5 col-5 col-md-3 col-lg-6"
                  id="botonLogIn"
                >
                  Actualizar datos
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
