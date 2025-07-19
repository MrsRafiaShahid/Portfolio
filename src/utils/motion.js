import { useSpring } from "@react-spring/web";

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
export const useFadeUp = (inView, delay = 0) =>
  useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    delay,
    config: { mass: 1, tension: 170, friction: 20 },
  });
 export const useFadeIn = (inView, delay = 0) =>
  useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.95)",
    delay,
    config: { mass: 1, tension: 170, friction: 20 },
  });