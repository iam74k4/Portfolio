/**
 * サイト設定ファイル
 *
 * ⚠️ このファイルだけ編集すれば全体に反映されます！
 *
 * カスタマイズ手順：
 * 1. 下記の情報をあなたの情報に書き換える
 * 2. npm run build でビルド
 * 3. git push でデプロイ
 */

import type {
  SiteConfig,
  SkillCategory,
  Experience,
  Certification,
  Project,
  BlogPost,
} from './site.config.types';

export const siteConfig: SiteConfig = {
  // ========================================
  // 基本情報（必須）
  // ========================================
  name: 'Your Name', // あなたの名前
  title: 'Full Stack Developer', // あなたの肩書き
  url: 'https://iam74k4.github.io/Portfolio', // ⚠️ デプロイURL（必須）
  description:
    'Modern portfolio website showcasing full stack development projects, skills, and experience.',

  // ========================================
  // 連絡先（必須）
  // ========================================
  email: 'your.email@example.com', // ⚠️ メールアドレス（必須）
  location: 'Tokyo, Japan', // 所在地
  phone: '+81-XX-XXXX-XXXX', // 電話番号（任意）

  // ========================================
  // SNSリンク（必須）
  // ========================================
  social: {
    github: 'https://github.com/iam74k4', // ⚠️ GitHub（必須）
    linkedin: 'https://linkedin.com/in/yourname', // LinkedIn
    twitter: 'https://twitter.com/yourhandle', // Twitter/X
    twitterHandle: '@yourhandle', // Twitter @ (OGP用)
  },

  // ========================================
  // Hero セクション
  // ========================================
  hero: {
    roles: ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'],
    greeting: "Hi, I'm",
  },

  // ========================================
  // About セクション
  // ========================================
  about: {
    description: `
      こんにちは！私はフルスタックWeb開発者として、魅力的で高性能なWebアプリケーションの構築に情熱を注いでいます。

      フロントエンドからバックエンドまで、モダンな技術スタックを活用して、
      ユーザーに最高の体験を提供することを目指しています。

      新しい技術を学ぶことが大好きで、常に成長し続けることを心がけています。
    `,
    stats: [
      { label: 'Years Experience', value: '3+' },
      { label: 'Projects Completed', value: '20+' },
      { label: 'Happy Clients', value: '15+' },
    ],
  },

  // ========================================
  // SEO設定
  // ========================================
  seo: {
    keywords: [
      'Portfolio',
      'Full Stack Developer',
      'Web Developer',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'UI/UX',
    ],
    ogImage: '/og-image.png', // public/og-image.png (1200x630px)
    googleVerification: 'your-google-verification-code', // Google Search Console登録後に設定
  },

  // ========================================
  // PWA設定
  // ========================================
  pwa: {
    name: 'Portfolio Website',
    shortName: 'Portfolio',
    themeColor: '#3b82f6',
    backgroundColor: '#ffffff',
  },
};

// ========================================
// スキル設定
// ========================================
export const skillsConfig: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'REST API', level: 85 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Vercel', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

// ========================================
// 職歴・学歴
// ========================================
export const experiencesConfig: Experience[] = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company A',
    period: '2022 - Present',
    description:
      'フロントエンドからバックエンドまでの設計・開発を担当。React、Next.js、Node.jsを使用した大規模アプリケーションの開発をリード。',
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Startup B',
    period: '2020 - 2022',
    description:
      'スタートアップ環境で複数のプロジェクトを担当。MVPの開発から本番環境のスケーリングまで幅広く経験。',
  },
  {
    type: 'education',
    title: 'Computer Science',
    company: 'University Name',
    period: '2016 - 2020',
    description: 'コンピュータサイエンス専攻。アルゴリズム、データ構造、機械学習を中心に学習。',
  },
];

// ========================================
// 資格・受賞歴
// ========================================
export const certificationsConfig: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Issued 2023',
    description: 'AWS上でのスケーラブルなシステム設計に関する知識を証明',
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Issued 2022',
    description: 'Google Cloud Platformにおける開発スキルと専門知識を証明',
  },
  {
    name: 'Best Innovation Award',
    issuer: 'Tech Conference Tokyo',
    date: '2023',
    description: '革新的なWebアプリケーションの開発により表彰',
  },
];

// ========================================
// プロジェクト
// ========================================
export const projectsConfig: Project[] = [
  {
    title: 'Eコマースプラットフォーム',
    description:
      'Next.js 14とStripeを使用した、モダンなEコマースプラットフォーム。リアルタイム在庫管理、決済処理、管理ダッシュボードを実装。',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    title: 'タスク管理アプリ',
    description:
      'リアルタイムコラボレーション機能を備えたタスク管理アプリケーション。WebSocketとMongoDBで構築。',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    github: 'https://github.com/yourusername/task-manager-app',
    demo: 'https://task-manager-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    title: 'ポートフォリオビルダー',
    description:
      'ドラッグ＆ドロップで簡単にポートフォリオサイトを作成できるツール。Next.jsとFramer MotionでリッチなUIを実現。',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'CMS'],
    github: 'https://github.com/yourusername/portfolio-builder',
    demo: 'https://portfolio-builder-demo.vercel.app',
    category: 'Frontend',
  },
];

// ========================================
// ブログ記事
// ========================================
export const blogPostsConfig: BlogPost[] = [
  {
    title: 'React 18の新機能を完全解説',
    excerpt:
      'Concurrent Rendering、Automatic Batching、Transitionsなど、React 18の主要な新機能を実例とともに解説します。',
    date: '2024年1月15日',
    readTime: '5分',
    category: 'React',
    url: '#', // ブログ記事のURL
  },
  {
    title: 'Next.js App Routerの実践的な使い方',
    excerpt:
      'Next.js 13以降のApp Routerを使用した実践的な開発手法とベストプラクティスをまとめました。',
    date: '2023年12月10日',
    readTime: '8分',
    category: 'Next.js',
    url: '#',
  },
  {
    title: 'TypeScriptで型安全なコードを書くコツ',
    excerpt:
      'TypeScriptの高度な型機能を活用して、より安全で保守性の高いコードを書く方法を解説します。',
    date: '2023年11月20日',
    readTime: '6分',
    category: 'TypeScript',
    url: '#',
  },
];

