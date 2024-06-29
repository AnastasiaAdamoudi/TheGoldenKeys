import { motion } from "framer-motion";
import { PageTitle } from "../components/common/titles";
import ContactCardContent from "../components/common/contact-card/ContactCardContent";
import PropTypes from "prop-types";
import { keyRing } from "../assets/contact";
import { stackVariants, cardVariants, keyRingVariant } from "../motion/contact";

const Contact = ({ isSmallScreen }) => {
  Contact.propTypes = {
    isSmallScreen: PropTypes.bool,
  };

  const cardColors = ['#4d0000', '#660000', '#800000', '#b30000', '#ff3333 '];

  return (
    <motion.div
      className="bg-light top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-[200px] lg:pt-[150px] pb-14 lg:pb-28"
      style={{ zIndex: 2 }}
    >
      <PageTitle title="ΕΠΙΚΟΙΝΩΝΙΑ" />

      <motion.div className="flex flex-col lg:flex-row justify-between items-center w-full h-auto mt-20 lg:mt-28 relative px-4 lg:px-12">
      
      {/* Stack of cards */}
      <motion.div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end lg:items-center mx-auto lg:mx-0 lg:pr-14">
          <motion.div 
            className="relative w-[300px] h-[190px] lg:w-[400px] lg:h-[250px] mb-12 lg:mb-0"
            variants={stackVariants}
            initial="hidden"
            animate="visible"
          >
            {cardColors.map((color, index) => (
              <motion.div
                key={index}
                className="absolute w-full h-full drop-shadow-xl"
                style={{ 
                  backgroundColor: color,
                  zIndex: index + 1,
                }}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                {index === cardColors.length - 1 && <ContactCardContent />}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Key ring */}
        <motion.div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-start lg:items-center mx-auto lg:mx-0 lg:pl-14">
        <motion.div className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
          <motion.img
            className="w-full h-full"
            src={keyRing}
            alt="key ring"
            variants={keyRingVariant}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
