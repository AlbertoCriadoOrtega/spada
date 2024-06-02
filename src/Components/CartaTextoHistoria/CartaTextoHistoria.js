import React, { Component } from "react";
import { ScrollDownButton } from "../scrollDownButton/scrollDownButton";
import BoxHistory from "../BoxHistory/BoxHistory";
import "./CartaTextoHistoria.css";

import IMG1950 from "../../Assets/images/Carousel/1950.jpg";
import IMG1960 from "../../Assets/images/Carousel/1960.jpg";
import IMG1970 from "../../Assets/images/Carousel/1970.jpg";
import IMG1980 from "../../Assets/images/Carousel/1980.jpg";
import IMG1990 from "../../Assets/images/Carousel/1990.jpg";
import IMG2000 from "../../Assets/images/Carousel/2000.jpg";
import IMG2010 from "../../Assets/images/Carousel/2010.jpg";
import IMG2020 from "../../Assets/images/Carousel/2020.jpg";

const ArrayImagenes = {
  1950: IMG1950,
  1960: IMG1960,
  1970: IMG1970,
  1980: IMG1980,
  1990: IMG1990,
  2000: IMG2000,
  2010: IMG2010,
  2020: IMG2020,
};

export default class CartaTextoHistoria extends Component {
  render() {
    const {
      idDiv,
      textoInterno,
      textoParrafo,
      enlaceScroll,
      scroll,
      decadaImagen,
    } = this.props;

    const backgroundImage = ArrayImagenes[decadaImagen];

    return (
      <div id={idDiv}>
        <div
          id="background"
          className="col-12 custom-text"
          style={{
            backgroundImage: `url(${backgroundImage}), linear-gradient(to bottom, rgba(12, 12, 12, 0) 0%, rgba(12, 12, 12, 1) 90%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="col-12 text-center pb-5 pt-2 d-flex flex-column align-items-stretch">
            <div id="titulo" className="pb-4">
              <h1 className="fw-bold mb-auto" id="textoTitulo">
                {textoInterno}
              </h1>
            </div>
            <div id="textoParrafo">
              <BoxHistory decada={textoParrafo} />
            </div>
            <div className="col-12 d-flex justify-content-center pt-5">
              {scroll ? (
                <div className="col-3 mt-auto">
                  <ScrollDownButton href={enlaceScroll}></ScrollDownButton>
                </div>
              ) : (
                <a className="text-white mt-5" id="textoFin" href="#">
                  Volver al principio
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
