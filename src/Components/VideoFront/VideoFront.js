import React, { Component } from "react";
import "./VideoFront.css";
import VIDEO from "../../Assets/videos/VideoBG.mp4";

export default class VideoFront extends Component {
  render() {
    return (
      <div id="videoFrontDiv">
        <video id="videoFront" autoPlay loop muted>
          <source src={VIDEO} type="video/mp4"></source>
        </video>
      </div>
    );
  }
}
