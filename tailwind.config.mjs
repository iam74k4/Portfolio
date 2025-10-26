/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        border: 'var(--border)',
        'card-bg': 'var(--card-bg)',
        surface: 'var(--surface)',
        white: '#ffffff',
      },
      boxShadow: {
        'modern-sm': 'var(--shadow-sm)',
        'modern-md': 'var(--shadow-md)',
        'modern-lg': 'var(--shadow-lg)',
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-large': [
          '80px',
          { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' },
        ],
        display: ['64px', { lineHeight: '1.0625', letterSpacing: '-0.02em', fontWeight: '700' }],
        headline: ['48px', { lineHeight: '1.08349', letterSpacing: '-0.003em', fontWeight: '600' }],
        'title-large': [
          '40px',
          { lineHeight: '1.1', letterSpacing: '-0.005em', fontWeight: '600' },
        ],
        title: ['32px', { lineHeight: '1.125', letterSpacing: '0em', fontWeight: '600' }],
        'body-large': [
          '21px',
          { lineHeight: '1.381', letterSpacing: '0.011em', fontWeight: '400' },
        ],
        body: ['17px', { lineHeight: '1.47059', letterSpacing: '-0.022em', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;

