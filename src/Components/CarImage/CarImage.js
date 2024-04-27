import React from "react";
import "./CarImage.css";
import IMG from "../../Assets/images/AboutUs/test.jpg";

function CarImage({ textoAlternativo }) {
  return (
    <>
      <div
        className="gradiente"
        style={{
          backgroundImage: `url("${IMG}"), radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
        }}
      ></div>
    </>
  );
}

export default CarImage;
