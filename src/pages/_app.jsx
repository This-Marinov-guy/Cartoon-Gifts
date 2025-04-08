if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/index.scss";
import SEO from "@components/seo";
import { Parallax } from "react-parallax";
import { StoreProvider } from "src/stores/storeContext";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { clarityTrack, fetchLanguage } from "@utils/helpers";

function MyApp({ Component, pageProps }) {
  const handleRouteChange = (url) => {
    window.gtag("config", "AW-16591998534", {
      page_path: url,
    });
  };

  const router = useRouter();

  useEffect(() => {
    fetchLanguage();
    clarityTrack();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        }
      />
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16591998534"
      />
      <Script
        id="gads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16591998534');
          `,
        }}
      />
      <Analytics />
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WF658G0678"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WF658G0678');
          `,
        }}
      />
      <StoreProvider>
        <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
          <Parallax>
            <Component {...pageProps} />
          </Parallax>
        </ChakraProvider>
      </StoreProvider>
    </>
  );
}

export default MyApp;
