import styles from './Contact.module.css';
import { useSound } from '../hooks/useSound';

export default function Contact() {
  const { click, hover } = useSound();

  return (
    <>
      <section id="contact" className={styles.section}>
        <div className="container">
          <div className={`${styles.card} reveal`}>
            <h2 className={styles.title}>함께 만들어요 👋</h2>
            <p className={styles.desc}>
              새로운 기회나 협업 제안이 있으시면 언제든 편하게 연락해 주세요.
              <br />
              빠르게 회신드리겠습니다.
            </p>
            <div className={styles.buttons}>
              <a
                href="mailto:ik0n44@naver.com"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={click}
                onMouseEnter={hover}
                aria-label="이메일 보내기"
              >
                ✉️ ik0n44@naver.com
              </a>
              <a
                href="https://github.com/hyeyeon9"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={click}
                onMouseEnter={hover}
                aria-label="GitHub 프로필 열기"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} 구혜연 · Frontend Developer
      </footer>
    </>
  );
}
