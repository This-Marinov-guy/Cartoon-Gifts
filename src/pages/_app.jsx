if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/index.scss";
import SEO from '@components/seo';
import { Parallax } from 'react-parallax';
import { StoreProvider } from 'src/stores/storeContext';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <Analytics>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        }
      />
      <Script src="//cdn.conveythis.com/javascript/conveythis-initializer.js"
        strategy="lazyOnload" // Other options: "beforeInteractive", "afterInteractive", "lazyOnload"
        onLoad={() =>
          ConveyThis_Initializer.init({
            api_key: 'pub_af1f4825a77a06596ebd36af4110510f'
          })
        }
      />
      <StoreProvider>
        <ChakraProvider toastOptions={{ defaultOptions: { position: 'top' } }}>
          <Parallax>
            <Component {...pageProps} />
          </Parallax>
        </ChakraProvider>
      </StoreProvider>
    </Analytics>
  );
}

export default MyApp;

