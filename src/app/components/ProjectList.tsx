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
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index}>
           <Separator/>
          <div className='flex flex-wrap w-full justify-between items-center p-2'>
              <span className='font-plex text-sm'>{project.year}</span>
              <Link href={'/projets/'+project.slug} className='text-2xl font-medium font-erode'>
                {project.name}
              </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
