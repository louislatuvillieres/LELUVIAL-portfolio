// components/Breadcrumbs.tsx

import { FC } from 'react';
import Link from 'next/link';
import { title } from 'process';

type BreadcrumbProps = {
  title: string; 
}

const Breadcrumbs: FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div className="text-4xl w-full px-6 mt-10 font-erode font-semibold mb-6 uppercase">
      {title}
    </div>
  );
};

export default Breadcrumbs;
