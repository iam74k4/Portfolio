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
  /*
   * 画面の切り替えは URL の hash が決める。ナビも Home の行き先も
   * ただのリンクなので、ここから遷移用の関数を配る必要はない。
   */
  const { current, index, total, direction } = useSectionRouter()

  return (
    <div className={styles.app}>
      {/* ページ全体の見出し。各パネルの h2 より前に置く */}
      <h1 className="sr-only">
        {profile.name} — {profile.role}
      </h1>

      <Sidebar current={current} />

      {/* data-way は「どちら側からパネルが入るか」を CSS に伝える */}
      <main className={styles.stage} data-way={direction}>
        {sections.map((section) => {
          const active = section.id === current
          return (
            <Panel key={section.id} section={section} active={active}>
              {section.id === 'home' && <Home />}
              {section.id === 'about' && <About />}
              {section.id === 'works' && <Works active={active} />}
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
