'use client';

import { motion } from 'framer-motion';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export default function BackgroundElements() {
  const { isMobile, isLowEndDevice } = useDeviceDetection();
  
  // モバイルや低性能デバイスではアニメーションを軽量化
  const shouldAnimate = !isLowEndDevice;
  const blurClass = isMobile ? 'blur-xl' : 'blur-3xl';
  const elementSize = isMobile ? 300 : 600;
  const secondElementSize = isMobile ? 250 : 500;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* ライトモード用アクセント */}
      <motion.div
        className={`absolute rounded-full ${blurClass} opacity-20 dark:opacity-30`}
        style={{
          width: elementSize,
          height: elementSize,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          top: '15%',
          right: '15%',
        }}
        animate={shouldAnimate ? {
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        } : {}}
      />

      {/* ダークモード用追加アクセント */}
      <motion.div
        className={`absolute rounded-full ${blurClass} opacity-0 dark:opacity-20`}
        style={{
          width: secondElementSize,
          height: secondElementSize,
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
          bottom: '20%',
          left: '10%',
        }}
        animate={shouldAnimate ? {
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        } : {}}
        transition={shouldAnimate ? {
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        } : {}}
      />
    </div>
  );
}

