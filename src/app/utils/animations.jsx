export const slideDown = (delayEnter, delayExit) => {
  return {
    initial: { y: -1000 },
    enter: {
      y: 0,
      transition: {
        delay: delayEnter,
        duration: 0.8,
        ease: [0.08, 0.65, 0.53, 0.96],
      },
    },
    exit: {
      y: -1000,
      transition: {
        duration: 0.8,
        delay: delayExit,
        ease: [0.08, 0.65, 0.53, 0.96],
      },
    },
  };
};

export const slideUp = {
  initial: {
    bottom: -20,
    opacity: 0,
  },
  enter: {
    bottom: 24,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.6,
      ease: [0.08, 0.65, 0.53, 0.96],
    },
  },
};

export const staggerAnimation = {
  initial: { opacity: 0, bottom: -60 },
  enter: (delay) => ({
    opacity: 1,
    bottom: 0,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: [0.08, 0.65, 0.53, 0.96],
    },
  }),
};

export const fadeDown = {
  initial: { scaleY: 0 },
  enter: {
    scaleY: "100%",
    transition: {
      delay: 0.8,
      duration: 1.2,
      ease: [0.08, 0.65, 0.53, 0.96],
    },
  },
};

export const fadeInOut = {
  initial: { opacity: 0 },
  enter: {
    opacity: 0.6,
    transition: {
      delay: 0.15,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.6,
      duration: 0.3,
    },
  },
};
