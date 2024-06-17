export const floatFromLeftHeroImage = {
    initial: {
      x:-100,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y:-20,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        type: "spring",
      },
    },
  }

export const floatFromUpHeroImage = {
    initial: {
      y:-100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        type: "spring",
      },
    },
  }

  export const floatFromRightHeroImage = {
    initial: {
      x:100,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y:-20,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        type: "spring",
      },
    },
  }

 export const imageVariants = {
    initial: { opacity: 0, y: '-100vh' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };
  
 export const imageTransitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

export const floatFromUpHeroTitle = {
    initial: {
      y:-100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  }

  export const floatFromUpHeroSubtitle = {
    initial: {
      y:-100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
  }

  export const floatFromUpHeroText1 = {
    initial: {
      y:-100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.7,
      },
    },
  }

  export const floatFromUpHeroText2 = {
    initial: {
      y:-100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
      },
    },
  }

  export const downArrowVariant = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        type: "spring",
      },
    },
  }


  export const sliderVariant = {
    initial: {
      x: 0
    },
  animate: {
        y: [0, 20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    },
  }}
