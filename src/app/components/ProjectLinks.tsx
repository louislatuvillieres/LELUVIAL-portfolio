import React from "react";
import ScrapLink from "./ScrapLink";

interface ProjectLinksProps {
  link?: string;
  attachment?: string;
  projectName: string;
  projectSlug: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  link,
  attachment,
  projectName,
  projectSlug
}) => (
  <div className="flex flex-wrap justify-center gap-8 my-12">
    {link ? (
      <ScrapLink
        href={link}
        text="Voir le projet"
        seed={`${projectSlug}-link`}
        padding={6}
        glyphWidth={7}
      />
    ) : (
      <div className="relative inline-block font-pangolin text-lg px-6 py-3 bg-gray-200 text-gray-600 italic shadow-md transform rotate-1">
        Bientôt (remis) en ligne...
      </div>
    )}
    
    {attachment && (
      <ScrapLink
        href={attachment}
        text="Dossier"
        seed={`${projectSlug}-attachment`}
      />
    )}
  </div>
);

export default ProjectLinks;