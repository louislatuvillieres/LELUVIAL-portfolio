import '/src/app/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { VT323 } from "next/font/google";
import { Schoolbell } from 'next/font/google';
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';

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

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={vt323.variable+' '+schoolbell.variable+' '+ibmplexsans.variable+' '+ erode.variable}>
    <Head>
      <title>L'ELUVIAL</title>
      <meta name="description" content="Portfolio - Louis Latu-Villières"/>
    </Head>
    <Component {...pageProps} />
  </div>;
}

export default MyApp;