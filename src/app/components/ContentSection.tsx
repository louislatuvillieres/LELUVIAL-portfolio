import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { seededRotation } from "@/utils/seededRotation";

interface ContentSectionProps {
  screenshot?: unknown;
  imagePosition: "left" | "right";
  projectName: string;
  sectionIndex: number;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  screenshot,
  imagePosition,
  projectName,
  sectionIndex,
}) => {
  if (!screenshot) return null;

  const isValidScreenshot =
    Array.isArray(screenshot) &&
    screenshot.length === 3 &&
    typeof screenshot[0] === "string" &&
    typeof screenshot[1] === "number" &&
    typeof screenshot[2] === "number";

  if (!isValidScreenshot) return null;

  const seed = `${projectName}-section-${sectionIndex}`;
  const imageRotation = seededRotation(`${seed}-image`, -3, 3);

  return (
    <motion.div
      className={`
        flex justify-center
        ${imagePosition === "left" ? "order-2 md:order-1" : "order-2 md:order-2"}
      `}
      initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        className="bg-white p-6 shadow-2xl relative"
        style={{ transform: `rotate(${imageRotation}deg)` }}
      >
        <Image
          priority
          quality={100}
          className="w-full h-auto"
          src={screenshot[0]}
          alt={`Screenshot ${projectName}`}
          width={screenshot[1]}
          height={screenshot[2]}
        />
      </div>
    </motion.div>
  );
};

export default ContentSection;