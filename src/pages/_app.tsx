import "/src/app/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { VT323, Schoolbell, IBM_Plex_Sans, Londrina_Sketch, Pangolin } from "next/font/google";
import localFont from "next/font/local";
import SmoothScrolling from "@/app/components/SmoothScrolling";
import Layout from "@/app/components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import InnerLayoutAnimate from "@/app/components/InnerLayoutAnimate";
import { PageTransitionProvider } from "@/app/components/PageTransitionContext";

// Configuration des fonts
const erode = localFont({
  src: [
    {
      path: "fonts/Erode-Variable.woff2",
      style: "normal",
    },
    {
      path: "fonts/Erode-VariableItalic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-erode",
});

export const vt323 = VT323({
  weight: "400",
  style: "normal",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const schoolbell = Schoolbell({
  weight: "400",
  variable: "--font-schoolbell",
  subsets: ["latin"],
});

export const ibmplexsans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-plex",
  subsets: ["latin"],
});

export const londrina = Londrina_Sketch({
  weight: ["400"],
  variable: "--font-londrina",
  subsets: ["latin"],
});

export const pangolin = Pangolin({
  weight: ["400"],
  variable: "--font-pangolin",
  subsets: ["latin"],
});

// Composant wrapper pour gérer les transitions
const AppContent = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <InnerLayoutAnimate key={router.asPath}>
          <Component {...pageProps} />
        </InnerLayoutAnimate>
      </AnimatePresence>
    </Layout>
  );
};

function MyApp(props: AppProps) {
  const fontClasses = [
    vt323.variable,
    schoolbell.variable,
    ibmplexsans.variable,
    erode.variable,
    londrina.variable,
    pangolin.variable,
  ].join(" ");

  return (
    <div className={fontClasses}>
      <Head>
        <title>L&apos;ELUVIAL</title>
        <meta name="description" content="Portfolio - Louis Latu-Villières" />
      </Head>
      <PageTransitionProvider>
        <SmoothScrolling>
          <AppContent {...props} />
        </SmoothScrolling>
      </PageTransitionProvider>
    </div>
  );
}

export default MyApp;