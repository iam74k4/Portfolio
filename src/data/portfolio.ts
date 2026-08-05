/**
 * サイトに表示する内容はすべてこのファイルに集約している。
 * 本番の内容に差し替えるときは、ここだけを編集すればよい。
 */

export type SectionId = 'home' | 'about' | 'works' | 'skills' | 'contact'

export interface Section {
  id: SectionId
  label: string
  /** パネル見出しに出す一言 */
  caption: string
}

export const sections: Section[] = [
  { id: 'home', label: 'Home', caption: 'つくることで、伝える。' },
  { id: 'about', label: 'About', caption: 'これまでと、いま。' },
  { id: 'works', label: 'Works', caption: '手を動かした記録。' },
  { id: 'skills', label: 'Skills', caption: '使える道具。' },
  { id: 'contact', label: 'Contact', caption: 'お気軽にどうぞ。' },
]

export const profile = {
  name: '山田 太郎',
  nameEn: 'Taro Yamada',
  role: 'Frontend Engineer',
  location: 'Tokyo, Japan',
  /** Home の大見出し。行ごとに配列で持つ */
  headline: ['触って気持ちいい', 'インターフェースを。'],
  lead: 'Web フロントエンドを軸に、設計から実装、パフォーマンス改善まで一貫して担当しています。動きと余白で「わかりやすさ」をつくることに関心があります。',
  bio: [
    '受託開発会社でのフロントエンド実装を経て、現在は自社プロダクトの UI 設計・実装を担当しています。デザイナーと並走しながら、デザインシステムの構築とコンポーネントの標準化を進めてきました。',
    '直近は Core Web Vitals の改善に注力し、主要導線の LCP を 3.4s から 1.2s まで短縮しました。計測できるものは計測し、判断を数字に寄せることを大事にしています。',
  ],
  email: 'hello@example.com',
}

export interface CareerEntry {
  period: string
  title: string
  org: string
}

export const career: CareerEntry[] = [
  { period: '2023 — 現在', title: 'Frontend Engineer', org: '株式会社サンプルプロダクト' },
  { period: '2021 — 2023', title: 'Web Developer', org: '株式会社サンプルスタジオ' },
  { period: '2019 — 2021', title: 'Web Developer (Jr.)', org: '合同会社サンプルワークス' },
  { period: '2015 — 2019', title: '情報工学専攻', org: 'サンプル大学 工学部' },
]

export interface Work {
  title: string
  summary: string
  year: string
  tags: string[]
  url?: string
}

export const works: Work[] = [
  {
    title: 'Atlas Design System',
    summary: '80 以上のコンポーネントを擁するデザインシステム。設計から運用まで担当。',
    year: '2025',
    tags: ['React', 'TypeScript', 'Storybook'],
  },
  {
    title: 'Nomad Booking',
    summary: '宿泊予約サービスのリニューアル。予約完了率を 18% 改善。',
    year: '2025',
    tags: ['Next.js', 'GraphQL'],
  },
  {
    title: 'Pulse Analytics',
    summary: 'リアルタイム分析ダッシュボード。数万点の描画を WebGL で最適化。',
    year: '2024',
    tags: ['React', 'D3.js', 'WebGL'],
  },
  {
    title: 'Kotoba Editor',
    summary: '日本語に最適化した Markdown エディタ。縦書きプレビューを実装。',
    year: '2024',
    tags: ['TypeScript', 'CRDT'],
  },
  {
    title: 'Orbit Portfolio Kit',
    summary: 'ポートフォリオ向けテーマの OSS。GitHub で 1.2k スター。',
    year: '2023',
    tags: ['Astro', 'OSS'],
  },
  {
    title: 'Sonar CLI',
    summary: 'Web パフォーマンスを継続計測する CLI。CI に組み込んで回帰を検知。',
    year: '2023',
    tags: ['Node.js', 'CI'],
  },
  {
    title: 'Mellow Player',
    summary: '波形表示つきの音楽プレイヤー。Web Audio API で解析処理を実装。',
    year: '2022',
    tags: ['Web Audio', 'Canvas'],
  },
  {
    title: 'Tsumugi Docs',
    summary: '社内向けドキュメント基盤。全文検索を WASM で クライアント側に。',
    year: '2022',
    tags: ['WASM', 'Search'],
  },
]

export interface SkillGroup {
  category: string
  items: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'TypeScript', level: 90 },
      { name: 'React / Next.js', level: 85 },
      { name: 'CSS / Design System', level: 80 },
      { name: 'Accessibility', level: 65 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'GraphQL', level: 65 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'Go', level: 45 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Vite / Bundler', level: 70 },
      { name: 'Docker', level: 55 },
    ],
  },
]

export interface SocialLink {
  label: string
  short: string
  url: string
}

export const socials: SocialLink[] = [
  { label: 'GitHub', short: 'GH', url: 'https://github.com/' },
  { label: 'X', short: 'X', url: 'https://x.com/' },
  { label: 'LinkedIn', short: 'IN', url: 'https://www.linkedin.com/' },
]
