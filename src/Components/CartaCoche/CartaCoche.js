import React from "react";
import "./CartaCoche.css";

const Coche = ({ modelo, imagen, potencia, peso, velocidadPunta, enlace }) => {
  return (
    <a
      className="col-12 col-sm-6 col-md-4 col-lg-4 p-2 text-decoration-none"
      href={enlace}
    >
      <div className="card " id="cartaCoche">
        <div className="row">
          <h3 className="text-center pt-1">{modelo}</h3>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="imagen-container">
              <img src={imagen} alt={`${modelo}`} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row mt-3 ps-2 pe-2 textoTarjetas">
          <div className="col-4 d-flex flex-wrap align-content-between">
            <p className="text-center col-12">{potencia} HP</p>
          </div>
          <div className="col-4 d-flex flex-wrap align-content-between">
            <p className="text-center col-12">{peso} kg</p>
          </div>
          <div className="col-4 d-flex flex-wrap align-content-between">
            <p className="text-center col-12">{velocidadPunta} kph</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Coche;
