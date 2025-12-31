'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: siteConfig.social.github },
    { name: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin },
    { name: 'Twitter', icon: Twitter, href: siteConfig.social.twitter },
    { name: 'Email', icon: Mail, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <footer className="relative py-16 bg-transparent">
      <div className="glass-divider mb-12" />

      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-icon-btn !w-12 !h-12"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 24px var(--accent-glow)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} strokeWidth={1.5} className="text-secondary hover:text-accent transition-colors" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.div
            className="glass-pill !py-2 !px-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[13px] text-secondary">© {currentYear} Portfolio. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
