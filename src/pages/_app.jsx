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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        }
      />
      <Script
        src="https://cdn.weglot.com/weglot.min.js"
        strategy="lazyOnload" // Other options: "beforeInteractive", "afterInteractive", "lazyOnload"
        onLoad={() => Weglot.initialize({
          api_key: 'wg_de22bcb9e9ad87316072cfbeec7c3f062',
          hide_switcher: true,
          cache: true,
          auto_switch: true,
          auto_switch_fallback: "en",
          wait_transition: true,
        })}
      />
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

