import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  floatFromLeftUpperBar,
  floatFromRightSectionTitle,
  floatFromLeftLowerBar,
} from "../../motion/section-title";
import { reviews } from "../../data/reviews";
import { SectionTitle } from "../common/titles";

const Reviews = () => {
  const photoRef = useRef();
  const textRef = useRef();

  const photoInView = useInView(photoRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });

  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-darkish to-reddish top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden z-1 pt-[130px] lg:pt-[80px]"
    >
      
      <SectionTitle title="ΑΞΙΟΛΟΓΗΣΕΙΣ ΠΕΛΑΤΩΝ" />

    </section>
  );
};

export default Reviews;
