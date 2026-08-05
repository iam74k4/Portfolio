/**
 * サイトに表示する内容はすべてこのファイルに集約している。
 * 内容を変えるときは、ここだけを編集すればよい。
 */

export type SectionId = 'home' | 'about' | 'works' | 'skills' | 'contact'

export interface Section {
  id: SectionId
  label: string
  /** パネル見出しに出す一言 */
  caption: string
}

export const sections: Section[] = [
  { id: 'home', label: 'Home', caption: '必要なものを、つくる。' },
  { id: 'about', label: 'About', caption: 'これまでと、いま。' },
  { id: 'works', label: 'Works', caption: '手を動かした記録。' },
  { id: 'skills', label: 'Skills', caption: '使ってきた道具。' },
  { id: 'contact', label: 'Contact', caption: 'お気軽にどうぞ。' },
]

export const profile = {
  name: 'Taka',
  /** サイドバーと About のモノグラムに出る文字 */
  initials: 'T',
  role: 'System Engineer',
  location: 'Japan',
  /** Home の大見出し。行ごとに配列で持つ */
  headline: ['使う道具は、', '自分でつくる。'],
  lead: '自然言語処理を専攻したのち、システムエンジニアとして開発しています。手元で困ったことをそのまま道具にするのが好きで、macOS のボリュームミキサーから Discord Bot、AI エージェントの設定管理まで、必要になったものを個人開発でつくっています。',
  bio: [
    '人工知能（自然言語処理）を専攻し、現在はシステムエンジニアとして開発に携わっています。Python・TypeScript・C# を中心に、Web からデスクトップアプリまで幅広く手を動かしています。',
    '個人開発では「自分が毎日使うもの」を基準に選んでいます。公開するものには README と CI を必ず用意し、他の人が読んでそのまま動かせる状態にしておくことを大事にしています。',
  ],
  email: 'iam74k4@gmail.com',
  /** Home の右下に出る数値バッジ */
  stats: [
    { value: '5', label: 'Projects' },
    { value: 'AI / NLP', label: 'Major' },
  ],
}

export interface CareerEntry {
  period: string
  title: string
  org: string
}

/**
 * TODO: 実際の経歴に差し替える。
 * GitHub からは読み取れなかったので、期間と所属は仮置きのままにしてある。
 */
export const career: CareerEntry[] = [
  { period: '要記入', title: 'System Engineer', org: '所属を記入してください' },
  { period: '要記入', title: '人工知能専攻（自然言語処理）', org: '学校名を記入してください' },
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
  /** 動くもの・配布物。なければ省略 */
  demo?: string
}

export const works: Work[] = [
  {
    title: 'AppMixer',
    summary:
      'macOS でアプリごとに音量を変えるメニューバー常駐アプリ。Core Audio の Process Tap でアプリ単位の音声を扱い、出力デバイスごとに音量を記憶する。',
    year: '2026',
    role: '個人開発',
    tags: ['Swift', 'SwiftUI', 'Core Audio'],
    repo: 'https://github.com/iam74k4/AppMixer-MacOS',
    demo: 'https://github.com/iam74k4/AppMixer-MacOS/releases/latest',
  },
  {
    title: 'Discord Bot',
    summary:
      'discord.js v14 で組んだモジュール式の Bot。スラッシュコマンド、VC 録音、権限とクールダウンのミドルウェアを備え、Railway へ継続デプロイしている。',
    year: '2026',
    role: '個人開発',
    tags: ['TypeScript', 'discord.js', 'SQLite'],
    repo: 'https://github.com/iam74k4/DiscordBot',
  },
  {
    title: 'AI Agent Config',
    summary:
      'Cursor / Claude Code / GitHub Copilot で同じルールを共有するための設定集。各環境へのセットアップを1コマンドにまとめた。',
    year: '2026',
    role: '個人開発',
    tags: ['Shell', 'PowerShell', 'Node.js'],
    repo: 'https://github.com/iam74k4/ai-agent-config',
  },
  {
    title: 'EventPlayback',
    summary:
      'マウスとキーボードの操作を記録して再生する Windows 向けツール。依存を3つに絞り、マクロは JSON で保存する。',
    year: '2025',
    role: '個人開発',
    tags: ['Python', 'pynput', 'CustomTkinter'],
    repo: 'https://github.com/iam74k4/EventPlayback',
    demo: 'https://github.com/iam74k4/EventPlayback/releases/latest',
  },
  {
    title: 'Portfolio',
    summary:
      'このサイト。ページ全体をスクロールさせない SPA として実装し、main に push すると GitHub Pages へ自動で公開される。',
    year: '2026',
    role: '個人開発',
    tags: ['TypeScript', 'React', 'Vite'],
    repo: 'https://github.com/iam74k4/Portfolio',
  },
]

export interface SkillGroup {
  category: string
  items: {
    name: string
    /**
     * 実務での経験年数と習熟度。両方入れるとメーター表示になり、
     * 省略するとタグ表示になる。根拠のない数字を置かないため、既定では省略している。
     */
    years?: number
    level?: number
  }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'C#' },
      { name: 'Java' },
      { name: 'PHP' },
      { name: 'Swift' },
    ],
  },
  {
    category: 'Frameworks / Infra',
    items: [
      { name: '.NET' },
      { name: 'Django' },
      { name: 'Docker' },
      { name: 'Google Cloud' },
      { name: 'Nginx' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'Environment / Tools',
    items: [
      { name: 'Windows' },
      { name: 'Linux / Ubuntu' },
      { name: 'Git / GitHub Actions' },
      { name: 'VS Code' },
      { name: 'Visual Studio' },
    ],
  },
]

export type SocialIcon = 'github' | 'x' | 'linkedin' | 'mail'

export interface SocialLink {
  label: string
  /** 使うアイコン。ラベル名から推測せず、ここで明示する */
  icon: SocialIcon
  url: string
}

export const socials: SocialLink[] = [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/iam74k4' },
  { label: 'Mail', icon: 'mail', url: 'mailto:iam74k4@gmail.com' },
]
