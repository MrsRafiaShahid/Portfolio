/* eslint-disable react-refresh/only-export-components */
import { Certificate, Experience, Project } from "../components";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <>
      <Experience />
      <Project />
      <Certificate/>
    </>
    
  );
};

export default SectionWrapper(Projects, "projects");
