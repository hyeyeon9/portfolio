import styles from './Certificates.module.css';
import type { Certificate } from '../types';

interface Props {
  items: Certificate[];
}

export default function Certificates({ items }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((cert, i) => (
        <li key={cert.name} className={`${styles.entry} reveal reveal-delay-${(i % 4) + 1}`}>
          <span className={styles.date}>{cert.date}</span>
          <span className={styles.name}>{cert.name}</span>
        </li>
      ))}
    </ul>
  );
}
