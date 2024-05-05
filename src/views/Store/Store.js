import React from "react";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import Filter from "../../Components/Filter/Filter";
import Part from "../../Components/Part/Part";

export default function Store() {
  const numberOfParts = 10;

  // Crear un array con componentes repetidos
  const parts = Array.from({ length: numberOfParts }, (_, index) => (
    <Part key={index} />
  ));

  return (
    <>
      <Navegacion />
      <Filter />
      <div className="col-12 d-flex flex-wrap justify-content-center">
        {parts}
      </div>
      <Footer />
    </>
  );
}
