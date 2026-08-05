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
    works: `${works.length} projects — すべて個人開発`,
    skills: '実際に手を動かしてきた技術',
    contact: 'GitHub からでも構いません',
  }

  return (
    <div className={styles.app}>
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
      <p role="status" aria-live="polite" style={{ position: 'absolute', left: -9999 }}>
        {sections[index].label}（{index + 1} / {total}）
      </p>
    </div>
  )
}
