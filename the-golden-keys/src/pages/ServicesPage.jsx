import { motion } from "framer-motion";
import { fadeInSlow } from "../motion/home-sections";
import { servicesLarge } from "../data/services";
import LargeServicesCard from "../components/services/LargeServicesCard";
import { PageTitle } from "../components/common/titles";
import { keyBulletPoint } from "../assets/footer/index";
import { Link } from "react-router-dom";
import { phone } from "../assets/services/index";

const ServicesPage = () => {
  return (
    <motion.div className="bg-light top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-[200px] lg:pt-[150px] pb-14">
      <PageTitle title="ΥΠΗΡΕΣΙΕΣ" />

      <motion.div
        className="flex flex-col justify-center items-center mt-14"
        style={{ zIndex: 2 }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 mb-2 gap-y-8 lg:gap-x-32 xl:gap-x-40">
          {servicesLarge.map((service, index) => (
            <motion.div
              key={index}
              className="relative flex flex-row mx-auto justify-center text-start my-auto"
              initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -100 : 100,
                translateY: -100,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                translateY: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                },
              }}
            >
              <img
                src={keyBulletPoint}
                alt="key bullet point"
                className="w-6 h-6 md:w-10 md:h-10"
              />
              <LargeServicesCard key={index} {...service} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center mt-10 mb-4 w-[80%] md:w-[50%] lg:w-[90%] gap-x-2"
          variants={fadeInSlow}
          initial="hidden"
          animate="show"
        >
          <Link to="/contact">
            <motion.div className="flex flex-row justify-center items-center mt-4 mb-4">
              <motion.img
                src={phone}
                alt="phone icon"
                className="w-14 h-14"
                animate={{
                  x: [0, -2, 2, -2, 2, 0],
                  y: [0, 2, -2, 2, -2, 0],
                  rotate: [0, -1, 1, -1, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
              <button
                type="button"
                className="text-dark font-links font-bold text-md no-underline cursor-pointer py-3 px-4 w-full text-[16px] md:text-[20px]"
              >
                Αν σας ενδιαφέρει κάποια από τις υπηρεσίες,{" "}
                <span className="underline font-bold">επικοινωνήστε</span> μαζί
                μου!
              </button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
