import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {(pageTitle && `${pageTitle} | `) + 'Cartoon Gifts'}
      </title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Welcome to Cartoon Gifts - we create personalized and unique cartoons on demand for any occasion. Our product is 100% handmade and is customized by your preferences."
      />
      {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}
      <meta name="theme-color" content="#000000" />
      {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;