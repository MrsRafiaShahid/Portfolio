
/* eslint-disable no-unused-vars */
import { useSpring, animated } from "@react-spring/web";
import React from "react";
import { useInView } from "react-intersection-observer";
import { services } from "../../constants/index.js";
import ServiceCard from "./ServiceCard.jsx";
const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 170, friction: 26 },
  });
  const paraSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 170, friction: 26 },
  });
  return (
    <>
      <div
        ref={ref}
        className="mt-12 flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8"
      >
        <animated.div style={titleSpring} className="md:w-2/3 w-full">
          <p className="md:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-start">
            Introduction
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text[50px] xs:text-[40px] text-[30px]">
            Overview..
          </h2>
        </animated.div>
        <animated.p
        ref={ref}
          style={paraSpring}
          className="mt-4 text-secondary text-[17px] max-w-3xl md:w-2/3 w-full leading-[30px]"
        >
          I am a passionate Full Stack Developer with hands-on experience in
          designing, developing, and maintaining web applications from front to
          back. My expertise spans across the MERN stack — MongoDB, Express.js,
          React, and Node.js — allowing me to create responsive user interfaces
          and robust backend systems.
        </animated.p>
        <div className="mt-10 text-secondary flex flex-wrap gap-10 mb-10 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutSection;
