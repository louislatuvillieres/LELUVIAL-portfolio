// pages/projets/index.tsx

import Layout from "@components/Layout";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ProjectList from "@/app/components/ProjectList";
import { GetServerSideProps, NextPage } from "next";
import fs from 'fs';
import path from 'path';
import LayoutProject from "@/app/components/LayoutProject";

interface Project {
    name: string,
    slug: string,
    icon: string,
    thumbnail: string,
    year: number,
    public: boolean,
    keywords: string[],
    images: string[],
    link: string,
    description: string,
    description1: string,
    description2: string,
    screenshot1: [],
    screenshot2: [],
}

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
    
            const foundProject = projectsData.find((project: Project) => project.slug === "anautiqua");
    
            if (foundProject) {
                return {
                    props: {
                        project: foundProject,
                    },
                };
            } else {
                return {
                    notFound: true,
                };
            }
        } else {
            return {
                notFound: true,
            };
        }
    } catch (error) {
        console.error('Error reading authorization.json:', error);
        return {
            notFound: true,
        };
    }
};

const Waves: NextPage<{ project: Project }> = ({ project }) => {
if (!project) {
    return <div>Loading...</div>; // Or any other fallback UI
}
  return (
    <>
      <LayoutProject project={project}/>
    </>
  );
};

export default Waves;
