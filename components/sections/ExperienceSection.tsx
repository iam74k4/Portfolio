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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
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
          <div className="absolute left-8 top-0 bottom-0 w-[2px] hidden md:block bg-gradient-to-b from-accent via-[var(--accent-light)] to-accent/30" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative md:ml-20">
                {/* Timeline Icon */}
                <div className="absolute -left-28 top-8 hidden md:flex">
                  <div className="glass-icon-btn !w-14 !h-14 !rounded-full glow-accent">
                    {exp.type === 'work' ? (
                      <Briefcase size={20} strokeWidth={1.5} className="text-accent" />
                    ) : (
                      <GraduationCap size={20} strokeWidth={1.5} className="text-accent" />
                    )}
                  </div>
                </div>

                <motion.div className="glass-card no-hover p-7" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  {/* Mobile Icon */}
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                      {exp.type === 'work' ? (
                        <Briefcase size={18} strokeWidth={1.5} className="text-accent" />
                      ) : (
                        <GraduationCap size={18} strokeWidth={1.5} className="text-accent" />
                      )}
                    </div>
                    <span className="modern-badge text-[12px]">{exp.period}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[20px] font-bold text-foreground">{exp.title}</h3>
                        <p className="text-[15px] text-accent font-medium">{exp.company}</p>
                      </div>
                      <span className="hidden md:block modern-badge text-[12px]">{exp.period}</span>
                    </div>
                    <p className="text-[15px] text-secondary leading-relaxed pt-2">{exp.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
