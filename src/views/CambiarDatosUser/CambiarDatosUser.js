import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

let apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

export default function CambiarDatosUser() {
  return (
    <>
      <div className="col-12 d-flex justify-content-center flex-wrap">
        <Navegacion />
        <div className="col-12 d-flex justify-content-center pb-5">
          <div className=" mt-5 mb-5 col-12 col-md-12 col-lg-6 ps-4 pe-4">
            <div className="col-12">
              <h2 className="text-center mb-4">Actualizar datos</h2>
              <form className="col-12">
                <div className="form-group">
                  <label htmlFor="username" className="ps-3">
                    Correo<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3"
                    id="username"
                    placeholder="introduce tu correo para actualizarlo"
                    required
                    autoComplete="username"
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
                    placeholder="introduce tu contraseña para actualizarla"
                    required
                    autoComplete="new-password"
                  ></input>
                  <small className="ps-3">
                    De 6 a 12 caracteres alfanumericos con al menos 1 numero y
                    al menos un caracter especial
                  </small>
                </div>
                <div className="form-group col-12 mt-3">
                  <label htmlFor="passwordRepeat" className="ps-3">
                    Repite la contraseña <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1 col-12 col-md-3 col-lg-3 ps-3"
                    id="passwordRepeat"
                    placeholder="repite tu contraseña"
                    required
                    autoComplete="new-password"
                  ></input>
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
                    onClick={(e) => {}}
                  >
                    Crear cuenta
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
