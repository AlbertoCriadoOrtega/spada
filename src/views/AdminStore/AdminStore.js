import React, { useState, useEffect } from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import AdminPart from "../../Components/AdminPart/AdminPart";

let apiUrl = "http://localhost";
// let apiUrl = "http://34.175.58.37";

export default function Store() {
  const [productos, setProductos] = useState([]);
  const [numPagina, setNumPagina] = useState(1);

  /*
   * funcion que te lleva a la vista de crear producto
   * @returns {void}
   */
  function CrearProducto() {
    if (window.confirm("¿Seguro que quieres crear un nuevo producto?")) {
      window.location = "/admin/crear";
    }
  }

  //filtrado en la tienda de admin
  useEffect(() => {
    const btnAplicarFiltro = document.getElementById("aplicarFiltro");
    const buscador = document.getElementById("buscador");
    if (btnAplicarFiltro) {
      btnAplicarFiltro.addEventListener("click", filtrar);
    }

    if (buscador) {
      buscador.addEventListener("keyup", filtrar);
    }
  }, []);

  useEffect(() => {
    //sacar piezas
    async function fetchData() {
      try {
        const response = await fetch(apiUrl + ":8000/api/piezas");
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        const data = await response.json();
        const piezas = data.piezas.map((pieza) => (
          <AdminPart
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

  /*
   * Filtrar las piezas
   * @returns {void}
   */
  async function filtrar() {
    let minPrice = document.getElementById("minPrice").value.trim();
    let maxPrice = document.getElementById("maxPrice").value.trim();
    let type = document.getElementById("type").value.trim();
    let order = document.getElementById("order").value.trim();
    let name = document.getElementById("buscador").value.trim();

    if (minPrice === "") {
      minPrice = -1;
    }

    if (maxPrice === "") {
      maxPrice = -1;
    }

    if (type === "Selecciona una opción") {
      type = -1;
    }

    if (name === "") {
      name = -1;
    }

    switch (order) {
      case "Precio descendente":
        order = "descendente";
        break;

      default:
        order = "ascendente";
        break;
    }

    await fetch(apiUrl + ":8000/api/filtrado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        minPrecio: minPrice,
        maxPrecio: maxPrice,
        tipo: type,
        ordenacion: order,
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
          let piezas = data.piezas.map((pieza) => (
            <AdminPart
              key={pieza.id}
              imagenURL={
                apiUrl + ":8000/" + pieza.imagen || "default-image-url.jpg"
              }
              nombre={pieza.nombre || "Nombre desconocido"}
              precio={pieza.precio || " precio no disponible"}
              categoria={pieza.tipo || "Tipo desconocido"}
            />
          ));
          setProductos(piezas);
        }
      })
      .catch((error) => {
        // console.error("Hubo un problema con la solicitud Fetch:", error);
      });
  }

  const productosPorPagina = 12;
  let ultimoProductoPaginado = numPagina * productosPorPagina;
  let primerProductoPaginado = ultimoProductoPaginado - productosPorPagina;
  let productosActuales = productos.slice(
    primerProductoPaginado,
    ultimoProductoPaginado
  );

  let paginar = (numPagina) => setNumPagina(numPagina);

  return (
    <>
      <Navegacion />
      <div className="col-12 fondoTienda">
        <div className="col-12 d-flex flex-wrap justify-content-center pt-4 pb-2 ">
          <input
            className="col-8 col-sm-8 col-md-6 col-lg-4"
            type="text"
            placeholder="Buscar pieza"
            id="buscador"
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
          <button
            className="btn btn-success col-4 col-sm-4 col-md-3 col-lg-2"
            onClick={CrearProducto}
          >
            Crear producto
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
              <input
                type="number"
                className="form-control"
                id="minPrice"
              ></input>
            </div>
            <div className="mt-3">
              <h5>Precio máximo</h5>
              <input
                type="number"
                className="form-control"
                id="maxPrice"
              ></input>
            </div>
            <div className="mt-3">
              <h5>Tipo de pieza</h5>
              <select className="form-select" id="type">
                <option defaultValue>Selecciona una opción</option>
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
              <select className="form-select" id="order">
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
              id="aplicarFiltro"
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
        {
          // saca un array de los botones de paginacion
          Array.from({
            length: Math.ceil(productos.length / productosPorPagina),
          }).map((_, index) => (
            <button
              key={index}
              className=" botonPaginador me-1 mb-1"
              onClick={() => paginar(index + 1)}
            >
              {index + 1}
            </button>
          ))
        }
      </div>
      <Footer />
    </>
  );
}
