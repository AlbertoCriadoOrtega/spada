import React, { Component } from "react";

export default class ItemCompra extends Component {
  //generar props para el item de compra

  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4 pt-2 pb-2 d-flex  flex-wrap">
        <div className="col-12 d-flex  d-flex justify-content-center flex-wrap">
          <div className="col-10 d-flex justify-content-center">
            <img
              src={this.props.imagen}
              className="img-fluid col-6"
              alt={this.props.nombre}
            ></img>
          </div>
          <div className="col-12 d-flex flex-column justify-content-center text-center">
            <div className="fw-bold fs-3">{this.props.nombre}</div>
            <div className="fw-normal fs-4">
              Precio: <span className="">{this.props.precio}</span>{" "}
              <span className="">€</span>
            </div>
            <div className="fw-normal fs-5" id="cantidad">
              Cantidad: <span className="">{this.props.cantidad}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
