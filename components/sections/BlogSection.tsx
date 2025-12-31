'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPostsConfig } from '@/config/site.config';

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const blogPosts = blogPostsConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
  };

  return (
    <section id="blog" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div
        className="max-w-[1200px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">Latest Articles</h2>
          <div className="modern-divider mb-6" />
          <p className="text-[16px] text-secondary max-w-[600px] mx-auto leading-relaxed">
            技術的な知見やプロジェクトで得た経験を記事にして共有しています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="glass-card no-hover p-7 group cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <span className="modern-badge text-[12px]">{post.category}</span>
              </div>

              <h3 className="text-[20px] font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              <p className="text-[14px] text-secondary leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
                <div className="flex items-center gap-4 text-[13px] text-secondary">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} strokeWidth={1.5} className="text-accent" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <motion.div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <ArrowRight size={14} strokeWidth={1.5} className="text-accent group-hover:translate-x-0.5 transition-transform" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
