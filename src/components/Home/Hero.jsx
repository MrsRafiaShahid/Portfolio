import "../../index.css";
import { TypedComponent } from "./TypedComponent";
const Hero = () => {
  return (
    <>
      <section className="min-h-full min-w-full flex flex-col md:flex-row items-center justify-center">
        <div className=" w-full absolute top-20 left-0 md:absolute md:left-1/10 md:top-0 md:w-3/8 md:h-full  md:px-30 flex flex-col gap-10 justify-center items-center">
          <div className="left">
            <h1 className="sm:text-3xl sm:w-full w-full text-center text-blue-600/90 stroke-sky-950 font-bold text-xl ">
              <span className="font-poopins">
                Hi!
              </span>
              {/* <span>
                <img
                  src="https://raw.githubusercontent.com/rahulbanerjee26/githubProfileReadmeGenerator/main/gifs/wave.gif"
                  width="20px"
                  height="20px"
                
                />

              </span> */}

              <span className="font-extrabold text-teal-700/85 md:text-[24px] text-[18px] ">
                <TypedComponent />
              </span>
            </h1>
            <div className="sm:text-xl text-pink-400/70 w-full text-[14px] text-center">
              <p>
                I'm a MERN Stack Developer with a passion for building dynamic,
                responsive web applications using MongoDB, Express.js, React,
                and Node.js. I specialize in creating scalable solutions with
                clean, maintainable code and seamless user experiences.
              </p>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <Button />
            </div>
          </div>
        </div>
        <div className="right w-83 absolute top-62 left-0 md:absolute md:top-0 md:left-1/2 md:w-2/6 md:h-full flex flex-col gap-10  justify-center items-center">
          <img src="./src/assets/rafia.png" alt="" width="750px" />
          <div className="md:hidden flex justify-center items-center">
            <Button />
          </div>
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
        className="w-30 bg-teal-600 border-none rounded-2xl h-10 hover:bg-teal-400
    "
        // herf=""
        // download
      >
        Resume
      </button>
    </>
  );
};
