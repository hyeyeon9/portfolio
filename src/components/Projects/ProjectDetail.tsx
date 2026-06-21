import styles from './ProjectDetail.module.css';
import type { Project } from '../../types';

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectDetail({ project, open, onClose }: Props) {
  if (!project) return null;

  return (
    <div className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`} aria-hidden={!open}>
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onClose} aria-label="목록으로 돌아가기">
          ← 목록
        </button>
        <span className={styles.headerTitle}>{project.title}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.chips}>
          <span className={styles.metaChip}>{project.org}</span>
          <span className={styles.metaChip}>{project.period}</span>
          {project.team && project.team !== project.org && (
            <span className={styles.metaChip}>{project.team}</span>
          )}
          <span className={styles.metaChip}>{project.role}</span>
        </div>

        <p className={styles.summary}>{project.summary}</p>

        <div>
          <p className={styles.label}>Tech Stack</p>
          <div className={styles.stacks}>
            {project.stack.map(s => (
              <span key={s} className={styles.stackChip}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.label}>주요 기능</p>
          <div className={styles.features}>
            {project.features.map((f, i) => (
              <p key={i} className={styles.feature}>
                <span className={styles.check}>✓</span>
                {f}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="GitHub 저장소 열기"
            >
              GitHub ↗
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="라이브 사이트 열기"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
