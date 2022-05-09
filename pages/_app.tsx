import "../styles/style.css";
import "../styles/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Snack</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
      </Head>
      {/* Jquery */}
      <Script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        crossOrigin="anonymous"
      />
      {/* Bootstrap */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
