/**
 * サイトに表示する内容はすべてこのファイルに集約している。
 * 内容を変えるときは、ここだけを編集すればよい。
 *
 * 注意: 履歴書に載っていても、公開サイトに出してはいけない情報がある。
 * 生年月日・性別・電話番号・年収・転職希望条件などはここに書かないこと。
 */

export type SectionId = 'home' | 'about' | 'works' | 'skills' | 'contact'

export interface Section {
  id: SectionId
  label: string
  /** パネル見出しに出す一言 */
  caption: string
}

export const sections: Section[] = [
  { id: 'home', label: 'Home', caption: 'つくる速さを、変える。' },
  { id: 'about', label: 'About', caption: 'これまでと、いま。' },
  { id: 'works', label: 'Works', caption: '手を動かした記録。' },
  { id: 'skills', label: 'Skills', caption: '使ってきた道具。' },
  { id: 'contact', label: 'Contact', caption: 'お気軽にどうぞ。' },
]

export const profile = {
  name: '岡崎 昂功',
  /** サイドバーと About のモノグラムに出る文字 */
  initials: 'TO',
  role: 'System Engineer',
  location: 'Kanagawa, Japan',
  /** Home の大見出し。行ごとに配列で持つ */
  headline: ['つくる速さを、', '仕組みで変える。'],
  lead: '金融系の基幹システム開発を本業に、生成AIと自動化で「つくる工程そのもの」を速くすることに取り組んでいます。手元の不便もそのまま道具にする性分で、macOS アプリから Discord Bot まで個人でつくっています。',
  bio: [
    'コンピュータサイエンスを専攻し、2024年から株式会社リンクレアの金融ビジネス本部でシステム開発に携わっています。証券会社向け基幹システムのモダナイゼーション案件で、基礎検討・要件定義から基本設計、C# による実装、単体からシナリオまでのテスト、レビューまでを担当しています。',
    '生成AIと自動化ツールで開発工程を効率化することに取り組んでいます。設計書の Markdown 変換、画面コードの生成、テスト支援などを通じて、40人日を見込んでいた14画面の製造・単体テストを約20人日で完了しました。ステップ数計算やテスト件数集計など、プロジェクトを横断して使えるツールの作成・展開も行っています。',
    '社外では顧客・ベンダーを含む約200名規模のライトニングトークで AI 活用事例を発表し、社内では約500名規模の全社発表に登壇しました。自部署ではハンズオン形式の AI 勉強会を企画・開催しています。',
  ],
  email: 'iam74k4@gmail.com',
  /** Home 右側に出す「いま何をしているか」。装飾の代わりに事実を置く */
  now: [
    { label: 'Now', value: '株式会社リンクレア / 金融ビジネス本部' },
    { label: 'Project', value: '証券会社向け基幹システムのモダナイゼーション' },
    { label: 'Focus', value: '生成AIと自動化による開発効率化' },
  ],
  /** Home 右側の数値 */
  stats: [
    { value: '約2倍', label: '開発生産性' },
    { value: '200名+', label: '登壇' },
  ],
  /** Contact セクションの文言。コンポーネント側に文字を置かない */
  contact: {
    title: ['AI 活用の話も、', 'コードの話も。'],
    lead: '開発効率化や生成AIの活用、個人開発について話せる機会を探しています。お仕事のご相談も歓迎です。',
  },
}

export interface CareerEntry {
  period: string
  title: string
  org: string
}

/**
 * 新しい順。学歴は卒業年月しか分かっていないため、入学年は書いていない。
 */
export const career: CareerEntry[] = [
  {
    period: '2024.03 — 現在',
    title: 'システムエンジニア / 金融ビジネス本部',
    org: '株式会社リンクレア',
  },
  {
    period: '〜 2024.03 卒業',
    title: 'コンピュータサイエンス学部 コンピュータサイエンス学科',
    org: '東京工科大学',
  },
  {
    period: '〜 2021.03 卒業',
    title: '情報処理科',
    org: '日本工学院八王子専門学校',
  },
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
    title: '開発工程の効率化',
    summary:
      '生成AIと自動化を設計・製造・テストに組み込み、40人日を見込んでいた14画面を約20人日で完了。横断で使える集計ツールも展開している。',
    year: '2024 —',
    role: '業務 / 金融系基幹システム',
    tags: ['生成AI', 'C#', 'Playwright'],
  },
  {
    title: 'AppMixer',
    summary:
      'macOS 14.4 の Core Audio Process Tap でアプリ単位の音量と出力先を制御する常駐アプリ。署名と公証を通して配布している。',
    year: '2026',
    role: '個人開発',
    tags: ['Swift', 'SwiftUI', 'Core Audio'],
    repo: 'https://github.com/iam74k4/AppMixer-MacOS',
    demo: 'https://github.com/iam74k4/AppMixer-MacOS/releases/latest',
  },
  {
    title: 'AI Agent Config',
    summary:
      'Cursor / Claude Code / Copilot でばらつくルールを1か所に集約し、1コマンドで各環境へ配る。本業の AI 活用を自分の環境にも通すため。',
    year: '2026',
    role: '個人開発',
    tags: ['Shell', 'PowerShell', 'Node.js'],
    repo: 'https://github.com/iam74k4/ai-agent-config',
  },
  {
    title: 'Discord Bot',
    summary:
      '機能追加がコマンド単位で完結する153ファイルのモジュール構成。VC 録音と SQLite 永続化を備え、Railway へ継続デプロイしている。',
    year: '2026',
    role: '個人開発',
    tags: ['TypeScript', 'discord.js', 'SQLite'],
    repo: 'https://github.com/iam74k4/DiscordBot',
  },
  {
    title: 'EventPlayback',
    summary:
      'マウスとキーボードの操作を記録・再生する Windows 向けツール。依存3つ・単一ファイル約800行。exe は Actions で自動ビルド。',
    year: '2025',
    role: '個人開発',
    tags: ['Python', 'pynput', 'CustomTkinter'],
    repo: 'https://github.com/iam74k4/EventPlayback',
    demo: 'https://github.com/iam74k4/EventPlayback/releases/latest',
  },
  {
    title: 'Portfolio',
    summary:
      'このサイト。「ページ全体をスクロールさせない」制約を先に置いて設計。main への push で GitHub Pages へ自動公開している。',
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
    /** 経験年数などの補足。履歴書の表記をそのまま使う（例: '3年以上'） */
    experience?: string
    /** 0–100。入れるとメーター表示に切り替わる。根拠がなければ入れない */
    level?: number
  }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'C#', experience: '3年以上' },
      { name: 'SQL', experience: '3年以上' },
      { name: 'JavaScript', experience: '3年以上' },
      { name: 'HTML / CSS', experience: '3年以上' },
      { name: 'Python', experience: '1年以上' },
      { name: 'TypeScript' },
      { name: 'Swift' },
    ],
  },
  {
    category: 'Frameworks / Infra',
    items: [
      { name: '.NET Framework', experience: '3年以上' },
      { name: 'ASP.NET', experience: '3年以上' },
      { name: 'SQL Server', experience: '3年以上' },
      { name: 'Oracle Database', experience: '3年以上' },
      { name: 'Docker' },
      { name: 'Google Cloud' },
    ],
  },
  {
    category: 'Practice',
    items: [
      { name: '生成AI活用・開発効率化' },
      { name: '基本設計 / 詳細設計', experience: '3年以上' },
      { name: '開発・実装', experience: '3年以上' },
      { name: 'テスト（単体〜シナリオ）', experience: '3年以上' },
      { name: 'Git / GitHub Actions' },
      { name: 'Playwright' },
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
