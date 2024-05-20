import React from "react";
import IMG1950 from "../../Assets/images/Carousel/1950 fs.jpg";
import IMG1960 from "../../Assets/images/Carousel/1960 fs.jpg";
import IMG1970 from "../../Assets/images/Carousel/1970 fs.jpg";
import IMG1980 from "../../Assets/images/Carousel/1980 fs.jpg";
import IMG1990 from "../../Assets/images/Carousel/1990 fs.jpg";
import IMG2000 from "../../Assets/images/Carousel/2000 fs.jpg";
import IMG2010 from "../../Assets/images/Carousel/2010 fs.jpg";
import IMG2020 from "../../Assets/images/Carousel/2020 fs.jpg";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="d-flex justify-content-center bg-black">
      <div
        id="carousel"
        className="carousel slide bg-black w-75"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={IMG1950}
              className="d-block w-100 img-fluid"
              alt="1950"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>1950</h3>
              <p className="fs-5">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={IMG1960}
              className="d-block w-100 img-fluid"
              alt="1960"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>1960</h3>
              <p className="fs-5">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={IMG1970}
              className="d-block w-100 img-fluid"
              alt="1970"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>1970</h3>
              <p className="fs-5">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={IMG1980}
              className="d-block w-100 img-fluid"
              alt="1980"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>1980</h3>
              <p className="fs-5">
                Some representative placeholder content for the fourth slide.
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={IMG1990}
              className="d-block w-100 img-fluid"
              alt="1990"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>1990</h3>
              <p className="fs-5">
                Some representative placeholder content for the fifth slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={IMG2000}
              className="d-block w-100 img-fluid"
              alt="2000"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>2000</h3>
              <p className="fs-5">
                Some representative placeholder content for the sixth slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={IMG2010}
              className="d-block w-100 img-fluid"
              alt="2010"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>2010</h3>
              <p className="fs-5">
                Some representative placeholder content for the seventh slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={IMG2020}
              className="d-block w-100 img-fluid"
              alt="2020"
            ></img>
            <div className="carousel-caption d-none d-md-block ">
              <h3>2020</h3>
              <p className="fs-5">
                Some representative placeholder content for the eighth slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}
