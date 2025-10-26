'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        メインコンテンツへスキップ
      </a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'modern-nav' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="max-w-[980px] mx-auto px-6 py-3" aria-label="メインナビゲーション">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-[20px] font-bold gradient-text hover:opacity-80 transition-opacity"
              aria-label="ホームページへ"
            >
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[15px] text-foreground hover:text-accent transition-colors font-medium"
                  aria-label={`${item.name}セクションへ移動`}
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu - Simple */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav
            className="max-w-[980px] mx-auto px-6 py-4 space-y-2"
            aria-label="モバイルナビゲーション"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-[17px] text-foreground hover:text-accent transition-colors py-2 font-medium"
                aria-label={`${item.name}セクションへ移動`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>
    </>
  );
}

