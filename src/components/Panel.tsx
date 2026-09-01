import { useRef, type ReactNode } from 'react'
import type { Section } from '../data/portfolio'
import { useScrollable } from '../hooks/useScrollable'
import styles from './Panel.module.css'

interface Props {
  section: Section
  active: boolean
  children: ReactNode
}

export function Panel({ section, active, children }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const scrollable = useScrollable(bodyRef)

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
        <h2 className={styles.title} id={`panel-${section.id}-title`}>
          {section.label}
        </h2>
      </header>

      {/* はみ出したときだけキーボードで掴めるようにする */}
      <div
        className={styles.body}
        ref={bodyRef}
        tabIndex={scrollable ? 0 : undefined}
        role={scrollable ? 'group' : undefined}
        aria-label={scrollable ? `${section.label} の内容（スクロールできます）` : undefined}
      >
        {children}
      </div>
    </section>
  )
}
