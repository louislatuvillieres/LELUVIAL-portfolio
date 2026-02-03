import React, {
  createContext,
  useContext,
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
  // Fonctions simplifiées qui ne font rien de spécial
  // Les transitions sont maintenant gérées uniquement par framer-motion
  const animateToClose = async (): Promise<void> => {
    return Promise.resolve();
  };

  const animateToOpen = async (): Promise<void> => {
    return Promise.resolve();
  };

  return (
    <PageTransitionContext.Provider value={{ animateToClose, animateToOpen }}>
      {children}
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