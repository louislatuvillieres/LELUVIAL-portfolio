import React, { ReactNode, useEffect } from 'react';
import { useState } from 'react';

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const [menuClasses, setMenuClasses] = useState("absolute z-0 top-0 pt-28 left-0 w-full h-full flex items-center justify-center");
  const [textureClasses, setTextureClasses] = useState('absolute w-full h-full overflow-hidden top-0 textures');

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
        startAnimation();
      } else {
        reverseAnimation();
      }
    } 
  }, [isOpen]);

  const [path, setPath] = useState('M0 0L0 0 0 0 0 0 0 0 0 0 0 0 0 0z');

  const startAnimation = () => {
    let currentIndex = 0;

    const applyNextPath = () => {
      if (currentIndex < paths.length) {
        setPath(paths[currentIndex]);
        currentIndex++;

        setTimeout(applyNextPath, 75);
      }
    };

    applyNextPath();
  };

  const reverseAnimation = () => {
    const basePath = 'M0 0L0 0 0 0 0 0 0 0 0 0 0 0 0 0z';

    let currentIndex = paths.length-1;

    const applyNextPath = () => {
      if (currentIndex >= 0) {
        setPath(paths[currentIndex]);
        currentIndex--;

        setTimeout(applyNextPath, 75);
      }
      else {
        setPath(basePath);
      }
    };

    applyNextPath();
  };

  return (
    <div className={menuClasses}>
      <div className="absolute w-full h-full overflow-hidden top-0 textures">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 500 500"
          version="1.1"
          viewBox="0 0 500 500"
          xmlSpace="preserve"
          className='h-[100vh] w-[100vh] overflow-hidden'
        >
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="500" height="500">
              <image href="./paper_texture.jpg" x="0" y="0" width="500" height="500" />
            </pattern>
          </defs>
          <style type="text/css">
            {".st0{fill:url(#img1)}"}
          </style>
          <path d={path} className="st0"></path>
        </svg>
      </div>
      <div className='w-full h-full relative hidden'>
        <ul className="list-none mx-auto w-full h-full font-pally-medium text-5xl flex flex-col items-center justify-evenly pt-24  pb-64">
          <li>Accueil</li>
          <li>A propos</li>
          <li>Projets</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;