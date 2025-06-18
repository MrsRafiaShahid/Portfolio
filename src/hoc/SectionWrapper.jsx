/* eslint-disable no-unused-vars */
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.1 }}
          className="container max-w-7xl mx-auto px-6 py-6 relative z-0"
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          <Component {...props} />
        </motion.section>
      </>
    );
  };

export default SectionWrapper;
