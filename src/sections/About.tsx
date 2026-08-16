import { career, profile, skillGroups } from '../data/portfolio'
import styles from './About.module.css'

/*
 * 小見出しは見た目こそ小さいが、見出し要素にしておく。
 * span のままだと、このパネルだけスクリーンリーダーから見て
 * 構造の無い一枚岩になり、Works（h3 を使っている）とも揃わない。
 */
export function About() {
  return (
    <div className={styles.about}>
      <div className={`${styles.top} stagger`}>
        <div className={styles.block}>
          <h3 className="eyebrow">Profile</h3>
          <div className={styles.bio}>
            {/* 並び替えの起きない静的な一覧なので、key は位置でよい */}
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className="eyebrow">Career</h3>
          <ul className={styles.timeline}>
            {career.map((entry, i) => (
              <li className={styles.row} key={i}>
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
            <h3 className="eyebrow">{group.category}</h3>
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
