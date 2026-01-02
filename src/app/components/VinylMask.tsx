import React from "react";
import { seededRotation } from "@/utils/seededRotation";
import Image from "next/image";

interface VinylImageProps {
  imageSrc: string; // image à afficher DANS le disque
  vinylSrc?: string; // image vinyl en fond
  size?: number; // taille globale
}

const VinylImage: React.FC<VinylImageProps> = ({
  imageSrc,
  vinylSrc = "/img/vinyl.webp",
  size = 300,
}) => {
  const patternId = `vinyl-pattern-${imageSrc.replace(/\W/g, "")}`;

  const rotation = seededRotation(imageSrc, -25, 25);

  return (
    <div
      className="relative"
      style={{ width: size, height: size, transform: `rotate(${rotation}deg)` }}
    >
      {/* Fond vinyl */}
      <Image
        src={vinylSrc}
        alt={""}
        className="absolute inset-0 w-full h-full object-contain"
        width={350}
        height={350}
      />

      {/* SVG disque */}
      <svg
        viewBox="0 0 300 296"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pattern image */}
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
            x="100"
            y="100"
          >
            <image
              href={imageSrc}
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>

          {/* ClipPath d'origine */}
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2">
            <path
              d="M 96.068188,95.77533 H 205.1874 V 205.94571 H 96.068188 Z
                 m 59.109962,55.511
                 a 4.0544963,3.9259667 0 0 0 -4.05449,-3.92597
                 4.0544963,3.9259667 0 0 0 -4.0545,3.92597
                 4.0544963,3.9259667 0 0 0 4.0545,3.92597
                 4.0544963,3.9259667 0 0 0 4.05449,-3.92597 z"
              fill="white"
            />
          </clipPath>
        </defs>

        {/* Disque avec image */}
        <path
          clipPath="url(#clipPath2)"
          fill={`url(#${patternId})`}
          d="m 200.1874,150.86052
             a 49.559605,50.08519 0 0 1 -49.55961,50.08519
             49.559605,50.08519 0 0 1 -49.5596,-50.08519
             49.559605,50.08519 0 0 1 49.5596,-50.08519
             49.559605,50.08519 0 0 1 49.55961,50.08519 z"
        />
      </svg>
    </div>
  );
};

export default VinylImage;
