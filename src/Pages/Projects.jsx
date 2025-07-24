/* eslint-disable react-refresh/only-export-components */
import { Experience, Project } from "../components";
import Certificate from "../components/Project/Certificate";
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
