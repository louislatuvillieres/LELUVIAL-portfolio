import React, { useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { usePageTransition } from "./PageTransitionContext";
import { useRouter } from "next/router";
import { useLenis } from "@studio-freight/react-lenis";

interface InnerLayoutAnimateProps {
  children: ReactNode;
}

const InnerLayoutAnimate: React.FC<InnerLayoutAnimateProps> = ({
  children,
}) => {
  const { animateToClose } = usePageTransition();
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    // Handler pour les changements de route
    const handleRouteChangeStart = async () => {
      // Scroll to top
      lenis?.scrollTo(0, { immediate: true });
      
      // Lance l'animation de fermeture
      await animateToClose();
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router, animateToClose, lenis]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      style={{
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        willChange: 'opacity',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  );
};

export default InnerLayoutAnimate;