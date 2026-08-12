import { useEffect, useRef, useState } from 'react'

/**
 * 0 から to まで数字を上げる。active になった瞬間から数え始める。
 * 「視差効果を減らす」設定のときは、いきなり最終値を出す。
 */
export function useCountUp(to: number, active: boolean, duration = 900): number {
  const [value, setValue] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    if (!active) {
      setValue(0)
      return
    }
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame.current = requestAnimationFrame(step)
    }
    frame.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame.current)
  }, [to, active, duration])

  return value
}
