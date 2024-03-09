import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = '' }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  return (
    <div>
      <Head>
        <title>{title?title + ' - L\'ELUVIAL': 'L\'ELUVIAL'}</title>
      </Head>
      <div className="container h-screen mx-auto bg-white lg:px-16">
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Menu isOpen={isMenuOpen} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;