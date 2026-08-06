import { useState } from 'react'
import styles from './App.module.css'
import { Panel } from './components/Panel'
import { Sidebar } from './components/Sidebar'
import { profile, sections, works, type SectionId } from './data/portfolio'
import { useSectionRouter } from './hooks/useSectionRouter'
import { useTheme } from './hooks/useTheme'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Home } from './sections/Home'
import { Skills } from './sections/Skills'
import { Works } from './sections/Works'

export default function App() {
  const { current, index, total, go, shift } = useSectionRouter()
  const { theme, toggle } = useTheme()
  const [worksPage, setWorksPage] = useState(0)

  const notes: Record<SectionId, string> = {
    home: `${profile.role} — ${profile.location}`,
    about: 'Profile / Career',
    works: `${works.length} projects — 業務 1 / 個人開発 ${works.length - 1}`,
    skills: '実務の経験年数は履歴書の表記のまま',
    contact: 'Email か GitHub から',
  }

  return (
    <div className={styles.app}>
      {/* ページ全体の見出し。各パネルの h2 より前に置く */}
      <h1 className="sr-only">
        {profile.name} — {profile.role}
      </h1>

      <Sidebar current={current} onNavigate={go} theme={theme} onToggleTheme={toggle} />

      <main className={styles.stage}>
        {sections.map((section, i) => {
          const active = section.id === current
          return (
            <Panel
              key={section.id}
              section={section}
              index={i}
              total={total}
              active={active}
              note={notes[section.id]}
              onShift={shift}
            >
              {section.id === 'home' && <Home onNavigate={go} />}
              {section.id === 'about' && <About />}
              {section.id === 'works' && <Works page={worksPage} onChangePage={setWorksPage} />}
              {section.id === 'skills' && <Skills active={active} />}
              {section.id === 'contact' && <Contact />}
            </Panel>
          )
        })}
      </main>

      {/* 現在地をスクリーンリーダーに伝える */}
      <p role="status" aria-live="polite" className="sr-only">
        {sections[index].label}（{index + 1} / {total}）
      </p>
    </div>
  )
}
