import React from "react";
import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <>
      <Html>
        <span className="custom-loading-dots"></span>

        <p className="text-xl text-center text-amber-200 font-bold mt-10">
          {Math.floor((progress / 100) * 100)}%
        </p>
      </Html>
    </>
  );
};

export default Loader;
