// pages/_app.js
import '@/app/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { VT323 } from "next/font/google";
import { Schoolbell } from 'next/font/google';
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
})

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={vt323.variable+' '+schoolbell.variable}>
    <Head>
      <title>L'ELUVIAL</title>
      <meta name="description" content="Portfolio - Louis Latu-Villières"/>
    </Head>
    <Component {...pageProps} />
  </div>;
}

export default MyApp;