import React from 'react';
import Layout from "@components/Layout";
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Parcours: React.FC = () => {
    const evenements = [
        {
            'vinyl': {
                'img': '/album_covers/charm.jpg',
                'text': 'Clairo - Charm'
            },
            'title': 'Licence 2',
            'options': 'Informatique',
            'date': '2025',
            'lieu': 'Université Paris Saclay',
            'description': ''
        },
        {
            'vinyl': {
                'img': '/album_covers/evermore.jpg',
                'text': 'Taylor Swift - evermore'
            },
            'title': 'Développeur Web Freelance',
            'date': '2024',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'J\'ai intégré l\'équipe de l\'agence Glanum en tant que Développeur Junior polyvalent pour répondre à leurs besoins. J\'ai été responsable dans divers projets, notamment celui de refonte du site WordPress, Une Maison En Provence. Mon rôle m\'a amené à revoir entièrement les requêtes en base de données générées par le thème WordPress, ce qui a permis une optimisation significative du site.'
        },
        {
            'vinyl': {
                'img': '/album_covers/emails.jpg',
                'text': 'Sabrina Carpenter - emails i can\'t send fwd:'
            },
            'title': 'BTS Services Informatiques aux Organisations',
            'options': 'Spécialité Solutions Logicielles et Applications Métier, option Mathématiques Approfondies',
            'date': '2023',
            'lieu': 'Lycée Théodore Aubanel - Avignon',
            'description': 'Ce BTS m\'a permis de me mettre en confiance vis-à-vis des matières scientifiques, en devenant majorant à chaque semestre, et de réellement développer ma fibre scientifique pour pratiquer un métier qui me plaît : le métier de Développeur Web.'
        },
        {
            'vinyl': {
                'img': '/album_covers/desire.jpg',
                'text': 'Caroline Polachek - Desire, I Want To Turn Into You'
            },
            'title': 'Stagiaire Développement Web',
            'date': 'Février/Mars 2023',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'J\'ai pu travailler sur la réalisation d\'un Proof of Concept (PoC) pour mon projet Waves. Ce projet m\'a permis de découvrir des technologies telles que Laravel, React, ainsi qu\'InertiaJS. J\'ai également acquis des connaissances pratiques en UX/UI et en gestion de projets grâce aux projets professionnels de l\'agence.',
        },
        {
            'vinyl': {
                'img': '/album_covers/flipthat.jpg',
                'text': 'LOONA - Flip That'
            },
            'title': 'Stagiaire Développement Web',
            'date': 'Juin 2022',
            'lieu': 'VivantMag - Avignon',
            'description': 'VivantMag est une association dédiée à la médiation culturelle. J\'ai été chargé de mettre à jour le site Wordpress de VivantMag, resté inchangé depuis 2019, en assurant la sécurité et la continuité des services.'
        },
        {
            'vinyl': {
                'img': '/album_covers/comein.jpg',
                'text': 'Weatherday - Come In'
            },
            'title': 'Baccalauréat Général',
            'date': '2021',
            'options' : 'Spécialités Arts Plastiques, Histoire Géographie Géopolitique et Sciences Politiques, Section Européenne Anglais',
            'lieu': 'Lycée Albert Camus - Nîmes',
            'description': 'Ce baccalauréat m\'a permis de développer ma fibre artistique et mon esprit critique, pour ensuite bifurquer vers des matières plus scientifiques.'
        }
    ]

  return (
    <>
        <Breadcrumbs title='Parcours'/>
        <div className='px-6 py-2 w-full h-full '>
            
            {evenements.map((evenement, index) => (
                <motion.div 
                    className={(index % 2 === 0 ?'text-left mb-28' : 'text-right mb-28')} key={index}
                    initial={{
                        translateY: ( index === 0 ? "25%" : "10%"),
                        opacity: 0
                    }}
                    animate={(index===0 ? {translateY: "0%", opacity: 1} : '')}
                    whileInView={(index!==0 ? {translateY: "0%", opacity: 1} : '')}
                    transition={{
                        type: "spring",
                        duration: 1.5,
                        bounce: 0.2,
                    }}
                >
                    <div className=' font-erode font-light text-3xl italic'>{evenement.date}</div>
                    <div className={(index % 2 === 0 ?'mr-auto':'ml-auto')+' w-fit h-44 flex relative z-0 mt-4'}>
                        {(index % 2 === 1 ? <Image src='/vinyl_50.png' className='w-auto rotate-180 translate-x-px' width='263' height='535' alt=''></Image> : '')}
                        <Image className='w-44 z-10' src={evenement.vinyl.img} width='1000' height='1000' alt=''/>
                        {(index % 2 === 0 ? <Image src='/vinyl_50.png' className='w-auto' width='263' height='535' alt=''></Image> : '')}
                    </div>
                    <div className='italic font-plex font-light'>{evenement.vinyl.text}</div>
                    <div className='font-plex text-3xl font-semibold leading-8 mt-2'>{evenement.title}</div>
                    {evenement.options && <div className={'font-plex md:text-3xl text-xl font-regular italic leading-8 mt-2 max-w-[52rem] ' + (index % 2 === 1 ? 'ml-auto' : '')}>{evenement.options}</div>}
                    <div className='font-erode text-xl mb-2 mt-4'>{evenement.lieu}</div>
                    <div className={(index % 2 === 0 ?'text-left font-plex text-xl':'text-right font-plex text-xl ml-auto') + ' mt-4 max-w-[52rem]'}>{evenement.description}</div>
                </motion.div>
            ))}
        </div>
    </>
  );
};

export default Parcours;
