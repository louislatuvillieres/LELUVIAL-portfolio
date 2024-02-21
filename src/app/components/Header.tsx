import MenuBtn from '@components/MenuBtn';
import React, { Dispatch, SetStateAction } from 'react';
import Menu from './Menu';

interface HeaderProps {
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({setMenuOpen, isMenuOpen}) => {

    return (
        <header className="p-4 relative z-20">
          <div className="container mx-auto flex justify-between items-center">
            <div className=""><img src="logo_leluvial_25.png" className="w-20 h-20 relative z-100"></img></div>
            <div className="flex gap-8 relative z-100"> 
                <MenuBtn setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}/>
            </div>
          </div>
        </header>
    );
}

export default Header;