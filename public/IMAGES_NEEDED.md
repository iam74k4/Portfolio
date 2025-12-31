# 必要な画像ファイル

このファイルは作成後削除してください。

## 🎨 必要な画像一覧

### 1. **Favicon（ブラウザタブアイコン）**
- `favicon.ico` - 32x32px ✅ 既に存在
- `favicon-16x16.png` - 16x16px
- `favicon-32x32.png` - 32x32px

### 2. **PWAアイコン（スマホホーム画面）**
- `icon-192.png` - 192x192px
- `icon-512.png` - 512x512px
- `apple-touch-icon.png` - 180x180px

### 3. **OGP画像（SNSシェア用）**
- `og-image.png` - 1200x630px

---

## 🛠️ 画像の作成方法

### オプション1: オンラインツール（簡単）

1. **Canva** (https://www.canva.com)
   - テンプレート: "Social Media" → "Twitter Post" (1200x630)
   - 自分の名前とタイトルを入れる
   - ダウンロード

2. **Favicon Generator** (https://realfavicongenerator.net/)
   - ロゴ画像をアップロード
   - すべてのサイズを自動生成
   - ダウンロードして `public/` に配置

### オプション2: Figma/Photoshop

#### Favicon (32x32px)
```
背景: #3b82f6 (ブルー)
テキスト: "P" (白色、太字)
フォント: Inter Bold 24px
```

#### OG画像 (1200x630px)
```
背景: グラデーション (#3b82f6 → #8b5cf6)
テキスト: 
  - 名前: 48px, 白, Bold
  - 肩書き: 32px, 白, Regular
  - URL: 24px, 白, Light
```

---

## 📦 ファイル配置

すべてのファイルを `public/` ディレクトリに配置してください：

```
public/
├── favicon.ico ✅
├── favicon-16x16.png
├── favicon-32x32.png
├── icon-192.png
├── icon-512.png
├── apple-touch-icon.png
└── og-image.png
```

---

## ✅ 確認方法

配置後、以下を確認：

1. **Favicon**: ブラウザのタブにアイコンが表示される
2. **PWAアイコン**: スマホでホーム画面に追加
3. **OG画像**: https://www.opengraph.xyz/ でテスト

---

## 🎨 クイックスタート（仮画像）

開発用に、以下のコマンドで仮画像を生成できます：

```bash
# ImageMagickがインストールされている場合
convert -size 192x192 xc:#3b82f6 -gravity center -pointsize 120 -fill white -annotate +0+0 "P" public/icon-192.png
convert -size 512x512 xc:#3b82f6 -gravity center -pointsize 320 -fill white -annotate +0+0 "P" public/icon-512.png
```

または、https://placeholder.com/ で一時的な画像を使用：
```
https://via.placeholder.com/192x192/3b82f6/FFFFFF?text=P
```

