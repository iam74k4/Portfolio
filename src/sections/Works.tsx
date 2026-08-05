import type { CSSProperties } from 'react'
import { Icon } from '../components/Icon'
import { works } from '../data/portfolio'
import styles from './Works.module.css'

/** 1画面に収める件数。これを超えた分はページ送りに逃がす（＝スクロールさせない） */
const PER_PAGE = 6

interface Props {
  page: number
  onChangePage: (page: number) => void
}

export function Works({ page, onChangePage }: Props) {
  const pageCount = Math.ceil(works.length / PER_PAGE)
  const visible = works.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className={styles.works}>
      <div className={styles.bar}>
        <span className="eyebrow">
          {works.length} projects — page {page + 1} / {pageCount}
        </span>

        {pageCount > 1 && (
          <div className={styles.pages}>
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                className={styles.pageDot}
                aria-current={i === page}
                aria-label={`${i + 1}ページ目を表示`}
                onClick={() => onChangePage(i)}
              />
            ))}
          </div>
        )}
      </div>

      <ul className={styles.grid}>
        {visible.map((work, i) => {
          // 作品ごとにサムネイルの色相をずらす。
          // アクセント（青紫）を基点に狭い範囲だけ振り、全体の色調をまとめる。
          const hue = { ['--h']: `${228 + ((page * PER_PAGE + i) % 6) * 15}` } as CSSProperties

          return (
            <li key={work.title}>
              <a
                className={styles.card}
                href={work.url ?? '#works'}
                {...(work.url ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              >
                <div className={styles.thumb} style={hue} aria-hidden="true">
                  <span className={styles.year}>{work.year}</span>
                </div>
                <div className={styles.meta}>
                  <h3 className={styles.title}>
                    {work.title}
                    <Icon name="external" size={12} />
                  </h3>
                  <p className={styles.summary}>{work.summary}</p>
                  <ul className={styles.tags}>
                    {work.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
