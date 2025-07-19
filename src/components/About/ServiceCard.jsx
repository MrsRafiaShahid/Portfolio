/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { calcTilt } from "../../utils/motion";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, index, icon }) => {
  const ref = useRef(null);
  const { ref: viewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [springStyles, api] = useSpring(() => ({
    opacity: 0,
    x: -100,
    transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
    config: { mass: 5, tension: 300, friction: 40, duration: 200 },
  }));

  useEffect(() => {
    if (inView) {
      api.start({
        opacity: 1,
        x: 0,
        delay: index * 200,
      });
    } else {
      api.start({
        opacity: 0,
        x: -100,
      });
    }
  }, [inView, api, index]);
  const isMobile = window.innerWidth < 768;
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const [x, y] = calcTilt(e.clientX, e.clientY, rect);
    api.start({
      transform: `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`,
      boxShadow: `${-y * 2}px ${x * 2}px 20px rgba(0,0,0,0.3)`,
    });
  };
  const handleMouseLeave = () => {
    api.start({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };
  return (
    <>
      <div className=" md:w-[230px] w-full m-auto " ref={viewRef}>
        <animated.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={springStyles}
          className="w-full green-pink-gradient  glow-effect shadow-card  rounded-[20px] "
        >
          <div className="bg-black will-change-transform rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default ServiceCard;
