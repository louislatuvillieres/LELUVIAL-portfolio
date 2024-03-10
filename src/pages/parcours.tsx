import React from 'react';
import Layout from "@components/Layout";
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { useEffect, useState } from 'react';

const Parcours: React.FC = () => {
    const evenements = [
        {
            'vinyl': 'https://dummyimage.com/175x175/cfcfcf/fff',
            'title': 'Développeur Web Freelance',
            'date': '2024',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': 'https://dummyimage.com/175x175/cfcfcf/fff',
            'title': 'BTS Services Informatiques aux Organisations',
            'date': '2023',
            'lieu': 'Lycée Théodore Aubanel - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': 'https://dummyimage.com/175x175/cfcfcf/fff',
            'title': 'Stagiaire Développement Web',
            'date': 'Février/Mars 2023',
            'lieu': 'Agence Glanum - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': 'https://dummyimage.com/175x175/cfcfcf/fff',
            'title': 'Stagiaire Développement Web',
            'date': 'Juin 2022',
            'lieu': 'VivantMag - Avignon',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        },
        {
            'vinyl': 'https://dummyimage.com/175x175/cfcfcf/fff',
            'title': 'Baccalauréat Général',
            'date': '2021',
            'lieu': 'Lycée Albert Camus - Nîmes',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada orci. Vivamus risus velit, vehicula eget est a, congue mollis lorem. Vivamus ullamcorper nisi vitae dolor sagittis, eu ultricies nunc vehicula. Etiam varius nisi maximus lectus viverra lacinia. Nulla.'
        }
    ]
  return (
    <Layout title='Parcours'>
        <Breadcrumbs title='Parcours'/>
        <div className='px-6 py-2 w-full h-full'>
            {evenements.map((evenement, index) => (
                <div className={index % 2 === 0 ?'text-left mb-8' : 'text-right mb-8'} key={index}>
                    <img className={index % 2 === 0 ?'mr-auto':'ml-auto'} src={evenement.vinyl}/>
                    <div className='mt-4 font-erode font-light text-3xl italic'>{evenement.date}</div>
                    <div className='font-plex text-3xl font-semibold leading-8'>{evenement.title}</div>
                    <div className='font-erode text-2xl -mt-1 mb-2'>{evenement.lieu}</div>
                    <div className={index % 2 === 0 ?'text-justify font-plex text-xl':'text-right-justify font-plex text-xl'}>{evenement.description}</div>
                </div>
            ))}
        </div>
    </Layout>
  );
};

export default Parcours;
