/* eslint-disable no-unused-vars */
import { useSpring, animated } from "@react-spring/web";
import React from "react";
import { useInView } from "react-intersection-observer";
import { works } from "../../constants";
import ProjectCard from "./ProjectCard";
import { useFadeUp } from "../../utils/motion";

const Project = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const titleSpring = useFadeUp(inView)
  const paraSpring = useFadeUp(inView,200)
  return (
    <>
      <section className="">
        <animated.div style={titleSpring} ref={ref}>
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider text-start">
            My Works
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </animated.div>
        <animated.p
          style={paraSpring}
          ref={ref}
          className="mt-4 text-gray-400 text-[17px] para max-w-3xl md:w-2/3 w-full leading-[30px] mb-[100px]"
        >
          "Although I am new to the industry, I have been actively learning and
          working on various projects to develop my skills."
        </animated.p>
        <div className="w-full flex flex-wrap gap-7 mt-20">
          {works.map((work, index) => (
            <ProjectCard work={work} {...work} key={`work-${index}`} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
