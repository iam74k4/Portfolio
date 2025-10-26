'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Github,
  ExternalLink,
  ShoppingBag,
  CheckSquare,
  BarChart3,
  Palette,
  Cloud,
  FileText,
  LucideIcon,
} from 'lucide-react';
import { projectsConfig } from '@/config/site.config';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  // アイコンのマッピング
  const iconMap: Record<string, LucideIcon> = {
    Eコマースプラットフォーム: ShoppingBag,
    タスク管理アプリ: CheckSquare,
    ポートフォリオビルダー: Palette,
  };

  // 設定からプロジェクトを読み込み、アイコンを追加
  const projects = projectsConfig.map((project) => ({
    ...project,
    icon: iconMap[project.title] || FileText, // デフォルトアイコン
  }));

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

  return (
    <section id="projects" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div
        className="max-w-[1200px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="modern-divider mb-6" />
          <p className="text-[16px] text-secondary max-w-[600px] mx-auto leading-relaxed mb-10">
            私が手掛けたプロジェクトの一部をご紹介します
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-white shadow-modern-md'
                    : 'bg-surface text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="modern-card group relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-[48px]"></div>

              {/* Icon container */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {(() => {
                    const Icon = project.icon;
                    return <Icon size={28} strokeWidth={1} className="text-accent" />;
                  })()}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-[11px] font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold text-foreground">{project.title}</h3>
                <p className="text-[15px] text-secondary leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="modern-badge text-[12px]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[14px] text-foreground hover:text-accent transition-colors font-medium"
                  >
                    <Github size={16} strokeWidth={1} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[14px] text-foreground hover:text-accent transition-colors font-medium"
                  >
                    <ExternalLink size={16} strokeWidth={1} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

