import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { useState } from "react";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRouter } from "next/router";
import { Lenis, useLenis } from "@studio-freight/react-lenis";

interface AnimatedSVGProps {
  animateToEnter: boolean;
  animateToExit: boolean;
  setAnimateToEnter: Dispatch<SetStateAction<boolean>>;
  setAnimateToExit: Dispatch<SetStateAction<boolean>>;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  animateToEnter,
  animateToExit,
  setAnimateToEnter,
  setAnimateToExit,
}) => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const lenis = useLenis();

  // Effect to update the state on window resize
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      setIsWideScreen(screenWidth > screenHeight);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (animateToEnter) {
      setPath(paths[0]);
      reverseAnimation();
      setAnimateToEnter(false);
    }
  }, [animateToEnter]);
  useEffect(() => {
    if (animateToExit) {
      lenis?.scrollTo(0);
      startAnimation();
      setAnimateToExit(false);
    }
  }, [animateToExit]);

  // Determine the appropriate classes based on screen size
  const paperClasses = isWideScreen
    ? "h-[100vw] w-[100vw] overflow-hidden"
    : "h-[100vh] w-[100vh] overflow-hidden";

  const paths = [
    "M0 451L0 500 500 500 500 436 378 455 201 433 110 445 75 441z",
    //"M0 373L0 500 500 500 500 388 405 380 314 398 205 382 81 420z",
    "M0 360L0 500 500 500 500 351 403 349 329 326 205 344 81 326z",
    //"M0 307L0 500 500 500 500 295 403 293 329 263 205 286 81 263z",
    "M0 214L0 500 500 500 500 229 405 222 314 240 204 223 80 262z",
    //"M0 198L0 500 500 500 500 184 379 202 201 180 110 192 75 188z",
    "M0 175L0 500 500 500 500 164 403 161 328 132 204 154 81 132z",
    //"M0 82L0 500 500 500 500 97 405 90 313 108 204 91 80 130z",
    "M0 74L0 500 500 500 500 60 378 78 201 56 110 68 75 64z",
    //"M0 27L0 500 500 500 500 42 405 35 314 53 205 36 78 56z",
    "M0 18L0 500 500 500 500 13 403 20 328 9 158 24 77 7z",
    "M0 0L0 500 500 500 500 0z",
  ];

  const [path, setPath] = useState("M0 0L0 0 0 0 0 0 0 0 0 0 0 0 0 0z");

  const startAnimation = () => {
    let currentIndex = 0;

    const applyNextPath = () => {
      if (currentIndex < paths.length) {
        setPath(paths[currentIndex]);
        currentIndex++;

        setTimeout(applyNextPath, 65);
      }
    };

    applyNextPath();
  };

  const reverseAnimation = () => {
    const basePath = "M0 0L0 0 0 0 0 0 0 0 0 0 0 0 0 0z";

    let currentIndex = paths.length - 1;

    const applyNextPath = () => {
      if (currentIndex >= 0) {
        setPath(paths[currentIndex]);
        currentIndex--;

        setTimeout(applyNextPath, 65);
      } else {
        setPath(basePath);
      }
    };

    applyNextPath();
  };

  return (
    <div className="h-[100vh] w-[100vw] fixed left-0 overflow-hidden pointer-events-none z-[60]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 500 500"
        version="1.1"
        viewBox="0 0 500 500"
        xmlSpace="preserve"
        className={paperClasses}
      >
        <defs>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="500"
            height="500"
          >
            <image
              href="/img/assets/paper_texture.jpg"
              x="0"
              y="0"
              width="500"
              height="500"
            />
          </pattern>
        </defs>
        <style type="text/css">{".st0{fill:url(#img1)}"}</style>
        <path d={path} className="st0"></path>
      </svg>
    </div>
  );
};

export default AnimatedSVG;
