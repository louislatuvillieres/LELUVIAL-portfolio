import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import VinylMask from "./VinylMask";
import { getStickerPlacement } from "@/utils/seededPlacement";
import { getProjectBySlug } from "@/utils/projectUtils";
import { seededRotation } from "@/utils/seededRotation";
import ScrapLink from "./ScrapLink";

type Sticker = {
  img: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

type ParcoursCardProps = {
  vinyl: { img: string; text: string };
  title: string;
  options?: string;
  date: string;
  lieu: string;
  description: string;
  stickers?: Sticker[];
  projets?: string[]; // slugs des projets
  index: number;
};

const ParcoursCard: React.FC<ParcoursCardProps> = ({
  vinyl,
  title,
  options,
  date,
  lieu,
  description,
  stickers = [],
  projets = [],
  index,
}) => {
  const isEven = index % 2 === 0;
  const alignment = isEven ? "text-left" : "text-right";
  const marginAuto = isEven ? "mr-auto" : "ml-auto";

  // Seed unique basée sur le titre + date pour cohérence
  const seed = `${title}-${date}`;
  const rotation = seededRotation(vinyl.text, -6, 6);

  return (
    <motion.article
      className={`${alignment} mb-28`}
      initial={{ translateY: index === 0 ? "25%" : "10%", opacity: 0 }}
      animate={index === 0 ? { translateY: "0%", opacity: 1 } : undefined}
      whileInView={index !== 0 ? { translateY: "0%", opacity: 1 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
    >
      {/* Date */}
      <time className="font-erode font-light text-3xl italic mx-4">{date}</time>

      {/* Conteneur Vinyl + Stickers */}
      <div
        className={`${marginAuto} w-fit h-60 flex relative mt-4 ${
          isEven ? "-pl-12 md:-pl-2" : "-pr-12 md:-pr-2"
        } -mb-4 md:mb-0 md:scale-100 scale-75 ${
          !isEven ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Pochette d'album */}
        <Image
          className="size-60 z-10 shadow-md"
          style={{ transform: `rotate(${rotation}deg)` }}
          src={vinyl.img}
          width={300}
          height={300}
          alt={`Pochette de l'album ${vinyl.text}`}
        />

        {/* Vinyl qui dépasse */}
        <div className="-mt-12 -ml-12 -mr-12">
          <VinylMask imageSrc={vinyl.img} size={250} />
        </div>

        {/* Stickers positionnés autour */}
        {stickers.map((sticker, i) => {
          const placement = getStickerPlacement(sticker.position, seed, i);

          return (
            <Image
              key={i}
              src={sticker.img}
              alt=""
              width={100}
              height={100}
              className="absolute pointer-events-none select-none"
              style={{
                left:
                  sticker.position == "top-left" ||
                  sticker.position == "bottom-left"
                    ? `${placement.x}px`
                    : "",
                top:
                  sticker.position == "top-left" ||
                  sticker.position == "top-right"
                    ? `${placement.y}px`
                    : "",
                bottom:
                  sticker.position == "bottom-left" ||
                  sticker.position == "bottom-right"
                    ? `${placement.y}px`
                    : "",
                right:
                  sticker.position == "top-right" ||
                  sticker.position == "bottom-right"
                    ? `${placement.x}px`
                    : "",
                transform: `rotate(${placement.rotation}deg) scale(${placement.scale}) translateY(2rem)`,
                zIndex: 15,
              }}
            />
          );
        })}
      </div>

      {/* Nom du vinyle */}
      <div className="italic font-plex font-light mt-4">{vinyl.text}</div>

      {/* Titre */}
      <h2 className="font-plex text-3xl font-semibold leading-8 mt-2">
        {title}
      </h2>

      {/* Options (si présentes) */}
      {options && (
        <div
          className={`font-plex md:text-3xl text-xl italic leading-8 mt-2 max-w-[52rem] ${
            !isEven && marginAuto
          }`}
        >
          {options}
        </div>
      )}

      {/* Lieu */}
      <div className="font-erode text-xl mb-2 mt-4">{lieu}</div>

      {/* Description */}
      <p
        className={`font-plex text-xl mt-4 max-w-[52rem] ${
          !isEven && marginAuto
        }`}
      >
        {description}
      </p>

      {/* Projets liés */}
      {projets && projets.length > 0 && (
        <div className={`mt-6 ${!isEven && marginAuto} max-w-[52rem]`}>
          <h3 className="font-plex font-semibold text-lg mb-2">
            {projets.length == 1 ? "Projet réalisé :" : "Projets réalisés :"}
          </h3>
          <div
            className={
              "flex flex-wrap gap-3 " + isEven ? "flex-row" : "flex-row-reverse"
            }
          >
            {projets.map((slug) => {
              const project = getProjectBySlug(slug);
              const projectName = project ? project.name : slug;

              return (
                <ScrapLink
                  key={slug}
                  href={`/projets/${slug}`}
                  text={projectName}
                  seed={slug}
                />
              );
            })}
          </div>
        </div>
      )}
    </motion.article>
  );
};

export default ParcoursCard;
