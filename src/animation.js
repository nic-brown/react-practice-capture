export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      // duration: 1,
      ease: "easeOut",
    },
  },
};
