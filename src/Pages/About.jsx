/* eslint-disable react-refresh/only-export-components */

import AboutBg from "../components/About/AboutBg.jsx";
import {
  AboutHero,
  AboutSection,
  Tech,
  Testimonials,
} from "../components/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const About = () => {
  return (
    <>
      {/* <AboutBg/> */}
      {/* <AboutHero /> */}
      <AboutSection />
      <Tech />
      <Testimonials />
    </>
  );
};

export default SectionWrapper(About, "/about");
