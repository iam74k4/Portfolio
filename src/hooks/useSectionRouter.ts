import { useCallback, useEffect, useState } from 'react'
import { sections, type SectionId } from '../data/portfolio'

const ids = sections.map((s) => s.id)

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
 */
export function useSectionRouter() {
  const [current, setCurrent] = useState<SectionId>(fromHash)

  useEffect(() => {
    const onHashChange = () => setCurrent(fromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const go = useCallback((id: SectionId) => {
    window.location.hash = id
    setCurrent(id)
  }, [])

  const shift = useCallback(
    (delta: number) => {
      go(ids[(ids.indexOf(current) + delta + ids.length) % ids.length])
    },
    [current, go],
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        shift(1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        shift(-1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [shift])

  const index = ids.indexOf(current)
  return { current, index, total: ids.length, go, shift }
}
