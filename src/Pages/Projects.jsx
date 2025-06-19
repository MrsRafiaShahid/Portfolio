/* eslint-disable react-refresh/only-export-components */
import { Experience } from "../components";
import { SectionWrapper } from "../hoc";


const Projects = () => {
  return (
    <>
      <div className="w-full h-10 "></div>
     <Experience/>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
