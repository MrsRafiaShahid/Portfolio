/* eslint-disable react-refresh/only-export-components */
import Hero from "../components/Home/Hero"
import { SectionWrapper } from "../hoc";

const Home = () => {
  return (
    <>
      <Hero />

    </>
  );
};

export default SectionWrapper(Home, "/");
// export default Home
