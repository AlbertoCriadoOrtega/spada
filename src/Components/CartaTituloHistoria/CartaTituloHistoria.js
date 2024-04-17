import React, { Component } from "react";
import { ScrollDownButton } from "../scrollDownButton/scrollDownButton";

import "./CartaTituloHistoria.css";

export default class CartaTituloHistoria extends Component {
  render() {
    const { idDiv } = this.props;
    const { textoInterno } = this.props;
    const { enlaceScroll } = this.props;

    return (
      <>
        <div id={idDiv}>
          <div id="background" className="col-12">
            <div className="custom-title col-12 text-center pb-5 pt-5 d-flex flex-column align-items-stretch">
              <div id="titulo" className="pt-4 pb-4">
                <h1 className="fw-bold mb-auto" id="textoTitulo">
                  {textoInterno}
                </h1>
              </div>
              <div style={{ height: "45vh" }}></div>
              <div className="col-12 d-flex justify-content-center">
                <div className="col-3 mt-auto">
                  <ScrollDownButton href={enlaceScroll}></ScrollDownButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
