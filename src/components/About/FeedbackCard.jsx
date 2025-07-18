/* eslint-disable no-unused-vars */
import { useSpring, animated } from "@react-spring/web";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FeedbackCard = ({
  index,
  name,
  testimonial,
  designation,
  image,
  company,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(40px)" },
  }));
  useEffect(() => {
    if (inView) {
      api.start({
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { mass: 1, tension: 170, friction: 26 ,duration:200},
        delay: index * 100,
        // immediate:true
      });
    } else {
      api.start({
        to: { opacity: 0, transform: "translateY(40px)" },
      });
    }
  }, [inView, api, index]);
  return (
    <>
      <animated.div
        ref={ref}
        style={styles}
        className="bg-tertiary/20 text-white mt-20 rounded-3xl md:w-[320px] w-[300px]"
      >
        <p className="text-[48px] px-4 bg-black/20  rounded-t-3xl text-white ">"</p>
        <div className="mt-1">
          <p className="text-white text-2xl px-4 py-2 tracking-wider text-[18px]">
            {testimonial}
          </p>
          <div className="flex-1 mt-7 px-4  py-2 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              <span className="text-primary ">{designation}</span> at {company}
            </p>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={image}
                alt={`feedback_by-${name}`}
                className="w-full h-full object-cover"
              />
              </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default FeedbackCard;
