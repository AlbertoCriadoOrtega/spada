import React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./OurTeam.css";

export default function OurTeam() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="mt-5 mb-4">Equipo de Escudería Spada</h1>

        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body text-white">
                <h2 className="card-title">Giovani - CEO</h2>
                <p className="card-text">
                  Giovani es el CEO de Escudería Spada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body text-white">
                <h2 className="card-title">Andrea - Director</h2>
                <p className="card-text">
                  Andrea es el Director de Escudería Spada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body text-white">
                <h2 className="card-title">Vittoria - Cara Visible</h2>
                <p className="card-text">
                  Vittoria es la hija del creador de la compañía y la cara
                  visible de Escudería Spada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-5 mb-4">Nuestros Equipos</h2>

        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">Equipo F1</h2>
                <p className="card-text">
                  El equipo de Fórmula 1 de Escudería Spada compite en la máxima
                  categoría del automovilismo.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">Equipo F2</h2>
                <p className="card-text">
                  El equipo de Fórmula 2 de Escudería Spada compite en una
                  categoría de desarrollo para jóvenes talentos del
                  automovilismo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">Equipo GT3</h2>
                <p className="card-text">
                  El equipo de GT3 de Escudería Spada compite en carreras de
                  resistencia en vehículos de gran turismo.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">Equipo LMP2</h2>
                <p className="card-text">
                  El equipo de LMP2 de Escudería Spada compite en la categoría
                  de prototipos de Le Mans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
