import React, { Component } from "react";
import "./VideoFront.css";
import VIDEO from "../../Assets/videos/VideoBG.mp4";

export default class VideoFront extends Component {
  render() {
    return (
      <>
        <div id="videoFrontDiv">
          <video id="videoFront" autoPlay loop muted>
            <source src={VIDEO} type="video/mp4"></source>
          </video>
          <h2 id="tituloHome" className="col-12 text-center ">
            <p className="m-0">ESPÍRITU GANADOR</p>
          </h2>
        </div>
      </>
    );
  }
}
