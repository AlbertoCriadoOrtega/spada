import React, { useState, useEffect } from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import Filter from "../../Components/Filter/Filter";
import Part from "../../Components/Part/Part";
import "./Store.css";

export default function Store() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=apple&from=2024-05-26&to=2024-05-26&sortBy=popularity&apiKey=7937fb512dde4c2dbca99daca07165cc"
        );
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        const data = await response.json();
        const productos = data.articles.map((producto, index) => (
          <Part
            key={index}
            imagenURL={producto.urlToImage || "default-image-url.jpg"} // Maneja el caso en el que urlToImage es null
            nombre={producto.author || "Autor desconocido"} // Maneja el caso en el que author es null
            precio={producto.publishedAt || "Fecha no disponible"} // Maneja el caso en el que publishedAt es null
            categoria={producto.source.name || "Fuente desconocida"} // Usa el nombre de la fuente como categoría
          />
        ));
        setProductos(productos); // Actualiza el estado con los productos
      } catch (error) {
        console.error("Hubo un problema con la solicitud Fetch:", error);
      }
    }

    fetchData();
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez después del montaje

  return (
    <>
      <Navegacion />
      <Filter />
      <div className="col-12 d-flex flex-wrap justify-content-center fondoTienda">
        {productos}
      </div>
      <Footer />
    </>
  );
}
