import { Icon } from '../components/Icon'
import { profile, socials } from '../data/portfolio'
import styles from './Contact.module.css'

/*
 * サーバを持たない構成なので、以前はフォームの内容から mailto: を組み立てていた。
 * 結局メールソフトが開くだけで二度手間になるため、最初からメールを開く形にした。
 * 送信サービス（Formspree など）を使うなら、ここにフォームを戻す。
 */
export function Contact() {
  return (
    <div className={`${styles.contact} stagger`}>
      <h3 className={styles.title}>
        {profile.contact.title.map((line, i) => (
          <span key={line}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </h3>

      <p className={styles.lead}>{profile.contact.lead}</p>

      <a className={styles.mail} href={`mailto:${profile.email}`}>
        <Icon name="mail" size={18} />
        {profile.email}
        <Icon name="arrow" size={16} className={styles.arrow} />
      </a>

      <ul className={styles.links}>
        {socials
          .filter((s) => s.icon !== 'mail')
          .map((s) => (
            <li key={s.label}>
              <a className={styles.link} href={s.url} target="_blank" rel="noreferrer noopener">
                <Icon name={s.icon} size={14} />
                {s.label}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}
