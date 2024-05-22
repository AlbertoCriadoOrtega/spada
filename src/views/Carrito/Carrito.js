import React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./Carrito.css";
import ItemCarrito from "../../Components/ItemCarrito/ItemCarrito";

function vaciarCarrito() {
  if (window.confirm("¿Seguro que quieres vaciar el carrito?")) {
    localStorage.removeItem("carrito");
  }
}

function mostrarCarrito() {
  const carritoData = localStorage.getItem("carrito");
  let carrito = [];

  if (carritoData) {
    carrito = JSON.parse(carritoData);
  }

  if (localStorage.getItem("carrito") === null) {
    return (
      <div className="col-12 d-flex justify-content-center">
        <p className="fs-3">Tu cesta esta vacia</p>
      </div>
    );
  } else {
    let items = [];
    carrito.map((item, index) =>
      items.push(
        <ItemCarrito
          key={index}
          imagen={item.imagen}
          nombre={item.nombre}
          precio={item.precio}
          cantidad={item.cantidad}
        />
      )
    );
    return <>{}</>;
  }
}

export default function Carrito() {
  return (
    <>
      <Header />
      <div className="cesta">
        <div className="col-12 text-center pt-2 d-flex justify-content-center flex-wrap">
          <h3 className="Enfasis text-uppercase fs-1col-12">Tu cesta</h3>
        </div>
        <div
          className="col-12 d-flex justify-content-center flex-wrap"
          id="cesta"
        >
          {mostrarCarrito()}
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center mt-3 mb-3">
        <div className="col-6 d-flex justify-content-center">
          <button className="btn fs-3">COMPRAR</button>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <button className="btn fs-3" onClick={vaciarCarrito}>
            VACIAR CARRITO
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
