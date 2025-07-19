/* eslint-disable no-unused-vars */
import React from "react";
import { technologies } from "../../constants";
import BallCanvas from "../canvas/BallCanvas";
import { useInView } from "react-intersection-observer";
import { animated } from "@react-spring/web";
import { useFadeIn } from "../../utils/motion";

const Tech = () => {
  const { ref: Ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const fade = useFadeIn(inView,300)
  return (
    <>
      <animated.div
        ref={Ref}
        style={fade}
        className="flex mt-10 flex-row flex-wrap justify-center gap-10  p-2"
      >
        {technologies.map((technology) => (
          <div className="w-18 h-18" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </animated.div>
    </>
  );
};

export default Tech;
