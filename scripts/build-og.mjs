/**
 * OGP 画像を生成する。scripts/og-image.html を 1200x630 で撮影するだけ。
 * 実行: npm run og（playwright が入っている環境で）
 */
import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const src = 'file://' + resolve(here, 'og-image.html')
const out = resolve(here, '../public/og.png')

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
})
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(src)
await page.waitForTimeout(400)
await page.screenshot({ path: out })
await browser.close()
console.log('生成:', out)
