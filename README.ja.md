<div align="center">

# Portfolio

[![Build Status](https://img.shields.io/github/actions/workflow/status/iam74k4/Portfolio/ci.yml?branch=main&style=flat-square)](https://github.com/iam74k4/Portfolio/actions)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Next.js 14 で構築されたモダンなポートフォリオサイト

[**デモ**](https://iam74k4.github.io/Portfolio/) | [English](./README.md)

</div>

---

## 概要

Next.js 14、TypeScript、Tailwind CSSで構築されたモダンでレスポンシブなポートフォリオサイト。ダークモード対応、スムーズなアニメーション、SEO最適化、PWA機能を備えています。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router, Static Export)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **ダークモード**: next-themes

## 機能

- ダークモード対応（システム設定に自動対応）
- レスポンシブデザイン
- スムーズなアニメーション
- SEO 最適化（OGP, Twitter Card）
- アクセシビリティ対応
- PWA 対応

## インストール

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# 本番用にビルド
npm run build
```

## 使い方

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

### テーマカラー

`app/globals.css` でカラーをカスタマイズ:

```css
:root {
  --accent: #3b82f6;
}
:root.dark {
  --accent: #60a5fa;
}
```

## プロジェクト構造

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

## 環境変数

GitHub Pagesへのデプロイ時は、以下の環境変数を設定してください:

- `NEXT_PUBLIC_BASE_PATH`: サイトのベースパス（例: GitHub Pagesの場合は`/Portfolio`）

GitHub Actionsでは、リポジトリ変数で設定するか、デフォルトで`/Portfolio`が使用されます。

ローカル開発時は、`.env.local`ファイルを作成してください:

```env
NEXT_PUBLIC_BASE_PATH=
```

## デプロイ

### GitHub Pages

1. **Settings** → **Pages** → **Source**: `GitHub Actions`
2. `main` ブランチへのプッシュで自動デプロイ

### Vercel / Netlify

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## ライセンス

MIT License - 詳細は[LICENSE](LICENSE)ファイルを参照してください

