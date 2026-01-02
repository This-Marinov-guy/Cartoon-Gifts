import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const SEO = ({ 
    pageTitle, 
    description, 
    keywords,
    ogImage,
    ogType = "website",
    twitterCard = "summary_large_image",
    noindex = false,
    nofollow = false,
    canonicalUrl,
    font 
}) => {
    const { t, lang } = useTranslation("components");
    const router = useRouter();
    
    // Base URL for your site
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cartoongifts.eu";
    
    // Build full title
    const fullTitle = pageTitle ? `${pageTitle} | ${t('seo.siteName')}` : t('seo.siteName');
    
    // Use provided description or fall back to default
    const metaDescription = description || t('seo.defaultDescription');
    
    // Use provided keywords or fall back to default
    const metaKeywords = keywords || t('seo.defaultKeywords');
    
    // Build canonical URL
    const canonical = canonicalUrl || `${baseUrl}${router.asPath}`;
    
    // Build OG image URL
    const ogImageUrl = ogImage || `${baseUrl}/assets/images/logo/logo-title.png`;
    
    // Build alternate language URLs
    const alternateUrls = {
        en: `${baseUrl}/en${router.asPath}`,
        bg: `${baseUrl}/bg${router.asPath}`
    };
    
    return (
        <>
            <Head>
                {/* Basic Meta Tags */}
                <title>{fullTitle}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
                <meta name="author" content="Cartoon Gifts" />
                
                {/* Robots Meta */}
                {(noindex || nofollow) && (
                    <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
                )}
                
                {/* Canonical URL */}
                <link rel="canonical" href={canonical} />
                
                {/* Language Alternates */}
                <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
                <link rel="alternate" hrefLang="bg" href={alternateUrls.bg} />
                <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />
                
                {/* Open Graph Tags */}
                <meta property="og:type" content={ogType} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:image:alt" content={fullTitle} />
                <meta property="og:site_name" content="Cartoon Gifts" />
                <meta property="og:locale" content={lang === 'bg' ? 'bg_BG' : 'en_US'} />
                <meta property="og:locale:alternate" content={lang === 'bg' ? 'en_US' : 'bg_BG'} />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content={twitterCard} />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={ogImageUrl} />
                <meta name="twitter:image:alt" content={fullTitle} />
                
                {/* Additional Meta Tags */}
                <meta name="theme-color" content="#48c5cb" />
                <meta name="msapplication-TileColor" content="#48c5cb" />
                
                {/* Icons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                
                {/* Fonts */}
                {font && <link href={font} rel="stylesheet" />}
            </Head>
        </>
    );
};

export default SEO;