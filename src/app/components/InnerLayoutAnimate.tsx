import React, { useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

interface InnerLayoutAnimateProps {
  children: ReactNode;
}

const InnerLayoutAnimate: React.FC<InnerLayoutAnimateProps> = ({
  children,
}) => {
  const lenis = useLenis();

  useEffect(() => {
    // Scroll to top lors du montage du composant
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default InnerLayoutAnimate;