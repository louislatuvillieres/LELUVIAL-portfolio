// components/ProjectList.tsx
import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  icon: string;
  name: string;
  public: boolean;
  slug: string;
  year: number;
  thumbnail: string;
  keywords: string[];
  images: string[];
  background?: number;
}

interface ProjectListProps {
  projects: Project[];
}

const parentDiv = {
  visible: (i: number) => ({
    transform: "translateY(0%)",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.75,
      delay: i < 2 ? i * 0.3 : i * 0.01,
    },
  }),
  hidden: {
    transform: "translateY(10%)",
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.25,
    },
  },
};

const childrenImg = {
  visible: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { duration: 0.25 },
  },
  hidden: {
    transform: "translateY(5%)",
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="px-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
          parentVariants={parentDiv}
          imageVariants={childrenImg}
        />
      ))}
    </div>
  );
};

export default ProjectList;
