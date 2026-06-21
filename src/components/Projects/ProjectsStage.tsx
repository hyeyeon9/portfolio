import styles from './ProjectsStage.module.css';
import ProjectGrid from './ProjectGrid';
import type { Project } from '../../types';

interface Props {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export default function ProjectsStage({ projects, onSelect }: Props) {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">그동안 만들어온 개인 프로젝트들입니다.</p>
        </div>

        <ProjectGrid
          projects={projects}
          onSelect={i => onSelect(projects[i])}
        />
      </div>
    </section>
  );
}
