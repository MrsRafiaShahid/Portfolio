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
    from: { opacity: 0, y: 30 },
    to: { opacity: 0, y: 30 },
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
          className="bg-black/100 rounded-2xl min-h-[300px] px-16 md:px-6 md:py-6 py-16"
          ref={ref}
        >
          <animated.div style={styles}>
            <p className="sectionSubText">What Other's say</p>
            <h2 className="sectionHeadText">Testimonials.</h2>
          </animated.div>
          <div className="w-full -mt-20 grid grid-cols-1 pb-14 paddingX sm:grid-cols-2 md:grid-cols-3 gap-7 rounded-3xl px-4  md:px-6">
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
