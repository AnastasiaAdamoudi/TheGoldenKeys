export const floatFromLeftAreas = {
  initial: {
    x: -100,
    y: 0,
    opacity: 0,
    rotate: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const floatFromRightAreas = {
  initial: {
    x: 100,
    opacity: 0,
    rotate: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      delay: 0.6,
    },
  },
};

export const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
};
