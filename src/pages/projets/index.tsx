import Breadcrumbs from "@/app/components/Breadcrumbs";
import ProjectList from "@/app/components/ProjectList";
import { GetServerSideProps, NextPage } from "next";
import fs from 'fs';
import path from 'path';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const projectsFilePath = path.join(process.cwd(), 'src', 'app', 'private', 'projects.json');
    const projectsFileContent = await fs.promises.readFile(projectsFilePath, 'utf-8');
    const projectsData = JSON.parse(projectsFileContent).projects;

    return {
      props: {
        projects: projectsData,
      },
    };
  } catch (error) {
    console.error('Error reading projects.json:', error);
    return {
      props: {
        projects: [],
      },
    };
  }
};

const IndexProjets: NextPage<{ projects: [] }> = ({ projects }) => {
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
