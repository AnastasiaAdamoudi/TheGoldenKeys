import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  floatFromLeftUpperBar,
  floatFromRightSectionTitle,
  floatFromLeftLowerBar,
} from "../../motion/section-title";
import { SectionTitle } from "../common/titles";

const Services = () => {
  const photoRef = useRef();
  const textRef = useRef();

  const photoInView = useInView(photoRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });

  return (
    <section
      id="services"
      className="bg-darkish top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden z-1 pt-10"
    >
      
      <SectionTitle title="ΥΠΗΡΕΣΙΕΣ" />

    </section>
  );
};

export default Services;
