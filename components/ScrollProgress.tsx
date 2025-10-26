'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export default function ScrollProgress() {
  const { isLowEndDevice } = useDeviceDetection();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: isLowEndDevice ? 50 : 100,
    damping: isLowEndDevice ? 20 : 30,
    restDelta: isLowEndDevice ? 0.01 : 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
      style={{ scaleX }}
    />
  );
}

