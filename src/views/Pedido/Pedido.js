import React, { useState, useEffect } from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import ItemCompra from "../../Components/ItemCompra/ItemCompra";
import "./Pedido.css";

let apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

export default function Pedido() {
  let [productos, setProductos] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    obtenerProductosCarrito();
  }, []);

  async function validarDatos() {
    let validacion = true;
    const cardNumber = document.getElementById("numeroTarjeta");
    const cardExpiry = document.getElementById("caducidad");
    const CVV = document.getElementById("CVV");

    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber.value.trim())) {
      alert("El numero de tarjeta no es válido");
      cardNumber.style.border = "2px solid red";
      validacion = false;
    } else {
      cardNumber.style.border = "2px solid black";
    }

    const cardExpiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!cardExpiryRegex.test(cardExpiry.value.trim())) {
      alert("La fecha de vencimiento no es valida");
      cardExpiry.style.border = "2px solid red";
      validacion = false;
    } else {
      cardExpiry.style.border = "2px solid black";
    }

    const cardCvvRegex = /^\d{3,4}$/;
    if (!cardCvvRegex.test(CVV.value.trim())) {
      CVV.style.border = "2px solid red";
      alert("El CVV no es valido");
      validacion = false;
    } else {
      CVV.style.border = "2px solid black";
    }

    if (validacion === true) {
      await rellenarItemsPedido();
    }
  }

  function obtenerId(name) {
    return fetch(apiUrl + ":8000/api/filtrado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        minPrecio: -1,
        maxPrecio: -1,
        tipo: -1,
        ordenacion: "ascendente",
        nombre: name,
      }),
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Error en la solicitud: " + response.status);
        } else if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          return data.piezas[0].id;
        }
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud Fetch:", error);
      });
  }

  async function rellenarItemsPedido() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let arrayProductos = [];

    for (let index = 0; index < carrito.length; index++) {
      let idProducto = await obtenerId(carrito[index].nombre);
      arrayProductos.push({
        idPieza: idProducto,
        cantidad: carrito[index].cantidad,
      });
    }

    realizarPedido(arrayProductos);
  }

  function realizarPedido(piezas) {
    let precio = calcularTotal();
    fetch(apiUrl + ":8000/api/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        productos: piezas,
        precio: precio,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.removeItem("carrito");
        alert("Tu pedido se ha realizado con éxito");
        window.location = "/tienda";
      })
      .catch((error) => {
        alert("Ha habido un error, intenta de nuevo: " + error);
      });
  }

  function obtenerProductosCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito.length === 0) {
      alert("No hay elementos en el carrito, pedido no posible");
      window.location = "/tienda";
    }

    let productosArray = [];
    for (let i = 0; i < carrito.length; i++) {
      let item = (
        <ItemCompra
          key={i}
          nombre={carrito[i].nombre}
          imagen={carrito[i].imagen}
          precio={carrito[i].precio}
          cantidad={carrito[i].cantidad}
        ></ItemCompra>
      );
      productosArray.push(item);
    }
    setProductos(productosArray);
    setTotal(calcularTotal());
  }

  function calcularTotal() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].precio * carrito[i].cantidad;
    }
    return total;
  }

  return (
    <>
      <Navegacion />
      <div className="pt-3 mb-5 totalPago">
        <h1 className="text-center">Total a pagar</h1>
        <h1 className="text-center Enfasis pb-3">{total} €</h1>
      </div>
      <div className="col-12 d-flex flex-wrap  ps-4 pe-4  fondoProductos mb-5">
        {productos}
      </div>
      <div className="col-12 d-flex justify-content-center mb-5">
        <p
          className="btn btn-primary col-8 col-md-4 fs-3"
          data-bs-toggle="modal"
          data-bs-target="#modalTarjeta"
        >
          Realizar pedido
        </p>
      </div>
      <div
        className="modal fade"
        id="modalTarjeta"
        tabIndex="-1"
        aria-labelledby="modalTarjetaLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTarjetaLabel">
                Información de tu Tarjeta
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="numeroTarjeta" className="form-label">
                    Número de Tarjeta
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="numeroTarjeta"
                    placeholder="Número de Tarjeta"
                  ></input>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="caducidad" className="form-label">
                      Fecha de Vencimiento
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="caducidad"
                      placeholder="MM/AA"
                    ></input>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="CVV" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="CVV"
                      placeholder="CVV"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={validarDatos}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
