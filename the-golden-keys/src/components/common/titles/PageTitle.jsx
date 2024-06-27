import { motion } from "framer-motion";
import {
  floatFromLeftUpperBar,
  floatFromRightSectionTitle,
  floatFromLeftLowerBar,
} from "../../../motion/section-title";

const PageTitle = ( { title } ) => {
  return (
    <motion.div className="flex flex-col items-center mx-auto justify-center max-w-[300px]">
        <motion.div
          className="flex justify-center text-center mx-auto"
          variants={floatFromLeftUpperBar}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.hr className="w-[280px] my-2 border-2 border-reddish" />
        </motion.div>
        <motion.div className="flex flex-col text-center justify-center mx-auto">
          <motion.h1
            className="font-subtitle text-darkish text-4xl"
            variants={floatFromRightSectionTitle}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {title}
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
  )
}

export default PageTitle;
