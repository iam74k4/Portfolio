import { career, profile } from '../data/portfolio'
import styles from './About.module.css'

export function About() {
  return (
    <div className={styles.about}>
      {/*
        写真を入れるなら、この左に <img> を足し、
        About.module.css の .about を3カラムにする。
        中身のないプレースホルダ枠は場所を取るだけなので置いていない。
      */}
      <div className={styles.block}>
        <span className="eyebrow">Profile</span>
        <div className={styles.bio}>
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={`${styles.block} ${styles.career}`}>
        <span className="eyebrow">Career</span>
        <ul className={styles.timeline}>
          {career.map((entry) => (
            <li className={styles.row} key={entry.period}>
              <span className={styles.period}>{entry.period}</span>
              <span>
                <span className={styles.jobTitle}>{entry.title}</span>
                <br />
                <span className={styles.org}>{entry.org}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
