import { FC } from 'react';
import Link from 'next/link';

type BreadcrumbProps = {
  title: string; 
  title1?: string;
}

const Breadcrumbs: FC<BreadcrumbProps> = ({ title, title1 }) => {
  return (
    <div className="text-5xl w-full px-6 mt-6 font-erode mb-10 ">
      {title1 && <Link href={"/projets"}>{title1+ ' / '}</Link>}
      {title1 && <span className='font-plex text-[2.6rem] font-semibold'>{title}</span>}
      {!title1 && <span>{title}</span>}
      <hr className='bg-black h-0.5 mt-4'/>
    </div>
  );
};

export default Breadcrumbs;
