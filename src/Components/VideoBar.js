import React from "react";
import teslaVideo from "../photos/teslaVideo.mp4";
const videoBar = () => {
  return (
    <div className="videoContainer">
      <video src={teslaVideo} autoPlay loop muted />
      <div className="weTesla">
        <p>We Are Tesla</p>
        <button>Join Tesla</button>
      </div>
    </div>
  );
};

export default videoBar;
