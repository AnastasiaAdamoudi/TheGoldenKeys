import { motion } from "framer-motion";
import { fadeIn } from "../../motion/home-sections";
import { reviews } from "../../data/reviews";
import ReviewCard from "../reviews/ReviewCard";
import { SectionTitle } from "../common/titles";

const Reviews = () => {
  return (
    <section
    id="reviews"
    className="bg-gradient-to-b from-darkish to-reddish top-0 left-0 right-0 w-full min-w-screen h-auto mx-auto overflow-hidden py-20"
  >
    
    <SectionTitle title="ΑΞΙΟΛΟΓΗΣΕΙΣ ΠΕΛΑΤΩΝ" />

      <motion.div className="flex flex-col justify-evenly items-center mt-14"
      style={{ zIndex: 2 }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-6 mb-2 md:mb-4">
          {reviews.map((review, index) => (
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
              <ReviewCard key={index} {...review} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.a href="https://www.google.com/maps/place/%CE%9A%CE%9B%CE%95%CE%99%CE%94%CE%91%CE%A1%CE%91%CE%A3+%CE%91%CE%9C%CE%A0%CE%95%CE%9B%CE%9F%CE%9A%CE%97%CE%A0%CE%9F%CE%99+%CE%98%CE%95%CE%A3%CE%A3%CE%91%CE%9B%CE%9F%CE%9D%CE%99%CE%9A%CE%97%CE%A3/@40.6519085,22.9217313,17z/data=!4m8!3m7!1s0x14a83989b9482943:0xae905e9f718fd3e5!8m2!3d40.6519085!4d22.9243062!9m1!1b1!16s%2Fg%2F11gj6_x7q4?entry=ttu" 
        target="_blank" rel="noreferrer" 
        >
        <motion.div 
        className="flex flex-col justify-center items-center mt-8 mb-0 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 via-blue-700 to-green-500 p-2"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        >
        <button
            type="button"
            className="bg-red-600 text-white hover:bg-darkish hover:text-light font-links font-bold text-sm no-underline cursor-pointer py-2 px-4 
            rounded-lg w-full lg:w-52 xl:w-full focus:outline-none focus:ring-2 focus:ring-midGold focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
          Δείτε όλες τις αξιολογήσεις στο Google
          </button>
        </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Reviews;
