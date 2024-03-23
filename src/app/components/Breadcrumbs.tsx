// components/Breadcrumbs.tsx

import { FC } from 'react';
import Link from 'next/link';
import { title } from 'process';
import { motion } from 'framer-motion';

type BreadcrumbProps = {
  title: string; 
}

const Breadcrumbs: FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div className="text-5xl w-full px-6 mt-6 font-erode font-medium mb-10 ">
      {title}
      <hr className='bg-black h-0.5 mt-4'/>
    </div>
  );
};

export default Breadcrumbs;
