import React from "react";
import VideoFront from "../../Components/VideoFront/VideoFront";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import CartaCoche from "../../Components/CartaCoche/CartaCoche";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div></div>
      <VideoFront />
      <div
        className="col-12 d-flex flex-wrap justify-content-center pt-5 pb-5"
        id="cartas"
      >
        <div className="col-10 text-center text-white pt-3 pb-3 d-flex flex-wrap justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 ">
            <h4 id="textoPresentacion">
              Habiendo conseguido mas de <span className="Enfasis">100 </span>
              trofeos y mas de <span className="Enfasis">3000</span> podios,
              nuestros coches se han convertido en un
              <span className="Enfasis text-uppercase"> estandar</span> ,
              corroborado por
              <span className="Enfasis text-uppercase">
                {" "}
                pilotos e ingenieros
              </span>
            </h4>
          </div>
        </div>

        <div className="col-12 text-center text-white pt-4 pb-4">
          <h2 className="Enfasis text-uppercase">Nuestros Coches</h2>
        </div>
        {/* Contenedor coches */}
        <div className="col-10 d-flex flex-wrap justify-content-center">
          <CartaCoche
            modelo={"SS1"}
            imagen={
              "https://zmfqrnenekgkedngmqke.supabase.co/storage/v1/object/public/media/radical/SR1XXR_on.png"
            }
            potencia={196}
            peso={750}
            velocidadPunta={220}
            enlace={"/sr1"}
          />
          <CartaCoche
            modelo={"SS1"}
            imagen={
              "https://zmfqrnenekgkedngmqke.supabase.co/storage/v1/object/public/media/radical/SR1XXR_on.png"
            }
            potencia={230}
            peso={850}
            velocidadPunta={240}
            enlace={"/sr2"}
          />
          <CartaCoche
            modelo={"SSV"}
            imagen={
              "https://zmfqrnenekgkedngmqke.supabase.co/storage/v1/object/public/media/radical/SR1XXR_on.png"
            }
            potencia={350}
            peso={1000}
            velocidadPunta={280}
            enlace={"/sr3"}
          />{" "}
        </div>

        <div className="col-12 fondoEyeCatch pt-5">
          <h2 className="col-12 text-center pt-4 pb-1 text-uppercase eyeCatch">
            Empieza a ser competitivo
          </h2>
          <h5 className="col-12 text-center pt-1 pb-4 text-uppercase eyeCatch2">
            Contacta con nosotros
          </h5>
          <form className="col-12  d-flex flex-wrap justify-content-center pt-3">
            <div className="col-10 col-md-8 col-xl-5 d-flex flex-wrap justify-content-center">
              <input
                type="text"
                className="form-control col-12 "
                placeholder="Nombre"
              />
              <input
                type="text"
                className="form-control col-12 mt-3"
                placeholder="Correo"
              ></input>
              <input
                id="enviar"
                className="btn col-4  mt-3"
                type="submit"
                onClick={""}
              ></input>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
