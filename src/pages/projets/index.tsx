import Breadcrumbs from "@/app/components/Breadcrumbs";
import ProjectList from "@/app/components/ProjectList";
import { GetStaticProps, NextPage } from "next";
import projectsData from "@/data/projects.json";
import { Project } from "@/utils/projectUtils";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};

const IndexProjets: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <Breadcrumbs title="Projets" />
      <div className="px-6 py-2 w-full h-full">
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default IndexProjets;
