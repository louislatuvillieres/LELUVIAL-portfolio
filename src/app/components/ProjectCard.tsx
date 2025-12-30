// components/ProjectCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  icon: string;
  name: string;
  public: boolean;
  slug: string;
  year: number;
  thumbnail: string;
  keywords: string[];
  images: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  parentVariants: any;
  imageVariants: any;
}

const getImageClass = (slug: string, position: "first" | "second") => {
  const map: Record<string, { first: string; second: string }> = {
    "une-maison-en-provence": {
      first:
        "md:w-32 w-24 top-0 left-0 -translate-x-2 -translate-y-3 -rotate-1",
      second: "md:w-48 w-32 bottom-0 right-0 translate-x-3 translate-y-3",
    },
    waves: {
      first:
        "md:w-48 w-32 bottom-0 left-0 -translate-x-2 translate-y-3 rotate-2",
      second:
        "md:w-36 w-24 top-0 right-0 translate-x-4 -translate-y-3 -rotate-2",
    },
    vivantmag: {
      first:
        "md:w-40 w-28 bottom-0 left-0 -translate-x-1 translate-y-1 -rotate-1",
      second:
        "md:w-48 w-32 top-0 right-0 translate-x-2 -translate-y-3 rotate-3",
    },
    anautiqua: {
      first: "md:w-32 w-24 top-0 left-0 -translate-x-1",
      second: "md:w-32 w-24 bottom-0 right-0 translate-x-2",
    },
  };

  return map[slug]?.[position] ?? "";
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  parentVariants,
  imageVariants,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`mb-24 w-fit ${isEven ? "mr-auto" : "ml-auto"}`}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <Link
        href={`/projets/${project.slug}`}
        className={`flex flex-col py-2 w-fit ${
          isEven ? "text-left" : "text-right"
        }`}
      >
        <div className="font-erode font-light text-3xl italic">
          0{index + 1}
        </div>

        <div className="md:h-[20rem] mt-4 p-6 relative">
          {project.images?.[0] && (
            <motion.div
              className="absolute w-full h-full top-0 left-0"
              variants={imageVariants}
            >
              <Image
                priority
                alt={project.name}
                src={project.images[0]}
                width={1000}
                height={1000}
                className={`absolute ${getImageClass(project.slug, "first")}`}
              />
            </motion.div>
          )}

          <Image
            priority
            alt={project.name}
            src={project.thumbnail}
            width={600}
            height={400}
            className="h-full w-fit"
          />

          {project.images?.[1] && (
            <motion.div
              className="absolute w-full h-full top-0 left-0"
              variants={imageVariants}
            >
              <Image
                priority
                alt={project.name}
                src={project.images[1]}
                width={1000}
                height={1000}
                className={`absolute ${getImageClass(project.slug, "second")}`}
              />
            </motion.div>
          )}
        </div>

        <div className="mx-1 mt-6">
          <div className="font-plex font-medium text-2xl -mt-2">
            {project.name}
          </div>
        </div>

        <div
          className={`flex font-erode font-light text-lg ${
            !isEven ? "justify-end" : ""
          }`}
        >
          {project.keywords.map((keyword, i) => (
            <div key={i} className="mx-1">
              {keyword}
            </div>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
