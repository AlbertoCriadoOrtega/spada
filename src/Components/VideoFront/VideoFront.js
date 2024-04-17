import React, { Component } from "react";
import videoBG from "../../Assets/video/VideoBG.mp4";

export default class VideoFront extends Component {
  render() {
    return (
      <div id="videoFrontDiv">
        <video id="videoFront" src={videoBG} autoPlay loop muted></video>
      </div>
    );
  }
}
