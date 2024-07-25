import { motion } from "framer-motion";
import { fadeIn } from "../../motion/home-sections";
import { photos } from "../../assets/image-gallery";
import { SectionTitle } from "../common/titles";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section
    id="gallery"
    className="bg-darkish top-0 left-0 right-0 w-full min-w-screen h-auto mx-auto overflow-hidden pt-20"
  >
    
    <SectionTitle title="ΣΥΛΛΟΓΗ ΠΟΛΥΜΕΣΩΝ" />

      <motion.div className="flex flex-col justify-evenly items-center mt-10"
      style={{ zIndex: 2 }}
      >
        <motion.div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-2 md:mb-4">
          {photos.map((item, index) => (
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
              <img src={item.src} alt={item.alt} className="h-auto shadow-lg w-[150px] md:w-[250px] lg:w-[300px]" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
        className="flex flex-col justify-center items-center mt-10 mb-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        >
        <Link to="/gallery">
        <button
            type="button"
            className="bg-midGold text-dark hover:bg-reddish hover:text-light font-links font-bold text-md no-underline cursor-pointer py-3 px-4 
            rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-midGold focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Δείτε όλες τις φωτογραφίες και τα βίντεο
          </button>
        </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Gallery;
