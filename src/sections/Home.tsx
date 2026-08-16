import { Icon } from '../components/Icon'
import { profile } from '../data/portfolio'
import styles from './Home.module.css'

/*
 * ここは第一印象だけを担う。所属・実績・数字は About と Works にあるので置かない。
 * 行き先の2つは hash を変えるだけなので、ボタンではなくリンクにしている。
 */
export function Home() {
  return (
    <div className={`${styles.home} stagger`}>
      {/* ページの h1 は App が持っているので、ここは見出し要素にしない */}
      <p className={styles.headline}>
        {/* 1行目だけ色を変える。em は強調の意味を持つので、色のためには使わない */}
        {profile.headline.map((line, i) => (
          <span key={i} className={i === 0 ? styles.accent : undefined}>
            {line}
          </span>
        ))}
      </p>

      <p className={styles.lead}>{profile.lead}</p>

      <div className={styles.actions}>
        <a className={`${styles.btn} ${styles.primary}`} href="#works">
          作品を見る
          <Icon name="arrow" size={15} />
        </a>
        <a className={`${styles.btn} ${styles.ghost}`} href="#contact">
          連絡する
        </a>
      </div>
    </div>
  )
}
