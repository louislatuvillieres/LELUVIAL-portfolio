// pages/projets/[slug].tsx (Pages Router version)
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import LayoutProject from "@/app/components/LayoutProject";
import projectsData from "@/data/projects.json";
import { Project } from "@/utils/projectUtils";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = projectsData;
  const currentIndex = projects.findIndex((p) => p.slug === params?.slug);

  if (currentIndex === -1) {
    return { notFound: true };
  }

  const project = projects[currentIndex];
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return {
    props: {
      project,
      previousProject,
      nextProject,
    },
  };
};

const ProjectPage: NextPage<{
  project: Project;
  previousProject: Project | null;
  nextProject: Project | null;
}> = ({ project, previousProject, nextProject }) => {
  return (
    <LayoutProject
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
};

export default ProjectPage;