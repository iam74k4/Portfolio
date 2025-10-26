'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, CheckCircle, Trophy } from 'lucide-react';
import { certificationsConfig } from '@/config/site.config';

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // アイコンのマッピング
  const iconMap: Record<string, typeof Shield> = {
    'AWS Certified Solutions Architect': Shield,
    'Google Cloud Professional Developer': Award,
    'Best Innovation Award': Trophy,
  };

  // 設定からデータを読み込み、アイコンを追加
  const certifications = certificationsConfig.map((cert) => ({
    ...cert,
    icon: iconMap[cert.name] || Award, // デフォルトアイコン
    level: cert.name.includes('Award') ? 'Award' : 'Professional',
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
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
              <motion.div key={index} variants={itemVariants} className="modern-card group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon size={24} strokeWidth={1} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-[17px] font-semibold text-foreground leading-snug">
                        {cert.name}
                      </h3>
                      <span className="flex-shrink-0 text-[11px] px-2 py-0.5 bg-accent/10 text-accent rounded-md font-medium">
                        {cert.level}
                      </span>
                    </div>
                    <p className="text-[14px] text-secondary mb-3 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-2 text-[13px] text-secondary">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="text-border">•</span>
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

