import type { Transition } from "motion/react";

export const SPRING_TAP: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 26,
  mass: 0.6,
};

export const SPRING_PANEL: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

export const FADE: Transition = { duration: 0.24, ease: [0.4, 0, 0.2, 1] };

export const CROSSFADE: Transition = { duration: 0.9, ease: "easeInOut" };

export const lift = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.97 },
  transition: SPRING_TAP,
} as const;
