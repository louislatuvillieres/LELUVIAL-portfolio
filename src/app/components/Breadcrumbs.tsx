// components/Breadcrumbs.tsx

import { FC } from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  text: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="flex items-center text-4xl breadcrumbs w-full md:w-1/2 p-6 h-24 font-vt323">
        <Link href="/"><img className='h-10 w-10 mr-2' src='folder.png'/></Link>
      {items.map((item, index) => (
        <span key={index}>
          {index > 0}
          <Link href={item.href} className='mx-2'>
            {item.text}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
