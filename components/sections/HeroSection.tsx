'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code2, Rocket } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { isMobile, isLowEndDevice } = useDeviceDetection();

  const roles = siteConfig.hero.roles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const handleTyping = () => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
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
        return () => clearTimeout(timeout);
      }
    };

    const cleanup = handleTyping();
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText, isDeleting, currentRoleIndex]);

  // モバイルではアニメーションを軽量化
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
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 modern-badge"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span>Available for work</span>
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

            <motion.p
              variants={itemVariants}
              className="text-[15px] text-secondary leading-relaxed"
            >
              crafting beautiful and functional digital experiences
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[15px] text-secondary leading-relaxed"
            >
              情熱を持ってユーザー中心の美しいWebアプリケーションを作成しています
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="modern-button">
                Get in Touch
              </a>
              <a href="#projects" className="modern-button-secondary">
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div variants={itemVariants} className="hidden lg:block relative">
            <div className="relative w-full h-[500px]">
              {/* Decorative Cards */}
              <motion.div
                className="absolute top-0 right-0 w-72 h-64 modern-card"
                animate={!isLowEndDevice ? { y: [0, -10, 0] } : {}}
                transition={!isLowEndDevice ? { duration: 5, repeat: Infinity, ease: 'easeInOut' } : {}}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Code2 size={24} strokeWidth={1} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Clean Code</h3>
                    <p className="text-sm text-secondary">
                      Writing maintainable and scalable solutions
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-72 h-64 modern-card"
                animate={!isLowEndDevice ? { y: [0, 10, 0] } : {}}
                transition={!isLowEndDevice ? { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } : {}}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Rocket size={24} strokeWidth={1} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Fast Performance</h3>
                    <p className="text-sm text-secondary">Optimized for speed and efficiency</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-20">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-secondary hover:text-foreground transition-colors"
          >
            <span className="text-[14px] font-normal">Scroll to explore</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-current"
              animate={!isLowEndDevice ? { y: [0, 5, 0] } : {}}
              transition={!isLowEndDevice ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : {}}
            >
              <path
                d="M8 3V13M8 13L12 9M8 13L4 9"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

