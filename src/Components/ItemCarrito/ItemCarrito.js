import React, { Component } from "react";

import "./ItemCarrito.css";

class ItemCarrito extends Component {
  aumentarCantidad = (e) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let index = carrito.findIndex(
      (item) =>
        item.nombre ===
        e.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent.trim()
    );
    carrito[index].cantidad++;

    let cantidad =
      e.target.parentElement.parentElement.parentElement.children[0].children[1]
        .children[2].children[0].textContent;

    cantidad = parseInt(cantidad);
    cantidad++;
    e.target.parentElement.parentElement.parentElement.children[0].children[1].children[2].children[0].textContent =
      cantidad;
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  disminuirCantidad = (event) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let index = carrito.findIndex(
      (item) =>
        item.nombre ===
        event.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent.trim()
    );
    carrito[index].cantidad--;

    let cantidad =
      event.target.parentElement.parentElement.parentElement.children[0]
        .children[1].children[2].children[0].textContent;

    cantidad = parseInt(cantidad);
    if (cantidad - 1 === 0) {
      this.eliminarItem(event);
    } else {
      cantidad--;
      event.target.parentElement.parentElement.parentElement.children[0].children[1].children[2].children[0].textContent =
        cantidad;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  eliminarItem = (e) => {
    if (window.confirm("¿Seguro que quieres eliminar este articulo?")) {
      let carrito = JSON.parse(localStorage.getItem("carrito"));
      let index = carrito.findIndex(
        (item) =>
          item.nombre ===
          e.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent.trim()
      );
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      e.target.parentElement.parentElement.parentElement.remove();
    }
  };

  render() {
    const { imagen, nombre, precio, cantidad } = this.props;
    return (
      <>
        <div className="col-12 d-flex align-items-center mt-2 mb-2">
          <div className="col-8 d-flex align-items-center">
            <div className="col-4">
              <img src={imagen} className="img-fluid w-100" alt={nombre}></img>
            </div>
            <div className="col-4 ps-5">
              <div className="fw-bold fs-3">{nombre}</div>
              <div className="fw-light fs-4">
                Precio: <span className="Enfasis">{precio}</span>{" "}
                <span className="Enfasis">€</span>
              </div>
              <div className="fw-light fs-5" id="cantidad">
                Cantidad: <span className="Enfasis">{cantidad}</span>
              </div>
            </div>
            <div className="col-4">
              <p className="fs-4 text-center mb-0">Precio total:</p>
              <p className="text-center fs-2">{precio * cantidad} €</p>
            </div>
          </div>
          <div className="d-flex align-items-center col-4 text-center justify-content-around">
            <div className="d-flex flex-column align-items-center align-content-center">
              <button
                className="bi bi-dash fs-1 mb-3 botonMenos"
                onClick={this.disminuirCantidad}
              ></button>
              <button
                className="bi bi-plus fs-1 mb-3 botonMas"
                onClick={this.aumentarCantidad}
              ></button>
            </div>
            <div>
              <button
                className="bi bi-trash3 fs-1 botonEliminar"
                onClick={this.eliminarItem}
              ></button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemCarrito;
