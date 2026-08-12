/*
 * 文言の語尾がそろっているかを検査する。
 *
 * 層ごとに型を決めてあるのに（portfolio.ts の冒頭を参照）、
 * 書き足すうちに体言止めとです・ますが混ざる。目で見て気づくのは難しいので、
 * 機械で落とす。npm run check から呼ばれ、CI でも走る。
 */
import { profile, works, career, skillGroups } from '../src/data/portfolio.ts'

const problems = []
const ng = (where, text, why) => problems.push({ where, text, why })

/** 「。」で文に割る。末尾の空要素は落とす */
const sentences = (t) =>
  t
    .split('。')
    .map((s) => s.trim())
    .filter(Boolean)

/** 動詞・形容詞で言い切っているか（活用語尾のいずれかで終わる） */
const isPredicate = (s) => /(る|た|い|う|く|す|ぬ|む|ぐ|ぶ|つ|ない|たい)$/.test(s)
/** です・ます体か */
const isPolite = (s) => /(です|ます|ました|ません|でした)$/.test(s)

// ---------- 見出し: 言い切り ----------
for (const [key, lines] of [
  ['profile.headline', profile.headline],
  ['profile.contact.title', profile.contact.title],
]) {
  const text = lines.join('')
  if (!text.endsWith('。')) ng(key, text, '見出しは「。」で終える')
  const last = sentences(text).at(-1) ?? ''
  if (isPolite(last)) ng(key, text, '見出しはです・ますにしない（言い切りにそろえる）')
  else if (!isPredicate(last)) ng(key, text, '見出しが体言止めになっている（動詞で終える）')
}

// ---------- 本文: です・ます ----------
const body = [
  ['profile.lead', [profile.lead]],
  ['profile.bio', profile.bio],
  ['profile.contact.lead', [profile.contact.lead]],
]
for (const [key, paragraphs] of body) {
  for (const p of paragraphs) {
    for (const s of sentences(p)) {
      if (!isPolite(s)) ng(key, s + '。', '本文はです・ますでそろえる')
    }
  }
}

// ---------- カードの説明: 体言止め + である ----------
for (const w of works) {
  const ss = sentences(w.summary)
  if (ss.length !== 2) {
    ng(
      `works: ${w.title}`,
      w.summary,
      `「何であるか。何をしたか。」の2文にする（今は${ss.length}文）`,
    )
    continue
  }
  const [what, did] = ss
  if (isPolite(what) || isPredicate(what))
    ng(`works: ${w.title}`, what + '。', '1文目は体言止めにする（何であるかを名詞で言い切る）')
  if (isPolite(did))
    ng(`works: ${w.title}`, did + '。', '2文目はです・ますにしない（である体）')
  else if (!isPredicate(did))
    ng(`works: ${w.title}`, did + '。', '2文目は「〜している / 〜した」で終える')
}

// ---------- ラベル: 名詞のまま ----------
const labels = [
  ...career.flatMap((c) => [
    [`career.title`, c.title],
    [`career.org`, c.org],
  ]),
  ...works.flatMap((w) => [
    [`works.role`, w.role],
    ...(w.metric ? [[`works.metric.note`, w.metric.note]] : []),
  ]),
  ...skillGroups.flatMap((g) => g.items.map((i) => [`skillGroups.${g.category}`, i.name])),
]
for (const [key, text] of labels) {
  if (text.includes('。')) ng(key, text, 'ラベルは文にしない（「。」を付けない）')
}

/*
 * ---------- 英字語と日本語のあいだの半角スペース ----------
 * 対象は英字だけ。「14画面」「約200名」のような数字＋助数詞は空けない。
 * 「生成AI」のように語として定着したものは例外にする。
 */
const EXCEPT = ['生成AI']
const all = [
  ...profile.headline,
  profile.lead,
  ...profile.bio,
  ...profile.contact.title,
  profile.contact.lead,
  ...works.map((w) => w.summary),
]
for (const raw of all) {
  let text = raw
  for (const e of EXCEPT) text = text.split(e).join('')
  // 日本語の直後に英字（またはその逆）が空白なしで続いていないか
  const m = text.match(/[ぁ-んァ-ヶ一-龠][A-Za-z]|[A-Za-z][ぁ-んァ-ヶ一-龠]/g)
  if (m) ng('英数字の前後', raw, `半角スペースを入れる: ${[...new Set(m)].join(', ')}`)
}

if (problems.length) {
  console.error(`文言の型がそろっていません（${problems.length}件）\n`)
  for (const p of problems) console.error(`  [${p.where}] ${p.why}\n    ${p.text}\n`)
  process.exit(1)
}
console.log('文言の型: 問題なし')
