import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  shopInside,
  shopOutside,
  car,
  downArrow,
} from "../../assets/hero/index.js";
import {
  floatFromLeftHeroImage,
  floatFromUpHeroImage,
  floatFromRightHeroImage,
  floatFromUpHeroTitle,
  sliderVariant,
  downArrowVariant,
  imageVariants,
  imageTransitionVariants,
} from "../../motion/hero.js";

const images = [shopInside, shopOutside, car];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setIsFirstMount(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-reddish to-darkish top-0 left-0 w-screen h-auto min-h-screen mx-auto overflow-hidden z-1 mt-[100px] lg:mt-[80px] flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-10">
        <div className="w-full flex items-center justify-center gap-4 lg:gap-0">
          {/* Display the three images horizontally for large screens */}
          <div className="hidden lg:flex gap-4">
            <motion.img
              key={0}
              src={images[0]}
              alt="hero image"
              className="w-1/3 h-auto object-contain"
              variants={floatFromLeftHeroImage}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            />
            <motion.img
              key={1}
              src={images[1]}
              alt="hero image"
              className="w-1/3 h-auto object-contain"
              variants={floatFromUpHeroImage}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            />
            <motion.img
              key={2}
              src={images[2]}
              alt="hero image"
              className="w-1/3 h-auto object-contain"
              variants={floatFromRightHeroImage}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            />
          </div>

          {/* Display a single image and alternate for smaller screens */}
          <div className="w-full lg:hidden">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="hero image"
              className="w-full h-auto object-contain"
              variants={isFirstMount ? imageVariants : imageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-8">
        <div>
          {/* <motion.h1
          className="text-4xl lg:text-7xl font-bold font-title text-center text-midGold"
          variants={floatFromUpHeroTitle}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
          >
          Τα Χρυσά Κλειδιά
          </motion.h1> */}
          <motion.div
            className="flex items-center justify-center"
            variants={downArrowVariant}
            initial="initial"
            animate="animate"
          >
            <a href="/#about">
              <motion.div
                className="w-[35px] h-[75px] rounded-3xl border-4 border-light flex justify-start items-start"
                variants={downArrowVariant}
              >
                <motion.div variants={sliderVariant}>
                  <motion.img
                    src={downArrow}
                    alt="down arrow"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </motion.div>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
