export type Level = 'Advanced' | 'Intermediate' | 'Basic';

export interface Experience {
  period: string;
  org: string;
  role: string;
  bullets: string[];
}

export interface Education {
  period: string;
  org: string;
  bullets: string[];
}

export interface Certificate {
  name: string;
  date: string;
}

export interface Skill {
  name: string;
  level: Level;
  details: string[];
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface Project {
  title: string;
  category: string;
  accent: string;
  org: string;
  period: string;
  team: string;
  role: string;
  summary: string;
  thumbnail?: string;
  images?: string[];       // 여러 스크린샷 (예: ['/projects/daily24-1.png', ...])
  stack: string[];
  features: string[];
  github?: string;
  url?: string;
}
