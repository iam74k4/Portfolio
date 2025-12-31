'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.8, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      {/* Background Gradient - matches body::before */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(210, 40%, 96%) 0%, hsl(200, 50%, 95%) 50%, hsl(210, 40%, 96%) 100%)',
        }}
      />
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(135deg, hsl(230, 25%, 6%) 0%, hsl(220, 30%, 7%) 50%, hsl(230, 25%, 6%) 100%)',
        }}
      />

      {/* Background Orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '20%',
          right: '20%',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '20%',
          left: '20%',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10"
        >
          <div className="glass-card inline-block px-10 py-6 !transform-none hover:!transform-none">
            <h1 className="text-[56px] md:text-[72px] font-bold gradient-text">Portfolio</h1>
          </div>
        </motion.div>

        {/* Loading Bar */}
        <motion.div className="w-56 h-2 rounded-full overflow-hidden mx-auto bg-[var(--glass-bg)] border border-[var(--glass-border)]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-[var(--accent-light)]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Dots */}
        <motion.div className="flex items-center justify-center gap-3 mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-accent"
              style={{ boxShadow: '0 2px 8px var(--accent-glow)' }}
              animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
