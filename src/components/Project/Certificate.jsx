/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import { certification } from '../../constants'
import CertificateCard from './CertificateCard'
import { useFadeUp } from '../../utils/motion';
import { useInView } from 'react-intersection-observer';
import {  animated } from "@react-spring/web";
import { SectionWrapper } from '../../hoc';

const Certificate = () => {
      const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
      const titleSpring = useFadeUp(inView)
      const paraSpring = useFadeUp(inView,200)
  return (
   <>
     <section className="mt-10">
        <animated.div style={titleSpring} ref={ref}>
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider text-start">
            My Learnings
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
           Courses & Certificate
          </h2>
        </animated.div>
        <animated.p
          style={paraSpring}
          className="mt-4 text-gray-400 text-[17px] para max-w-3xl md:w-2/3 w-full leading-[30px] mb-[100px]"
        >
          "Although I am new to the industry, I have been actively learning through courses  & certificate and building my skills"
        </animated.p>
        <div className="w-full flex flex-wrap gap-7 mt-20">
          {certification.map((certificate, index) => (
            <CertificateCard certificate={certificate} {...certificate} key={`certificate-${index}`} />
          ))}
        </div>
      </section>
   
   </>
  )
}

export default SectionWrapper(Certificate,"")