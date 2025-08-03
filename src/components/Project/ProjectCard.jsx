/* eslint-disable no-unused-vars */
import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { calcTilt } from "../../utils/motion";
const global = "/assets/global.png";
const github = "/assets/tech/github.png";

const ProjectCard = ({
  index,
  title,
  description,
  image,
  source_code_link,
  tags,
  visit_link,
}) => {
  const ref = useRef(null);
  const { ref: viewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
    rootMargin: "-50px 0px",
    onChange: (inView) => {
      if (inView) {
        ref.current.style.transform =
          "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1.05)";
      } else {
        ref.current.style.transform =
          "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
      }
    },
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
        immediate: true,
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
      <div className="md:w-[350px] w-full m-auto" ref={viewRef}>
        <animated.div
          className="w-full green-pink-gradient rounded-[20px] glow-effect shadow-card"
          ref={ref}
          key={inView ? 'visible' :'hidden'}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={springStyles}
        >
          <div className="bg-black will-change-transform flex flex-col items-center justify-center rounded-[20px] px-6 py-3 min-h-full">
            <div className="w-full h-[250px] relative">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3 gap-2">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <div
                  onClick={() => window.open(visit_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={global}
                    alt="globalweb"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{title}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <p
                    key={tag.name}
                    className={`text-[14px] ${tag.color} bg-gray-800 rounded-full px-3 py-1`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default ProjectCard;
