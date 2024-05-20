import React from "react";
import CartaTituloHistoria from "../../Components/CartaTituloHistoria/CartaTituloHistoria";
import CartaTextoHistoria from "../../Components/CartaTextoHistoria/CartaTextoHistoria";
import Navegacion from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";

export default function OurHistory() {
  return (
    <>
      <Navegacion />

      <div className="col-12 d-lg-none">
        <CartaTituloHistoria
          idDiv=""
          textoInterno="Nuestra historia"
          enlaceScroll="#50"
        />
        <CartaTextoHistoria
          idDiv="50"
          textoInterno="1950"
          enlaceScroll="#60"
          textoParrafo="50"
          scroll={true}
          decadaImagen="1950"
        />
        <CartaTextoHistoria
          idDiv="60"
          textoInterno="1960"
          enlaceScroll="#70"
          textoParrafo="60"
          scroll={true}
          decadaImagen="1960"
        />
        <CartaTextoHistoria
          idDiv="70"
          textoInterno="1970"
          enlaceScroll="#80"
          textoParrafo="70"
          scroll={true}
          decadaImagen="1970"
        />
        <CartaTextoHistoria
          idDiv="80"
          textoInterno="1980"
          enlaceScroll="#90"
          textoParrafo="80"
          scroll={true}
          decadaImagen="1980"
        />
        <CartaTextoHistoria
          idDiv="90"
          textoInterno="1990"
          enlaceScroll="#00"
          textoParrafo="90"
          scroll={true}
          decadaImagen="1990"
        />
        <CartaTextoHistoria
          idDiv="00"
          textoInterno="2000"
          enlaceScroll="#10"
          textoParrafo="00"
          scroll={true}
          decadaImagen="2000"
        />
        <CartaTextoHistoria
          idDiv="10"
          textoInterno="2010"
          enlaceScroll="#20"
          textoParrafo="10"
          scroll={true}
          decadaImagen="2010"
        />
        <CartaTextoHistoria
          idDiv="20"
          textoInterno="2020"
          enlaceScroll="#"
          textoParrafo="20"
          scroll={false}
          decadaImagen="2020"
        />
      </div>

      <div className="col-12 d-none d-lg-block">
        <Carousel></Carousel>
      </div>

      <Footer />
    </>
  );
}
