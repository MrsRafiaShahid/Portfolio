/* eslint-disable react-refresh/only-export-components */
import { Experience, Project } from "../components";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <>
      <Experience />
      <Project />
    </>
    
  );
};

export default SectionWrapper(Projects, "projects");
