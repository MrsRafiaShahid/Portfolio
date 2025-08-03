import React from "react";
import "../../index.css"; // contains the glow animation

const Ball = ({ icon }) => {
  return (
    <div className="ball-wrapper w-20 h-20 flex items-center justify-center">
      <div className="ball glow-effect w-16 h-16 rounded-full flex items-center justify-center">
        <img
          src={icon}
          alt="tech-icon"
          className="w-8 h-8 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default Ball;
