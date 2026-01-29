import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { seededRotation } from "@/utils/seededRotation";

interface TechStackProps {
  keywords: string[];
  seed: string;
}

const TechStack: React.FC<TechStackProps> = ({ keywords, seed }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {keywords.map((keyword, index) => {
        const rotation = seededRotation(`${seed}-tech-${index}`, -8, 8);

        return (
          <motion.div
            key={index}
            className="group relative"
            initial={{ 
              opacity: 0, 
              scale: 0,
              rotate: rotation
            }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              rotate: rotation
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: rotation - 5,
              zIndex: 100
            }}
          >
            <div 
              className="bg-white p-3 shadow-md relative"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <Image
                priority
                className="sm:size-10 size-8 grayscale group-hover:grayscale-0 transition-all duration-300"
                width={600}
                height={600}
                alt={keyword}
                src={`/skills/${keyword.toLowerCase().replace(/ /g, "-")}.png`}
              />
              
              {/* Tooltip manuscrit */}
              <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-pangolin text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-3 py-1.5 rounded-sm shadow-lg z-20">
                {keyword}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechStack;