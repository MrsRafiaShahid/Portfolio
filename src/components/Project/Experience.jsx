/* eslint-disable no-unused-vars */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../../constants";
import Timeline from "./Timeline";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useFadeUp } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const titleSpring =  useFadeUp(inView)
  const paraSpring = useFadeUp(inView,200)
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
        "💼 Aspiring Developer — Gaining hands-on experience through personal projects, online courses, and continuous learning in web development and programming."
      </animated.p>
      <Timeline items={experiences} />
    </section>
  );
};

export default Experience;
