import React, { useState, useEffect } from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import Filter from "../../Components/Filter/Filter";
import Part from "../../Components/Part/Part";
import "./Store.css";

export default function Store() {
  const [productos, setProductos] = useState([]);
  const [numPagina, setNumPagina] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("localhost:8000c,/api/piezas");
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        const data = await response.json();

        console.log(data);
        const piezas = data.piezas.map((pieza) => (
          <Part
            key={pieza.id}
            imagenURL={
              "http://localhost:8000/" + pieza.imagen || "default-image-url.jpg"
            }
            nombre={pieza.nombre || "Nombre desconocido"}
            precio={pieza.precio || "Precio no disponible"}
            categoria={pieza.tipo || "Tipo desconocido"}
          />
        ));
        setProductos(piezas);
      } catch (error) {
        console.error("Hubo un problema con la solicitud Fetch:", error);
      }
    }

    fetchData();
  }, []);

  const productosPorPagina = 12;
  let indexOfLastProduct = numPagina * productosPorPagina;
  let indexOfFirstProduct = indexOfLastProduct - productosPorPagina;
  let productosActuales = productos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  let paginar = (pageNumber) => setNumPagina(pageNumber);
  return (
    <>
      <Navegacion />
      <Filter />
      <div className="col-12 d-flex flex-wrap justify-content-center fondoTienda fondoProductos">
        {productosActuales}
      </div>
      <div className="pagination flex-wrap justify-content-center pt-3 pb-3 fondoTienda ">
        {Array.from({
          length: Math.ceil(productos.length / productosPorPagina),
        }).map((_, index) => (
          <button
            className=" botonPaginador me-1 mb-1"
            onClick={() => paginar(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
}
