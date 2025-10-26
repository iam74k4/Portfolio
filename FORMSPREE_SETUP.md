# 📧 Formspree セットアップガイド

このファイルは設定完了後削除してください。

## 🚀 Formspreeとは？

無料で使えるフォーム送信サービス。静的サイトでもお問い合わせフォームを実装できます。

## 📝 セットアップ手順（5分）

### 1. アカウント作成
1. https://formspree.io/ にアクセス
2. **Get Started** をクリック
3. GitHubアカウントでサインアップ（推奨）

### 2. フォーム作成
1. ダッシュボードで **+ New Form** をクリック
2. フォーム名: `Portfolio Contact Form`
3. 作成完了すると、**Form Endpoint URL** が表示されます
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

### 3. フォームIDを設定

**components/sections/ContactSection.tsx** の78行目を編集：

```typescript
// 変更前
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// 変更後（YOUR_FORM_IDを実際のIDに置き換え）
const FORM_ENDPOINT = 'https://formspree.io/f/xyzabc123';
```

### 4. オプション設定（推奨）

Formspreeダッシュボードで：

#### A. 通知設定
- **Settings** → **Notifications**
- メール通知を有効化
- 送信先メールアドレスを設定

#### B. スパム対策
- **Settings** → **Spam Prevention**
- **reCAPTCHA** を有効化（推奨）
- または **Honeypot** を使用

#### C. 自動返信
- **Settings** → **Autoresponder**
- 送信者への自動返信メールを設定

```
件名: お問い合わせありがとうございます
本文:
お問い合わせいただきありがとうございます。
内容を確認次第、ご連絡させていただきます。

※このメールは自動送信されています。
```

## 🧪 テスト方法

1. ローカル環境で開発サーバーを起動
```bash
npm run dev
```

2. http://localhost:3001 にアクセス

3. Contactセクションまでスクロール

4. フォームに入力して送信

5. Formspreeダッシュボードで送信を確認

## 📊 無料プランの制限

- **月間50件まで**: 個人ポートフォリオには十分
- **1フォームのみ**: 複数サイトには有料プラン必要
- **Formspreeのブランディング**: 表示される

制限を超える場合は、有料プラン（$10/月〜）にアップグレード。

## 🔄 代替案

### EmailJS
https://www.emailjs.com/
- クライアントサイドから直接メール送信
- 月間200件まで無料

### Web3Forms
https://web3forms.com/
- 完全無料
- 無制限

### Netlify Forms（Netlifyにデプロイする場合）
https://www.netlify.com/products/forms/
- 月間100件まで無料

## ✅ 完了チェックリスト

- [ ] Formspreeアカウント作成
- [ ] フォーム作成
- [ ] Form IDを`ContactSection.tsx`に設定
- [ ] 通知メールアドレス設定
- [ ] スパム対策設定
- [ ] テスト送信成功
- [ ] このファイルを削除

---

**設定が完了したら、このファイル（FORMSPREE_SETUP.md）を削除してください。**

