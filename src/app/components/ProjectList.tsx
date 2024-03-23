// ProjectList.tsx
import React from 'react';
import Separator from './Separator';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  icon: string;
  name: string;
  public: boolean;
  slug: string;
  year: number;
  thumbnail: string;
  keywords: Array<string>;
  images: Array<string>;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const parentDiv = {
    visible: (i: number) => ({
      transform : "translateY(0%)",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.5,
        delayChildren : 0,
        delay: i < 2 ? (i * 0.3) : (i * 0.01)
      },
    }),
    hidden: {
      transform : "translateY(10%)",
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.25,
      },
    },
  }

  const childrenImg = {
  visible : {
    transform : "translateY(0%)",
    opacity : 1,
    transition: {
      duration: 0.25
    }
  },
  hidden: {
    transform : "translateY(5%)",
    opacity: 0,
    transition: {
      duration: 0.25
    }
  },
}


  return (
    <>
      {projects.map((project, index) => (
        <motion.div 
          key={index} 
          className={'mb-24 w-fit ' + (index % 2 === 0 ?'mr-auto' : 'ml-auto')}
          variants={parentDiv}
          initial="hidden"
          whileInView="visible"
          custom={index}
        >
            <Link href={'/projets/'+project.slug} className={'flex flex-col py-2 w-fit ' + (index % 2 === 0 ?'text-left' : 'text-right') }>
              <div className='font-erode font-light text-3xl italic'>0{index+1}</div>
              <div className='md:h-[20rem] mt-4 p-6 relative'>
                {project.images && project.images[0] && 
                <motion.img src={project.images[0]} 
                className={'absolute ' + 
                (project.slug==="une-maison-en-provence" ? 'md:w-32 w-24 top-0 left-0 -translate-x-2 -translate-y-3 -rotate-1' : 
                (project.slug==="waves" ? 'md:w-48 w-32 top-0 left-0 -translate-x-2 -translate-y-3 rotate-2' : 
                (project.slug==="vivantmag" ? 'md:w-40 w-28 bottom-0 left-0 -translate-x-1 translate-y-1 -rotate-1' : 
                (project.slug==="anautiqua" ? 'md:w-32 w-24 top-0 left-0 -translate-x-1' : ''))))} 
                variants={childrenImg}
                />}
                <img src={project.thumbnail} className='h-full w-fit'/>
                {project.images && project.images[1] && 
                <motion.img src={project.images[1]} 
                className={'absolute ' + 
                (project.slug==="une-maison-en-provence" ?'md:w-48 w-32 bottom-0 right-0 translate-x-3 translate-y-3': 
                (project.slug==="waves" ? 'md:w-36 w-24 bottom-0 right-0 translate-x-4 translate-y-3 -rotate-2' : 
                (project.slug==="vivantmag" ? 'md:w-48 w-32 top-0 right-0 translate-x-2 -translate-y-3 rotate-3' : 
                (project.slug==="anautiqua" ? 'md:w-32 w-24 bottom-0 right-0 translate-x-2' : '')))) } 
                variants={childrenImg}
                />}
              </div>
              <div className='mx-1 mt-6'>
                <div className='font-plex font-medium text-2xl -mt-2 '>{project.name}</div>
              </div>
              <div className={'flex font-erode font-light text-lg ' + (index % 2 === 1 ? 'justify-end': '')}>
                {project.keywords.map((keyword, index) => (
                  <div key={index} className={'mx-1'}>
                    {keyword}
                  </div>
                ))}
              </div>
              {//<span className={'font-plex mx-1 text-[#87bbc7] ' +  (index % 2 === 0 ? 'text-right mr-6' : 'text-left ml-6')}>Voir plus...</span>
}
            </Link>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectList;
