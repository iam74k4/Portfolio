<div align="center">

# Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)

Next.js 14 で構築されたモダンなポートフォリオサイト

[**Demo**](https://iam74k4.github.io/Portfolio/)

</div>

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Dark Mode**: next-themes

## Features

- ダークモード対応（システム設定に自動対応）
- レスポンシブデザイン
- スムーズなアニメーション
- SEO 最適化（OGP, Twitter Card）
- アクセシビリティ対応
- PWA 対応

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customization

`config/site.config.ts` を編集するだけでサイト全体が更新されます。

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

`app/globals.css` でカラーをカスタマイズ:

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

## Deploy

### GitHub Pages

1. **Settings** → **Pages** → **Source**: `GitHub Actions`
2. `main` ブランチへのプッシュで自動デプロイ

### Vercel / Netlify

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## License

MIT
