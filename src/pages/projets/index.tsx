// pages/projets/index.tsx

import Layout from "@components/Layout";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ProjectList from "@/app/components/ProjectList";
import { GetServerSideProps, NextPage } from "next";
import fs from 'fs';
import path from 'path';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const filePath = path.join(process.cwd(), 'src', 'app', 'private', 'authorization.json');
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(fileContent);

    // Get user's IP address from the request
    const ipAddress = context.req.socket.remoteAddress;

    // Check if the IP address is present in the authorization.json file
    const associatedNames: string[] = [];
    for (const [name, ips] of Object.entries(parsedData)) {
      if (Array.isArray(ips) && ips.includes(ipAddress)) {
        associatedNames.push(name);
      } else if (ips === ipAddress) {
        associatedNames.push(name);
      }
    }

    if (associatedNames.length > 0) {
      // If the IP is associated with a name, return the protected data
      // Define the path to your JSON file
      const projectsFilePath = path.join(process.cwd(), 'src', 'app', 'private', 'projects.json');

      // Read the file content
      const projectsFileContent = await fs.promises.readFile(projectsFilePath, 'utf-8');

      // Parse the JSON content
      const projectsData = JSON.parse(projectsFileContent).projects;

      return {
        props: {
          projects: projectsData,
        },
      }
    } else {
      // Define the path to your JSON file
      const projectsFilePath = path.join(process.cwd(), 'src', 'app', 'private', 'projects.json');

      // Read the file content
      const projectsFileContent = await fs.promises.readFile(projectsFilePath, 'utf-8');

      // Parse the JSON content
      const projectsData = JSON.parse(projectsFileContent).projects;

      // Filter projects data for public projects
      const filteredData = projectsData.filter((project: { public: boolean }) => project.public);

      return {
        props: {
          projects: filteredData,
        },
      };
    }
  } catch (error) {
    console.error('Error reading authorization.json:', error);
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
