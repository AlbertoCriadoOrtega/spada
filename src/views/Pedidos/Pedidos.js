import React, { useEffect, useState } from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import PedidoPreview from "../../Components/PedidoPreview/PedidoPreview";

const apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    /*
     * funcion para renderizar la informacion de los pedidos
     */
    const fetchPedidos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }

        const response = await fetch(apiUrl + ":8000/api/pedidos/usuario", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPedidos(data.pedidos);
      } catch (error) {
        console.error("Error fetching pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <>
      <Header />
      <div className="col-12 d-flex justify-content-center pt-5">
        <h1 className="Enfasis">Tus pedidos</h1>
      </div>
      <div
        className="col-12 pt-3 d-flex flex-wrap justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <PedidoPreview
              key={pedido.id}
              id={pedido.id}
              precio={pedido.precio}
            />
          ))
        ) : (
          <p>No pedidos available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Pedidos;
