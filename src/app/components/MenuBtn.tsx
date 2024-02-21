import { useState, useEffect } from 'react';
import Menu from './Menu';
import React, { Dispatch, SetStateAction } from 'react';

interface MenuBtnProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

const MenuBtn: React.FC<MenuBtnProps> = ({setMenuOpen, isMenuOpen}) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate((prev) => !prev);
    setMenuOpen(!isMenuOpen);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [classes1, setClasses1] = useState('w-16 h-8 flex justify-center items-center');
  const [classes2, setClasses2] = useState('w-16 h-8 flex justify-center items-center');

  useEffect(() => {
    if(mounted) {
      if (animate) {
        setClasses1(classes1 + " menuBtn1-animate");
        setClasses2(classes2 + " menuBtn2-animate");
        //startAnimation();
      } else {
        setClasses1("w-16 h-8 flex justify-center items-center menuBtn1-reverse");
        setClasses2("w-16 h-8 flex justify-center items-center menuBtn2-reverse");
        setTimeout(() => {
          setClasses1("w-16 h-8 flex justify-center items-center");
          setClasses2("w-16 h-8 flex justify-center items-center");
        },625)
      }
    }
  }, [animate]);

  return (
    <div
      onClick={() => {handleClick();}}>
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