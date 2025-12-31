'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { skillsConfig } from '@/config/site.config';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import {
  Code2, Layers, FileCode, Paintbrush, Server, Database, GitBranch, Container, Cloud, Figma,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  React: Code2, 'Next.js': Layers, TypeScript: FileCode, 'Tailwind CSS': Paintbrush,
  'HTML/CSS': FileCode, 'Node.js': Server, Python: Code2, MongoDB: Database,
  PostgreSQL: Database, 'REST API': Server, Git: GitBranch, Docker: Container,
  AWS: Cloud, Vercel: Cloud, 'CI/CD': GitBranch, Figma: Figma,
};

export default function SkillsSection() {
  const ref = useRef(null);
  const { isLowEndDevice } = useDeviceDetection();
  const isInView = useInView(ref, { once: true, amount: isLowEndDevice ? 0.5 : 0.2 });

  const skills = skillsConfig.map((category) => ({
    ...category,
    items: category.items.map((item) => ({ ...item, icon: iconMap[item.name] || Code2 })),
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: isLowEndDevice ? 0.05 : 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isLowEndDevice ? 10 : 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: isLowEndDevice ? 0.4 : 0.8, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div
        className="max-w-[980px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="modern-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div key={skillCategory.category} variants={itemVariants} className="glass-card p-8">
              <h3 className="text-[20px] font-bold text-foreground mb-8">{skillCategory.category}</h3>
              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon size={16} strokeWidth={1.5} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[14px] text-foreground font-medium">{skill.name}</span>
                            <span className="text-[12px] text-accent font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-[var(--surface)] overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-accent to-[var(--accent-light)]"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05, ease: [0.4, 0, 0.2, 1] }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
