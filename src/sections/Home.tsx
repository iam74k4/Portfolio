import { Icon } from '../components/Icon'
import { profile, type SectionId } from '../data/portfolio'
import styles from './Home.module.css'

interface Props {
  onNavigate: (id: SectionId) => void
}

export function Home({ onNavigate }: Props) {
  return (
    <div className={styles.home}>
      <div className={styles.copy}>
        <span className="eyebrow">Hello — {profile.role}</span>

        <h1 className={styles.headline}>
          {profile.headline.map((line, i) => (
            <span key={line}>{i === 0 ? <em>{line}</em> : line}</span>
          ))}
        </h1>

        <p className={styles.lead}>{profile.lead}</p>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.btn} ${styles.primary}`}
            onClick={() => onNavigate('works')}
          >
            作品を見る
            <Icon name="arrow" size={15} />
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.ghost}`}
            onClick={() => onNavigate('contact')}
          >
            連絡する
          </button>
        </div>
      </div>

      {/* 装飾ではなく事実を置く。Skills と同じ「ラベル + 内容」の組み方 */}
      <aside className={styles.side}>
        <dl className={styles.now}>
          {profile.now.map((row) => (
            <div className={styles.row} key={row.label}>
              <dt className="eyebrow">{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.stats}>
          {profile.stats.map((s) => (
            <div className={styles.stat} key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
