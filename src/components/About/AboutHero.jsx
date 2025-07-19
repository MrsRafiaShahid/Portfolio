/* eslint-disable no-unused-vars */
import React, { lazy, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { ComputerCanvas } from "../canvas";
import { useInView } from "react-intersection-observer";
import { useFadeIn, useFadeUp } from "../../utils/motion.js";
const AnimateRobot = lazy(() => import("../canvas/Computer.jsx"));

const items = [
  "About Me",
  "I specialize in building scalable, secure web solutions with a strong grasp of RESTful APIs, database design, and cloud integration. Passionate about clean, maintainable code and solving complex problems, I thrive in team settings and stay current with web development trends.",
  "Let's build something meaningful together.",
];
const AboutHero = () => {
  const { ref: Ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const headingSpring = useFadeUp(inView);
  const para1Spring = useFadeUp(inView, 200);
 const Fade = useFadeIn(inView, 300);
  const [error, setError] = useState(false);

  useEffect(() => {
    import("../canvas/Computer.jsx")
      .then(() => {
        console.log("3D model loaded successfully.");
      })
      .catch((err) => {
        console.error("Error loading 3D model:", err);
        setError(true);
      });
  }, []);
  const cardRef = useRef();
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.property("--glow-angle", `${angle}deg`);
  };
  return (
    <>
      <div className="relative w-full h-full m-auto px-6 md:px-16  mt-20 flex flex-col justify-center items-center md:flex-row gap-8 md:gap-10">
        <animated.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          style={Fade}
          className={`w-full h-full group about-card transition-all duration-300 left md:w-1/2 rounded-2xl shadow-lg mb-8 md:mb-0 md:p-4 `}
        >
          <div className="glow-overlay" />
          <div
            className="w-full flex flex-col gap-6 justify-center items-center p-6"
            ref={Ref}
          >
            <animated.h1
              style={headingSpring}
              className="text-2xl md:text-3xl text-white font-bold text-center highlighted-text"
            >
              About Me
            </animated.h1>
            <animated.p
              style={para1Spring}
              className="text-secondary text-[14px] md:text-base text-justify"
            >
              I specialize in building scalable, secure web solutions with a
              strong grasp of RESTful APIs, database design, and cloud
              integration. Passionate about clean, maintainable code and solving
              complex problems,I thrive in team settings and stay current with
              web development trends. My focus is always on delivering
              high-quality, user-centered applications that make a real impact.
            </animated.p>
          </div>
        </animated.div>
        <animated.div
          ref={Ref}
          style={Fade}
          className="w-full md:w-1/2 rounded-2xl flex justify-center items-center shadow-lg h-64 md:h-auto"
        >
          <div className="flex justify-center items-center p-4 w-full h-100">
            {error ? <Error /> : <ComputerCanvas />}
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default AboutHero;
