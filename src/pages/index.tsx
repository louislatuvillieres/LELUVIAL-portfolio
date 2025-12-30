// src/app/pages/index.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { floatingImages } from "@/data/floatingImages";
import NameImage from "@/app/components/NameImage";
import ScrapTitle from "@/app/components/ScrapTitle";

const Index = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full"
      style={{ height: "calc(100vh - 90px)" }}
    >
      {/* SECTION IMAGES - 60% largeur desktop, centre du div comme référence */}
      <div className="relative w-full md:w-[60%] h-3/5 md:h-full flex justify-center items-center overflow-x-hidden md:overflow-x-visible">
        {/* Image principale - statique ou animée selon votre préférence */}
        <div className="w-[40rem] min-w-[40rem] max-w-[40rem] h-[652px] flex items-center justify-center xl:scale-100 shrink-0 lg:scale-[80%] md:scale-75 scale-[60%] 2xl:scale-105 2xl:translate-y-4 2xl:-translate-x-12">
          <Image
            src="/me2.png"
            alt="Picture of me"
            className="absolute w-[40rem] min-w-[40rem] max-w-[40rem] z-10"
            width={1020}
            height={1038}
          />

          {/* Images flottantes avec animations stop-motion */}
          {floatingImages.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt=""
              width={img.size}
              height={img.size}
              className={`absolute pointer-events-none select-none scrap-animate animate-${img.animation}`}
              style={{
                transform: `translate(${img.x}px, ${img.y}px) rotate(${img.rotate}deg)`,
                zIndex: img.z,
                animationDelay: `${img.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* SECTION TEXTE - 40% largeur desktop */}
      <div className="w-full md:w-[40%] h-2/5 md:h-full flex flex-col justify-center md:items-end text-center md:text-right md:space-y-6 md:pr-1">
        <div className="w-auto -mt-48 md:mt-0 self-center sm:self-start md:self-auto ml-0 sm:ml-16 md:ml-0">
          <ScrapTitle text="Bienvenue !" />
        </div>
        <div className="font-plex max-[280px]:text-2xl text-3xl lg:text-4xl ">
          <span className="inline-flex flex-wrap md:justify-end justify-center items-baseline gap-x-2 w-full font-medium px-2 md:px-0">
            <span className="font-normal text-inherit w-auto md:w-full xl:w-auto">
              Je suis
            </span>

            <NameImage
              src="/img/louis.webp"
              alt="Louis"
              width={303}
              height={82}
              maxHeight={87}
            />
            <NameImage
              src="/img/latu.webp"
              alt="Latu"
              width={247}
              height={78}
              maxHeight={87}
            />
            <NameImage
              src="/img/villieres.webp"
              alt="Villières"
              width={556}
              height={87}
              maxHeight={87}
            />

            <span className="font-normal text-inherit -ml-2">,</span>
          </span>
        </div>

        <p className="font-erode text-xl/5 pt-6 pb-2 md:pb-0 px-6 sm:px-0 md:text-xl md:pl-2 lg:pl-0 font-light max-w-xl mx-auto md:mx-0 md:ml-auto">
          Actuellement élève ingénieur à l&apos;ENSC - Bordeaux INP, je me forme
          en Interaction Humain-Machine, Sciences Cognitives et développement
          FullStack.
        </p>

        <div className="space-y-2 pt-4">
          <div>
            <Link
              href="/projets"
              className="font-plex font-semibold text-indigo-950 text-xl inline-flex items-center gap-1 hover:-translate-x-2 transition-all duration-300"
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
          </div>

          <div>
            <Link
              href="/parcours"
              className="font-plex font-semibold text-indigo-950 text-xl inline-flex items-center gap-1 hover:-translate-x-2 transition-all duration-300"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
