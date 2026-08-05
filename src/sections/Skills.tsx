import { skillGroups } from '../data/portfolio'
import styles from './Skills.module.css'

interface Props {
  /** パネルが表示されたときだけバーを伸ばすアニメーションを走らせる */
  active: boolean
}

export function Skills({ active }: Props) {
  return (
    <div className={styles.skills}>
      {skillGroups.map((group) => (
        <div className={styles.group} key={group.category}>
          <div className={styles.groupHead}>
            <span className="eyebrow">{group.category}</span>
          </div>

          <ul className={styles.items}>
            {group.items.map((item, i) => (
              <li className={styles.item} key={item.name}>
                <div className={styles.itemHead}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.level}>{item.level}</span>
                </div>
                <div
                  className={styles.track}
                  role="meter"
                  aria-valuenow={item.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={item.name}
                >
                  <span
                    // key に active を混ぜて、表示のたびにアニメーションを再生させる
                    key={String(active)}
                    className={styles.fill}
                    style={{ width: `${item.level}%`, animationDelay: `${i * 70}ms` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
