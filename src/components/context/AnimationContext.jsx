import { useState } from "react";
import { AnimationContext } from "./AnimationContext.js";

export const AnimationProvider = ({ children }) => {
  const [currentAnimation, setCurrentAnimation] = useState("");

  return (
    <AnimationContext.Provider value={{ currentAnimation, setCurrentAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};
