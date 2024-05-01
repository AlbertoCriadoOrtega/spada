import React from "react";
import VideoFront from "../../Components/VideoFront/VideoFront";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import CarImage from "../../Components/CarImage/CarImage";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <VideoFront />
      <div className="row col-12 ms-0">
        <h2 id="tituloHome" className="col-12 text-center">
          <p className="m-0">ESPÍRITU GANADOR</p>
        </h2>
      </div>
      <div className="row col-12"></div>
      <div className="row col-12">
        <div className="col-4">
          <CarImage></CarImage>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
      <div className="row col-12"></div>
      <Footer />
    </>
  );
}
