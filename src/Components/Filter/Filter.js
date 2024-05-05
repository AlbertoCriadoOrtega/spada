import React from "react";
import "./Filter.css";

export default function Filter() {
  return (
    <>
      <div className="col-12 d-flex flex-wrap justify-content-center mt-2 mb-2">
        <input className="" type="text" placeholder="Buscar" />
      </div>
      <div className="col-12 d-flex flex-wrap justify-content-center mt-1 mb-1">
        <button
          className="btn botonFiltro col-4"
          data-bs-toggle="offcanvas"
          data-bs-target="#filtro"
        >
          Filtrar
        </button>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="filtro">
        <div className="offcanvas-header">
          <button
            type="button"
            class="btn-close fs-3 text-dark fw-bold"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <h5>Precio mínimo</h5>
            <input className="form-control"></input>
          </div>
          <div>
            <h5>Precio máximo</h5>
            <input className="form-control"></input>
          </div>
          <div>
            <h5>Tipo de pieza</h5>
            <select className="form-select">
              <option>Frenos</option>
              <option>Motores</option>
              <option>Cristales</option>
              <option>Diferenciales</option>
              <option>Suspensiones</option>
              <option>Amortiguadores</option>
              <option>Alerones</option>
            </select>
          </div>
          <div>
            <button className="btn"></button>
          </div>
        </div>
        <div className="offcanvas-footer pt-3 d-flex justify-content-center col-12 pb-3">
          <button
            type="button"
            class="btn botonFiltro col-4"
            data-bs-dismiss="offcanvas"
          >
            Aplicar
          </button>
        </div>
      </div>
    </>
  );
}
