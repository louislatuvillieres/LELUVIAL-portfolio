// utils/projectUtils.ts
import projectsData from "@/data/projects.json";

export type Screenshot = [string, number, number];

export interface Project {
  name: string;
  slug: string;
  icon: string;
  background: number;
  thumbnail: string;
  year: number;
  public: boolean;

  keywords: string[];
  images: string[];

  link?: string;
  attachment?: string;

  videos?: string[];

  description: string;
  description1?: string;
  description2?: string;
  description3?: string;

  screenshot1?: Screenshot;
  screenshot2?: Screenshot;
  screenshot3?: Screenshot;
}

/**
 * Récupère un projet par son slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  const project = projectsData.find((p: any) => p.slug === slug);
  return project as Project | undefined;
};

/**
 * Récupère le nom d'un projet par son slug
 */
export const getProjectName = (slug: string): string => {
  const project = getProjectBySlug(slug);
  return project ? project.name : slug;
};

/**
 * Récupère plusieurs projets par leurs slugs
 */
export const getProjectsBySlug = (slugs: string[]): Project[] => {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== undefined);
};