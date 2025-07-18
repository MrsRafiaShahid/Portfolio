/* eslint-disable react-refresh/only-export-components */

import {
  AboutHero,
  AboutSection,
  Footer,
  Navbar,
  Tech,
  Testimonials,
} from "../components/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const About = () => {
  return (
    <>
    <Navbar/>
      <AboutHero />
      <AboutSection />
      <Tech />

      <Testimonials />
      <Footer/>
    </>
  );
};

export default SectionWrapper(About, "/about");
