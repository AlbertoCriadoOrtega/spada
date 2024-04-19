import React, { Component } from "react";
import { ScrollDownButton } from "../scrollDownButton/scrollDownButton";
import BoxHistory from "../BoxHistory/BoxHistory";

import "./CartaTextoHistoria.css";

export default class CartaTextoHistoria extends Component {
  render() {
    const { idDiv, textoInterno, textoParrafo, enlaceScroll, scroll } =
      this.props;

    return (
      <>
        <div id={idDiv}>
          <div id="background" className="col-12">
            <div className="custom-text col-12 text-center pb-5 pt-5 d-flex flex-column align-items-stretch">
              <div id="titulo" className="pt-4 pb-4">
                <h1 className="fw-bold mb-auto" id="textoTitulo">
                  {textoInterno}
                </h1>
              </div>
              <div id="textoParrafo">
                <BoxHistory decada={textoParrafo} />
              </div>
              <div className="col-12 d-flex justify-content-center">
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
      </>
    );
  }
}
