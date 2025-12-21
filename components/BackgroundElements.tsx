'use client';

import { motion } from 'framer-motion';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export default function BackgroundElements() {
  const { isMobile, isLowEndDevice } = useDeviceDetection();
  
  const shouldAnimate = !isLowEndDevice;
  const blurClass = isMobile ? 'blur-2xl' : 'blur-3xl';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Primary gradient orb - Indigo */}
      <motion.div
        className={`absolute rounded-full ${blurClass}`}
        style={{
          width: isMobile ? 300 : 500,
          height: isMobile ? 300 : 500,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          top: '10%',
          right: '10%',
        }}
        animate={shouldAnimate ? {
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        } : {}}
      />

      {/* Secondary gradient orb - Pink */}
      <motion.div
        className={`absolute rounded-full ${blurClass}`}
        style={{
          width: isMobile ? 250 : 400,
          height: isMobile ? 250 : 400,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          bottom: '20%',
          left: '5%',
        }}
        animate={shouldAnimate ? {
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.08, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        } : {}}
      />

      {/* Tertiary gradient orb - Amber (dark mode enhanced) */}
      <motion.div
        className={`absolute rounded-full ${blurClass} opacity-50 dark:opacity-70`}
        style={{
          width: isMobile ? 200 : 350,
          height: isMobile ? 200 : 350,
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
          top: '50%',
          right: '30%',
        }}
        animate={shouldAnimate ? {
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        } : {}}
      />
    </div>
  );
}

