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
    <footer className="relative py-12 border-t border-border/50 bg-transparent">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} strokeWidth={1} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.div
            className="text-[13px] text-secondary text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>© {currentYear} Portfolio. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

