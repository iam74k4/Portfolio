# 🎨 Favicon インストール手順

このファイルは作業完了後削除してください。

## 📦 ダウンロードしたファイルの配置

RealFaviconGeneratorからダウンロードしたZIPファイルを解凍したら、以下のファイルを配置してください：

### 必要なファイル一覧

```bash
# ダウンロードしたファイル名 → 配置先
android-chrome-192x192.png  →  public/icon-192.png
android-chrome-512x512.png  →  public/icon-512.png
apple-touch-icon.png        →  public/apple-touch-icon.png
favicon.ico                 →  public/favicon.ico (上書き)
favicon-16x16.png          →  public/favicon-16x16.png
favicon-32x32.png          →  public/favicon-32x32.png
```

## 📝 手動でのコピー手順

### Windows（エクスプローラー）

1. ダウンロードフォルダでZIPファイルを右クリック → 「すべて展開」
2. 展開されたフォルダを開く
3. 以下のファイルを選択：
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
   - `apple-touch-icon.png`
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`

4. コピー（Ctrl+C）

5. Portfolioプロジェクトの `public` フォルダを開く

6. 貼り付け（Ctrl+V）

7. ファイル名を変更：
   - `android-chrome-192x192.png` → `icon-192.png`
   - `android-chrome-512x512.png` → `icon-512.png`

### PowerShell（コマンドライン）

```powershell
# ダウンロードフォルダのパスを確認
cd ~/Downloads

# ZIPを展開（ファイル名は実際の名前に置き換え）
Expand-Archive -Path "favicons.zip" -DestinationPath "favicons"

# Portfolioのpublicフォルダにコピー
cd favicons
Copy-Item "android-chrome-192x192.png" "C:\Users\iam74k4\develop\Portfolio\public\icon-192.png"
Copy-Item "android-chrome-512x512.png" "C:\Users\iam74k4\develop\Portfolio\public\icon-512.png"
Copy-Item "apple-touch-icon.png" "C:\Users\iam74k4\develop\Portfolio\public\"
Copy-Item "favicon.ico" "C:\Users\iam74k4\develop\Portfolio\public\" -Force
Copy-Item "favicon-16x16.png" "C:\Users\iam74k4\develop\Portfolio\public\"
Copy-Item "favicon-32x32.png" "C:\Users\iam74k4\develop\Portfolio\public\"
```

## 🔧 設定ファイルの更新

### 1. manifest.jsonの更新

`public/manifest.json` を開いて、以下のように変更：

```json
"icons": [
  {
    "src": "/icon-192.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "any maskable"
  },
  {
    "src": "/icon-512.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "any maskable"
  }
]
```

### 2. app/layout.tsxの更新

`app/layout.tsx` のicons設定を以下に変更：

```typescript
icons: {
  icon: [
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon.ico', sizes: 'any' },
  ],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
},
```

## 🧹 不要なSVGファイルの削除

PNG/ICOファイルに置き換えたので、以下のSVGファイルは削除できます：

```bash
public/icon-192.svg
public/icon-512.svg
public/apple-touch-icon.svg
public/favicon-16x16.svg
public/favicon-32x32.svg
```

PowerShellで削除：
```powershell
cd C:\Users\iam74k4\develop\Portfolio\public
Remove-Item icon-192.svg, icon-512.svg, apple-touch-icon.svg, favicon-16x16.svg, favicon-32x32.svg
```

## 🌐 OG画像の作成

SNSシェア用の画像も作成しましょう：

### Canvaで作成

1. https://www.canva.com にアクセス
2. テンプレート検索: "Twitter Post" または "Facebook Post"
3. サイズを 1200x630px に設定
4. デザイン:
   ```
   背景: グラデーション (#3b82f6 → #8b5cf6)
   
   テキスト:
   - タイトル: "Portfolio Website" (72px, Bold)
   - サブタイトル: "Full Stack Developer" (42px, Regular)
   - URL: "iam74k4.github.io/Portfolio" (28px, Light)
   ```
5. ダウンロード → PNG形式
6. ファイル名を `og-image.png` に変更
7. `public/og-image.png` に配置

### config/site.config.tsの更新

```typescript
ogImage: '/og-image.png', // SVG → PNG
```

## ✅ 確認

1. ビルド:
```bash
npm run build
```

2. ローカルで確認:
```bash
npm run dev
```

3. ブラウザで確認:
   - タブのファビコンが表示される
   - デベロッパーツール → Application → Manifest で確認

4. コミット:
```bash
git add public/
git add app/layout.tsx
git add public/manifest.json
git add config/site.config.ts
git commit -m "feat: add generated favicon and icon files"
git push origin develop
```

## 🎉 完了！

- [ ] RealFaviconGeneratorで画像生成
- [ ] publicフォルダにファイル配置
- [ ] manifest.json更新
- [ ] app/layout.tsx更新
- [ ] 不要なSVG削除
- [ ] OG画像作成（任意）
- [ ] ビルド確認
- [ ] コミット＆プッシュ
- [ ] このファイル（FAVICON_INSTALL.md）を削除

---

**作業完了後、このファイルとIMAGES_NEEDED.mdを削除してください。**

