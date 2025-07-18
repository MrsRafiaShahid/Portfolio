/* eslint-disable no-unused-vars */
import { rafia } from "../../assets";
import "../../index.css";
import { TypedComponent } from "./TypedComponent";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref: Ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    transform: inView ? "translateX(0px)" : "translateX(-20px)",
    config: { tension: 170, friction: 26 },
  });

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
              <span className="font-extrabold text-teal-700/85 md:text-[24px] text-[18px] ">
                <TypedComponent />
              </span>
            </h1>
            <div className="sm:text-xl text-secondary w-full text-base text-justify">
              <p>
                I'm a MERN Stack Developer with a passion for building dynamic,
                responsive web applications using MongoDB, Express.js, React,
                and Node.js. I specialize in creating scalable solutions with
                clean, maintainable code and seamless user experiences.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Button />
            </div>
          </animated.div>
        </div>
        <div className="w-50 absolute min-h-screen top-85 left-0 md:top-0 md:left-2/3 md:w-2/6 md:h-full flex gap-10 mx-20 justify-center items-center">
          <img src={rafia} alt="" className="w-[150px] md:w-1/2 rounded-full flex justify-center items-center"/>
        </div>
      </section>
    </>
  );
};

export default Hero;

export const Button = () => {
  return (
    <>
      <button
        className="w-30 bg-tertiary/80 border-none rounded-2xl text-secondary h-10 hover:bg-tertiary/100 hover:border-primray hover:border-2 transition-all duration-300 ease-in-out px-4 font-semibold text-lg "
      >
        Resume
      </button>
    </>
  );
};
