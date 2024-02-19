import React, { ReactNode } from 'react';
import CutPaperSVG from './CutPaperSvg';

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 top-0 pt-28 left-0 w-full h-full flex items-center justify-center">
      <div className='w-full h-full'>
      </div>
    </div>
  );
};

export default Menu;