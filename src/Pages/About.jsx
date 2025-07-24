/* eslint-disable react-refresh/only-export-components */
import {
  AboutSection,
  Tech,
  Testimonials,
} from "../components/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const About = () => {
  return (
    <>
      <AboutSection />
      <Tech />
      <Testimonials />
    </>
  );
};

export default SectionWrapper(About, "/about");
