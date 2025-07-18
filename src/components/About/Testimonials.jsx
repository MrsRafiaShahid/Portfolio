/* eslint-disable no-unused-vars */
import { useSpring, animated } from "@react-spring/web";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { testimonials } from "../../constants";
import FeedbackCard from "./FeedbackCard";
import SectionWrapper from "../../hoc/SectionWrapper";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [styles, api] = useSpring(() => ({
    from: { opacity: 1, y: 30 },
    to: { opacity: 1, y: 30 },
  }));
  useEffect(() => {
    if (inView) {
      api.start({
        to: { opacity: 1, y: 0 },
        config: { mass: 1, tension: 200, friction: 30 },
        immdediate:true,
        // delay: 0.1,
      });
    } else {
      api.start({ opacity: 0, y: 30 });
    }
  }, [inView, api]);
  return (
    <>
      <div className="mt-12 bg-black-100 rounded-2xl ">
        <div
          className="bg-black/100 rounded-2xl min-h-[300px] px-4 py-4"
          ref={ref}
        >
          <animated.div style={styles}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What Other's say</p>
            <h2 className=" text-white font-bold md:text-[60px] sm:text-[50px] text-[30px]">Testimonials.</h2>
          </animated.div>
          <div className="w-full -mt-20 grid grid-cols-1 pb-14 sm:grid-cols-2 md:grid-cols-3 gap-7 rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// export default SectionWrapper(Testimonials,"");
export default Testimonials;
