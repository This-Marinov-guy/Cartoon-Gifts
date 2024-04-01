if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}
import { store } from '../redux/store';
import { Provider } from "react-redux";
import "../styles/index.scss";
import SEO from '@components/seo';
import { Parallax } from 'react-parallax';


function MyApp({ Component, pageProps }) {

    return (
      <>
        <SEO
          font={
            "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          }
        />
        <Provider store={store}>
          <Parallax>
            <Component {...pageProps} />
          </Parallax>
        </Provider>
      </>
    );
}

export default MyApp;

