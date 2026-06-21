import styles from './Nav.module.css';
import { useSound } from '../hooks/useSound';
import BGMWidget from './BGMWidget';

interface NavProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

export default function Nav({ theme, onToggle }: NavProps) {
  const { click, hover } = useSound();

  return (
    <nav className={styles.nav} aria-label="주 네비게이션">
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} aria-label="홈으로 이동" onClick={click}>
          yeon<span>.dev</span>
        </a>

        <div className={styles.right}>
          <ul className={styles.links}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={styles.navLink}
                  onClick={click}
                  onMouseEnter={hover}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <BGMWidget />

          <button
            className={styles.iconBtn}
            onClick={() => { click(); onToggle(); }}
            onMouseEnter={hover}
            aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
