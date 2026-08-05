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
        {visible.map((work) => {
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
    </div>
  )
}
