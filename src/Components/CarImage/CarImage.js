import React from "react";
import "./CarImage.css";
import IMG from "../../Assets/images/AboutUs/test.jpg";

function CarImage({ textoAlternativo }) {
  return (
    <>
      <div className="gradiente">
        <img
          src={IMG}
          alt={textoAlternativo}
          className="img-fluid w-100 gradiente"
        />
      </div>
    </>
  );
}

export default CarImage;
