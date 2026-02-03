import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
const Header: React.FC = ({ }) => {

    return (
      <>
        <div className='w-screen h-16 md:h-20 fixed top-0 left-0 bg-white z-40'></div>
        <header className="py-2 px-4 sticky top-0 z-[100]">
          <div className="container mx-auto flex justify-between items-center">
            <div className='flex w-fit items-center gap-4'>
              <Link href="/"><img src="/img/assets/logo_leluvial_64px.webp" className="logo w-12 h-12 md:w-16 md:h-16 relative z-[100]"></img></Link>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header;