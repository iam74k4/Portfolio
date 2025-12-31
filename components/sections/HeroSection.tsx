'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code2, Rocket, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { isLowEndDevice } = useDeviceDetection();

  const roles = siteConfig.hero.roles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    if (!currentRole) return;

    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    let cleanup: (() => void) | undefined;

    if (!isDeleting && typedText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      cleanup = () => clearTimeout(timeout);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
      cleanup = () => clearTimeout(timeout);
    }

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText, isDeleting, currentRoleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isLowEndDevice ? 0.05 : 0.15,
        delayChildren: isLowEndDevice ? 0.1 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isLowEndDevice ? 10 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isLowEndDevice ? 0.4 : 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <motion.div
        className="max-w-[1200px] mx-auto px-6 py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="glass-pill flex items-center gap-3 !py-2.5 !px-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span className="text-[14px] font-medium text-foreground/80">Available for work</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-foreground leading-[1.1] tracking-tight"
            >
              {siteConfig.hero.greeting}, I&apos;m{' '}
              <span className="gradient-text block">{siteConfig.name}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[18px] md:text-[20px] text-secondary leading-relaxed font-light h-[30px] flex items-center"
            >
              <span className="gradient-text font-medium">{typedText}</span>
              <span className="w-0.5 h-6 bg-accent ml-1 animate-pulse"></span>
            </motion.p>

            <motion.p variants={itemVariants} className="text-[15px] text-secondary leading-relaxed">
              crafting beautiful and functional digital experiences
            </motion.p>

            <motion.p variants={itemVariants} className="text-[15px] text-secondary leading-relaxed">
              Creating beautiful, user-centered web applications with passion
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="modern-button">Get in Touch</a>
              <a href="#projects" className="modern-button-secondary">View Projects</a>
            </motion.div>
          </div>

          {/* Floating Glass Cards */}
          <motion.div variants={itemVariants} className="hidden lg:block relative">
            <div className="relative w-full h-[520px]">
              {/* Card 1 */}
              <motion.div
                className="absolute top-0 right-0 w-80 glass-card no-hover p-7"
                animate={!isLowEndDevice ? { y: [0, -10, 0], rotate: [0, 0.5, 0] } : {}}
                transition={!isLowEndDevice ? { duration: 6, repeat: Infinity, ease: 'easeInOut' } : {}}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Code2 size={26} strokeWidth={1.5} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Clean Code</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Writing maintainable and scalable solutions with modern best practices
                </p>
                <div className="flex gap-2 mt-5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-1.5 rounded-full bg-accent/20" style={{ width: `${20 + i * 12}px` }} />
                  ))}
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="absolute bottom-0 left-0 w-80 glass-card no-hover p-7"
                animate={!isLowEndDevice ? { y: [0, 10, 0], rotate: [0, -0.5, 0] } : {}}
                transition={!isLowEndDevice ? { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } : {}}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Rocket size={26} strokeWidth={1.5} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Fast Performance</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Optimized for speed and efficiency with cutting-edge technologies
                </p>
                <div className="flex gap-2 mt-5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-1.5 rounded-full bg-accent/20" style={{ width: `${20 + i * 12}px` }} />
                  ))}
                </div>
              </motion.div>

              {/* Floating Mini Card - positioned between the two main cards */}
              <motion.div
                className="absolute top-[45%] right-[35%] w-[120px] h-[120px] glass-card no-hover flex items-center justify-center"
                animate={!isLowEndDevice ? { y: [0, -10, 10, 0], rotate: [0, 5, -5, 0] } : {}}
                transition={!isLowEndDevice ? { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 } : {}}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Sparkles size={22} strokeWidth={1.5} className="text-accent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="mt-20">
          <a href="#about" className="inline-flex flex-col items-center gap-3 text-secondary hover:text-foreground transition-colors">
            <span className="text-[14px] font-normal">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5 bg-[var(--glass-bg)]"
            >
              <motion.div
                className="w-1 h-2 bg-current rounded-full"
                animate={!isLowEndDevice ? { y: [0, 12, 0] } : {}}
                transition={!isLowEndDevice ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : {}}
              />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
