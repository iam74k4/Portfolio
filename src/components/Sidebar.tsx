import { profile, sections, socials, type SectionId } from '../data/portfolio'
import { Icon } from './Icon'
import styles from './Sidebar.module.css'

interface Props {
  current: SectionId
  onNavigate: (id: SectionId) => void
}

export function Sidebar({ current, onNavigate }: Props) {
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

      <ul className={styles.list}>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={styles.item}
              aria-current={section.id === current ? 'page' : undefined}
              onClick={() => onNavigate(section.id)}
            >
              <span className={styles.dot} aria-hidden="true" />
              {section.label}
            </button>
          </li>
        ))}
      </ul>

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
