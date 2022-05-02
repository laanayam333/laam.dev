const globalDuration = 0.6;
const globalEase = [0.83, 0, 0.17, 1];

export const pageMotionProps = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: globalDuration,
      ease: globalEase,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: globalDuration,
      delay: globalDuration,
      ease: globalEase,
    },
  },
};
