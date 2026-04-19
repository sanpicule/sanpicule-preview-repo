import type { ComponentType } from 'react';

export interface Skill {
  name: string;
  level: string;
  category: 'frontend' | 'backend' | 'database' | 'infrastructure' | 'tool' | 'ai' | 'soft';
  icon?: string;
  iconComponent?: ComponentType<{ size?: number | string }>;
}

export interface Article {
  id: string;
  title: string;
  body: string;
  created_at: string;
  label: number;
  image_url: string | null;
}

export interface Screenshot {
  src: string;
  comment: string;
  icon?: string;
}

export interface ResultItem {
  label: string;
  sublabel: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  duration: string;
  role: string;
  client?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  type: 'work' | 'portfolio';
  demoUrl?: string;
  githubUrl?: string;
  screenshots: Screenshot[];
  challenge: string;
  solution: string;
  learnings: string[];
  resultsDescription?: string;
  resultItems?: ResultItem[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface ExperienceEntry {
  title: string;
  industry: string;
  role: string;
  period: string;
  stack: string[];
  summary: string;
}

export interface AiServiceEntry {
  title: string;
  status: 'delivered' | 'in_progress';
  client?: string;
  summary: string;
  keywords: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: {
    line1: string;
    line2: string;
    line3: string;
  };
  heroLead: string;
  introduction: string;
  skills: Skill[];
  projects: Project[];
  contact: ContactInfo;
  about: {
    description: string;
    workHistory: {
      company: string;
      position: string;
      period: string;
      description: string;
    }[];
    education: {
      school: string;
      period: string;
      degree: string;
      description: string;
    }[];
    achievements: {
      title: string;
      year: string;
      description: string;
    }[];
  };
  experience: ExperienceEntry[];
  aiServices: AiServiceEntry[];
}
