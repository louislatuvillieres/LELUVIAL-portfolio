import MenuBtn from '@components/MenuBtn';
import React, { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setMenuOpen }) => {
    return (
        <header className="p-4 z-100 relative">
          <div className="container mx-auto flex justify-between items-center">
            <div className=""><img src="logo_leluvial_25.png" className="w-20 h-20"></img></div>
            <div className="flex gap-8"> 
                <MenuBtn setMenuOpen={setMenuOpen}/>
            {/*
                <div className="">
                    <div className="w-16 h-8 flex justify-center items-center"><img src="menu1_25.png" ></img></div>
                    <div className="w-16 h-8 flex justify-center items-center"><img src="menu2_25.png"></img></div>
                </div>
                <div className="">
                    <div className="w-16 h-8 flex justify-center items-center"><img src="menu1_25.png" ></img></div>
                    <div className="w-16 h-8 flex justify-center items-center -rotate-12 -translate-y-1/4"><img src="menu2_25.png"></img></div>
                </div>
                <div className="">
                    <div className="w-16 h-8 flex justify-center items-center rotate-12 translate-y-1/4"><img src="menu1_25.png" ></img></div>
                    <div className="w-16 h-8 flex justify-center items-center -rotate-12 -translate-y-1/4"><img src="menu2_25.png"></img></div>
                </div>
                <div className="">
                    <div className="w-16 h-8 flex justify-center items-center rotate-45 translate-y-1/4"><img src="menu1_25.png" ></img></div>
                    <div className="w-16 h-8 flex justify-center items-center -rotate-12 -translate-y-1/4"><img src="menu2_25.png"></img></div>
                </div>
                <div className="">
                    <div className="w-16 h-8 flex justify-center items-center rotate-45 translate-y-1/4"><img src="menu1_25.png" ></img></div>
                    <div className="w-16 h-8 flex justify-center items-center -rotate-45 -translate-y-1/4"><img src="menu2_25.png"></img></div>
                </div>
                <div className="">
                    <div className="w-16 h-8 flex justify-center items-center rotate-45 translate-y-1/2"><img src="menu1_25.png" ></img></div>
                    <div className="w-16 h-8 flex justify-center items-center -rotate-45 -translate-y-1/2"><img src="menu2_25.png"></img></div>
                </div> */}
            </div>
   
          </div>
        </header>
    );
}

export default Header;