import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';

type InnerLayoutAnimateProps = {
  children: ReactNode;
  setAnimateToExit: Dispatch<SetStateAction<boolean>>
};

const InnerLayoutAnimate: React.FC<InnerLayoutAnimateProps> = (
    { 
      children, 
      setAnimateToExit
    }
  ) => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if(!isPresent) {
      setAnimateToExit(true);
      setTimeout(safeToRemove, 2000);
    }
  }, [isPresent])
  
  return (
    <motion.div
      className='w-full min-h-[91.5vh]'
    >
        {children}
    </motion.div>
  );
};

export default InnerLayoutAnimate;