/* eslint-disable react-refresh/only-export-components */
import Hero from "../components/Home/Hero"
import { SectionWrapper } from "../hoc";

const Home = () => {
  return (
    <>
      <div className="w-full h-10"></div>
      <Navbar/>
      <Hero />
      <Footer/>
    </>
  );
};

export default SectionWrapper(Home, "/");
