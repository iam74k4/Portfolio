import { useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { profile, socials } from '../data/portfolio'
import styles from './Contact.module.css'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  /**
   * サーバを持たない構成なので、入力内容をメールの下書きとして開く。
   * フォーム送信サービス（Formspree など）に切り替えるときは、ここを fetch に差し替える。
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`ポートフォリオからのお問い合わせ（${form.name}）`)
    const body = encodeURIComponent(
      `お名前: ${form.name}\nメール: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('メールソフトで下書きを開きました。')
  }

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <h3 className={styles.title}>
          {profile.contact.title.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h3>
        <p className={styles.lead}>{profile.contact.lead}</p>

        <div className={styles.rows}>
          <div className={styles.row}>
            <span className={`eyebrow ${styles.rowLabel}`}>Email</span>
            <a className={styles.mail} href={`mailto:${profile.email}`}>
              <Icon name="mail" size={15} />
              {profile.email}
            </a>
          </div>
          <div className={styles.row}>
            <span className={`eyebrow ${styles.rowLabel}`}>Social</span>
            <div className={styles.links}>
              {socials
                .filter((s) => s.icon !== 'mail')
                .map((s) => (
                  <a
                    key={s.label}
                    className={styles.link}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon name={s.icon} size={13} />
                    {s.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className="eyebrow" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            required
            placeholder="お名前"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className={styles.field}>
          <label className="eyebrow" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className={styles.field}>
          <label className="eyebrow" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            placeholder="ご相談の内容をお書きください。"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button type="submit" className={styles.submit}>
          送信する
          <Icon name="arrow" size={15} />
        </button>

        <p className={styles.status} role="status">
          {status}
        </p>
      </form>
    </div>
  )
}
