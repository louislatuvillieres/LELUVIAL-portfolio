// ProjectList.tsx
import React from 'react';
import Separator from './Separator';
import Link from 'next/link';

interface Project {
  icon: string;
  name: string;
  public: boolean;
  slug: string;
  thumbnail: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className='text-right'>
        {projects.map((project, index) => (
          <Link href={'/projets/'+project.slug} className='text-4xl font-schoolbell w-full block' key={index}>
            <Separator/>
            <span className='block py-2'>{project.name}</span>
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
