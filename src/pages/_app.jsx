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
      {/* <Script
        src="https://cdn.weglot.com/weglot.min.js"
        strategy="lazyOnload" // Other options: "beforeInteractive", "afterInteractive", "lazyOnload"
        onLoad={() => Weglot.initialize({
          api_key: 'wg_de22bcb9e9ad87316072cfbeec7c3f062',
          hide_switcher: true,
          // switchers: [
          //   {
          //     style: {
          //       full_name: false,
          //       with_name: true,
          //       is_dropdown: true,
          //       with_flags: true,
          //       flag_type: "circle",
          //       invert_flags: false
          //     },
          //     // Move switcher somewhere in the page
          //     location: {
          //       target: ".translate-switcher",
          //       sibling: null
          //     }
          //   }
          // ],
          cache: true,
          auto_switch: true,
          auto_switch_fallback: "en",
          wait_transition: true,
        })}
      /> */}
      <Script src="//cdn.conveythis.com/javascript/conveythis-initializer.js"
        strategy="lazyOnload" // Other options: "beforeInteractive", "afterInteractive", "lazyOnload"
        onLoad={() => document.addEventListener("DOMContentLoaded", function (e) {
          ConveyThis_Initializer.init({
            api_key: "pub_af1f4825a77a06596ebd36af4110510f"
          });
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

