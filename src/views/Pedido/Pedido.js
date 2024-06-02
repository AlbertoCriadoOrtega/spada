import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import ItemCompra from "../../Components/ItemCompra/ItemCompra";
import "./Pedido.css";

function validarDatos() {
  let validacion = true;
  const cardNumber = document.getElementById("numeroTarjeta").value.trim();
  const cardExpiry = document.getElementById("caducidad").value.trim();
  const CVV = document.getElementById("CVV").value.trim();

  const cardNumberRegex = /^\d{16}$/;
  if (!cardNumberRegex.test(cardNumber)) {
    alert("El numero de tarjeta no es válido");
    validacion = false;
  }

  const cardExpiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!cardExpiryRegex.test(cardExpiry)) {
    alert("La fecha de vencimiento no es valida");
    validacion = false;
  }

  const cardCvvRegex = /^\d{3,4}$/;
  if (!cardCvvRegex.test(CVV)) {
    alert("El CVV no es valido");
    validacion = false;
  }

  if (validacion === true) {
    alert("Compra correcta");
  }
}

export default function Pedido() {
  let productos = [];
  function obtenerProductosCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito.lenght === 0) {
      alert("No hay elementos en el carrito, pedido no posible");
      window.location = "/tienda";
    }

    for (let i = 0; i < carrito.length; i++) {
      let item = (
        <ItemCompra
          key={2}
          nombre={carrito[i].nombre}
          imagen={carrito[i].imagen}
          precio={carrito[i].precio}
          cantidad={carrito[i].cantidad}
        ></ItemCompra>
      );
      productos.push(item);
    }
  }
  obtenerProductosCarrito();
  let total = 0;
  function calcularTotal() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].precio * carrito[i].cantidad;
    }

    return total;
  }
  total = calcularTotal();
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
          Realizar pedido pedido
        </p>
      </div>
      <div
        class="modal fade"
        id="modalTarjeta"
        tabindex="-1"
        aria-labelledby="modalTarjetaLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTarjetaLabel">
                Información de tu Tarjeta
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="numeroTarjeta" class="form-label">
                    Número de Tarjeta
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="numeroTarjeta"
                    placeholder="Número de Tarjeta"
                  ></input>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="caducidad" class="form-label">
                      Fecha de Vencimiento
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="caducidad"
                      placeholder="MM/AA"
                    ></input>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="CVV" class="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="CVV"
                      placeholder="CVV"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-primary"
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
