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
            <div className='flex flex-col py-4'>
              <div className=''>
                <img src={project.thumbnail} className='w-full'/>
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
