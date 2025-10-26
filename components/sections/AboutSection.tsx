'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/config/site.config';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const stats = siteConfig.about.stats;

  return (
    <section id="about" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div
        className="max-w-[980px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">About Me</h2>
          <div className="modern-divider" />
        </motion.div>

        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              {siteConfig.about.description
                .trim()
                .split('\n\n')
                .filter((p) => p.trim())
                .map((paragraph, index) => (
                  <p key={index} className="text-[18px] text-secondary leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
            </motion.div>

            {/* Right - Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="modern-card text-center p-8">
                  <motion.div
                    className="text-[48px] font-bold gradient-text mb-3 leading-none"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[15px] text-secondary font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

