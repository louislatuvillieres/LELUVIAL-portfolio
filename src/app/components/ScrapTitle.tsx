import React from "react";

interface ScrapTitleProps {
  text: string;
  className?: string;
  textureUrl?: string;
  textureUrl2?: string;
  padding?: number;
  layer2Padding?: number;
  glyphWidth?: number;
  height?: number;
  layer2Rotation?: number;
  seed?: string; // pour randomisation prévisible
}

const ScrapTitle: React.FC<ScrapTitleProps> = ({
  text,
  className = "",
  textureUrl = "/img/texture-title.webp",
  textureUrl2 = "/img/texture-title2.webp",
  padding = 12,
  layer2Padding = 8,
  glyphWidth = 22,
  height = 100,
  layer2Rotation = -3,
  seed = "default-seed",
}) => {
  const width = text.length * glyphWidth + padding * 2;

  // Fonction de pseudo-random à seed
  const seededRandom = (s: string, i: number) => {
    let h = 0;
    for (let j = 0; j < s.length; j++) {
      h = (Math.imul(31, h) + s.charCodeAt(j)) | 0;
    }
    h = (h + i) | 0;
    return (((Math.sin(h) * 10000) % 1) + 1) % 1; // valeur entre 0 et 1
  };

  // Génération du clipPath "ciseaux" avec seed
  const generateClipPath = (
    w: number,
    h: number,
    steps = 10,
    clipSeed: string = seed
  ) => {
    let path = `M0 0 `;
    const stepWidth = w / steps;
    for (let i = 0; i <= steps; i++) {
      const y = seededRandom(clipSeed, i) * h * 0.2;
      path += `L${i * stepWidth} ${y} `;
    }
    path += `L${w} ${h} L0 ${h} Z`;
    return path;
  };

  const clipPathId1 = `clip1-${seed}`;
  const clipPathId2 = `clip2-${seed}-layer2`; // dérivé de la seed principale

  const clipPath1 = generateClipPath(width, height);
  const clipPath2 = generateClipPath(
    width - layer2Padding * 2,
    height - layer2Padding * 2,
    10,
    `${seed}-layer2` // passons une seed dérivée
  );

  return (
    <div
      className={`relative inline-block mx-4 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        className="absolute top-0 left-0 z-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          {textureUrl && (
            <pattern
              id="texture1"
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
          )}
          <clipPath id={clipPathId1}>
            <path d={clipPath1} />
          </clipPath>

          {textureUrl2 && (
            <pattern
              id="texture2"
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
          )}
          <clipPath id={clipPathId2}>
            <path d={clipPath2} />
          </clipPath>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="3"
              dy="3"
              stdDeviation="3"
              floodColor="#000000" // couleur pure
              floodOpacity="0.3" // opacité
            />
          </filter>
        </defs>

        <g filter="url(#dropShadow)">
          <rect
            width={width}
            height={height}
            fill={textureUrl ? "url(#texture1)" : "#f8f8f8"}
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
              fill={textureUrl2 ? "url(#texture2)" : "#e0e0e0"}
              clipPath={`url(#${clipPathId2})`}
            />
          </g>
        </g>
      </svg>

      {/* Texte HTML par lettre avec randomisation */}
      <span className="absolute inset-0 z-10 flex items-center justify-center text-5xl font-pangolin text-white -rotate-3 top-3 text-center">
        {text.split("").map((char, i) => {
          const dx = (seededRandom(seed, i * 3) - 0.5) * 3; // décalage X ±2px pour effet subtil
          const dy = (seededRandom(seed, i * 5) - 0.5) * 8; // décalage Y ±1.5px
          const rotate = (seededRandom(seed, i * 7) - 0.5) * 5; // rotation ±2.5deg
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                transform: `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default ScrapTitle;
