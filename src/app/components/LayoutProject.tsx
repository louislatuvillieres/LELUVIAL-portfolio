import Breadcrumbs from "@/app/components/Breadcrumbs";
import { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import { Project } from "@/types/project";

// Composant pour les tags de technologie
const TechStack = ({ keywords }: { keywords: string[] }) => (
  <div className="flex justify-center gap-6 h-8">
    {keywords.map((keyword, index) => (
      <div key={index} className="group relative">
        <Image
          priority
          className="h-8 w-auto"
          width={600}
          height={600}
          alt={keyword}
          src={`/skills/${keyword.toLowerCase().replace(/ /g, "-")}.png`}
        />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full whitespace-nowrap font-plex font-light opacity-0 group-hover:opacity-100 transition-opacity">
          {keyword}
        </span>
      </div>
    ))}
  </div>
);

// Composant pour les liens externes
const ProjectLinks = ({
  link,
  attachment,
}: {
  link?: string;
  attachment?: string;
}) => (
  <div className="text-xl font-erode text-center mt-8">
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70 transition-opacity"
      >
        Accéder au site
      </a>
    ) : (
      <span className="text-gray-500">Projet non encore remis en ligne</span>
    )}
    {attachment && (
      <a
        href={attachment}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70 transition-opacity ml-6"
      >
        Dossier de presse
      </a>
    )}
  </div>
);

// Composant pour les vidéos avant/après
const VideoComparison = ({ videos }: { videos: string[] }) => {
  if (!videos?.[0] || !videos?.[1]) return null;

  return (
    <div className="w-full grid md:grid-cols-2 gap-8 mt-12">
      <div>
        <p className="font-erode text-xl italic mb-2">Avant :</p>
        <iframe
          className="w-full aspect-video rounded"
          src={videos[0]}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Avant optimisation"
        />
      </div>
      <div>
        <p className="font-erode text-xl italic mb-2">Après :</p>
        <iframe
          className="w-full aspect-video rounded"
          frameBorder="0"
          src={videos[1]}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Après optimisation"
        />
      </div>
    </div>
  );
};

// Composant pour section texte + image
const ContentSection = ({
  description,
  screenshot,
  imagePosition = "right",
  projectName,
}: {
  description?: string;
  screenshot?: unknown;
  imagePosition?: "left" | "right";
  projectName: string;
}) => {
  if (!description && !screenshot) return null;

  // Vérification de type pour screenshot
  const isValidScreenshot =
    Array.isArray(screenshot) &&
    screenshot.length === 3 &&
    typeof screenshot[0] === "string" &&
    typeof screenshot[1] === "number" &&
    typeof screenshot[2] === "number";

  const hasImage = isValidScreenshot;

  return (
    <div
      className={`grid ${
        hasImage ? "md:grid-cols-2" : "grid-cols-1"
      } gap-12 items-start my-16`}
    >
      {/* Image à gauche */}
      {hasImage && imagePosition === "left" && (
        <div className="flex items-start justify-center">
          <Image
            priority
            quality={100}
            className="w-full max-w-md h-auto rounded shadow-lg"
            src={screenshot[0]}
            alt={`Screenshot ${projectName}`}
            width={screenshot[1]}
            height={screenshot[2]}
          />
        </div>
      )}

      {/* Texte */}
      {description && (
        <div className="flex items-center">
          <p className="font-plex text-lg leading-relaxed text-justify">
            {description}
          </p>
        </div>
      )}

      {/* Image à droite */}
      {hasImage && imagePosition === "right" && (
        <div className="flex items-start justify-center">
          <Image
            priority
            quality={100}
            className="w-full max-w-md h-auto rounded shadow-lg"
            src={screenshot[0]}
            alt={`Screenshot ${projectName}`}
            width={screenshot[1]}
            height={screenshot[2]}
          />
        </div>
      )}
    </div>
  );
};

const LayoutProject: NextPage<{
  project: Project;
  previousProject: Project | null;
  nextProject: Project | null;
}> = ({ project }) => {
  return (
    <>
      <Breadcrumbs title={project.name} title1="Projets" />

      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* En-tête du projet */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Thumbnail */}
          <div className="flex items-center">
            <Image
              alt={`Aperçu de ${project.name}`}
              src={project.thumbnail}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Infos du projet */}
          <div className="flex flex-col justify-center space-y-8">
            <TechStack keywords={project.keywords} />
            <ProjectLinks link={project.link} attachment={project.attachment} />
          </div>
        </div>

        {/* Description principale */}
        <p className="font-plex text-lg leading-relaxed text-justify mb-8">
          {project.description}
        </p>

        {/* Vidéos avant/après */}
        <VideoComparison videos={project.videos || []} />

        {/* Section 1 */}
        <ContentSection
          description={project.description1}
          screenshot={project.screenshot1}
          imagePosition="right"
          projectName={project.name}
        />

        {/* Section 2 */}
        <ContentSection
          description={project.description2}
          screenshot={project.screenshot2}
          imagePosition="left"
          projectName={project.name}
        />
      </div>

      {/* Script Vimeo si nécessaire */}
      {project.videos && (
        <Script src="https://player.vimeo.com/api/player.js" />
      )}
    </>
  );
};

export default LayoutProject;
