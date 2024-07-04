import { motion } from "framer-motion";
import { fadeIn } from "../motion/home-sections";
import { servicesLarge } from "../data/services";
import { LargeServicesCard } from "../components/services";
import { PageTitle } from "../components/common/titles";

const ServicesPage = () => {
  return (
    <motion.div
    className="bg-light top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-[200px] lg:pt-[150px] pb-14 lg:pb-28"
  >
    
    <PageTitle title="ΥΠΗΡΕΣΙΕΣ" />

      <motion.div className="flex flex-col justify-evenly items-center mt-14"
      style={{ zIndex: 2 }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-6 mb-2 md:mb-4">
          {servicesLarge.map((service, index) => (
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
              <LargeServicesCard key={index} {...service} />
            </motion.div>
          ))}
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
