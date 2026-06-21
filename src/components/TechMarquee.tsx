import { useState } from 'react';
import styles from './TechMarquee.module.css';

const TECHS = [
  { name: 'React',        file: 'react' },
  { name: 'TypeScript',   file: 'typescript' },
  { name: 'Next.js',      file: 'nextjs',  mono: true },
  { name: 'JavaScript',   file: 'javascript' },
  { name: 'Tailwind CSS', file: 'tailwind' },
  { name: 'HTML5',        file: 'html5' },
  { name: 'CSS3',         file: 'css3' },
  { name: 'Python',       file: 'python' },
  { name: 'Docker',       file: 'docker' },
  { name: 'GitHub',       file: 'github',  mono: true },
  { name: 'Vercel',       file: 'vercel',  mono: true },
  { name: 'Supabase',     file: 'supabase' },
  { name: 'MySQL',        file: 'mysql' },
  { name: 'Spring Boot',  file: 'springboot' },
  { name: 'FastAPI',      file: 'fastapi' },
];

function TechItem({ tech }: { tech: typeof TECHS[0] }) {
  const [hasIcon, setHasIcon] = useState(true);

  return (
    <div className={styles.item}>
      {hasIcon ? (
        <img
          src={`/icons/${tech.file}.svg`}
          alt={tech.name}
          className={`${styles.icon}${tech.mono ? ` ${styles.monoIcon}` : ''}`}
          onError={() => setHasIcon(false)}
        />
      ) : (
        <div className={styles.iconFallback}>
          {tech.name.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {[...TECHS, ...TECHS].map((tech, i) => (
          <TechItem key={`${tech.file}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}
