import { MotionConfig, Variants } from 'framer-motion';

// Framer Motion configuration for mobile
export const mobileMotionConfig: Partial<typeof MotionConfig> = {
  reducedMotion: 'user',
  features: {
    layout: false,
    layoutId: false,
  },
};

// Configuration for desktop
export const desktopMotionConfig: Partial<typeof MotionConfig> = {
  reducedMotion: 'user',
  features: {
    layout: true,
    layoutId: true,
  },
};

// Common easing functions
export const easings = {
  smooth: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
};

// Common animation variant generator functions
export const createContainerVariants = (isLowEndDevice = false): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isLowEndDevice ? 0.05 : 0.15,
      delayChildren: isLowEndDevice ? 0.1 : 0.2,
    },
  },
});

export const createItemVariants = (isLowEndDevice = false): Variants => ({
  hidden: { opacity: 0, y: isLowEndDevice ? 10 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isLowEndDevice ? 0.4 : 0.8,
      ease: easings.smooth,
    },
  },
});

// Fade in variant
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// Slide up variant
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};