import { getProjectServerSideProps } from "@/app/server/getProjectServerSideProps";
import { withProject } from "@/app/hoc/withProject";
import { Project } from "@/types/project";

export const getServerSideProps = getProjectServerSideProps;

const ProjectPage = ({ project, previousProject, nextProject }: { project: Project; previousProject: Project | null; nextProject: Project | null }) => {
    const PageComponent = withProject(project, previousProject, nextProject);
    return <PageComponent />;
};

export default ProjectPage;
