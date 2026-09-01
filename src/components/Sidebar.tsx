import { useLayoutEffect, useRef, useState } from 'react'
import { profile, sections, socials, type SectionId } from '../data/portfolio'
import { Icon } from './Icon'
import styles from './Sidebar.module.css'

interface Props {
  current: SectionId
}

/*
 * 項目はボタンではなくリンクにしている。やっていることは hash を書き換えることなので、
 * リンクにすれば新しいタブで開く・URL をコピーする・リンクとして読み上げる、が
 * そのまま手に入る。表示の切り替えは hashchange 側（useSectionRouter）が受け持つ。
 */
export function Sidebar({ current }: Props) {
  const listRef = useRef<HTMLDivElement>(null)
  const [marker, setMarker] = useState<{ y: number; h: number } | null>(null)

  /*
   * 選択中の項目に合わせて標識を動かす。位置は実測する。
   * 背景色を瞬時に入れ替えると「消えて現れる」に見えるが、
   * 滑らせるとどこからどこへ動いたかが繋がって見える。
   *
   * 測り直しは ResizeObserver に任せる。window の resize だけを見ていると、
   * ウィンドウの大きさが変わらないまま一覧の高さが変わったとき
   * （字体の読み込み、縦スクロールバーの出入りなど）に標識が取り残される。
   */
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return

    const measure = () => {
      const on = list.querySelector<HTMLElement>('[aria-current="page"]')
      if (!on) return
      // 実測は矩形の差で取る。offsetTop は基準になる祖先が何かに左右されるため
      const box = list.getBoundingClientRect()
      const onBox = on.getBoundingClientRect()
      setMarker({ y: onBox.top - box.top, h: onBox.height })
    }
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(list)
    return () => observer.disconnect()
  }, [current])

  return (
    <nav className={styles.nav} aria-label="セクション">
      <div className={styles.brand}>
        <div className={styles.monogram} aria-hidden="true">
          {profile.initials}
        </div>
        <div>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>
            {profile.role}
            <br />
            {profile.location}
          </p>
        </div>
      </div>

      {/* 標識は ul の外に置く。ul の子に li 以外を混ぜられないため */}
      <div className={styles.listWrap} ref={listRef}>
        {marker && (
          <span
            className={styles.marker}
            style={{ transform: `translateY(${marker.y}px)`, height: marker.h }}
            aria-hidden="true"
          />
        )}
        <ul className={styles.list}>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                className={styles.item}
                href={`#${section.id}`}
                aria-current={section.id === current ? 'page' : undefined}
              >
                <span className={styles.dot} aria-hidden="true" />
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className={styles.socials}>
        {socials.map((s) => (
          <li key={s.label}>
            <a
              className={styles.social}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
            >
              <Icon name={s.icon} size={15} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
