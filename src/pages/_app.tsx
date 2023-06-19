import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";

import { Inter } from "next/font/google";
import Head from "next/head";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps,
}: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Ratchitta | MKMKsGit</title>
        <meta
          name="description"
          content="This is ratchitta's portfolio website."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
