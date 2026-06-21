import { useState } from 'react';
import styles from './Skills.module.css';
import type { SkillGroup, Level } from '../types';
import { useSound } from '../hooks/useSound';

interface Props {
  groups: SkillGroup[];
}

function LevelBadge({ level }: { level: Level }) {
  const cls =
    level === 'Advanced' ? styles.badgeAdv
    : level === 'Intermediate' ? styles.badgeInt
    : styles.badgeBasic;
  return <span className={cls}>{level}</span>;
}

function SkillAccordion({ skill }: { skill: { name: string; level: Level; details: string[] } }) {
  const [open, setOpen] = useState(false);
  const { click } = useSound();

  return (
    <div className={styles.skillItem}>
      <button
        className={styles.skillHeader}
        onClick={() => { click(); setOpen(o => !o); }}
        aria-expanded={open}
        aria-label={`${skill.name} 상세보기`}
      >
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillRight}>
          <LevelBadge level={skill.level} />
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▼</span>
        </span>
      </button>
      <div className={`${styles.details} ${open ? styles.detailsOpen : ''}`} aria-hidden={!open}>
        <div className={styles.detailInner}>
          {skill.details.map((d, i) => (
            <p key={i} className={styles.detailBullet}>
              {d}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills({ groups }: Props) {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">사용해본 기술과 숙련도입니다.</p>
        </div>

        <div className={`${styles.guideBox} reveal reveal-delay-1`}>
          <div className={styles.guideItem}>
            <span className={styles.badgeAdv}>Advanced</span>실무 수준으로 독립적 설계 가능
          </div>
          <div className={styles.guideItem}>
            <span className={styles.badgeInt}>Intermediate</span>프로젝트에 자신 있게 적용 가능
          </div>
          <div className={styles.guideItem}>
            <span className={styles.badgeBasic}>Basic</span>기본 개념 이해 및 활용 경험
          </div>
        </div>

        <div className={styles.groups}>
          {groups.map((group, i) => (
            <div
              key={group.title}
              className={`${styles.groupCard} reveal reveal-delay-${(i % 4) + 1}`}
            >
              <p className={styles.groupTitle}>{group.title}</p>
              {group.items.map((skill) => (
                <SkillAccordion key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
