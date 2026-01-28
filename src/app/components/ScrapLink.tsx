import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ScrapLinkProps {
  href: string;
  text: string;
  className?: string;
  textureUrl?: string; // couche principale (ex texture2)
  textureUrl2?: string; // couche secondaire (ex texture1)
  padding?: number;
  layer2Padding?: number;
  glyphWidth?: number;
  height?: number;
  layer2Rotation?: number;
  seed?: string;
}

const ScrapLink: React.FC<ScrapLinkProps> = ({
  href,
  text,
  className = "",
  textureUrl = "/img/texture-title2.webp", // 👈 inversé
  textureUrl2 = "/img/texture-title.webp", // 👈 inversé
  padding = 18,
  layer2Padding = 6,
  glyphWidth = 7,
  height = 56,
  layer2Rotation = 2,
  seed = text,
}) => {
  const width = text.length * glyphWidth + padding * 2 + 28; // place pour la flèche

  // pseudo-random seedé (identique à ScrapTitle)
  const seededRandom = (s: string, i: number) => {
    let h = 0;
    for (let j = 0; j < s.length; j++) {
      h = (Math.imul(31, h) + s.charCodeAt(j)) | 0;
    }
    h = (h + i) | 0;
    return (((Math.sin(h) * 10000) % 1) + 1) % 1;
  };

  const generateClipPath = (
    w: number,
    h: number,
    steps = 10,
    clipSeed: string = seed
  ) => {
    let path = `M0 0 `;
    const stepWidth = w / steps;
    for (let i = 0; i <= steps; i++) {
      const y = seededRandom(clipSeed, i) * h * 0.25;
      path += `L${i * stepWidth} ${y} `;
    }
    path += `L${w} ${h} L0 ${h} Z`;
    return path;
  };

  const clipPathId1 = `scrap-link-clip1-${seed}`;
  const clipPathId2 = `scrap-link-clip2-${seed}`;

  const clipPath1 = generateClipPath(width, height);
  const clipPath2 = generateClipPath(
    width - layer2Padding * 2,
    height - layer2Padding * 2,
    10,
    `${seed}-layer2`
  );

  return (
    <Link
      href={href}
      className={`relative hover:-rotate-6 inline-block group ${className}`}
      style={{ width, height }}
    >
      {/* SVG papier */}
      <svg
        className="absolute inset-0 z-0 w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`scrap-texture1-${seed}`}
            patternUnits="userSpaceOnUse"
            width={width}
            height={height}
          >
            <image
              href={textureUrl}
              width={width}
              height={height}
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>

          <clipPath id={clipPathId1}>
            <path d={clipPath1} />
          </clipPath>

          <pattern
            id={`scrap-texture2-${seed}`}
            patternUnits="userSpaceOnUse"
            width={width - layer2Padding * 2}
            height={height - layer2Padding * 2}
          >
            <image
              href={textureUrl2}
              width={width - layer2Padding * 2}
              height={height - layer2Padding * 2}
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>

          <clipPath id={clipPathId2}>
            <path d={clipPath2} />
          </clipPath>

          <filter id="scrapShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="2"
              floodColor="#000"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        <g filter="url(#scrapShadow)">
          <rect
            width={width}
            height={height}
            fill={`url(#scrap-texture1-${seed})`}
            clipPath={`url(#${clipPathId1})`}
          />

          <g
            transform={`translate(${layer2Padding}, ${layer2Padding}) rotate(${layer2Rotation}, ${
              (width - layer2Padding * 2) / 2
            }, ${(height - layer2Padding * 2) / 2})`}
          >
            <rect
              width={width - layer2Padding * 2}
              height={height - layer2Padding * 2}
              fill={`url(#scrap-texture2-${seed})`}
              clipPath={`url(#${clipPathId2})`}
            />
          </g>
        </g>
      </svg>

      {/* Contenu */}
      <span className="relative z-10 top-1 h-full px-4 flex items-center gap-2">
        {/* Texte scrap randomisé */}
        <span className="font-pangolin text-black text-base whitespace-nowrap">
          {text.split("").map((char, i) => {
            const safeChar = char === " " ? "\u00A0" : char;

            const dx = seededRandom(seed, i * 3) - 0.5; // ±1.25px
            const dy = (seededRandom(seed, i * 5) - 0.5) * 2; // ±2px
            const rotate = (seededRandom(seed, i * 7) - 0.5) * 4; // ±2deg

            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  transform: `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`,
                }}
              >
                {safeChar}
              </span>
            );
          })}
        </span>

        {/* Icône flèche (stable) */}
        <Image
          src="/img/arrow-up.webp"
          alt=""
          width={14}
          height={14}
          className="-mt-1 opacity-80 transition-transform"
        />
      </span>
    </Link>
  );
};

export default ScrapLink;
