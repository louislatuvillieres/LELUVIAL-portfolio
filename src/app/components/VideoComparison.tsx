import React from "react";
import { motion } from "framer-motion";
import { seededRotation } from "@/utils/seededRotation";
import ScrapTitle from "./ScrapTitle";

interface VideoComparisonProps {
  videos: string[];
  seed: string;
}

const VideoComparison: React.FC<VideoComparisonProps> = ({ videos, seed }) => {
  if (!videos?.[0] || !videos?.[1]) return null;

  return (
    <motion.div 
      className="my-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <ScrapTitle 
          text="Évolution" 
          seed={`${seed}-evolution`}
          height={90}
          glyphWidth={24}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {[
          { title: "Avant", video: videos[0] },
          { title: "Après", video: videos[1] },
        ].map((item, index) => {
          const rotation = seededRotation(`${seed}-video-${index}`, -4, 4);
          
          return (
            <div 
              key={index} 
              className="relative group"
            >
              <div 
                className="bg-white p-6 shadow-2xl"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="bg-black mb-4">
                  <iframe
                    className="w-full aspect-video"
                    src={item.video}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={`${item.title} optimisation`}
                  />
                </div>
                <p className="font-pangolin text-2xl text-center text-gray-700">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default VideoComparison;