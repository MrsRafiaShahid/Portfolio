import React from "react";
import { technologies } from "../../constants";
import Ball from "../canvas/BallCanvas";
// import Ball from "./Ball";

const Tech = () => {
  return (
    <div className="flex mt-10 flex-row flex-wrap justify-center gap-6 p-2">
      {technologies.map((tech) => (
        <Ball key={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};

export default Tech;
