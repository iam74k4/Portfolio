import { skillGroups } from '../data/portfolio'
import styles from './Skills.module.css'

interface Props {
  /** パネルが表示されたときだけバーを伸ばすアニメーションを走らせる */
  active: boolean
}

export function Skills({ active }: Props) {
  // 1つでもメーターがあれば「高さいっぱいに分散」、全部タグなら「上そろえ」
  const anyMeter = skillGroups.some((g) => g.items.some((i) => i.level != null))

  return (
    <div className={`${styles.skills} ${anyMeter ? '' : styles.tagMode}`}>
      {skillGroups.map((group) => {
        // 年数・習熟度が入っていればメーター、なければタグとして並べる
        const hasMeter = group.items.some((i) => i.level != null)

        return (
          <div className={styles.group} key={group.category}>
            <div className={styles.groupHead}>
              <span className="eyebrow">{group.category}</span>
            </div>

            {hasMeter ? (
              <ul className={styles.items}>
                {group.items.map((item, i) => (
                  <li className={styles.item} key={item.name}>
                    <div className={styles.itemHead}>
                      <span className={styles.name}>{item.name}</span>
                      {item.years != null && (
                        <span className={styles.level}>{item.years}年</span>
                      )}
                    </div>
                    <div
                      className={styles.track}
                      role="meter"
                      aria-valuenow={item.level ?? 0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={
                        item.years != null ? `${item.name}（実務 ${item.years} 年）` : item.name
                      }
                    >
                      <span
                        // key に active を混ぜて、表示のたびにアニメーションを再生させる
                        key={String(active)}
                        className={styles.fill}
                        style={{ width: `${item.level ?? 0}%`, animationDelay: `${i * 70}ms` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
