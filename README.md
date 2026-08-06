# Portfolio

スクロールしない SPA 型のポートフォリオサイト。

- **SPA** — 5つのセクションを、ページ遷移なしで切り替える
- **スクロールなし** — 常に `100dvh` に収まり、ページ全体はスクロールしない
- **ライト / ダーク** — OS 設定に追従し、手動切り替えは `localStorage` に保存

## セットアップ

Node は **22.12 以上**（`.nvmrc` を置いてあるので `nvm use` で合う）。

```bash
npm install
npm run dev      # 開発サーバ
npm run build    # 型チェック + 本番ビルド
npm run preview  # ビルド結果の確認
```

## 品質チェック

```bash
npm run check         # 整形チェック → Lint → 型チェック＋ビルド（CI と同じ内容）
npm run format        # Prettier で整形
npm run format:check  # 整形されているかだけ確認
npm run lint          # Oxlint
```

`npm run check` が通れば CI も通る。push 前にこれだけ流せばよい。

## 公開

**main に push すると自動でビルドされ、GitHub Pages に公開される。**
手動のビルドやアップロードは不要。

初回だけ、リポジトリ設定でスイッチを入れる必要がある:

1. GitHub の **Settings → Pages** を開く
2. **Source** を `GitHub Actions` にする
3. main に push（または Actions タブから `Deploy` を手動実行）

公開先は `https://<ユーザー名>.github.io/<リポジトリ名>/`。
サブパス配信になるため、ビルド時に `BASE_PATH` を渡して `vite.config.ts` の `base` を合わせている
（`.github/workflows/deploy.yml` が自動で設定する）。

独自ドメインや `<ユーザー名>.github.io` リポジトリで公開する場合は、
`deploy.yml` の `BASE_PATH` を `/` に変更する。

## 自動チェック

| 仕組み       | 実行タイミング                   | 内容                              |
| ------------ | -------------------------------- | --------------------------------- |
| `CI`         | main 以外への push、Pull Request | 整形 / Lint / 型チェック / ビルド |
| `Deploy`     | main への push、手動実行         | ビルドして GitHub Pages に公開    |
| `Dependabot` | 毎週月曜（Actions は毎月）       | 依存の更新 PR をまとめて作成      |

Dependabot の PR は CI が通っていればマージするだけでよい。

## ふだんの流れ

```bash
git switch -c update-works        # 作業ブランチを切る
# src/data/portfolio.ts を編集
npm run dev                       # 見た目を確認
npm run check                     # CI と同じチェック
git commit -am "作品を追加" && git push -u origin update-works
```

Pull Request を作ると CI が回る。main にマージすれば、そのまま公開まで自動で進む。

## 内容の差し替え

表示される内容はすべて **[`src/data/portfolio.ts`](src/data/portfolio.ts)** に集約している。
名前・経歴・作品・スキル・SNS リンクを書き換えれば、他のファイルに触れずに自分の内容になる。

`skillGroups` の各項目は `level` を入れるとメーター表示、省略するとタグ表示になる。
`experience`（例: `'3年以上'`）を入れると、タグの後ろに経験年数が並ぶ。

**履歴書に載っていても、公開サイトに出してはいけない情報がある。**
生年月日・性別・電話番号・年収・転職希望条件などは `portfolio.ts` に書かないこと。

あわせて差し替えるもの:

| 対象                         | 場所                                                       |
| ---------------------------- | ---------------------------------------------------------- |
| ページタイトル / description | `index.html`                                               |
| ポートレート写真             | `src/sections/About.tsx` に `<img>` を足し、列を1つ増やす  |
| 作品のリンク先               | `src/data/portfolio.ts` の `works[].repo` / `works[].demo` |
| 問い合わせの送信先           | `src/sections/Contact.tsx`（現在は `mailto:` を開く実装）  |
| 配色                         | `src/styles/tokens.css`                                    |

## 構成

```
src/
├─ data/portfolio.ts        表示内容（ここだけ編集すればよい）
├─ hooks/
│  ├─ useSectionRouter.ts   現在のセクション・URL hash 同期・キーボード操作
│  ├─ useScrollable.ts      はみ出しの検知（スクロール領域に tabindex を付ける判断）
│  └─ useTheme.ts           ライト/ダークの保持
├─ components/
│  ├─ Sidebar.tsx           左の固定ナビ
│  ├─ Panel.tsx             各セクション共通の枠（見出し / 本体 / フッタ）
│  └─ Icon.tsx              インライン SVG アイコン
├─ sections/                Home / About / Works / Skills / Contact
└─ styles/
   ├─ tokens.css            配色・余白・モーションのトークン
   └─ global.css            リセットと基本スタイル
```

## 操作

| 操作                  | 動作                       |
| --------------------- | -------------------------- |
| 左ナビのクリック      | 該当セクションへ           |
| `←` `→`               | 前後のセクションへ         |
| `↑` `↓` `PageUp/Down` | パネル内の内容をスクロール |
| フッタの `←` `→`      | 前後のセクションへ         |
| ブラウザの戻る / 進む | セクション履歴をたどる     |
| URL の `#works` など  | 直接そのセクションを開く   |

セクション送りは**横方向のキーだけ**に割り当てている。縦方向まで奪うと、
パネル内に収まりきらなかった内容をキーボードでスクロールできなくなるため。
入力欄にフォーカスがあるときは、矢印キーをセクション送りに使わない。

## スクロールさせないための設計

1. `html, body, #root` に `height: 100%` と `overflow: hidden`、ルートは `100dvh`。
2. Grid / Flex の子には `min-height: 0` `min-width: 0` を付ける
   （既定の `min-content` が、はみ出しの主な原因になる）。
3. 各パネルは「見出し（固定）/ 本体（`flex: 1`）/ フッタ（固定）」の3層。
   高さが変わっても本体だけが伸縮する。
4. 件数が可変の Works は **1画面6件** に固定し、超過分はページ送りに逃がす。
5. 余白と文字サイズは `clamp()` でビューポートに連動させる。
6. パネル本体には `overflow-y: auto` を安全網として置く。
   どう詰めても収まらない画面で、本文が見出しやフッタに重なるのを防ぐためのもので、
   収まっている限りスクロールバーは出ない。**ページ全体は常にスクロールしない。**
7. 中央揃えには `safe center` を使う。
   素の `center` は、内容がはみ出したときに先頭をスクロール範囲の外へ押し出してしまう。

## レスポンシブ

| 幅              | 変化                                       |
| --------------- | ------------------------------------------ |
| 1200px 未満     | Works が 3×2 → 2×3                         |
| 900px 未満      | 左サイドナビ → 上部バー、2カラム → 1カラム |
| 560px 未満      | Works が 1カラム                           |
| 高さ 720px 未満 | 余白・行間・フォームの詰めを強くする       |

狭い画面で隠すのは、Home 右側の「いま何をしているか」、作品カードの説明文、
パネル右上のキャプションだけ。**Email と SNS リンクは隠さない** —
ここを落とすと連絡手段が消えるため。

パネル内部のスクロールが出るのは以下（ページ全体は常にスクロールしない）。
スクロールが要るときだけ、本体に `tabindex="0"` が付いてキーボードで掴めるようになる。

| 画面          | 内部スクロールが出るセクション |
| ------------- | ------------------------------ |
| 1024×768 以上 | なし                           |
| 768×1024      | Skills                         |
| 390×844       | Works / Skills / About         |
| 360×640       | 上記 + Contact                 |

本文量が増えると、縦の短い画面では収まらなくなる。文章を削るより
スクロールに逃がすほうが情報を落とさずに済むと判断している。

## アクセシビリティ

- ページの `h1` は `App.tsx` が持ち、各パネルが `h2`、カードが `h3`。
  見出しレベルが飛ばないようにしてある
- 非表示のパネルは `inert` にして、Tab とスクリーンリーダーから外す
- セクションが変わったことは `role="status"` の領域で読み上げる
- 文字色は `--ink` / `--ink-mid` / `--ink-weak` の3段。
  最も薄い `--ink-weak` でもライト 4.80:1 / ダーク 5.73:1 で、WCAG AA を満たす
- `prefers-reduced-motion: reduce` でアニメーションを止める

## ワイヤーフレーム

設計時のワイヤーフレームと意図は [`docs/wireframe/`](docs/wireframe/) に残してある。
