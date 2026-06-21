import { useState, useRef, useCallback } from 'react';
import styles from './ProjectCarousel.module.css';
import type { Project } from '../../types';

interface Props {
  projects: Project[];
  domain?: string;
  fullscreen?: boolean;
}

export default function ProjectCarousel({
  projects,
  domain = 'yeon.dev/projects',
  fullscreen = false,
}: Props) {
  const [projectIdx, setProjectIdx] = useState(0);
  const [imageIdx, setImageIdx] = useState(0);
  const dragStart = useRef<number | null>(null);

  const project = projects[projectIdx];
  const images: string[] =
    project.images?.length
      ? project.images
      : project.thumbnail
      ? [project.thumbnail]
      : [];

  const prevProject = useCallback(() => {
    setProjectIdx(i => (i - 1 + projects.length) % projects.length);
    setImageIdx(0);
  }, [projects.length]);

  const nextProject = useCallback(() => {
    setProjectIdx(i => (i + 1) % projects.length);
    setImageIdx(0);
  }, [projects.length]);

  const prevImage = () => setImageIdx(i => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1));
  const nextImage = () => setImageIdx(i => (i + 1) % Math.max(images.length, 1));

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(delta) > 40) delta < 0 ? nextProject() : prevProject();
  };

  const currentImage = images[imageIdx];

  /* ── compact preview (while overlay is expanding) ── */
  if (!fullscreen) {
    return (
      <div className={styles.preview}>
        {currentImage ? (
          <img src={currentImage} alt={project.title} className={styles.previewImg} draggable={false} />
        ) : (
          <div
            className={styles.previewPlaceholder}
            style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent})` }}
          >
            {project.title}
          </div>
        )}
        <div className={styles.previewBar}>
          <span className={styles.previewTitle}>{project.title}</span>
          <span className={styles.previewCat}>{project.category}</span>
        </div>
      </div>
    );
  }

  /* ── fullscreen two-pane layout ── */
  return (
    <div className={styles.fullscreen}>

      {/* Browser chrome */}
      <div className={styles.chrome}>
        <div className={styles.trafficLights}>
          <span className={`${styles.tLight} ${styles.tRed}`} />
          <span className={`${styles.tLight} ${styles.tYellow}`} />
          <span className={`${styles.tLight} ${styles.tGreen}`} />
        </div>
        <div className={styles.urlBar}>
          <span>🔒</span>
          <span className={styles.urlText}>
            {domain}/{project.title.toLowerCase().replace(/\s+/g, '-')}
          </span>
        </div>
        <div className={styles.chromeProjNav}>
          <button className={styles.chromeArrow} onClick={prevProject} aria-label="이전 프로젝트">‹</button>
          <span className={styles.chromeCount}>{projectIdx + 1} / {projects.length}</span>
          <button className={styles.chromeArrow} onClick={nextProject} aria-label="다음 프로젝트">›</button>
        </div>
      </div>

      {/* Two-pane body */}
      <div className={styles.body}>

        {/* Left: image gallery */}
        <div
          className={styles.gallery}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={e => { if (dragStart.current !== null) onPointerUp(e); }}
        >
          <div className={styles.galMain}>
            {currentImage ? (
              <img
                src={currentImage}
                alt={`${project.title} 스크린샷 ${imageIdx + 1}`}
                className={styles.galImg}
                draggable={false}
              />
            ) : (
              <div
                className={styles.galPlaceholder}
                style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent})` }}
              >
                {project.title}
              </div>
            )}
            {images.length > 1 && (
              <>
                <button
                  className={`${styles.galArrow} ${styles.galArrowL}`}
                  onClick={e => { e.stopPropagation(); prevImage(); }}
                  aria-label="이전 이미지"
                >‹</button>
                <button
                  className={`${styles.galArrow} ${styles.galArrowR}`}
                  onClick={e => { e.stopPropagation(); nextImage(); }}
                  aria-label="다음 이미지"
                >›</button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className={styles.thumbs}>
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === imageIdx ? styles.thumbActive : ''}`}
                  onClick={() => setImageIdx(i)}
                  aria-label={`이미지 ${i + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: project details */}
        <div className={styles.detail}>
          <div className={styles.detailHead}>
            <span className={styles.catBadge}>{project.category}</span>
            <h3 className={styles.detailTitle}>{project.title}</h3>
            <p className={styles.detailMeta}>{project.org} · {project.period}</p>
            {project.team && project.team !== project.org && (
              <p className={styles.detailMeta}>{project.team} · {project.role}</p>
            )}
          </div>

          <p className={styles.detailSummary}>{project.summary}</p>

          <div className={styles.detailSection}>
            <p className={styles.sectionLabel}>주요 기능</p>
            <ul className={styles.features}>
              {project.features.map((f, i) => (
                <li key={i} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.detailSection}>
            <p className={styles.sectionLabel}>Tech Stack</p>
            <div className={styles.stacks}>
              {project.stack.map(s => (
                <span key={s} className={styles.stack}>{s}</span>
              ))}
            </div>
          </div>

          {(project.github || project.url) && (
            <div className={styles.links}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub ↗
                </a>
              )}
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Live ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Project dot navigation */}
      <div className={styles.projDots}>
        {projects.map((_, i) => (
          <button
            key={i}
            className={`${styles.projDot} ${i === projectIdx ? styles.projDotActive : ''}`}
            onClick={() => { setProjectIdx(i); setImageIdx(0); }}
            aria-label={`${projects[i].title}으로 이동`}
            aria-current={i === projectIdx}
          />
        ))}
      </div>
    </div>
  );
}
