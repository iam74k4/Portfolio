import { Icon } from '../components/Icon'
import { profile, type SectionId } from '../data/portfolio'
import styles from './Home.module.css'

interface Props {
  onNavigate: (id: SectionId) => void
}

/*
 * ここは第一印象だけを担う。所属・実績・数字は About と Works にあるので置かない。
 */
export function Home({ onNavigate }: Props) {
  return (
    <div className={`${styles.home} stagger`}>
      {/* ページの h1 は App が持っているので、ここは見出し要素にしない */}
      <p className={styles.headline}>
        {profile.headline.map((line, i) => (
          <span key={line}>{i === 0 ? <em>{line}</em> : line}</span>
        ))}
      </p>

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
  )
}
