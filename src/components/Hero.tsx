import { useState } from 'react';
import styles from './Hero.module.css';
import { useSound } from '../hooks/useSound';

const MailIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const VelogIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v2.4L12 19 3 5.4V3zm2.27 2L12 16.1 18.73 5H5.27z"/>
  </svg>
);

const line1 = ['사용자가', '머무는', '화면을', '만드는'];
const line2Base = '개발자 ';
const highlight = '구혜연';
const line2End = '입니다.';

const SOCIAL = [
  { id: 'email', type: 'copy' as const, value: 'ik0n44@naver.com',  label: '이메일 복사', icon: <MailIcon /> },
  { id: 'phone', type: 'copy' as const, value: '010-8846-1029',     label: '전화번호 복사', icon: <PhoneIcon /> },
  { id: 'github', type: 'link' as const, href: 'https://github.com/hyeyeon9', label: 'GitHub', icon: <GitHubIcon /> },
  { id: 'velog',  type: 'link' as const, href: 'https://velog.io/@yeon_99',   label: 'Velog',  icon: <VelogIcon /> },
] as const;

export default function Hero() {
  const { click } = useSound();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (value: string, id: string) => {
    navigator.clipboard.writeText(value);
    click();
    setCopied(id);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.label}>FRONTEND DEVELOPER</span>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            {line1.map((word, i) => (
              <span key={word}>
                <span
                  className={styles.word}
                  style={{ animationDelay: `${0.18 + i * 0.1}s` }}
                >
                  {word}
                </span>
                <span className={styles.wordGap} />
              </span>
            ))}
          </span>
          <span className={styles.titleLine}>
            <span className={styles.word} style={{ animationDelay: '0.58s' }}>
              {line2Base}&nbsp;
            </span>
            <span
              className={`${styles.word} ${styles.highlight}`}
              style={{ animationDelay: '0.68s' }}
            >
              {highlight}&nbsp;
            </span>
            <span className={styles.word} style={{ animationDelay: '0.78s' }}>
              {line2End}
            </span>
          </span>
        </h1>

        <div className={styles.cta}>
          {SOCIAL.map(item => (
            <div key={item.id} className={styles.iconWrap}>
              {item.type === 'copy' ? (
                <button
                  className={styles.iconBtn}
                  onClick={() => handleCopy(item.value, item.id)}
                                    aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </button>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconBtn}
                  onClick={click}
                                    aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </a>
              )}
              {copied === item.id && (
                <span className={styles.tooltip}>복사!</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
