import React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import CocheCatalogo from "../../Components/CocheCatalogo/CocheCatalogo";
import "./Cars.css";

export default function Cars() {
  return (
    <>
      <Header></Header>
      <div className="col fondo pt-5">
        <div className="col-12 text-center">
          <h1 className="Enfasis text-uppercase Enfasis" id="tituloCoches">
            Nuestros coches
          </h1>
        </div>
        <div className="col-12 d-flex flex-wrap justify-content-center pb-5">
          <div className="col-10 d-flex flex-wrap justify-content-center">
            <CocheCatalogo
              modelo={"SS1"}
              imagen={
                "https://zmfqrnenekgkedngmqke.supabase.co/storage/v1/object/public/media/radical/SR1XXR_on.png"
              }
              potencia={196}
              peso={750}
              velocidadPunta={220}
              enlace={"/SSV"}
            />
            <CocheCatalogo
              modelo={"SS2"}
              imagen={
                "https://zmfqrnenekgkedngmqke.supabase.co/storage/v1/object/public/media/radical/SR1XXR_on.png"
              }
              potencia={230}
              peso={850}
              velocidadPunta={240}
              enlace={"/SSV"}
            />
            <CocheCatalogo
              modelo={"SSV"}
              imagen={
                "https://zmfqrnenekgkedngmqke.supabase.co/storage/v1/object/public/media/radical/SR1XXR_on.png"
              }
              potencia={350}
              peso={1000}
              velocidadPunta={280}
              enlace={"/SSV"}
            />{" "}
          </div>
        </div>
        <div className="col mb-0 d-flex justify-content-center pb-5">
          <h2 className="text-uppercase fs-1 text-white text-center col-5">
            Mira los modelos en detalle, haz{" "}
            <span className="Enfasis">click en ellos</span>
          </h2>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
