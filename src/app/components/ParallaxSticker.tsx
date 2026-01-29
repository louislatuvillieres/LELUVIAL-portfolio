import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type StickerPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type StickerPlacement = {
  x: number;
  y: number;
  scale: number;
  rotation: number;
};

type ParallaxStickerProps = {
  img: string;
  position: StickerPosition;
  placement: StickerPlacement;
  index: number;
};

const ParallaxSticker: React.FC<ParallaxStickerProps> = ({
  img,
  position,
  placement,
  index
}) => {

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      initial={{ scale: 0, rotate: placement.rotation }}
      whileInView={{
        scale: placement.scale,
        rotate: placement.rotation,
      }}
      whileHover={{
        scale: placement.scale * 1.2,
        rotate: placement.rotation + 15,
        zIndex: 20,
      }}
      transition={{
        delay: 0.1 * index,
        type: "spring",
        stiffness: 300,
      }}
      viewport={{ once: true }}
      style={{
        left: position.includes("left") ? `${placement.x}px` : undefined,
        right: position.includes("right") ? `${placement.x}px` : undefined,
        top: position.includes("top") ? `${placement.y}px` : undefined,
        bottom: position.includes("bottom") ? `${placement.y}px` : undefined,
        translateY: "2rem",
        zIndex: 15,
      }}
    >
      <Image src={img} alt="" width={100} height={100} />
    </motion.div>
  );
};

export default ParallaxSticker;