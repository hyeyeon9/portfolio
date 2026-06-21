import styles from './ProjectGrid.module.css';
import type { Project } from '../../types';
import { useSound } from '../../hooks/useSound';

interface Props {
  projects: Project[];
  onSelect: (index: number) => void;
}

export default function ProjectGrid({ projects, onSelect }: Props) {
  const { click, hover } = useSound();

  return (
    <div className={styles.grid}>
      {projects.map((project, i) => (
        <article
          key={project.title}
          className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
          onClick={() => { click(); onSelect(i); }}
          onMouseEnter={hover}
          tabIndex={0}
          role="button"
          aria-label={`${project.title} 상세보기`}
          onKeyDown={e => e.key === 'Enter' && onSelect(i)}
        >
          <div className={styles.imgWrap}>
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={`${project.title} 썸네일`}
                className={styles.img}
                draggable={false}
              />
            ) : (
              <div
                className={styles.placeholder}
                style={{ background: `linear-gradient(135deg, ${project.accent}33 0%, ${project.accent}aa 100%)` }}
              >
                <span className={styles.placeholderText}>{project.title}</span>
              </div>
            )}
            <span className={styles.hoverLabel}>자세히 보기 →</span>
          </div>

          <div className={styles.info}>
            <p className={styles.title}>{project.title}</p>
            <p className={styles.summary}>{project.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
