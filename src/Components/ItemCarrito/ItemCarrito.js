import React, { Component } from "react";

import "./ItemCarrito.css";
let calcularTotal = () => {
  let total = 0;
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let totalCarrito = document.getElementById("totalCarrito");
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio * carrito[i].cantidad;
  }

  totalCarrito.innerText = total;
};

class ItemCarrito extends Component {
  aumentarCantidad = (e) => {
    let precio =
      e.target.parentElement.parentElement.parentElement.children[0].children[1]
        .children[1].children[0];
    let total =
      e.target.parentElement.parentElement.parentElement.children[0].children[2]
        .children[0].children[0];

    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let index = carrito.findIndex(
      (item) =>
        item.nombre ===
        e.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent.trim()
    );
    carrito[index].cantidad++;

    let cantidadElement =
      e.target.parentElement.parentElement.parentElement.children[0].children[1]
        .children[2].children[0];
    cantidadElement.textContent = carrito[index].cantidad;

    total.textContent = parseInt(precio.textContent) * carrito[index].cantidad;

    localStorage.setItem("carrito", JSON.stringify(carrito));

    let numCarritoElements = document.getElementsByClassName("numCarrito");
    let totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    for (let i = 0; i < numCarritoElements.length; i++) {
      numCarritoElements[i].innerHTML = totalItems;
    }

    calcularTotal();
  };

  disminuirCantidad = (event) => {
    let precio =
      event.target.parentElement.parentElement.parentElement.children[0]
        .children[1].children[1].children[0];
    let total =
      event.target.parentElement.parentElement.parentElement.children[0]
        .children[2].children[0].children[0];

    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let index = carrito.findIndex(
      (item) =>
        item.nombre ===
        event.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent.trim()
    );
    carrito[index].cantidad--;

    let cantidadElement =
      event.target.parentElement.parentElement.parentElement.children[0]
        .children[1].children[2].children[0];
    let cantidad = parseInt(cantidadElement.textContent);

    if (cantidad - 1 === 0) {
      this.eliminarItem(event);
    } else {
      cantidad--;
      cantidadElement.textContent = cantidad;

      total.textContent = parseInt(precio.textContent) * cantidad;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    let numCarritoElements = document.getElementsByClassName("numCarrito");
    let totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    for (let i = 0; i < numCarritoElements.length; i++) {
      numCarritoElements[i].innerHTML = totalItems;
    }

    if (document.getElementById("items").children.length === 0) {
      window.location.reload();
    }

    calcularTotal();
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

      let numCarritoElements = document.getElementsByClassName("numCarrito");
      let totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

      for (let i = 0; i < numCarritoElements.length; i++) {
        numCarritoElements[i].innerHTML = totalItems;
      }

      if (document.getElementById("items").children.length === 0) {
        window.location.reload();
      }

      calcularTotal();
    }
  };

  render() {
    const { imagen, nombre, precio, cantidad } = this.props;
    return (
      <>
        <div className="col-12 d-flex align-items-center mt-2 mb-2 pb-4 flex-column flex-md-row itemCarrito">
          <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start align-items-center flex-wrap pb-4 pb-md-0">
            <div className="col-8 col-sm-5 col-md-4 d-flex justify-content-center pt-5">
              <img src={imagen} className="img-fluid" alt={nombre}></img>
            </div>
            <div className="col-12 col-sm-7 col-md-4 ps-md-5 text-center">
              <div className="fw-bold fs-3">{nombre}</div>
              <div className="fw-normal fs-4">
                Precio: <span className="">{precio}</span>{" "}
                <span className="">€</span>
              </div>
              <div className="fw-normal fs-5" id="cantidad">
                Cantidad: <span className="">{cantidad}</span>
              </div>
            </div>
            <div className="col-4 d-none d-md-block">
              <p className="text-center fs-2">
                <span>{precio * cantidad} </span>€
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center col-8 col-md-4 text-center justify-content-around">
            <div className=" d-flex flex-row flex-md-column align-items-center align-content-center ">
              <button
                className="bi bi-dash fs-1 mb-md-3 ms-3 me-3 ms-md-0 me-md-0 botonMenos"
                onClick={this.disminuirCantidad}
              ></button>
              <button
                className="bi bi-plus fs-1 mb-md-3 botonMas"
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
