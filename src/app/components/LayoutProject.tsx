import Breadcrumbs from "@/app/components/Breadcrumbs";
import { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import { Project } from "@/types/project";

const LayoutProject: NextPage<{ project: Project, previousProject: Project | null, nextProject: Project | null }> = ({ project }) => {
  return (
    <>
      <Breadcrumbs title={project.name} title1="Projets" />
      <div className="px-6 py-2 w-full h-full">
        <div className="flex items-end flex-wrap">
            <div className="w-full md:w-2/5 flex flex-col justify-between">
                <Image alt="Project Thumbnail" src={project.thumbnail} width={600} height={400} className="-mt-6"/>
                <div>
                    <div className="flex h-8 justify-center">
                        {project.keywords.map((keyword, index) => (
                            <div key={index} className="group relative">
                                <Image priority={true} className="mx-3 h-8 w-auto" width={600} height={600} alt={keyword} src={'/skills/'+ keyword.toLowerCase().replace(/ /g, "-") + '.png'} />
                                <div className="absolute w-max bottom-0 left-[50%] font-plex font-light -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all">{keyword}</div>
                            </div>
                        ))}
                    </div>
                    <div className="text-xl font-erode mt-8 text-center">
                        {project.link && <a href={project.link} target="_blank" className="underline">Accéder au site</a>}
                        {!project.link ? 'Projet non encore remis en ligne' : ''}
                        {project.attachment && <a href={project.attachment} target="_blank" className="underline mx-3">Accéder au dossier de presse</a>}
                    </div>
                </div>
            </div>
            
        </div>
        <div className="w-full font-medium mt-24 font-plex text-lg h-fit bottom-0 text-justify">
            {project.description}
        </div>
        { project.videos && project.videos[0] && project.videos[1] &&
        <div className="w-full flex md:flex-row flex-col md:gap-8 mt-8">
            <div className="md:w-1/2 w-full">
                <span className="font-erode text-xl italic">Avant : </span>
                <iframe className="w-full h-64" src={project.videos[0]} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="umep_before"></iframe>
            </div>
            <div className="md:w-1/2 w-full">
                <span className="font-erode text-xl italic">Après : </span>
                <iframe className="w-full h-64" src={project.videos[1]} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="umep_before"></iframe>
            </div>
        </div>
        }
        <div className={project.videos ? "mt-12" : "mt-24 " + "flex items-end flex-wrap-reverse flex-grow"}>
            {project.description1 && project.screenshot1 && <div className="w-full my-auto md:w-2/5 md:pr-8 font-plex text-lg h-fit bottom-0 text-justify">
                {project.description1}
            </div>}
            {project.description1 && !project.screenshot1 && <div className="w-full mt-auto font-plex text-lg h-fit bottom-0 text-justify">
                {project.description1}
            </div>}
            {project.screenshot1 && typeof project.screenshot1[0] === 'string' && typeof project.screenshot1[1] === 'number' && typeof project.screenshot1[2] === 'number' 
            && <Image priority={true} quality={100} className="md:w-3/5 w-full mt-auto" src={project.screenshot1[0]} alt={'Screenshot 1 ' + project.name} width={project.screenshot1[1]} height={project.screenshot1[2]} />}
        </div>
        <div className="flex items-center flex-wrap mt-24 mb-24">
            {project.screenshot2 && typeof project.screenshot2[0] === 'string' && typeof project.screenshot2[1] === 'number' && typeof project.screenshot2[2] === 'number' 
            && <Image priority={true} quality={100} className="md:w-1/5 w-full mt-auto" src={project.screenshot2[0]} alt={'Screenshot 2 ' + project.name} width={project.screenshot2[1]} height={project.screenshot2[2]} />}
            {project.description2 && project.screenshot2 && <div className="w-full md:w-4/5 md:pl-8 font-plex text-lg h-fit bottom-0 text-justify">
                {project.description2}
            </div>}
        </div>
      </div>
      {project.videos && <Script src="https://player.vimeo.com/api/player.js" />}
    </>
  );
};

export default LayoutProject;
