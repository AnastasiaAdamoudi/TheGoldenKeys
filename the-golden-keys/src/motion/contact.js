export const stackVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

const cardRotations = [28, 21, 14, 7, 0];
export const cardVariants = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visible: (index) => ({
      x: `${index * 5}px`,
      y: `${index * 5}px`,
      rotate: -cardRotations[index],
      transition: {
        delay: 0.5 + index * 0.1,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

export const keyRingVariant = {
        hidden: { x: "100%", rotate: 0 },
        visible: {
          x: 0,
          rotate: 360,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 50,
            duration: 3
          }
        }
      };