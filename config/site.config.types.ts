/**
 * サイト設定の型定義
 *
 * TypeScriptの型安全性を確保し、エディタのIntelliSenseを有効化
 */

export interface SiteConfig {
  name: string;
  title: string;
  url: string;
  description: string;
  email: string;
  location: string;
  phone?: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    twitterHandle: string;
  };
  hero: {
    roles: string[];
    greeting: string;
  };
  about: {
    description: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  seo: {
    keywords: string[];
    ogImage: string;
    googleVerification: string;
  };
  pwa: {
    name: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
  };
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export type ExperienceType = 'work' | 'education';

export interface Experience {
  type: ExperienceType;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Backend';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  category: ProjectCategory;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url?: string;
}

/**
 * バリデーション用の型ガード
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidSkillLevel = (level: number): boolean => {
  return level >= 0 && level <= 100;
};

