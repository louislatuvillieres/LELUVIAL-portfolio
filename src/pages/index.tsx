// src/app/pages/index.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { floatingImages } from "@/data/floatingImages";
import NameImage from "@/app/components/NameImage";
import ScrapTitle from "@/app/components/ScrapTitle";
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollY } = useScroll();
  
  // Parallax pour l'image principale
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 0.95]);  

  return (
    <div
      className="flex flex-col md:flex-row w-full"
      style={{ height: "calc(100vh - 90px)" }}
    >
      {/* SECTION IMAGES - 60% largeur desktop, centre du div comme référence */}
      <div className="relative w-full md:w-[60%] h-3/5 md:h-full flex justify-center items-center overflow-x-hidden md:overflow-x-visible">
        {/* Image principale - statique ou animée selon votre préférence */}
        <div className=" relative w-[40rem] min-w-[40rem] max-w-[40rem] h-[652px] flex items-center justify-center xl:scale-100 shrink-0 lg:scale-[80%] md:scale-75 scale-[60%] 2xl:scale-105 2xl:translate-y-4 2xl:-translate-x-12">
          <motion.div className="absolute top-0 left-0 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/me2.png"
              alt="Picture of me"
              className="absolute w-[40rem] min-w-[40rem] max-w-[40rem] z-10"
              width={1020}
              height={1038}
            />
          </motion.div>

          {/* Images flottantes avec animations stop-motion */}
          {floatingImages.map((img, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: img.size,
                height: img.size,
                zIndex: img.z,
                top: "50%",
                left: "50%",
                marginLeft: -img.size / 2,
                marginTop: -img.size / 2,
              }}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: img.rotate,
                x: img.x,
                y: img.y,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: img.rotate,
                x: img.x,
                y: img.y,
              }}
              whileHover={{
                scale: 1.2,
                rotate: img.rotate + 10,
                zIndex: 30,
              }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Image
                
                src={img.src}
                alt=""
                width={img.size}
                height={img.size}
                className={`absolute pointer-events-none select-none`}
                
              />
            </motion.div> 
          ))}
        </div>
      </div>

      {/* SECTION TEXTE - 40% largeur desktop */}
      <div className="w-full md:w-[40%] h-2/5 md:h-full flex flex-col justify-center md:items-end text-center md:text-right md:space-y-6 md:pr-1">
        <motion.div className="w-auto -mt-48 md:mt-0 sm:-ml-3 self-center md:self-auto ml-0 md:ml-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ScrapTitle text="Bienvenue !" />
        </motion.div>
        <motion.div 
          className="font-plex max-[280px]:text-2xl text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="inline-flex flex-wrap md:justify-end justify-center items-baseline gap-x-2 w-full font-medium px-2 md:px-0">
            <motion.span 
              className="font-normal text-inherit w-auto md:w-full xl:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Je suis
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <NameImage
                src="/img/louis.webp"
                alt="Louis"
                width={303}
                height={82}
                maxHeight={87}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <NameImage
                src="/img/latu.webp"
                alt="Latu"
                width={247}
                height={78}
                maxHeight={87}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              <NameImage
                src="/img/villieres.webp"
                alt="Villières"
                width={556}
                height={87}
                maxHeight={87}
              />
            </motion.div>

            <motion.span 
              className="font-normal text-inherit -ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ,
            </motion.span>
          </span>
        </motion.div>


        <motion.p 
          className="font-erode text-xl/5 pt-6 pb-2 md:pb-0 px-6 sm:px-0 md:text-xl md:pl-2 lg:pl-0 font-light max-w-xl mx-auto md:mx-0 md:ml-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Actuellement élève ingénieur à l&apos;ENSC - Bordeaux INP, je me forme
          en Interaction Humain-Machine, Sciences Cognitives et développement
          FullStack.
        </motion.p>

        <motion.div className="space-y-2 pt-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.4, type: "spring", stiffness: 400 }}
        >
          <motion.div
            whileHover={{ x : -10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="/projets"
              className="font-plex font-semibold text-indigo-950 text-xl inline-flex items-center gap-1 transition-all duration-300"
            >
              Mes projets
              <Image
                src="/img/arrow-up.webp"
                alt=""
                width={20}
                height={20}
                className="-mt-2"
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ x : -10 }}
            transition={{ type: "spring", stiffness: 400 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/parcours"
              className="font-plex font-semibold text-indigo-950 text-xl inline-flex items-center gap-1 transition-all duration-300"
            >
              Mon parcours
              <Image
                src="/img/arrow-up.webp"
                alt=""
                width={20}
                height={20}
                className="-mt-2"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
