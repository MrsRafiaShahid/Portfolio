/* eslint-disable no-unused-vars */
const rafia = "/assets/rafia.jpeg";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import { useFadeIn } from "../../utils/motion";
import { TypedComponent } from "./TypedComponent";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref: Ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const fade = useFadeIn(inView, 300);
  return (
    <>
      <section className="min-h-screen min-w-full flex flex-col md:flex-row items-center justify-center">
        <div className=" w-full absolute top-45 left-0 md:left-1/10 md:top-5 md:w-1/2 md:h-full  md:px-10 flex flex-col gap-10 justify-center items-center rounded-3xl ">
          <animated.div
            className="left rounded-3xl px-4 py-4"
            ref={Ref}
            style={fade}
          >
            <h1 className="sm:text-3xl w-full text-center text-primary font-bold text-xl ">
              <span className="font-poopins">Hi!</span>
              <span>
                <img
                  src="https://raw.githubusercontent.com/rahulbanerjee26/githubProfileReadmeGenerator/main/gifs/wave.gif"
                  width="30px"
                  height="30px"
                  className="inline mx-2"
                />
              </span>
              <span className="font-extrabold text-[#230ffdff] md:text-[24px] text-[18px] ">
                <TypedComponent />
              </span>
            </h1>
            <div className="sm:text-xl text-secondary w-full text-base text-justify">
              <p>
                I’m a Full Stack Developer with strong expertise in the MERN
                stack (MongoDB, Express.js, React, Node.js) and a solid
                foundation in C++ programming. I specialize in building dynamic,
                responsive web applications and scalable backend systems with
                clean, maintainable code. My focus is on delivering seamless
                user experiences and efficient software solutions across both
                web and system-level development.
              </p>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4">
              <Button title="Resume" />
              <a href="/about" className="text-white block md:hidden ">
                <Button title="Go to About" />
              </a>
            </div>
          </animated.div>
        </div>
        <animated.div
          style={fade}
          ref={Ref}
          className="w-50 absolute min-h-screen top-96 left-0 md:top-0 md:left-1/2 md:w-2/6 md:h-full flex gap-10 mx-20 justify-center items-center"
        >
          <img
            src={rafia}
            alt=""
            className="w-[145px] md:w-1/2 rounded-full flex justify-center items-center"
          />
        </animated.div>
      </section>
    </>
  );
};

export default Hero;

export const Button = ({ title }) => {
  return (
    <>
      <button
        className={`w-37 bg-tertiary/80 border-none rounded-2xl text-secondary h-10 hover:bg-tertiary/100 hover:border-primary hover:border-2 transition-all duration-300 ease-in-out px-4 font-semibold text-lg `}
      >
        {title}
      </button>
    </>
  );
};
