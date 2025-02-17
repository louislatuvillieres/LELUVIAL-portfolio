import { NextPage } from "next";
import { useRouter } from "next/router";
import { Project } from "@/types/project";
import LayoutProject from "@/app/components/LayoutProject";

export const withProject = (project: Project, previousProject: Project | null, nextProject: Project | null) => {
    const ProjectPage: NextPage = () => {
        const router = useRouter();

        if (!project) {
            router.push("/error");
            return null;
        }

        return <LayoutProject project={project} previousProject={previousProject} nextProject={nextProject} />;
    };

    return ProjectPage;
};
