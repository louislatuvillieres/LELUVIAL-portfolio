import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ParcoursCardProps = {
  vinyl: { img: string; text: string };
  title: string;
  options?: string;
  date: string;
  lieu: string;
  description: string;
  index: number;
};

const ParcoursCard: React.FC<ParcoursCardProps> = ({
  vinyl,
  title,
  options,
  date,
  lieu,
  description,
  index,
}) => {
  const isEven = index % 2 === 0;
  const alignment = isEven ? "text-left" : "text-right";
  const marginAuto = isEven ? "mr-auto" : "ml-auto";

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
      <time className="font-erode font-light text-3xl italic">{date}</time>

      {/* Vinyl avec pochette */}
      <div className={`${marginAuto} w-fit h-44 flex relative mt-4`}>
        {!isEven && (
          <Image
            src="/vinyl_50.png"
            className="w-auto rotate-180 translate-x-px pb-1 pt-[0.1rem]"
            width={263}
            height={535}
            alt=""
            aria-hidden="true"
          />
        )}
        <Image
          className="w-44 z-10"
          src={vinyl.img}
          width={1000}
          height={1000}
          alt={`Pochette de l'album ${vinyl.text}`}
        />
        {isEven && (
          <Image
            src="/vinyl_50.png"
            className="w-auto py-[0.1rem]"
            width={263}
            height={535}
            alt=""
            aria-hidden="true"
          />
        )}
      </div>

      {/* Nom du vinyle */}
      <div className="italic font-plex font-light mt-2">{vinyl.text}</div>

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
    </motion.article>
  );
};

export default ParcoursCard;
