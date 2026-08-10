import styles from './App.module.css'
import { Panel } from './components/Panel'
import { Sidebar } from './components/Sidebar'
import { profile, sections } from './data/portfolio'
import { useSectionRouter } from './hooks/useSectionRouter'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Home } from './sections/Home'
import { Works } from './sections/Works'

export default function App() {
  const { current, index, total, go } = useSectionRouter()

  return (
    <div className={styles.app}>
      {/* ページ全体の見出し。各パネルの h2 より前に置く */}
      <h1 className="sr-only">
        {profile.name} — {profile.role}
      </h1>

      <Sidebar current={current} onNavigate={go} />

      <main className={styles.stage}>
        {sections.map((section) => {
          const active = section.id === current
          return (
            <Panel key={section.id} section={section} active={active}>
              {section.id === 'home' && <Home onNavigate={go} />}
              {section.id === 'about' && <About />}
              {section.id === 'works' && <Works />}
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
