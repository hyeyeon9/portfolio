import styles from './Timeline.module.css';

interface TimelineItem {
  period: string;
  org: string;
  role?: string;
  bullets: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={`${styles.entry} reveal reveal-delay-${(i % 4) + 1}`}>
          <span className={styles.period}>{item.period}</span>
          <div className={styles.info}>
            <div className={styles.header}>
              <span className={styles.org}>{item.org}</span>
              {item.role && <span className={styles.role}>{item.role}</span>}
            </div>
            {item.bullets.length > 0 && (
              <ul className={styles.bullets}>
                {item.bullets.map((b, j) => (
                  <li key={j} className={styles.bullet}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
