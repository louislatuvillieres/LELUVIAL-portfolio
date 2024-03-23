import React from 'react';
import Layout from "@components/Layout";
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Parcours: React.FC = () => {
    const evenements = [
        {
            'vinyl': {
                'img': '/album_covers/evermore.jpg',
                'text': 'Taylor Swift - evermore'
            },
            'title': 'Développeur Web Freelance',
            'date': '2024',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': {
                'img': '/album_covers/emails.jpg',
                'text': 'Sabrina Carpenter - emails i can\'t send fwd:'
            },
            'title': 'BTS Services Informatiques aux Organisations',
            'date': '2023',
            'lieu': 'Lycée Théodore Aubanel - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': {
                'img': '/album_covers/desire.jpg',
                'text': 'Caroline Polachek - Desire, I Want To Turn Into You'
            },
            'title': 'Stagiaire Développement Web',
            'date': 'Février/Mars 2023',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': {
                'img': '/album_covers/flipthat.jpg',
                'text': 'LOONA - Flip That'
            },
            'title': 'Stagiaire Développement Web',
            'date': 'Juin 2022',
            'lieu': 'VivantMag - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': {
                'img': '/album_covers/comein.jpg',
                'text': 'Weatherday - Come In'
            },
            'title': 'Baccalauréat Général',
            'date': '2021',
            'lieu': 'Lycée Albert Camus - Nîmes',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
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
                    <motion.div transition={{delay:0.1}} className=' font-erode font-light text-3xl italic'>{evenement.date}</motion.div>
                    <motion.div transition={{delay:0.2}} className={(index % 2 === 0 ?'mr-auto':'ml-auto')+' w-fit flex relative z-0 mt-4'}>
                        {(index % 2 === 1 ? <img src='vinyl_50.png' className='h-44 rotate-180'></img> : '')}
                        <img className='w-44 z-10' src={evenement.vinyl.img}/>
                        {(index % 2 === 0 ? <img src='vinyl_50.png' className='h-44'></img> : '')}
                    </motion.div>
                    <motion.div transition={{delay:0.3}} className='italic font-plex font-light'>{evenement.vinyl.text}</motion.div>
                    <motion.div transition={{delay:0.4}} className='font-plex text-3xl font-semibold leading-8 mt-2'>{evenement.title}</motion.div>
                    <motion.div transition={{delay:0.5}} className='font-erode text-xl mb-2 mt-4'>{evenement.lieu}</motion.div>
                    <motion.div transition={{delay:0.6}} className={(index % 2 === 0 ?'text-justify font-plex text-xl':'text-right-justify font-plex text-xl') + ' mt-4'}>{evenement.description}</motion.div>
                </motion.div>
            ))}
        </div>
    </>
  );
};

export default Parcours;
