# Portfolio Website

Apple 風のミニマルで洗練されたデザインを採用した、Next.js 14、TypeScript、Tailwind CSS を使用して構築された、モダンでレスポンシブなポートフォリオウェブサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **ダークモード**: next-themes

## デザインコンセプト

### Apple-Inspired Design

- **ミニマリズム**: 余計な装飾を排除し、コンテンツに焦点を当てたデザイン
- **タイポグラフィ**: SF Pro Display 風の美しいフォントと最適な文字間隔
- **カラースキーム**: 洗練された白/黒ベースの Apple ライクなカラーパレット
- **スムーズなアニメーション**: cubic-bezier(0.4, 0, 0.2, 1)を使用した流れるような動き
- **余白**: 豊富なスペーシングで読みやすさを向上

## 主な機能

- ✨ Apple 風のミニマルで洗練された UI/UX デザイン
- 🌓 ダークモード対応（システム設定に自動対応）
- 📱 完全レスポンシブデザイン
- 🎨 スムーズで控えめなアニメーション効果
- 🚀 高速なページパフォーマンス
- ♿ アクセシビリティ対応
- 🎯 SEO 最適化

## セクション

1. **Hero Section**: 大きなタイポグラフィと CTA
2. **About Section**: 自己紹介と実績統計
3. **Skills Section**: ミニマルなスキルカードグリッド
4. **Experience Section**: 職歴と学歴のタイムライン
5. **Certifications Section**: 資格と受賞歴
6. **Projects Section**: プロジェクトポートフォリオ
7. **Blog Section**: 技術記事の一覧
8. **Contact Section**: シンプルなお問い合わせフォーム

## 開発環境のセットアップ

### 前提条件

- Node.js 18 以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
# 本番用ビルド（静的エクスポート）
npm run build

# 静的ファイルは out/ ディレクトリに生成されます
```

## 🚀 クイックスタート

### ⚡️ たった 1 ファイルで完了！

**`config/site.config.ts`** を編集するだけで、サイト全体が自動更新されます！

```bash
# 1. 設定ファイルを編集（5分）
code config/site.config.ts  # 名前、URL、メール、SNSリンク、職歴、プロジェクトなど

# 2. アセットファイルを配置（10分）
# public/ にファビコンとOGP画像を配置

# 3. ビルド確認
npm run build

# 4. デプロイ
git add .
git commit -m "feat: initial portfolio website"
git push origin main
```

GitHub Pages 設定：**Settings** → **Pages** → **Source**: `GitHub Actions`

---

## ✨ メンテナンス性の特徴

### 型安全性 ✅

- TypeScript による完全な型定義
- エディタの IntelliSense 対応
- ビルド時の自動バリデーション

### 設定の一元管理 ✅

- たった 1 ファイル（`config/site.config.ts`）で全体を管理
- 複数のファイルを編集する必要なし

---

## デプロイ

### GitHub Pages（自動デプロイ設定済み）

1. GitHub リポジトリにプッシュ
2. **Settings** → **Pages** → **Source**: `GitHub Actions`
3. `main` ブランチへのプッシュで自動デプロイ

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. GitHub リポジトリにプッシュ
2. Vercel アカウントでインポート
3. 自動的にデプロイされます

### その他のプラットフォーム

- **Netlify**: `npm run build` → `out/` ディレクトリをデプロイ
- **AWS Amplify**: リポジトリを接続して自動デプロイ
- **Cloudflare Pages**: GitHub 連携で自動デプロイ

## カスタマイズ

### ⚡️ 超簡単！1 ファイルだけ編集

**`config/site.config.ts`** を編集するだけで、以下が自動更新されます：

- ✅ 名前、役職、自己紹介
- ✅ SNS リンク（GitHub、LinkedIn、Twitter）
- ✅ 連絡先（メール、所在地）
- ✅ スキルと技術スタック
- ✅ 職歴と学歴
- ✅ 資格と受賞歴
- ✅ プロジェクト情報
- ✅ ブログ記事
- ✅ SEO メタデータ（OGP、Twitter Card）

### 例:

```typescript
// config/site.config.ts
export const siteConfig = {
  name: 'Your Name', // ← ここを変更
  email: 'your.email@example.com', // ← ここを変更
  social: {
    github: 'https://github.com/...', // ← ここを変更
  },
  // ... その他の設定
};
```

### カラーテーマの変更

`app/globals.css` の CSS 変数でカラーパレットをカスタマイズできます：

```css
:root {
  --background: #ffffff;
  --foreground: #1d1d1f;
  --accent: #0071e3;
  /* ... */
}
```

### 新しいセクションの追加

1. `components/sections/` に新しいコンポーネントを作成
2. `app/page.tsx` にインポートして追加
3. `components/Header.tsx` のナビゲーションに追加

## プロジェクト構造

```
Portfolio/
├── config/
│   ├── site.config.ts         # ⭐ 全ての設定（名前、URL、コンテンツ）
│   ├── site.config.types.ts   # TypeScript型定義
│   └── site.config.validator.ts # バリデーション
├── app/
│   ├── layout.tsx             # ルートレイアウト
│   ├── page.tsx               # ホームページ
│   ├── not-found.tsx          # カスタム404ページ
│   └── globals.css            # グローバルスタイル
├── components/
│   ├── sections/              # セクションコンポーネント（全て config から読み込み）
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages自動デプロイ設定
├── public/                    # 静的ファイル（ファビコン、OGP画像など）
├── README.md
└── next.config.mjs            # Static Export設定済み
```

## デザインシステム

### カスタムクラス

- `.modern-card`: Apple 風のカードコンポーネント
- `.modern-button`: プライマリボタン（丸いボーダー）
- `.modern-button-secondary`: セカンダリボタン（アウトライン）
- `.modern-nav`: ブラー効果付きナビゲーションバー
- `.modern-input`: フォーム入力フィールド
- `.modern-badge`: バッジ/タグ
- `.modern-divider`: セクション区切り線

### タイポグラフィ

- `text-display-large`: 80px - メインヘッドライン
- `text-display`: 64px - セクションヘッドライン
- `text-headline`: 48px - サブヘッドライン
- `text-body-large`: 21px - 大きめの本文
- `text-body`: 17px - 標準の本文

## パフォーマンス最適化

- ✅ 静的サイト生成（SSG）でゼロレイテンシ
- ✅ コード分割とレイジーローディング
- ✅ フォントの最適化
- ✅ CSS の最小化
- ✅ 高速な初期読み込み
- ✅ ミニマルな背景エフェクト

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## サポート

問題が発生した場合は、Issue を作成してください。

---

**作成日**: 2025 年 10 月

**バージョン**: 1.0.0

**デザイン**: Apple-Inspired Minimalist Design
