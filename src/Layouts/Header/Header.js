import React, { Component } from "react";
import "./Header.css";
import LogoFullScreen from "../../Assets/LogoPC.svg";
import LogoMovil from "./image/logoSVG.svg";

export class Header extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="nav" id="nav">
            <div className="col col-md-8 d-flex align-items-center">
              <img
                src={LogoFullScreen}
                alt=""
                className="img-fluid w-25 rounded-circle d-md-block d-none Logo"
              />
              <img
                src={LogoMovil}
                alt=""
                className="img rounded-circle d-block d-md-none LogoMovil"
              />
            </div>
            <div className="col col-md-4 d-flex justify-content-end">
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
              <h5
                className="offcanvas-title fw-bold ps-3"
                id="offcanvasRightLabel"
              >
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body col-12">
              <ul className="list-group list-group-flush fw-bold fs-4">
                <li className="list-group-item">
                  <a
                    href=""
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    OUR CARS
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href=""
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    SPARE STORE
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href=""
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    OUR TEAM
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href=""
                    className="w-100 text-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    OUR HISTORY
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
