'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Trophy } from 'lucide-react';
import { certificationsConfig } from '@/config/site.config';

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const iconMap: Record<string, typeof Shield> = {
    'AWS Certified Solutions Architect': Shield,
    'Google Cloud Professional Developer': Award,
    'Best Innovation Award': Trophy,
  };

  const certifications = certificationsConfig.map((cert) => ({
    ...cert,
    icon: iconMap[cert.name] || Award,
    level: cert.name.includes('Award') ? 'Award' : 'Professional',
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
  };

  return (
    <section id="certifications" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div
        className="max-w-[980px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">
            Certifications & Awards
          </h2>
          <div className="modern-divider mb-6" />
          <p className="text-[16px] text-secondary max-w-[600px] mx-auto leading-relaxed">
            専門的な認定資格と受賞歴
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="glass-card no-hover p-7" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-[17px] font-semibold text-foreground leading-snug">{cert.name}</h3>
                      <span className="modern-badge text-[11px] !py-0.5">{cert.level}</span>
                    </div>
                    <p className="text-[14px] text-secondary mb-3 leading-relaxed">{cert.description}</p>
                    <div className="flex items-center gap-2 text-[13px] text-secondary">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
