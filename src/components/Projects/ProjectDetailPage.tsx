import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectDetailPage.module.css';
import type { Project } from '../../types';
import BGMWidget from '../BGMWidget';
import { useSound } from '../../hooks/useSound';

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

/* ── Tech chip — solid vivid palette ── */
const CHIP_GROUPS: Record<string, number> = {
  'React': 0, 'TypeScript': 0, 'PostgreSQL': 0, 'MySQL': 0, 'Docker': 0, 'Kubernetes': 0,
  'Node.js': 1, 'Spring Boot': 1, 'FastAPI': 1, 'Supabase': 1, 'LangChain': 1, 'Google Generative AI': 1,
  'JavaScript': 2, 'Vanilla JavaScript': 2, 'Python': 2, 'Flask': 2, 'AWS S3': 2, 'Nivo': 2, 'Three.js': 2,
  'Redis': 3, 'HTML5': 3, 'PyTorch': 3, 'ResNet50': 3, 'Stable Diffusion': 3,
  'CSS': 4, 'CSS3': 4, 'Zustand': 4, 'Tailwind CSS': 4, 'Materialize CSS': 4,
  'Next.js': 5, 'Vercel': 5, 'Prisma': 5, 'React Router': 5, 'Flask-CORS': 5,
};
const PALETTE: [string, string][] = [
  ['#2563eb', '#fff'],
  ['#16a34a', '#fff'],
  ['#d97706', '#fff'],
  ['#dc2626', '#fff'],
  ['#7c3aed', '#fff'],
  ['#475569', '#fff'],
];
function getChipStyle(tech: string) {
  const idx = CHIP_GROUPS[tech] ?? (tech.charCodeAt(0) % 6);
  const [bg, fg] = PALETTE[idx];
  return { backgroundColor: bg, color: fg };
}

type Orientation = 'portrait' | 'landscape' | null;

interface Props {
  project: Project;
  onBack: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  projects: Project[];
  onSelectProject: (p: Project) => void;
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const imgVariants = {
  hidden:  { opacity: 0, y: 52 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: (i % 4) * 0.09 },
  }),
};

const nextVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectDetailPage({
  project, onBack, theme, onToggleTheme, projects, onSelectProject,
}: Props) {
  const images: string[] =
    project.images?.length ? project.images
    : project.thumbnail     ? [project.thumbnail]
    : [];

  const currentIdx  = projects.indexOf(project);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  const [orientations, setOrientations] = useState<Orientation[]>(() => images.map(() => null));
  const { click, hover } = useSound();

  /* Portrait/landscape detection */
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new window.Image();
      img.onload = () => {
        const isPortrait = img.naturalHeight > img.naturalWidth * 1.2;
        setOrientations(prev => {
          const next = [...prev];
          next[i] = isPortrait ? 'portrait' : 'landscape';
          return next;
        });
      };
      img.src = src;
    });
  }, [images.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.page}>

      {/* ── Top bar ── */}
      <header className={styles.topBar}>
        <button
          className={styles.backBtn}
          onClick={() => { click(); onBack(); }}
          onMouseEnter={hover}
          aria-label="목록으로 돌아가기"
        >
          ←
        </button>
        <span className={styles.topTitle}>{project.title}</span>
        <div className={styles.topRight}>
          <BGMWidget />
          <button
            className={styles.themeBtn}
            onClick={() => { click(); onToggleTheme(); }}
            onMouseEnter={hover}
            aria-label={theme === 'light' ? '다크 모드' : '라이트 모드'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </header>

      {/* ── 2-column content ── */}
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.category}>{project.category}</p>
          <h1 className={styles.title}>{project.title}</h1>

          <div className={styles.chips}>
            {project.stack.map(s => (
              <span key={s} className={styles.chip} style={getChipStyle(s)}>{s}</span>
            ))}
          </div>

          <div className={styles.actions}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.actionOutline}`}
                onClick={click} onMouseEnter={hover}>
                GitHub ↗
              </a>
            )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.actionPrimary}`}
                onClick={click} onMouseEnter={hover}>
                LIVE VIEW ↗
              </a>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.meta}>
            {[
              ['팀',   project.team],
              ['역할', project.role],
              ['기간', project.period],
              ['소속', project.org],
            ].map(([k, v]) => (
              <div key={k} className={styles.metaRow}>
                <span className={styles.metaKey}>{k}</span>
                <span className={styles.metaVal}>{v}</span>
              </div>
            ))}
          </div>
          <p className={styles.summary}>{project.summary}</p>
        </div>
      </div>

      {/* ── Scroll-reveal images with framer-motion ── */}
      {images.length > 0 && (
        <div className={styles.imageSection}>
          <p className={styles.imageSectionLabel}>SCREENSHOTS</p>

          <div className={styles.imageGrid}>
            {images.map((img, i) => {
              const ori = orientations[i];
              const isPortrait = ori === 'portrait';
              const caption = project.features[i];
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={imgVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className={[
                    styles.imageItem,
                    isPortrait ? styles.portraitItem : styles.landscapeItem,
                  ].join(' ')}
                >
                  <div className={isPortrait ? styles.portraitImgWrap : styles.landscapeImgWrap}>
                    <img
                      src={img}
                      alt={`${project.title} 스크린샷 ${i + 1}`}
                      className={styles.screenshot}
                      loading="lazy"
                    />
                  </div>
                  {caption && (
                    <div className={styles.imageCaption}>
                      <span className={styles.captionText}>{caption}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Next project ── */}
      <motion.div
        className={styles.nextSection}
        variants={nextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <button
          className={styles.nextCard}
          onClick={() => { click(); onSelectProject(nextProject); window.scrollTo({ top: 0, behavior: 'instant' }); }}
          onMouseEnter={hover}
        >
          {nextProject.thumbnail && (
            <img
              src={nextProject.thumbnail}
              alt={nextProject.title}
              className={styles.nextThumb}
            />
          )}
          <div className={styles.nextInfo}>
            <span className={styles.nextLabel}>Next Project</span>
            <span className={styles.nextTitle}>{nextProject.title}</span>
          </div>
          <span className={styles.nextArrow}>›</span>
        </button>
      </motion.div>

    </div>
  );
}
