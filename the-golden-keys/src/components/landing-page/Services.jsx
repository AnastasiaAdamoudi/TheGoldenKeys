import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  floatFromLeftUpperBar,
  floatFromRightSectionTitle,
  floatFromLeftLowerBar,
} from "../../motion/section-title";

const Services = () => {
  const photoRef = useRef();
  const textRef = useRef();

  const photoInView = useInView(photoRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });

  return (
    <section
      id="services"
      className="bg-darkish top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden z-1 pt-[130px] lg:pt-[80px]"
    >
      <motion.div className="flex flex-col items-center lg:items-start mx-auto lg:mx-0 justify-center lg:justify-start max-w-[300px]">
        <motion.div
          className="flex justify-center text-center mx-auto"
          variants={floatFromLeftUpperBar}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.hr className="w-[280px] my-2 border-2 border-reddish" />
        </motion.div>
        <motion.div className="flex flex-col text-center justify-center lg:text-start mx-auto lg:mx-4">
          <motion.h1
            className="font-subtitle text-light text-4xl"
            variants={floatFromRightSectionTitle}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </motion.h1>
        </motion.div>
        <motion.div
          className="flex justify-center text-center mx-auto"
          variants={floatFromLeftLowerBar}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.hr className="w-[280px] my-2 border-2 border-reddish" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
