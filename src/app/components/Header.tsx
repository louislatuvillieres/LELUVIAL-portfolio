import MenuBtn from '@components/MenuBtn';
import React, { Dispatch, SetStateAction } from 'react';
import Menu from './Menu';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';

interface HeaderProps {
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({setMenuOpen, isMenuOpen }) => {

    return (
      <>
        <div className='w-screen h-20 fixed top-0 left-0 bg-white z-40'></div>
        <header className="py-2 px-4 sticky top-0 z-[100]">
          <div className="container mx-auto flex justify-between items-center">
            <div className='flex w-fit items-center gap-4'>
              <Link href="/"><img src="/logo_leluvial_25.png" className="logo w-16 md:h-16 relative z-[100]"></img></Link>
            </div>
            <div className="flex gap-8 relative z-[100] hidden"> 
                <MenuBtn setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}/>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header;