'use client';

import { motion } from 'framer-motion';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export default function BackgroundElements() {
  const { isMobile, isLowEndDevice } = useDeviceDetection();
  
  const shouldAnimate = !isLowEndDevice;
  const orbSize = isMobile ? 0.6 : 1;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -2 }}>
      {/* Primary Orb - Cyan */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 450 * orbSize,
          height: 450 * orbSize,
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '5%',
          right: '10%',
        }}
        animate={shouldAnimate ? {
          y: [0, -30, 15, 0],
          x: [0, 20, -10, 0],
          scale: [1, 1.08, 0.96, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        } : {}}
      />

      {/* Secondary Orb - Lighter Cyan */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 380 * orbSize,
          height: 380 * orbSize,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '15%',
          left: '5%',
        }}
        animate={shouldAnimate ? {
          y: [0, 25, -20, 0],
          x: [0, -15, 10, 0],
          scale: [1, 0.95, 1.05, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        } : {}}
      />

      {/* Tertiary Orb - Sky Blue */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 320 * orbSize,
          height: 320 * orbSize,
          background: 'radial-gradient(circle, rgba(125, 211, 252, 0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
          top: '45%',
          left: '35%',
        }}
        animate={shouldAnimate ? {
          y: [0, -20, 25, 0],
          scale: [1, 1.05, 0.98, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        } : {}}
      />

      {/* Accent Orb - Deep Cyan */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 280 * orbSize,
          height: 280 * orbSize,
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
          top: '70%',
          right: '25%',
        }}
        animate={shouldAnimate ? {
          y: [0, 20, -25, 0],
          x: [0, -25, 15, 0],
        } : {}}
        transition={shouldAnimate ? {
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        } : {}}
      />

      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-30 dark:opacity-15"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
