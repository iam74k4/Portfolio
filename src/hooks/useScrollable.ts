import { useEffect, useState, type RefObject } from 'react'

/**
 * 要素の中身がはみ出して、スクロールが必要な状態かどうかを返す。
 *
 * スクロールできる領域は、キーボードでも到達できないといけない（WCAG 2.1.1）。
 * 常に tabindex を付けるとタブ移動に無駄な停止が増えるので、
 * 実際にスクロールが要るときだけ付けられるよう、状態として持つ。
 */
export function useScrollable(ref: RefObject<HTMLElement | null>): boolean {
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => setScrollable(el.scrollHeight - el.clientHeight > 1)
    update()

    // 中身の増減（ページ送り）とウィンドウの伸縮の両方で変わる
    const ro = new ResizeObserver(update)
    ro.observe(el)
    for (const child of el.children) ro.observe(child)

    return () => ro.disconnect()
  }, [ref])

  return scrollable
}
