import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import { Project } from "@/types/project";

export const getProjectServerSideProps: GetServerSideProps = async (context) => {
    try {
        const { slug } = context.params as { slug: string };


        const projectsFilePath = path.join(process.cwd(), "src", "app", "private", "projects.json");
        const projectsFileContent = await fs.promises.readFile(projectsFilePath, "utf-8");
        const projectsData: Project[] = JSON.parse(projectsFileContent).projects;

        const projectIndex = projectsData.findIndex((project) => project.slug === slug);

        if (projectIndex === -1) {
            return { notFound: true };
        }

        return {
            props: {
                project: projectsData[projectIndex],
                previousProject: projectIndex > 0 ? projectsData[projectIndex - 1] : null,
                nextProject: projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null,
            },
        };
    } catch (error) {
        console.error("Error reading projects.json:", error);
        return { notFound: true };
    }
};
