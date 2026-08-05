import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

/*
 * localStorage は「使えない」だけでなく「触ると例外を投げる」ことがある。
 * Safari の「すべての Cookie をブロック」や企業のポリシー設定が該当し、
 * 素で呼ぶとレンダリング中に落ちて画面が真っ白になる。必ず包んで使う。
 */
function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

function writeStored(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // 保存できなくても表示は続けられるので、黙って諦める
  }
}

function prefersDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

function initialTheme(): Theme {
  return readStored() ?? (prefersDark() ? 'dark' : 'light')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStored(theme)
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return { theme, toggle }
}
