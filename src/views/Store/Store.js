import React, { useState, useEffect } from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import Part from "../../Components/Part/Part";
import "./Store.css";

let apiUrl = "http://localhost";
// let urlApi = "http://34.175.58.37";

export default function Store() {
  const [productos, setProductos] = useState([]);
  const [numPagina, setNumPagina] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl + ":8000/api/piezas");
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        const data = await response.json();

        console.log(data);
        const piezas = data.piezas.map((pieza) => (
          <Part
            key={pieza.id}
            imagenURL={
              apiUrl + ":8000/" + pieza.imagen || "default-image-url.jpg"
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
      <div className="col-12 fondoTienda">
        {" "}
        <div className="col-12 d-flex flex-wrap justify-content-center pt-4 pb-2 ">
          <input
            className="col-8 col-sm-8 col-md-6 col-lg-4"
            type="text"
            placeholder="Buscar pieza"
          />
        </div>
        <div className="col-12 d-flex flex-wrap justify-content-center pt-1 pb-1">
          <button
            className=" botonFiltro col-4 col-sm-4 col-md-3 col-lg-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#filtro"
          >
            Filtrar
          </button>
        </div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="filtro">
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close fs-3 text-dark fw-bold"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="mt-3">
              <h5>Precio mínimo</h5>
              <input className="form-control"></input>
            </div>
            <div className="mt-3">
              <h5>Precio máximo</h5>
              <input className="form-control"></input>
            </div>
            <div className="mt-3">
              <h5>Tipo de pieza</h5>
              <select className="form-select">
                <option>Frenos</option>
                <option>Motores</option>
                <option>Cristales</option>
                <option>Diferenciales</option>
                <option>Suspensiones</option>
                <option>Amortiguadores</option>
                <option>Alerones</option>
              </select>
            </div>
            <div className="mt-3">
              <h5>Ordenar</h5>
              <select className="form-select">
                <option>Precio ascendente</option>
                <option>Precio descendente</option>
              </select>
            </div>
          </div>
          <div className="offcanvas-footer pt-3 d-flex justify-content-center col-12 pb-3">
            <button
              type="button"
              className="btn botonFiltro col-4"
              data-bs-dismiss="offcanvas"
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>
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
