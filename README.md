<div align="center">

# Portfolio

[![Build Status](https://img.shields.io/github/actions/workflow/status/iam74k4/Portfolio/ci.yml?branch=main&style=flat-square)](https://github.com/iam74k4/Portfolio/actions)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A modern portfolio website built with Next.js 14

[**Demo**](https://iam74k4.github.io/Portfolio/) | [日本語](./README.ja.md)

</div>

---

## Overview

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark mode support, smooth animations, SEO optimization, and PWA capabilities.

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Dark Mode**: next-themes

## Features

- Dark mode support (automatically adapts to system settings)
- Responsive design
- Smooth animations
- SEO optimization (OGP, Twitter Card)
- Accessibility support
- PWA support

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

Edit `config/site.config.ts` to customize the entire site:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  email: 'your@email.com',
  social: {
    github: 'https://github.com/...',
    linkedin: 'https://linkedin.com/in/...',
    twitter: 'https://twitter.com/...',
  },
  hero: { ... },
  about: { ... },
  seo: { ... },
  pwa: { ... },
};

export const skillsConfig = [ ... ];
export const experiencesConfig = [ ... ];
export const certificationsConfig = [ ... ];
export const projectsConfig = [ ... ];
export const blogPostsConfig = [ ... ];
```

### Theme Colors

Customize colors in `app/globals.css`:

```css
:root {
  --accent: #3b82f6;
}
:root.dark {
  --accent: #60a5fa;
}
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── sections/          # Hero, About, Skills, etc.
│   ├── Header.tsx
│   └── Footer.tsx
├── config/
│   └── site.config.ts     # All site content
└── public/
    └── favicon.ico
```

## Environment Variables

For GitHub Pages deployment, set the following environment variable:

- `NEXT_PUBLIC_BASE_PATH`: Base path for the site (e.g., `/Portfolio` for GitHub Pages)

In GitHub Actions, this can be set via repository variables or defaults to `/Portfolio`.

For local development, create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_PATH=
```

## Deploy

### GitHub Pages

1. **Settings** → **Pages** → **Source**: `GitHub Actions`
2. Push to `main` branch to trigger automatic deployment

### Vercel / Netlify

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and updates.

## License

MIT License - see [LICENSE](LICENSE) file for details
