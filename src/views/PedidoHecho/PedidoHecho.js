import React, { useState, useEffect } from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import ItemCompra from "../../Components/ItemCompra/ItemCompra";

const apiUrl = "http://localhost";
// const urlApi = "http://34.175.58.37";

/*
 *
 * Funcion para obtener pedidos hecho por el usuario
 * @returns {array} array de info de los pedidos
 */
const PedidoHecho = () => {
  const [productosComprados, setProductosComprados] = useState([]);

  const infoPedido = async () => {
    const idPedido = localStorage.getItem("idPedido");
    const respuesta = await fetch(
      `${apiUrl}:8000/api/detallesPedidos/${idPedido}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await respuesta.json();
    return data;
  };

  /*
   * funcion para retornar informacion de una pieza
   * @returns {array} array de info de la pieza
   */
  const infoPieza = async (idPieza) => {
    const response = await fetch(`${apiUrl}:8000/api/piezas/${idPieza}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  };

  /*
   * funcion para renderizar la informacion de los productos comprados
   */
  useEffect(() => {
    const fetchProductosComprados = async () => {
      const detalles = await infoPedido();
      const productos = await Promise.all(
        detalles.detallesPedidos.map(async (detalle) => {
          const pieza = await infoPieza(detalle.idPieza);

          let imagenRuta = apiUrl + ":8000/" + pieza.piezas.imagen;
          return (
            <ItemCompra
              key={pieza.piezas.id}
              nombre={pieza.piezas.nombre}
              precio={pieza.piezas.precio}
              imagen={imagenRuta}
              cantidad={detalle.cantidad}
            />
          );
        })
      );
      setProductosComprados(productos);
    };

    fetchProductosComprados();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <Header />
      <div
        className="col-12 d-flex flex-wrap justify-content-center"
        style={{ minHeight: "74vh" }}
      >
        <div className="col-12 d-flex justify-content-center">
          <h1 className="Enfasis">Tu pedido</h1>
        </div>
        {productosComprados}
      </div>
      <Footer />
    </div>
  );
};

export default PedidoHecho;
