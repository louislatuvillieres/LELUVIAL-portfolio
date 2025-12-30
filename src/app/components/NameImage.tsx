import Image from "next/image";
import React from "react";

interface NameImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxHeight?: number; // facultatif, pour l'échelle
  priority?: boolean;
}

const NameImage: React.FC<NameImageProps> = ({
  src,
  alt,
  width,
  height,
  maxHeight = 87, // la plus grande image du groupe
  priority = false,
}) => {
  // facteur relatif par rapport à maxHeight
  const scale = (height / maxHeight) * 1.3;

  return (
    <span
      className="relative inline-block leading-none"
      style={{ height: `${scale}em` }} // hauteur proportionnelle
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 12rem, 20rem"
        className="w-auto h-full object-contain align-baseline translate-y-2 ml-2"
      />
    </span>
  );
};

export default NameImage;
