import React, { createContext, useContext } from "react";
// import { AnimationProvider } from "./AnimationContext";

export const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);
// export { AnimationProvider };
