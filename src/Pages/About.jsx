/* eslint-disable react-refresh/only-export-components */

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
      <AboutHero />
      <AboutSection />
      <Tech />
      <Testimonials />
    </>
  );
};

export default SectionWrapper(About, "/about");
