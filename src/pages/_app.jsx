if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/index.scss";
import SEO from '@components/seo';
import { Parallax } from 'react-parallax';
import { StoreProvider } from 'src/stores/storeContext';
import { changeLanguage } from '@utils/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        }
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

