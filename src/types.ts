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

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  accent: string;
  org: string;
  period: string;
  team: string;
  role: string;
  summary: string;
  thumbnail?: string;
  images?: string[];
  stack: string[];
  features: string[];
  challenges?: Challenge[];
  github?: string;
  url?: string;
}
