import React from 'react';
import Layout from "@components/Layout";
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { useEffect, useState } from 'react';

const Parcours: React.FC = () => {
    const evenements = [
        {
            'vinyl': '/album_covers/evermore.jpg',
            'title': 'Développeur Web Freelance',
            'date': '2024',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': '/album_covers/emails.jpg',
            'title': 'BTS Services Informatiques aux Organisations',
            'date': '2023',
            'lieu': 'Lycée Théodore Aubanel - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': '/album_covers/desire.jpg',
            'title': 'Stagiaire Développement Web',
            'date': 'Février/Mars 2023',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': '/album_covers/flipthat.jpg',
            'title': 'Stagiaire Développement Web',
            'date': 'Juin 2022',
            'lieu': 'VivantMag - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': '/album_covers/comein.jpg',
            'title': 'Baccalauréat Général',
            'date': '2021',
            'lieu': 'Lycée Albert Camus - Nîmes',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        }
    ]
  return (
    <>
        <Breadcrumbs title='Parcours'/>
        <div className='px-6 py-2 w-full h-full pt-12'>
            
            {evenements.map((evenement, index) => (
                <div className={(index % 2 === 0 ?'text-left mb-24' : 'text-right mb-24')} key={index}>
                    <div className={(index % 2 === 0 ?'mr-auto':'ml-auto')+' w-fit flex relative z-0'}>
                        {(index % 2 === 1 ? <img src='vinyl_50.png' className='h-44 rotate-180'></img> : '')}
                        <img className='w-44 z-10' src={evenement.vinyl}/>
                        
                        {(index % 2 === 0 ? <img src='vinyl_50.png' className='h-44'></img> : '')}
                    </div>
                    <div className='mt-8 font-erode font-light text-3xl italic'>{evenement.date}</div>
                    <div className='font-plex text-3xl font-semibold leading-8 mt-2'>{evenement.title}</div>
                    <div className='font-erode text-xl mb-2 mt-4'>{evenement.lieu}</div>
                    <div className={(index % 2 === 0 ?'text-justify font-plex text-xl':'text-right-justify font-plex text-xl') + ' mt-4'}>{evenement.description}</div>
                </div>
            ))}
        </div>
    </>
  );
};

export default Parcours;
