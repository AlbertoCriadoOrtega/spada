import React, { Component } from "react";
import "./Header.css";
import LogoFullScreen from "../../Assets/LogoPC.svg";
import LogoMovil from "./image/logoSVG.svg";

export class Header extends Component {
  render() {
    return (
      <>
        <header className="col-12">
          <nav className="nav" id="nav">
            <div className="col col-md-2 d-flex align-items-center">
              <a href="/">
                <img
                  src={LogoFullScreen}
                  alt=""
                  className="img-fluid rounded-circle d-md-block d-none Logo"
                  id="logoFullScreen"
                />
              </a>
              <a href="/">
                <img
                  src={LogoMovil}
                  alt=""
                  className="img rounded-circle d-block d-md-none LogoMovil"
                />
              </a>
            </div>
            <div className="d-none d-md-block col-md-8 d-flex align-content-center ">
              <div className="text-white d-flex justify-content-center">
                <a
                  href="/coches"
                  className="text-white text-decoration-none fs-5 ps-3 pe-3 enlacesNav"
                >
                  NUESTROS COCHES
                </a>
                <a
                  href="/tienda"
                  className="text-white text-decoration-none fs-5 ps-3 pe-3 enlacesNav"
                >
                  RECAMBIOS
                </a>
                <a
                  href="/equipo"
                  className="text-white text-decoration-none fs-5 ps-3 pe-3 enlacesNav"
                >
                  NUESTRO EQUIPO
                </a>
                <a
                  href="/historia"
                  className="text-white text-decoration-none fs-5 ps-3 pe-3 enlacesNav"
                >
                  NUESTRA HISTORIA
                </a>
              </div>
            </div>
            <div className="col-md-1 d-none d-md-block d-flex justify-content-end align-content-center enlacesNav">
              <a
                href="/registro"
                className="text-white text-decoration-none fs-5 ps-3 pe-3 "
              >
                <i className="bi bi-person-fill fs-1 "></i>
              </a>
            </div>
            <div className="col-md-1 d-none d-md-block d-flex justify-content-end align-content-center enlacesNav">
              <a
                href="/carrito"
                className="text-white text-decoration-none fs-5 ps-3 pe-3"
              >
                <i className="bi bi-cart-fill fs-1"></i>
              </a>
            </div>
            <div className="col col-md-4 d-flex justify-content-end d-block d-md-none">
              <p
                className="nav-link d-flex align-items-center text-light text-decoration-none pe-4 mb-0"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i className="bi bi-list fs-1"></i>
              </p>
            </div>
          </nav>

          <div
            className="offcanvas offcanvas-end w-100"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <a
                href="/registro"
                className="text-dark text-decoration-none fs-5 ps-3 pe-3"
              >
                <i className="bi bi-person-fill fs-1"></i>
              </a>
              <a
                href="/carrito"
                className="text-dark text-decoration-none fs-5 ps-3 pe-3"
              >
                <i className="bi bi-cart-fill fs-1"></i>
              </a>
              <button
                type="button"
                className="btn-close fs-3 text-dark fw-bold"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body col-12">
              <ul className="list-group list-group-flush fw-bold fs-4">
                <li className="list-group-item">
                  <a
                    href="/"
                    className="w-100 text-dark link-underline link-underline-opacity-0 fs-2"
                  >
                    INICIO
                  </a>
                </li>

                <li className="list-group-item">
                  <a
                    href="/coches"
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-2"
                  >
                    NUESTROS COCHES
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="/tienda"
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-2"
                  >
                    RECAMBIOS
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="/equipo"
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-2"
                  >
                    NUESTRO EQUIPO
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="/historia"
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-2"
                  >
                    NUESTRA HISTORIA
                  </a>
                </li>
              </ul>
            </div>
            <div className="offcanvas-footer mb-3">
              <a href="#" className="fs-1 p-3  text-decoration-none text-dark">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="fs-1 p-3  text-decoration-none text-dark">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="fs-1 p-3  text-decoration-none text-dark">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="fs-1 p-3  text-decoration-none text-dark">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
