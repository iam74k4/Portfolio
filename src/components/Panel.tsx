import type { ReactNode } from 'react'
import type { Section } from '../data/portfolio'
import { Icon } from './Icon'
import styles from './Panel.module.css'

interface Props {
  section: Section
  index: number
  total: number
  active: boolean
  /** フッタ左に出す補足。省略時はセクションのキャプションを使う */
  note?: ReactNode
  onShift: (delta: number) => void
  children: ReactNode
}

export function Panel({ section, index, total, active, note, onShift, children }: Props) {
  return (
    <section
      className={styles.panel}
      data-active={active}
      id={`panel-${section.id}`}
      aria-labelledby={`panel-${section.id}-title`}
      aria-hidden={!active}
      inert={!active}
    >
      <header className={styles.head}>
        <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
        <h2 className={styles.title} id={`panel-${section.id}-title`}>
          {section.label}
        </h2>
        <p className={styles.caption}>{section.caption}</p>
      </header>

      <div className={styles.body}>{children}</div>

      <footer className={styles.foot}>
        <p className={styles.note}>{note ?? section.caption}</p>
        <div className={styles.pager}>
          <span className={styles.count}>
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button
            type="button"
            className={`${styles.step} ${styles.prev}`}
            onClick={() => onShift(-1)}
            aria-label="前のセクション"
          >
            <Icon name="arrow" size={15} />
          </button>
          <button
            type="button"
            className={styles.step}
            onClick={() => onShift(1)}
            aria-label="次のセクション"
          >
            <Icon name="arrow" size={15} />
          </button>
        </div>
      </footer>
    </section>
  )
}
