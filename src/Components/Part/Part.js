import React from "react";
import IMG from "../../Assets/images/AboutUs/img3.jpg";
import "./Part.css";

export default function Part() {
  return (
    <article className="card mt-3 me-2 ms-2 p-1" id="parteRecambio">
      <figure className="col-12 d-flex justify-content-center mt-3">
        <img src={IMG} className="col-11" alt=""></img>
      </figure>
      <div className="col-12 d-flex flex-column ps-3">
        <h5 className="col-12 m-0">Categoria</h5>
        <p className="col-12 m-0">Nombre de Pieza</p>
        <p className="col-12 m-0">
          <span className="fs-5 m-0">Precio: 10 €</span>
        </p>
      </div>
      <div className="col-12 d-flex ps-3 pt-2 pb-2 ">
        <button className="btn btn-primary col-6 ">Comprar</button>
      </div>
    </article>
  );
}
