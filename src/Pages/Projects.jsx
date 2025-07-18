/* eslint-disable react-refresh/only-export-components */
import { Experience, Navbar, Project } from "../components";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <>
    <Navbar/>
      <Experience />
      <Project />
      <Footer/>
    </>

  );
};

export default SectionWrapper(Projects, "projects");
