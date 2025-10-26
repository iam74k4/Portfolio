'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiencesConfig } from '@/config/site.config';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = experiencesConfig;

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div
        className="max-w-[980px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="modern-divider" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative modern-card md:ml-20 hover:shadow-modern-lg transition-shadow"
              >
                {/* Icon */}
                <div className="absolute -left-28 top-8 hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    {exp.type === 'work' ? (
                      <Briefcase size={18} strokeWidth={1} className="text-accent" />
                    ) : (
                      <GraduationCap size={18} strokeWidth={1} className="text-accent" />
                    )}
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="flex items-center gap-3 mb-4 md:hidden">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    {exp.type === 'work' ? (
                      <Briefcase size={16} strokeWidth={1} className="text-accent" />
                    ) : (
                      <GraduationCap size={16} strokeWidth={1} className="text-accent" />
                    )}
                  </div>
                  <div className="text-[13px] text-accent font-semibold">{exp.period}</div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[20px] font-bold text-foreground">{exp.title}</h3>
                      <p className="text-[15px] text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="hidden md:block text-[13px] text-secondary font-medium whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-[15px] text-secondary leading-relaxed pt-2">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

