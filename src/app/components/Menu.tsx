import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import { useState } from 'react';

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  // Effect to update the state on window resize
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      setIsWideScreen(screenWidth > screenHeight);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine the appropriate classes based on screen size
  const paperClasses = isWideScreen
    ? 'h-[100vw] w-[100vw] overflow-hidden'
    : 'h-[100vh] w-[100vh] overflow-hidden';

  const [menuClasses, setMenuClasses] = useState("absolute z-40 top-0 pt-28 left-0 w-full h-full flex items-center justify-center hidden");

  const [mounted, setMounted] = useState(false);

  const paths = [
    "M0 451L0 500 500 500 500 436 378 455 201 433 110 445 75 441z",
    "M0 373L0 500 500 500 500 388 405 380 314 398 205 382 81 420z",
    "M0 360L0 500 500 500 500 351 403 349 329 326 205 344 81 326z",
    "M0 307L0 500 500 500 500 295 403 293 329 263 205 286 81 263z",
    "M0 214L0 500 500 500 500 229 405 222 314 240 204 223 80 262z",
    "M0 198L0 500 500 500 500 184 379 202 201 180 110 192 75 188z",
    "M0 175L0 500 500 500 500 164 403 161 328 132 204 154 81 132z",
    "M0 82L0 500 500 500 500 97 405 90 313 108 204 91 80 130z",
    "M0 74L0 500 500 500 500 60 378 78 201 56 110 68 75 64z",
    "M0 27L0 500 500 500 500 42 405 35 314 53 205 36 78 56z",
    "M0 18L0 500 500 500 500 13 403 20 328 9 158 24 77 7z",
    "M0 0L0 500 500 500 500 0z"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if(mounted) {
      if (isOpen) {
        setMenuClasses("absolute z-40 top-0 pt-28 left-0 w-full h-full flex items-center justify-center");
      } else {
        setTimeout(() => {
          setMenuClasses("absolute z-40 top-0 pt-28 left-0 w-full h-full flex items-center justify-center hidden");
        }, 840);
      }
    } 
  }, [isOpen]);

  const [path, setPath] = useState('M0 0L0 0 0 0 0 0 0 0 0 0 0 0 0 0z');

  return (
    <div className={menuClasses}>
      <div className='w-full h-full relative z-[100]'>
        <ul className="list-none mx-auto w-full h-full font-pally-medium text-5xl flex flex-col items-center justify-evenly pt-24  pb-64">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/projets">Projets</Link></li>
          <li><Link href="/parcours">Parcours</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;