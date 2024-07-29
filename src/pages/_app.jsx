if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

import React, {useEffect} from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/index.scss";
import SEO from '@components/seo';
import { Parallax } from 'react-parallax';
import { StoreProvider } from 'src/stores/storeContext';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from '@next/third-parties/google'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const handleRouteChange = (url) => {
    window.gtag('config', 'AW-16591998534', {
      page_path: url,
    });
  };

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        }
      />
      <Script src="//cdn.conveythis.com/javascript/conveythis-initializer.js"
        strategy="lazyOnload" // Other options: "beforeInteractive", "afterInteractive", "lazyOnload"
        onLoad={() =>
          ConveyThis_Initializer.init({
            api_key: process.env.NEXT_PUBLIC_CONVEY_THIS
          })
        }
      />
      <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
        }}
      />
      <Analytics />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG} />
      <StoreProvider>
        <ChakraProvider toastOptions={{ defaultOptions: { position: 'top' } }}>
          <Parallax>
            <Component {...pageProps} />
          </Parallax>
        </ChakraProvider>
      </StoreProvider>
    </>
  );
}

export default MyApp;

