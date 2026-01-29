import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VinylMask from "./VinylMask";
import { getStickerPlacement } from "@/utils/seededPlacement";
import { getProjectBySlug } from "@/utils/projectUtils";
import { seededRotation } from "@/utils/seededRotation";
import ScrapLink from "./ScrapLink";
import ParallaxSticker from "./ParallaxSticker";

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
  projets?: string[];
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
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  const alignment = isEven ? "text-left" : "text-right";
  const marginAuto = isEven ? "mr-auto" : "ml-auto";

  const seed = `${title}-${date}`;
  const rotation = seededRotation(vinyl.text, -6, 6);

  return (
    <motion.article
      className={`${alignment} mb-28 group`}
      initial={{ translateY: index === 0 ? "25%" : "10%", opacity: 0 }}
      animate={index === 0 ? { translateY: "0%", opacity: 1 } : undefined}
      whileInView={index !== 0 ? { translateY: "0%", opacity: 1 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Date avec animation */}
      <motion.time
        className="font-erode font-light text-3xl italic mx-4 inline-block relative"
        whileHover={{ scale: 1.05, x: isEven ? 10 : -10 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {date}
        {/* Soulignement animé */}
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-current"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.time>

      {/* Conteneur Vinyl + Stickers */}
      <div
        className={`${marginAuto} w-fit h-60 flex relative mt-4 ${
          isEven ? "-pl-12 md:-pl-2" : "-pr-12 md:-pr-2"
        } -mb-4 md:mb-0 md:scale-100 scale-75 ${
          !isEven ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Pochette d'album */}
        <motion.div
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        >
          <Image
            className="size-60 z-10 shadow-md transition-shadow duration-300"
            style={{ transform: `rotate(${rotation}deg)` }}
            src={vinyl.img}
            width={300}
            height={300}
            alt={`Pochette de l'album ${vinyl.text}`}
          />
        </motion.div>

        {/* Vinyl qui dépasse */}
        <motion.div
          className="-mt-12 -ml-12 -mr-12"
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        >
          <VinylMask imageSrc={vinyl.img} size={250} />
        </motion.div>

        {/* Stickers */}
        {stickers.map((sticker, i) => {
          const placement = getStickerPlacement(sticker.position, seed, i);

          return (
            <ParallaxSticker
              key={i}
              img={sticker.img}
              position={sticker.position}
              placement={placement}
              index={i}
            />
          );
        })}
      </div>

      {/* Nom du vinyle */}
      <motion.div
        className="italic font-plex font-light mt-4 inline-block relative px-2"
        whileHover={{ y: -2 }}
      >
        <span className="relative z-10">{vinyl.text}</span>
      </motion.div>

      {/* Titre */}
      <motion.h2
        className="font-plex text-3xl font-semibold leading-8 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {/* Options */}
      {options && (
        <motion.div
          className={`font-plex md:text-3xl text-xl italic leading-8 mt-2 max-w-[52rem] ${
            !isEven && marginAuto
          }`}
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {options}
        </motion.div>
      )}

      {/* Lieu */}
      <motion.div
        className="font-erode text-xl mb-2 mt-4 inline-flex items-center gap-2"
        whileHover={{ x: isEven ? 5 : -5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {lieu}
      </motion.div>

      {/* Description */}
      <motion.div
        className={`relative max-w-[52rem] ${!isEven && marginAuto}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="font-plex text-xl">
          {description}
        </p>
      </motion.div>

      {/* Projets liés */}
      {projets && projets.length > 0 && (
        <motion.div
          className={`mt-6 ${!isEven && marginAuto} max-w-[52rem]`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="font-plex font-semibold text-lg mb-2 inline-block relative"
            whileHover={{ x: isEven ? 5 : -5 }}
          >
            {projets.length == 1 ? "Projet réalisé :" : "Projets réalisés :"}
          </motion.h3>
          
          <div
            className={
              "flex flex-wrap gap-3 " + (isEven ? "flex-row" : "flex-row-reverse")
            }
          >
            {projets.map((slug, i) => {
              const project = getProjectBySlug(slug);
              const projectName = project ? project.name : slug;

              return (
                <motion.div
                  key={slug}
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.6 + i * 0.1,
                    type: "spring",
                    stiffness: 200 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 5,
                    zIndex: 10 
                  }}
                >
                  <ScrapLink
                    href={`/projets/${slug}`}
                    text={projectName}
                    seed={slug}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.article>
  );
};

export default ParcoursCard;