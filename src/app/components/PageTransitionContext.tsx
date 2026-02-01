import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  ReactNode,
} from "react";

interface PageTransitionContextValue {
  animateToClose: () => Promise<void>;
  animateToOpen: () => Promise<void>;
}

const PageTransitionContext = createContext<
  PageTransitionContextValue | undefined
>(undefined);

interface PageTransitionProviderProps {
  children: ReactNode;
}

export const PageTransitionProvider: React.FC<
  PageTransitionProviderProps
> = ({ children }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<number | null>(null);

  const PATHS = [
    "M0 451L0 500 500 500 500 436 378 455 201 433 110 445 75 441z",
    "M0 360L0 500 500 500 500 351 403 349 329 326 205 344 81 326z",
    "M0 214L0 500 500 500 500 229 405 222 314 240 204 223 80 262z",
    "M0 175L0 500 500 500 500 164 403 161 328 132 204 154 81 132z",
    "M0 74L0 500 500 500 500 60 378 78 201 56 110 68 75 64z",
    "M0 18L0 500 500 500 500 13 403 20 328 9 158 24 77 7z",
    "M0 0L0 500 500 500 500 0z",
  ] as const;

  const INITIAL_PATH = "M0 0L0 0 0 0 0 0 0 0 0 0 0 0 0 0z";
  const ANIMATION_DELAY = 65;

  const animateToClose = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      let currentIndex = 0;

      const animate = () => {
        if (currentIndex < PATHS.length && pathRef.current) {
          pathRef.current.setAttribute("d", PATHS[currentIndex]);
          currentIndex++;
          animationRef.current = window.setTimeout(animate, ANIMATION_DELAY);
        } else {
          resolve();
        }
      };

      animate();
    });
  }, []);

  const animateToOpen = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      let currentIndex = PATHS.length - 1;

      const animate = () => {
        if (currentIndex >= 0 && pathRef.current) {
          pathRef.current.setAttribute("d", PATHS[currentIndex]);
          currentIndex--;
          animationRef.current = window.setTimeout(animate, ANIMATION_DELAY);
        } else if (pathRef.current) {
          pathRef.current.setAttribute("d", INITIAL_PATH);
          resolve();
        }
      };

      animate();
    });
  }, []);

  return (
    <PageTransitionContext.Provider value={{ animateToClose, animateToOpen }}>
      {children}
      <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid slice"
          className="h-[100dvh] w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="paper-texture"
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
          <path
            ref={pathRef}
            d={INITIAL_PATH}
            fill="url(#paper-texture)"
          />
        </svg>
      </div>
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within PageTransitionProvider"
    );
  }
  return context;
};