import styles from './StackTicker.module.css';

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const ICONS = [
  { name: 'React',       src: `${BASE}/react/react-original.svg` },
  { name: 'TypeScript',  src: `${BASE}/typescript/typescript-original.svg` },
  { name: 'JavaScript',  src: `${BASE}/javascript/javascript-original.svg` },
  { name: 'Next.js',     src: `${BASE}/nextjs/nextjs-original.svg` },
  { name: 'HTML5',       src: `${BASE}/html5/html5-original.svg` },
  { name: 'CSS3',        src: `${BASE}/css3/css3-original.svg` },
  { name: 'Tailwind',    src: `${BASE}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Python',      src: `${BASE}/python/python-original.svg` },
  { name: 'Spring',      src: `${BASE}/spring/spring-original.svg` },
  { name: 'MySQL',       src: `${BASE}/mysql/mysql-original.svg` },
  { name: 'PostgreSQL',  src: `${BASE}/postgresql/postgresql-original.svg` },
  { name: 'Supabase',    src: `${BASE}/supabase/supabase-original.svg` },
  { name: 'Docker',      src: `${BASE}/docker/docker-original.svg` },
  { name: 'Git',         src: `${BASE}/git/git-original.svg` },
  { name: 'Figma',       src: `${BASE}/figma/figma-original.svg` },
  { name: 'AWS',         src: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
];

export default function StackTicker() {
  const doubled = [...ICONS, ...ICONS];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubled.map(({ name, src }, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.bubble}>
              <img src={src} alt={name} width={36} height={36} />
            </div>
            <span className={styles.label}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}