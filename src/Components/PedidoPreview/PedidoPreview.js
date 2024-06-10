import React, { Component } from "react";
import "./PedidoPreview.css";

export default class PedidoPreview extends Component {
  render() {
    const { id } = this.props;
    const { precio } = this.props;

    function irAPedido(e) {
      localStorage.setItem("idPedido", id);
      window.location.href = "/pedidos/pedido";
    }

    return (
      <div className="col-8 col-md-6 DivPedidos">
        <div>
          <p
            className="text-decoration-none text-dark d-flex flex-wrap col-12 align-items-center m-0"
            onClick={irAPedido}
            style={{ cursor: "pointer" }}
          >
            <div className="col-11 d-flex ">
              <h3 className="pe-5 m-0">Pedido nº{id}</h3>
              <h3 className="m-0">Precio: {precio}€</h3>
            </div>
            <i className="bi bi-arrow-right fs-1 col-1" />
          </p>
        </div>
      </div>
    );
  }
}
