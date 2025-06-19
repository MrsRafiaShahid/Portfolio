/* eslint-disable no-unused-vars */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../../constants";
import Timeline from "./Timeline";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
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
    <section className="section-padding md:mt-20 mt-10 px-5 xl:px-0">
      <animated.div style={titleSpring} ref={ref}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider text-start">
          What I have done so far?
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects & Experience
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
      <Timeline items={experiences} />
    </section>
  );
};

export default Experience;
