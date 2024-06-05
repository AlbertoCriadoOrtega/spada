import React, { Component } from "react";
import "./Part.css";

class Part extends Component {
  /*
   * Aumenta la cantidad de un item del carrito
   * @param {event} e - item desde donde se llama a la función
   * @returns {void}
   */
  guardarEnCarrito = (event) => {
    //Obtenemos el precio y el total del item
    const btnComprarArticulo = event.target;
    let divPadre = btnComprarArticulo.parentElement.parentElement;
    let nombre = divPadre.children[1].children[0].textContent.trim();
    let precio =
      divPadre.children[1].children[2].children[0].children[0].textContent.trim();
    let imagen = divPadre.children[0].children[0].src;

    //si el item ya existe en el carrito, aumentamos la cantidad
    let carrito = localStorage.getItem("carrito")
      ? JSON.parse(localStorage.getItem("carrito"))
      : [];

    let itemIndex = carrito.findIndex((item) => item.nombre === nombre);

    //si el item no existe en el carrito, lo agregamos
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

    //Actualizamos el numero de items
    let numCarritoElements = document.getElementsByClassName("numCarrito");
    let totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    for (let i = 0; i < numCarritoElements.length; i++) {
      numCarritoElements[i].innerHTML = totalItems;
    }
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
          <h5 className="col-12 m-0 fw-bolder">{nombre}</h5>
          <p className="col-12 m-0 fw-lighter"> {categoria}</p>
          <p className="col-12 m-0">
            <span className="m-0 fw-normal">
              Precio: <span className="Enfasis">{precio}</span>{" "}
              <span className="Enfasis">€</span>
            </span>
          </p>
        </div>
        <div className="col-12 d-flex ps-3 pt-2 pb-2 ">
          <button
            className="btn col-10 col-sm-6"
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
