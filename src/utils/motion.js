export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// export const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//     x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//     y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
export const calcTilt = (x, y, rect) => {
  const dx = x - (rect.left + rect.width / 2);
  const dy = y - (rect.top + rect.height / 2);
  const maxTilt = 20; //
  const rotateX = (-dy / rect.height) * maxTilt;
  const rotateY = (-dx / rect.width) * maxTilt;
  return [rotateX, rotateY];
};
export const slideIn = (direction, delay = 0, duration = 600) => {
  const config = { tension: 170, friction: 26 };
  const initial = {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
  };
  const final = {
    x: 0,
    y: 0,
    opacity: 1,
  };
  return {
    from: initial,
    to: final,
    config,
    delay,
    duration,
  };
};
