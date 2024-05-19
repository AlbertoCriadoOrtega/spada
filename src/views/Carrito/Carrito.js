import React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./Carrito.css";

export default function Carrito() {
  // Obtener los datos del almacenamiento local
  const carritoData = localStorage.getItem("carrito");
  let carrito = [];

  if (carritoData) {
    // Si hay datos, parsearlos a un objeto JavaScript
    carrito = JSON.parse(carritoData);
  }

  return (
    <>
      <Header />
      <div className="cesta">
        <div className="col-12 text-center pt-2">
          <h3 className="Enfasis text-uppercase fs-1">Tu cesta</h3>
          {carrito.length > 0 ? (
            <ul>
              {carrito.map((item, index) => (
                <li key={index}>
                  {item.nombre} - {item.precio}
                </li>
              ))}
            </ul>
          ) : (
            <p>Tu cesta está vacía.</p>
          )}
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center mt-3 mb-3">
        <div className="col-6 d-flex justify-content-center">
          <button className="btn fs-3">COMPRAR</button>
        </div>

        <div className="col-6 d-flex justify-content-center">
          <button className="btn fs-3">VACIAR CARRITO</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
