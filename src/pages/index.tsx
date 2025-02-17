"use client";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { motion } from "framer-motion";

const Index: NextPage = () => {
  return (
    <div className="max-h-[100vh] w-screen absolute top-0 left-0 pt-20 overflow-hidden z-50">
      <div className="flex flex-col sm:flex-row items-center sm:pt-0 pt-32 justify-center -translate-y-20 h-svh  mx-auto top-0 container lg:px-16 z-50">
        <div className="indexImgContainer w-[20rem] md:mt-24 -top-32 -left-6 sm:top-0 lg:w-[35rem] xl:w-1/2 2xl:w-[35rem] h-full max-h-[60rem] sm:h-[45rem] lg:h-[55rem] sm:-left-12 flex items-center justify-center relative">
          <Image 
          src="/home_illu/1.jpg"
          alt="Moon Illustration"
          width={302}
          height={294}
          className="absolute top-0 translate-y-36 right-0 sm:-right-20 lg:right-0 -rotate-2 appearFromTop z-50 w-[125px] sm:w-[175px] md:w-[225px] lg:w-[250px] xl:w-[302px]"
          />
          <Image 
          src="/me.png"
          alt="Picture of me"
          width={475}
          height={688}
          className="absolute left-0 translate-x-[20%] translate-y-[27%] top-0 appearFromLeft z-50 w-[250px] sm:w-[425px] xl:w-[475px]"
          />
          <div className="-bottom-48 sm:bottom-0 w-[100px] sm:w-[175px] lg:w-[200px] xl:w-[250px] absolute">
            <Image 
            src="/home_illu/2.png"
            alt="Double Star Illustration"
            width={250}
            height={250}
            className="absolute -translate-y-96 lg:left-0 sm:left-12 -left-4 -translate-x-[65%] sm:bottom-0 rotate-6 appearFromBottom z-50 w-[100px] sm:w-[175px] lg:w-[200px] xl:w-[250px]"
            />
          </div>
        </div>
        <div className="sm:w-1/2 w-full h-full sm:h-full relative z-[60]">
          <div className="absolute w-full xl:pr-8 bottom-0 mb-12 sm:mb-64 md:mb-56 text-center sm:text-right">
            <motion.span 
              className="font-erode text-3xl sm:text-5xl xl:text-6xl italic mr-0 sm:mr-4 xl:mr-12 block"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.75, delay: 2.7 }}
            >
              Bienvenue !
            </motion.span>
            <motion.div 
              className="font-plex text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] w-full mt-1 sm:mt-6 xl:mt-12 mb-5 text-center sm:text-right"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.75, delay: 2.9 }}
            >
              Je suis <b className="font-medium text-cyan-800 xl:inline block">Louis Latu-Villières<span className="text-black font-normal">,</span></b>
            </motion.div>
            <motion.div 
              className="font-erode sm:text-lg md:text-xl xl:text-2xl font-light mb-6 sm:mb-12 text-center sm:text-right"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.75, delay: 3.1 }}
            >
              Actuellement étudiant en Informatique,<br/> je souhaiterai devenir Ingénieur Cognitique
            </motion.div>
            <div className="mr-0 sm:mr-4">
              <motion.div
                initial={{ opacity: 0, x: '20%' }}
                animate={{ opacity: 1, x: '0%' }}
                transition={{ duration: 1, delay: 3.8 }}
              >
                <Link href='/projets' className="font-plex font-medium text-xl hover:mr-2 duration-500 transition-all">Mes projets <SlArrowLeft className="inline w-3 mb-1"/> </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: '20%' }}
                animate={{ opacity: 1, x: '0%' }}
                transition={{ duration: 1, delay: 3.9 }}
              >
                <Link href='/parcours' className="font-plex font-medium text-xl hover:mr-2 duration-500 transition-all">Mon parcours  <SlArrowLeft className="inline w-3 mb-1"/></Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

