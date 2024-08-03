import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

const SEO = ({ pageTitle, font }) => {
    const {t} = useTranslation("components");
    
    return (
        <>
            <Head>
            <title>
                {(pageTitle && `${pageTitle} | `) + t('seo.cartoonGifts')}
            </title>
            <meta charSet="utf-8" />
            <meta
                name={t('seo.metaTagName')}
                content={t('seo.metaTagContent')}
            />
            {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}
            <meta name="theme-color" content="#000000" />
            {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            {font && <link href={font} rel="stylesheet" />}
            <link rel="icon" href="/favicon.ico" />
            <link rel="robots" href="/robots.txt" />
            </Head>
        </>
  );
};

export default SEO;