import { motion } from "framer-motion";
import { fadeIn } from "../../motion/home-sections";
import { servicesSmall } from "../../data/services";
import { SmallServicesCard } from "../../components/services";
import { SectionTitle } from "../../components/common/titles";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <motion.div
    className="bg-darkish top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-10 pb-12 lg:pb-2"
  >
    
    <SectionTitle title="ΥΠΗΡΕΣΙΕΣ" />

      <motion.div className="flex flex-col justify-evenly items-center mx-auto mt-14"
      style={{ zIndex: 2 }}
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-2 mb-2 md:mb-4">
          {servicesSmall.map((service, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -100 : 100,
                translateY: -100,
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                translateY: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                },
              }}
            >
              <SmallServicesCard key={index} {...service} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
        className="flex flex-col justify-center items-center mt-1 mb-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        >
        <Link to="/services">
        <button
            type="button"
            className="bg-midGold text-dark hover:bg-reddish hover:text-light font-links font-bold text-md no-underline cursor-pointer py-3 px-4 
            rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-midGold focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Δείτε όλες τις υπηρεσίες
          </button>
        </Link>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
