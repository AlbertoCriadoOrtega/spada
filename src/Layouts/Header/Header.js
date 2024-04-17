import React, { Component } from "react";
import "./Header.css";
import LogoFullScreen from "./image/logo.png";
import LogoMovil from "./image/logoSVG.svg";

export class Header extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="nav" id="nav">
            <div className="col col-md-4 d-flex justify-content-start">
              <div
                className="nav-link d-flex align-items-center text-light text-decoration-none ps-4"
                href=""
                role="button"
              >
                <i className="bi bi-person-fill fs-3"></i>
                <a
                  href=""
                  className="nav-link d-flex align-items-center text-light text-decoration-none ps-2"
                >
                  <i className="bi bi-cart fs-3"></i>
                </a>
              </div>
            </div>
            <div className="col col-md-4 d-flex justify-content-center">
              <img
                src={LogoFullScreen}
                alt=""
                className="img-fluid w-25 rounded-circle d-md-block d-none"
              />
              <img
                src={LogoMovil}
                alt=""
                className="img-fluid w-50 rounded-circle d-block d-md-none"
              />
            </div>
            <div className="col col-md-4 d-flex justify-content-end">
              <a
                className="nav-link d-flex align-items-center text-light text-decoration-none pe-4"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i className="bi bi-list fs-1"></i>
              </a>
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

          <div className="collapse pt-2 pb-2 bg-dark" id="collapseExample">
            <div className="row col-12 d-flex">
              <div className="col-6 d-flex justify-content-center">
                <button className="btn btn-color text-light">Log in</button>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <button className="btn btn-color text-light">Sign up</button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
