/* eslint-disable no-unused-vars */
const rafia = "/assets/rafia.jpeg";
import { Link } from "react-router-dom";
import "../../index.css";
import { useFadeIn } from "../../utils/motion";
import { TypedComponent } from "./TypedComponent";
import { animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Button } from "../About/Button";
import Computer, { ComputerCanvas } from "../canvas/Computer";

const Hero = () => {
  const { ref: Ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const fade = useFadeIn(inView, 300);

  return (
    <section className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-10 gap-10">
      {/* Text Section */}
      <animated.div
        className="flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left"
        ref={Ref}
        style={fade}
      >
        {/* <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary"> */}
          <h1 className="text-2xl md:text-4xl mb-4 font-bold text-[#6B7280]">
            Hi, I'm &nbsp;<span className="text-gradient">Rafia Shahid</span>
          </h1>
          <span className="text-base md:text-2xl font-bold text-[#6B7280]">
            <TypedComponent />
          </span>
        {/* </h1> */}

        <p className="text-sm sm:text-base md:text-lg text-secondary text-justify max-w-xl hero-description">
          I build scalable web apps with{" "}
          <strong>MongoDB, Express, React & Node.js</strong>. Passionate about
          crafting seamless user experiences and robust APIs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            title="Resume"
            download
            src="/assets/RafiaShahid_Fullstack_Internship_Resume.pdf"
          />
          <Button title="Go to About" to="/about" />
        </div>
      </animated.div>

      {/* Image Section */}
      <animated.div
        className="flex-1 flex justify-center items-center"
        ref={Ref}
        style={fade}
      >
        <img
          src={rafia}
          alt="rafia"
          className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-lg"
        />
      </animated.div>
    </section>
  );
};

export default Hero;

// export const Button = ({ title }) => {
//   return (
//     <button className="bg-tertiary/80 text-secondary rounded-2xl px-6 py-2 font-semibold text-lg hover:bg-tertiary/100 hover:border-primary hover:border-2 transition-all duration-300 ease-in-out">
//       {title}
//     </button>
//   );
// };
