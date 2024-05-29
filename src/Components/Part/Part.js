import React, { Component } from "react";
import "./Part.css";

class Part extends Component {
  guardarEnCarrito = (event) => {
    const btnComprarArticulo = event.target;
    if (localStorage.getItem("carrito") === null) {
      let divPadre = btnComprarArticulo.parentElement.parentElement;
      let nombre = divPadre.children[1].children[1].textContent.trim();
      let precio =
        divPadre.children[1].children[2].children[0].children[0].textContent.trim();
      let imagen = divPadre.children[0].children[0].src;
      let carrito = [];

      carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: 1,
        imagen: imagen,
      });

      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      let carrito = JSON.parse(localStorage.getItem("carrito"));
      let divPadre = btnComprarArticulo.parentElement.parentElement;
      let nombre = divPadre.children[1].children[1].textContent.trim();
      let precio =
        divPadre.children[1].children[2].children[0].children[0].textContent.trim();
      let imagen = divPadre.children[0].children[0].src;
      let itemIndex = carrito.findIndex((item) => item.nombre === nombre);

      if (itemIndex !== -1) {
        carrito[itemIndex].cantidad += 1;
      } else {
        carrito.push({
          nombre: nombre,
          precio: precio,
          cantidad: 1,
          imagen: imagen,
        });
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    console.log(localStorage.getItem("carrito"));
  };

  render() {
    const { imagenURL, nombre, precio, categoria } = this.props;
    return (
      <article
        className="card mt-3 me-2 ms-2 p-1 text-white"
        id="parteRecambio"
      >
        <figure className="col-12 d-flex justify-content-center mt-3">
          <img
            src={imagenURL}
            className="col-11"
            width={200}
            height={200}
            alt=""
          />
        </figure>
        <div className="col-12 d-flex flex-column ps-3 ">
          <h5 className="col-12 m-0 fw-bolder">{categoria}</h5>
          <p className="col-12 m-0 fw-lighter">{nombre}</p>
          <p className="col-12 m-0">
            <span className="m-0 fw-normal">
              Precio: <span className="Enfasis">{precio}</span>{" "}
              <span className="Enfasis">€</span>
            </span>
          </p>
        </div>
        <div className="col-12 d-flex ps-3 pt-2 pb-2 ">
          <button
            className="btn col-6"
            id="botonCompra"
            onClick={this.guardarEnCarrito}
          >
            Añadir al carrito
          </button>
        </div>
      </article>
    );
  }
}

export default Part;
