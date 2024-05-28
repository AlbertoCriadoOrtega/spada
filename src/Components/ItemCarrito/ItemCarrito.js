import React, { Component } from "react";

class ItemCarrito extends Component {
  ÑaumentarCantidad = (e) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let index = carrito.findIndex((item) => item.nombre === e.target.name);
    carrito[index].cantidad++;
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  disminuirCantidad = (e) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let index = carrito.findIndex((item) => item.nombre === e.target.name);
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--;
    }
    if (carrito[index].cantidad === 0) {
      this.eliminarItem(e);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  eliminarItem = (e) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let index = carrito.findIndex((item) => item.nombre === e.target.name);
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  render() {
    const { imagen, nombre, precio, cantidad } = this.props;
    return (
      <>
        <div className="col-8 d-flex align-items-center">
          <div className="col-4">
            <img src={imagen} className="img-fluid w-100" alt={nombre}></img>
          </div>
          <div className="col-4 ps-5">
            <div className="fw-bold fs-3">{nombre}</div>
            <div className="fw-light fs-4">Precio: {precio} €</div>
            <div className="fw-light fs-5" id="cantidad">
              Cantidad: {cantidad}
            </div>
          </div>
          <div className="col-4">
            <p className="fs-4 text-center mb-0">Precio total:</p>
            <p className="text-center fs-2">{precio * cantidad} €</p>
          </div>
        </div>
        <div className="d-flex align-items-center col-4 text-center justify-content-around">
          <div className="d-flex flex-column align-items-center align-content-center">
            <i className="bi bi-dash fs-1" onClick={this.aumentarCantidad}></i>
            <i className="bi bi-plus fs-1" onClick={this.disminuirCantidad}></i>
          </div>
          <div>
            <i className="bi bi-trash3 fs-1" onClick={this.eliminarItem}></i>
          </div>
        </div>
      </>
    );
  }
}

export default ItemCarrito;