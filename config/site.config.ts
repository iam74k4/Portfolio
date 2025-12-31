/**
 * Site configuration file
 *
 * ⚠️ Edit this file to update the entire site!
 *
 * Customization steps:
 * 1. Replace the information below with your own
 * 2. Run npm run build
 * 3. Deploy with git push
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
  // Basic Information (Required)
  // ========================================
  name: 'Your Name', // Your name
  title: 'Full Stack Developer', // Your title
  url: 'https://iam74k4.github.io/Portfolio', // ⚠️ Deployment URL (Required)
  description:
    'Modern portfolio website showcasing full stack development projects, skills, and experience.',

  // ========================================
  // Contact Information (Required)
  // ========================================
  email: 'your.email@example.com', // ⚠️ Email address (Required)
  location: 'Tokyo, Japan', // Location
  phone: '+81-XX-XXXX-XXXX', // Phone number (Optional)

  // ========================================
  // Social Links (Required)
  // ========================================
  social: {
    github: 'https://github.com/iam74k4', // ⚠️ GitHub (Required)
    linkedin: 'https://linkedin.com/in/yourname', // LinkedIn
    twitter: 'https://twitter.com/yourhandle', // Twitter/X
    twitterHandle: '@yourhandle', // Twitter @ (for OGP)
  },

  // ========================================
  // Hero Section
  // ========================================
  hero: {
    roles: ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'],
    greeting: "Hi, I'm",
  },

  // ========================================
  // About Section
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
  // SEO Settings
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
    ogImage: '/og-image.svg', // public/og-image.svg (1200x630px)
    googleVerification: 'your-google-verification-code', // Set after registering with Google Search Console
  },

  // ========================================
  // PWA Settings
  // ========================================
  pwa: {
    name: 'Portfolio Website',
    shortName: 'Portfolio',
    themeColor: '#6366f1',
    backgroundColor: '#ffffff',
  },
};

// ========================================
// Skills Configuration
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
// Work Experience & Education
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
// Certifications & Awards
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
// Projects
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
// Blog Posts
// ========================================
export const blogPostsConfig: BlogPost[] = [
  {
    title: 'React 18の新機能を完全解説',
    excerpt:
      'Concurrent Rendering、Automatic Batching、Transitionsなど、React 18の主要な新機能を実例とともに解説します。',
    date: '2024年1月15日',
    readTime: '5分',
    category: 'React',
    url: '#', // Blog post URL
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

