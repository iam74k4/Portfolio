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
  /** 何を作ったか + 結果。数字で言えることは数字で書く */
  summary: string
  year: string
  /** その案件での立場。個人開発なら「個人開発」 */
  role: string
  /** 使った技術。1つ目が主役になるよう並べる */
  tags: string[]
  /** ソースコード。公開していなければ省略 */
  repo?: string
  /** 動くもの。公開していなければ省略 */
  demo?: string
}

export const works: Work[] = [
  {
    title: 'Atlas Design System',
    summary: '84 コンポーネントを 6 プロダクトへ横展開。UI 実装の工数を平均 40% 削減した。',
    year: '2025',
    role: '設計・実装リード（3名）',
    tags: ['TypeScript', 'React', 'Storybook'],
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Nomad Booking',
    summary: '宿泊予約フローを再設計。離脱率の高い3画面を統合し、予約完了率を 18% 改善。',
    year: '2025',
    role: 'フロントエンド担当',
    tags: ['Next.js', 'GraphQL', 'Playwright'],
    demo: 'https://example.com/',
  },
  {
    title: 'Pulse Analytics',
    summary: '5万点の時系列を 60fps で描画。Canvas から WebGL へ移行し描画時間を 1/12 に。',
    year: '2024',
    role: '個人開発',
    tags: ['WebGL', 'React', 'D3.js'],
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Kotoba Editor',
    summary: '日本語組版に対応した Markdown エディタ。CRDT による同時編集を自前実装。',
    year: '2024',
    role: '個人開発',
    tags: ['TypeScript', 'CRDT', 'WebSocket'],
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Orbit Portfolio Kit',
    summary: 'ポートフォリオ向けテーマの OSS。1.2k スター、コントリビュータ 23 名。',
    year: '2023',
    role: 'メンテナ',
    tags: ['Astro', 'OSS'],
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Sonar CLI',
    summary: 'Lighthouse を CI に組み込む CLI。PR ごとに計測し、性能低下を自動で検知する。',
    year: '2023',
    role: '個人開発',
    tags: ['Node.js', 'GitHub Actions'],
    repo: 'https://github.com/',
  },
  {
    title: 'Mellow Player',
    summary: 'Web Audio API で FFT 解析した波形を描画する音楽プレイヤー。',
    year: '2022',
    role: '個人開発',
    tags: ['Web Audio', 'Canvas'],
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Tsumugi Docs',
    summary: '社内ドキュメント基盤。全文検索を WASM でクライアント側に置き、検索を 80ms に。',
    year: '2022',
    role: 'フロントエンド担当',
    tags: ['Rust', 'WASM', 'Vite'],
  },
]

export interface SkillGroup {
  category: string
  items: {
    name: string
    /** 実務での経験年数。バーの根拠として表に出す */
    years: number
    /** 習熟度（0–100）。バーの長さになる */
    level: number
  }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'TypeScript', years: 6, level: 90 },
      { name: 'React / Next.js', years: 5, level: 85 },
      { name: 'CSS / Design System', years: 6, level: 80 },
      { name: 'Web Accessibility', years: 3, level: 65 },
    ],
  },
  {
    category: 'Backend / Infra',
    items: [
      { name: 'Node.js', years: 5, level: 75 },
      { name: 'GraphQL', years: 3, level: 65 },
      { name: 'PostgreSQL', years: 3, level: 60 },
      { name: 'Docker / CI', years: 4, level: 60 },
    ],
  },
  {
    category: 'Practice',
    items: [
      { name: 'Git / コードレビュー', years: 7, level: 90 },
      { name: 'テスト自動化', years: 4, level: 75 },
      { name: 'パフォーマンス改善', years: 4, level: 80 },
      { name: 'Figma / デザイン連携', years: 5, level: 70 },
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
