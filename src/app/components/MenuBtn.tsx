import { useState, useEffect } from 'react';
import Menu from './Menu';
import React, { Dispatch, SetStateAction } from 'react';

interface MenuBtnProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuBtn: React.FC<MenuBtnProps> = ({setMenuOpen}) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate((prev) => !prev);
    setMenuOpen((prev) => !prev);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const startAnimation = () => {
    const baseClasses = 'w-16 h-8 flex justify-center items-center ';
    const classes1 = [
      'rotate-12 translate-y-1/4',
      'rotate-45 translate-y-1/4',
      'rotate-45 translate-y-1/2',
    ];

    const classes2 = [
      '-rotate-12 -translate-y-1/4',
      '-rotate-45 -translate-y-1/4',
      '-rotate-45 -translate-y-1/2',
    ]

    let currentIndex = 0;

    const applyNextClass = () => {
      if (currentIndex < classes1.length) {
        setClasses1(baseClasses + classes1[currentIndex]);
        setClasses2(baseClasses + classes2[currentIndex]);
        currentIndex++;
        setTimeout(applyNextClass, 200);
      }
    };

    applyNextClass();
  };

  const reverseAnimation = () => {
    const baseClasses = 'w-16 h-8 flex justify-center items-center ';
    const classes1 = [
      'rotate-45 translate-y-1/2',
      'rotate-45 translate-y-1/4',
      'rotate-12 translate-y-1/4',
    ];

    const classes2 = [
      '-rotate-45 -translate-y-1/2',
      '-rotate-45 -translate-y-1/4',
      '-rotate-12 -translate-y-1/4',
    ];

    let currentIndex = 0;

    const applyNextClass = () => {
      if (currentIndex < classes1.length) {
        setClasses1(baseClasses + classes1[currentIndex]);
        setClasses2(baseClasses + classes2[currentIndex]);
        currentIndex++;
        setTimeout(applyNextClass, 200);
      } else {
        setClasses1(baseClasses);
        setClasses2(baseClasses);
      }
    };

    applyNextClass();
  };

  const [classes1, setClasses1] = useState('w-16 h-8 flex justify-center items-center');
  const [classes2, setClasses2] = useState('w-16 h-8 flex justify-center items-center');

  useEffect(() => {
    if(mounted) {
      if (animate) {
        startAnimation();
      } else {
        reverseAnimation();
      }
    }
  }, [animate]);

  return (
    <div
      onClick={handleClick}>
      <div
        className={classes1}
      >
        <img src="menu1_25.png" />
      </div>
      <div
        className={classes2}
        
      >
        <img src="menu2_25.png" />
      </div>
    </div>
  );
};

export default MenuBtn;