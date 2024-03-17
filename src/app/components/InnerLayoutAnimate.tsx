import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { useState } from 'react';
import { motion, usePresence } from 'framer-motion';
import AnimatedSVG from './AnimatedSVG';
import router from 'next/router';

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
        initial={{opacity: 1}}
        animate={{opacity: 1}}
        exit={{opacity:1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 2,
        }}
    >
        {children}
    </motion.div>
  );
};

export default InnerLayoutAnimate;