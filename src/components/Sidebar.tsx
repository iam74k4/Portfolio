import { useLayoutEffect, useRef, useState } from 'react'
import { profile, sections, socials, type SectionId } from '../data/portfolio'
import { Icon } from './Icon'
import styles from './Sidebar.module.css'

interface Props {
  current: SectionId
  onNavigate: (id: SectionId) => void
}

export function Sidebar({ current, onNavigate }: Props) {
  const listRef = useRef<HTMLUListElement>(null)
  const [marker, setMarker] = useState<{ y: number; h: number } | null>(null)

  /*
   * 選択中の項目に合わせて標識を動かす。位置は実測する。
   * 背景色を瞬時に入れ替えると「消えて現れる」に見えるが、
   * 滑らせるとどこからどこへ動いたかが繋がって見える。
   */
  useLayoutEffect(() => {
    const measure = () => {
      const list = listRef.current
      const on = list?.querySelector<HTMLElement>('[aria-current="page"]')
      if (!list || !on) return
      setMarker({ y: on.offsetTop, h: on.offsetHeight })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [current])

  return (
    <nav className={styles.nav} aria-label="セクション">
      <div className={styles.brand}>
        <div className={styles.monogram} aria-hidden="true">
          {profile.initials}
        </div>
        <div>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>
            {profile.role}
            <br />
            {profile.location}
          </p>
        </div>
      </div>

      <ul className={styles.list} ref={listRef}>
        {marker && (
          <span
            className={styles.marker}
            style={{ transform: `translateY(${marker.y}px)`, height: marker.h }}
            aria-hidden="true"
          />
        )}
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={styles.item}
              aria-current={section.id === current ? 'page' : undefined}
              onClick={() => onNavigate(section.id)}
            >
              <span className={styles.dot} aria-hidden="true" />
              {section.label}
            </button>
          </li>
        ))}
      </ul>

      <ul className={styles.socials}>
        {socials.map((s) => (
          <li key={s.label}>
            <a
              className={styles.social}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
            >
              <Icon name={s.icon} size={15} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
