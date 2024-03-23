import '/src/app/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { VT323 } from "next/font/google";
import { Schoolbell } from 'next/font/google';
import { IBM_Plex_Sans } from 'next/font/google';
import { Londrina_Sketch } from 'next/font/google';
import localFont from 'next/font/local';
import SmoothScrolling from "@/app/components/SmoothScrolling";
import Layout from '@/app/components/Layout';
import { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AnimatedSVG from '@/app/components/AnimatedSVG';
import { AnimatePresence, motion } from 'framer-motion';
import InnerLayoutAnimate from '@/app/components/InnerLayoutAnimate';

const erode = localFont({
  src: [
    {
      path: 'fonts/Erode-Variable.woff2',
      style: 'normal'
    },
    {
      path: 'fonts/Erode-VariableItalic.woff2',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-erode'
})
export const vt323 = VT323({
  weight: "400",
  style: "normal",
  variable: '--font-vt323',
  subsets: ['latin']
}
);
export const schoolbell = Schoolbell({
  weight: "400",
  variable: "--font-schoolbell",
  subsets:['latin']
});
export const ibmplexsans = IBM_Plex_Sans({
  weight:['100', '200', '300', '400', '500', '600', '700'],
  variable: "--font-plex",
  subsets:['latin']
})
export const londrina = Londrina_Sketch({
  weight:['400'],
  variable: "--font-londrina",
  subsets:['latin']
})

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [pageChanged, setPageChanged] = useState(false);

  const [animateToExit, setAnimateToExit] = useState(false);
  const [animateToEnter, setAnimateToEnter] = useState(false);

  return <div className={vt323.variable+' '+schoolbell.variable+' '+ibmplexsans.variable+' '+ erode.variable + ' ' + londrina.variable}>
    <Head>
      <title>L&apos;ELUVIAL</title>
      <meta name="description" content="Portfolio - Louis Latu-Villières"/>
    </Head>
    <SmoothScrolling>
      <AnimatedSVG 
        animateToEnter={animateToEnter} 
        animateToExit={animateToExit} 
        setAnimateToEnter={setAnimateToEnter} 
        setAnimateToExit={setAnimateToExit} 
      />
      <Layout>
        <AnimatePresence 
          mode="wait" 
          initial={true} 
          onExitComplete={() => {
            setAnimateToEnter(true);
          }}
        >
          <InnerLayoutAnimate
            setAnimateToExit={setAnimateToExit}
            key={router.asPath}
          >
            <Component {...pageProps}  />
          </InnerLayoutAnimate>
        </AnimatePresence>
      </Layout>
    </SmoothScrolling>
  </div>;
}

export default MyApp;
