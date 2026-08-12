import { career, profile, skillGroups } from '../data/portfolio'
import styles from './About.module.css'

export function About() {
  return (
    <div className={styles.about}>
      <div className={`${styles.top} stagger`}>
        <div className={styles.block}>
          <span className="eyebrow">Profile</span>
          <div className={styles.bio}>
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.block}>
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

      {/* 以前は独立した Skills セクションだったが、経歴と続けて読めるようここへ */}
      <div className={`${styles.skills} stagger`}>
        {skillGroups.map((group) => (
          <div className={styles.block} key={group.category}>
            <span className="eyebrow">{group.category}</span>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li className={styles.item} key={item.name}>
                  <span className={styles.name}>{item.name}</span>
                  {item.experience && <span className={styles.exp}>{item.experience}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
