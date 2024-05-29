import React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./Carrito.css";
import ItemCarrito from "../../Components/ItemCarrito/ItemCarrito";

function vaciarCarrito() {
  if (window.confirm("¿Seguro que quieres vaciar el carrito?")) {
    localStorage.removeItem("carrito");
    window.location.reload();
  }
}

export default function Carrito() {
  let items = null;
  let carrito = JSON.parse(localStorage.getItem("carrito"));

  if (carrito === null || carrito.length === 0) {
    window.onload = function () {
      let padre = document.getElementById("items");
      let aviso = document.createElement("h1");
      aviso.className = " text-uppercase text-center fs-1 col-12";
      aviso.innerText = "Tu cesta está vacía";
      padre.appendChild(aviso);
    };
  } else {
    items = carrito.map((item, index) => (
      <ItemCarrito
        key={index}
        nombre={item.nombre}
        precio={item.precio}
        imagen={item.imagen}
        cantidad={item.cantidad}
      />
    ));
  }

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
          <div className="col-10 d-flex flex-wrap" id="items">
            {items}
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center mt-3 mb-3">
        <div className="col-6 d-flex justify-content-center ">
          <button className=" btnComprar">COMPRAR</button>
        </div>
        <div className="col-6 d-flex justify-content-center ">
          <button
            className=" d-flex justify-content-center flex-wrap btnVaciar"
            onClick={vaciarCarrito}
          >
            <span className="col-12">VACIAR</span>{" "}
            <span className="col-12">CARRITO</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
