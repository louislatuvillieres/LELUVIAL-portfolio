import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { useState } from 'react';
import { motion, usePresence } from 'framer-motion';
import AnimatedSVG from './AnimatedSVG';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <div className="container mx-auto lg:px-16 ">
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
        <Menu isOpen={isMenuOpen} />
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;