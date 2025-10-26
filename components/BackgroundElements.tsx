'use client';

import { motion } from 'framer-motion';

export default function BackgroundElements() {
  // Apple-style: ミニマルな背景、ほとんど目立たない
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* ライトモード用アクセント */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          top: '15%',
          right: '15%',
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ダークモード用追加アクセント */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-0 dark:opacity-20"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
          bottom: '20%',
          left: '10%',
        }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
    </div>
  );
}

