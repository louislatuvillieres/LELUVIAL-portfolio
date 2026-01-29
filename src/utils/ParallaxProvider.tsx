import React, { createContext, useContext, useEffect } from "react";
import { useMotionValue } from "framer-motion";

type ParallaxContextType = {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
};

const ParallaxContext = createContext<ParallaxContextType | null>(null);

export const useParallax = () => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error("useParallax must be used within ParallaxProvider");
  }
  return context;
};

export const ParallaxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normaliser les coordonnées de la souris entre -1 et 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Multiplier par un facteur pour l'effet parallax
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <ParallaxContext.Provider value={{ mouseX, mouseY }}>
      {children}
    </ParallaxContext.Provider>
  );
};