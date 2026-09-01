import { Icon } from '../components/Icon'
import { works, type Work } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'
import styles from './Works.module.css'

interface Props {
  /** 表示中のときだけ数字を数え上げる */
  active: boolean
}

/** 実績値。1画面に1つだけ置く前提 */
function Metric({ metric, active }: { metric: NonNullable<Work['metric']>; active: boolean }) {
  const n = useCountUp(metric.value, active)
  return (
    <div className={styles.metric}>
      <p className={styles.metricNote}>
        {/* 読み上げには途中の数字ではなく最終値を渡す */}
        {metric.note} <b aria-hidden="true">{n}</b>
        <span className="sr-only">{metric.value}</span>
        {metric.unit}
      </p>
      <div className={styles.bar} aria-hidden="true">
        <span style={{ width: `${metric.ratio * 100}%` }} />
      </div>
    </div>
  )
}

export function Works({ active }: Props) {
  return (
    <ul className={`${styles.grid} stagger`}>
      {works.map((work) => {
        // タイトルは「動くもの」優先、なければソースへ
        const primary = work.demo ?? work.repo

        return (
          <li key={work.title}>
            <article className={styles.card}>
              <div className={styles.head}>
                <span className={styles.role}>{work.role}</span>
                <span className={styles.year}>{work.year}</span>
              </div>

              <h3 className={styles.title}>
                {primary ? (
                  <a href={primary} target="_blank" rel="noreferrer noopener">
                    {work.title}
                  </a>
                ) : (
                  work.title
                )}
              </h3>

              <p className={styles.summary}>{work.summary}</p>

              {work.metric && <Metric metric={work.metric} active={active} />}

              <div className={styles.foot}>
                <ul className={styles.tags}>
                  {work.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className={styles.links}>
                  {work.repo && (
                    <a
                      className={styles.linkBtn}
                      href={work.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${work.title} のソースコード`}
                    >
                      <Icon name="github" size={14} />
                    </a>
                  )}
                  {work.demo && (
                    <a
                      className={styles.linkBtn}
                      href={work.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${work.title} のデモ・配布物`}
                    >
                      <Icon name="external" size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
