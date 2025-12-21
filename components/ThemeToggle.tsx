'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-xl bg-surface hover:shadow-modern-md transition-all flex items-center justify-center">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 rounded-xl bg-surface hover:shadow-modern-md hover:scale-105 transition-all flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun
          className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform"
          strokeWidth={1}
        />
      ) : (
        <Moon
          className="w-5 h-5 text-accent group-hover:-rotate-12 transition-transform"
          strokeWidth={1}
        />
      )}
    </button>
  );
}

