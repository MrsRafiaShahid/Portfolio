
/* eslint-disable no-unused-vars */
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { services } from "../../constants/index.js";
import ServiceCard from "./ServiceCard.jsx";
import { useFadeUp } from "../../utils/motion.js";
import AboutBg from "./AboutBg.jsx";
const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const titleSpring = useFadeUp(inView)
  const paraSpring = useFadeUp(inView,300)
  const videoSpring=useFadeUp(inView,400)
  return (
    <>
      <div
        ref={ref}
        className="min-h-screen mt-12 flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8"
      >
        <animated.div style={titleSpring} className="w-full">
          <p className="md:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-start">
            Introduction
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview..
          </h2>
        </animated.div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-6">
        
        <animated.p
        style={paraSpring}
          className="mt-4 text-secondary text-[17px] max-w-3xl md:w-2/3 w-full leading-[30px]"
        >
          I am a passionate Full Stack Developer with hands-on experience in
          designing, developing, and maintaining web applications from front to
          back. My expertise spans across the MERN stack — MongoDB, Express.js,
          React, and Node.js — allowing me to create responsive user interfaces
          and robust backend systems.
        </animated.p>
        <animated.div style={videoSpring} className="w-full m-auto h-1/4 mt-5 flex justify-center">
          <AboutBg/>
        </animated.div>
          
        </div>
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
