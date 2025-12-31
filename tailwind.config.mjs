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
        'border-glass': 'var(--border-glass)',
        'card-bg': 'var(--card-bg)',
        surface: 'var(--surface)',
        'glass-highlight': 'var(--glass-highlight)',
        white: '#ffffff',
      },
      boxShadow: {
        'modern-sm': 'var(--shadow-sm)',
        'modern-md': 'var(--shadow-md)',
        'modern-lg': 'var(--shadow-lg)',
        'glass': 'var(--shadow-glass)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
        'glass-lg': '0 24px 48px rgba(0, 0, 0, 0.12), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
        'glow': '0 0 40px var(--accent-glow)',
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
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'liquid': 'liquid 20s ease-in-out infinite',
        'liquid-slow': 'liquid 30s ease-in-out infinite',
        'morph': 'morph 15s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'ripple': 'ripple 1s cubic-bezier(0, 0, 0.2, 1) infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(8px) rotate(-1deg)' },
        },
        liquid: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '50%': { transform: 'translate(-10px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(-25px, -15px) scale(1.02)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'liquid': 'cubic-bezier(0.4, 0, 0.1, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};

export default config;
