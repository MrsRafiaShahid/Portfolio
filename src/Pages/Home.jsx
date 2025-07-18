/* eslint-disable react-refresh/only-export-components */
import Hero from "../components/Home/Hero"
import { SectionWrapper } from "../hoc";

const Home = () => {
  return (
    <>
      <div className="w-full h-10 bg-red-400"></div>
      <Hero />
    </>
  );
};

export default SectionWrapper(Home, "/");
