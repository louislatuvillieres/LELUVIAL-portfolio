// ProjectList.tsx
import React from 'react';
import Separator from './Separator';
import Link from 'next/link';

interface Project {
  icon: string;
  name: string;
  public: boolean;
  slug: string;
  year: number;
  thumbnail: string;
  keywords: Array<string>;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Link href={'/projets/'+project.slug} key={index} className=''>
            <div className='flex flex-col mb-8'>
              <div>
                <img className='absolute w-20 -rotate-45 -translate-x-1/3' src={index % 2 === 0 ?'/bar_2.png' : '/bar_1.png'}/>
                <img src='https://dummyimage.com/600x400/cfcfcf/fff' className='w-full'/>
                <img className='absolute w-20 -rotate-45 right-0 -translate-y-full' src={index % 2 === 0 ?'/bar_1.png' : '/bar_2.png'}/>
              </div>
              <div className='mx-1 mt-4'>
                <div className='font-erode font-light text-3xl italic'>0{index+1}</div>
                <div className='font-plex font-medium text-2xl -mt-2 '>{project.name}</div>
              </div>
              <div className='flex font-erode font-light text-lg'>
                {project.keywords.map((keyword, index) => (
                  <div key={index} className='mx-1'>
                    {keyword}
                  </div>
                ))}
              </div>
              <span className='font-plex mx-1 text-[#87bbc7] text-right'>Voir plus...</span>
            </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectList;
