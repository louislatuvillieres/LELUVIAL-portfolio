import Breadcrumbs from "@/app/components/Breadcrumbs";
import { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import { Project } from "@/utils/projectUtils";
import { motion } from "framer-motion";
import { seededRotation } from "@/utils/seededRotation";
import TechStack from "./TechStack";
import ProjectLinks from "./ProjectLinks";
import VideoComparison from "./VideoComparison";
import ContentSection from "./ContentSection";

const LayoutProject: NextPage<{
  project: Project;
  previousProject: Project | null;
  nextProject: Project | null;
}> = ({ project }) => {
  const seed = `${project.slug}-${project.year}`;

  // Configuration des sections avec leurs propriétés
  const sections = [
    {
      description: project.description1,
      screenshot: project.screenshot1,
      imagePosition: "right" as const,
      tapeImage: "/img/project_assets/tape/tape-left.webp",
      tapeClass: "absolute top-4 -left-6 z-20 -rotate-45",
      tapeWidth: 85,
      tapeHeight: 30,
      index: 1,
    },
    {
      description: project.description2,
      screenshot: project.screenshot2,
      imagePosition: "left" as const,
      tapeImage: "/img/project_assets/tape/tape-right.webp",
      tapeClass: "absolute top-8 -right-8 z-20 rotate-45",
      tapeWidth: 100,
      tapeHeight: 30,
      index: 2,
    },
    {
      description: project.description3,
      screenshot: project.screenshot3,
      imagePosition: "right" as const,
      tapeImage: "/img/project_assets/tape/tape-corner.webp",
      tapeClass: "absolute -top-2 -left-2 z-20",
      tapeWidth: 134,
      tapeHeight: 41,
      index: 3,
    },
  ];

  return (
    <>
      <Breadcrumbs title={project.name} title1="Projets" />

      <div>
        {/* HEADER */}
        <motion.section
          className="relative px-6 pb-6 pt-2 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <Image
              alt={`${project.name} Logo`}
              src={project.thumbnail}
              width={600}
              height={400}
              className="w-[400px] h-auto mx-auto"
              priority
            />

            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <TechStack keywords={project.keywords} seed={seed} />
              <ProjectLinks
                link={project.link}
                attachment={project.attachment}
                projectName={project.name}
                projectSlug={project.slug}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* MAIN DESCRIPTION */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <div className="relative">
            <Image
              src="/img/project_assets/tape/tape-top.webp"
              alt=""
              width={125}
              height={39}
              className="absolute -top-2 left-1/2 -translate-x-1/2 z-20"
            />

            <div
              className="relative bg-white p-10 shadow-xl"
              style={{
                transform: `rotate(${seededRotation(`${seed}-desc`, -1, 1)}deg)`,
              }}
            >
              <p className="font-plex text-xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <VideoComparison videos={project.videos || []} seed={seed} />

        {/* CONTENT SECTIONS */}
        {sections.map((section) => {
          // Ne rien afficher si pas de description
          if (!section.description) return null;

          const hasScreenshot = section.screenshot !== undefined;

          return (
            <section
              key={section.index}
              className="px-6 my-20 max-w-7xl mx-auto"
            >
              <div
                className={`relative ${
                  hasScreenshot
                    ? "grid md:grid-cols-2 gap-16 items-center"
                    : ""
                }`}
              >

                {/* IMAGE - Affichée en premier sur mobile si à gauche */}
                {hasScreenshot && section.imagePosition === "left" && (
                  <ContentSection
                    screenshot={section.screenshot}
                    imagePosition="left"
                    projectName={project.name}
                    sectionIndex={section.index}
                  />
                )}

                {/* TEXT */}
                <motion.div
                  className={`relative bg-white p-8 shadow-xl ${
                    hasScreenshot
                      ? section.imagePosition === "left"
                        ? "order-1 md:order-2"
                        : "order-1 md:order-1"
                      : ""
                  }`}
                  style={{
                    transform: `rotate(${seededRotation(
                      `${seed}-note${section.index}`,
                      -1,
                      1
                    )}deg)`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Decorative tape */}
                  <Image
                    src={section.tapeImage}
                    alt=""
                    width={section.tapeWidth}
                    height={section.tapeHeight}
                    className={section.tapeClass}
                  />
                  <p className="font-plex text-lg leading-relaxed">
                    {section.description}
                  </p>
                </motion.div>

                {/* IMAGE - Affichée en second sur mobile si à droite */}
                {hasScreenshot && section.imagePosition === "right" && (
                  <ContentSection
                    screenshot={section.screenshot}
                    imagePosition="right"
                    projectName={project.name}
                    sectionIndex={section.index}
                  />
                )}
              </div>
            </section>
          );
        })}
      </div>

      {project.videos && <Script src="https://player.vimeo.com/api/player.js" />}
    </>
  );
};

export default LayoutProject;