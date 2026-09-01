import { useCallback, useEffect, useRef, useState } from 'react'
import { sections, type SectionId } from '../data/portfolio'

const ids = sections.map((s) => s.id)

/** 送りの向き。パネルがどちら側から入るかを決める */
export type Direction = 'fwd' | 'back'

function fromHash(): SectionId {
  const id = window.location.hash.replace(/^#/, '') as SectionId
  return ids.includes(id) ? id : ids[0]
}

/** 入力中のキー操作をセクション送りに横取りしないための判定 */
function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false
  return (
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.tagName === 'SELECT' ||
    el.isContentEditable
  )
}

/**
 * 表示中のセクションを URL hash と同期させる。
 * hash を書き換えるので、ブラウザの戻る/進むがそのままセクション送りになる。
 *
 * ナビと Home の行き先はただのリンク（href="#works" など）なので、
 * 遷移用の関数は外へ出していない。キーボード送りだけがここから hash を書き換える。
 */
export function useSectionRouter() {
  const [current, setCurrent] = useState<SectionId>(fromHash)
  const [direction, setDirection] = useState<Direction>('fwd')
  const indexRef = useRef(ids.indexOf(current))

  const apply = useCallback((id: SectionId, way: Direction) => {
    setDirection(way)
    setCurrent(id)
    indexRef.current = ids.indexOf(id)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const next = fromHash()
      const to = ids.indexOf(next)
      /*
       * shift は先に向きを決めてから hash を書き換える。
       * その書き換えでもここが呼ばれるので、位置が同じなら何もしない。
       * 上書きしてしまうと、決めたばかりの向きが常に潰れる。
       * リンクで現在地を押した場合も、ここで何も起こらない。
       */
      if (to === indexRef.current) return
      // リンク・戻る/進むで来た場合は、位置関係から向きを決める
      apply(next, to > indexRef.current ? 'fwd' : 'back')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [apply])

  const shift = useCallback(
    (delta: number) => {
      // 端をまたぐときも「押した向き」を優先する
      const next = ids[(indexRef.current + delta + ids.length) % ids.length]
      apply(next, delta > 0 ? 'fwd' : 'back')
      window.location.hash = next
    },
    [apply],
  )

  /*
   * セクション送りは横方向（← →）だけに割り当てる。
   * 縦方向まで奪うと、パネル内に収まりきらなかった内容を
   * キーボードでスクロールできなくなる。
   */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || isTypingTarget(e.target)) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        shift(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        shift(-1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [shift])

  const index = ids.indexOf(current)
  return { current, index, total: ids.length, direction }
}
