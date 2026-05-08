export const fadeUp = {
  initial: {
    opacity: 0,
    y: 80,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.8,
    type: "spring",
    stiffness: 80,
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -80,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.8,
    type: "spring",
    stiffness: 80,
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 80,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.8,
    type: "spring",
    stiffness: 80,
  },
};
