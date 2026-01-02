// utils/projectUtils.ts
import projectsData from "@/data/projects.json";

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
  description: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

/**
 * Récupère un projet par son slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project: Project) => project.slug === slug);
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
