import Head from "next/head";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://cartoongifts.eu";
const LOGO_URL = `${BASE_URL}/assets/images/logo/logo-title.png`;
const EMAIL = "cartoongifts.eu@gmail.com";

// ─── Shared building blocks ────────────────────────────────────────────────

const organizationRef = {
    "@type": "Organization",
    "name": "Cartoon Gifts",
    "url": BASE_URL,
    "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL,
        "width": "400",
        "height": "400"
    },
    "email": EMAIL,
    "sameAs": [
        "https://www.facebook.com/cartoongiftsbulgaria1/",
        "https://www.instagram.com/cartoongiftsbulgaria/"
    ]
};

// ─── Schema builders ───────────────────────────────────────────────────────

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    ...organizationRef,
    "image": LOGO_URL,
    "description": "Professional personalised cartoon portrait service. We create unique, handmade cartoon illustrations for any occasion.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aleksandrovska 111",
        "addressLocality": "Burgas",
        "addressCountry": "BG"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "email": EMAIL,
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Bulgarian"]
    }
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cartoon Gifts",
    "url": BASE_URL,
    "logo": LOGO_URL,
    "image": LOGO_URL,
    "email": EMAIL,
    "description": "Handmade personalised cartoon portrait service based in Bulgaria. Custom cartoon illustrations for birthdays, weddings, anniversaries and any occasion — shipped worldwide.",
    "priceRange": "€€",
    "currenciesAccepted": "EUR, BGN",
    "paymentAccepted": "Credit Card, Cash on Delivery",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aleksandrovska 111",
        "addressLocality": "Burgas",
        "addressRegion": "Burgas",
        "addressCountry": "BG"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.5048",
        "longitude": "27.4626"
    },
    "sameAs": [
        "https://www.facebook.com/cartoongiftsbulgaria1/",
        "https://www.instagram.com/cartoongiftsbulgaria/"
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "reviewCount": "150"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cartoon Portrait Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Cartoon Portrait",
                    "description": "High-resolution digital cartoon portrait delivered by email"
                },
                "price": "30.00",
                "priceCurrency": "EUR"
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Printed Cartoon Portrait",
                    "description": "Physical printed cartoon portrait with optional canvas, shipped worldwide"
                },
                "price": "37.00",
                "priceCurrency": "EUR"
            }
        ]
    }
};

const productSchema = (data = {}) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.name || "Custom Cartoon Portrait",
    "description": data.description || "100% handmade personalised cartoon portrait. Upload your photo and we'll create a unique cartoon illustration tailored to you.",
    "image": LOGO_URL,
    "brand": { "@type": "Brand", "name": "Cartoon Gifts" },
    "sku": "CARTOON-PORTRAIT-001",
    "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "30.00",
        "highPrice": "122.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": `${BASE_URL}/order`,
        "seller": { "@type": "Organization", "name": "Cartoon Gifts" }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "reviewCount": "150"
    }
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Cartoon Portrait Creation",
    "name": "Custom Cartoon Portrait",
    "description": "Personalised, handmade cartoon portrait illustrations created from your photos. Available as digital download or printed and shipped worldwide.",
    "provider": { "@type": "Organization", "name": "Cartoon Gifts", "url": BASE_URL },
    "areaServed": [
        { "@type": "Country", "name": "Bulgaria" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Romania" },
        { "@type": "Country", "name": "Serbia" },
        { "@type": "Country", "name": "Germany" }
    ],
    "offers": {
        "@type": "Offer",
        "price": "30.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cartoon Portrait Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Digital Cartoon Portrait" }
            },
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Printed Cartoon Portrait with Canvas Option" }
            }
        ]
    }
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cartoon Gifts",
    "url": BASE_URL,
    "inLanguage": ["en", "bg"],
    "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How long does it take to receive my cartoon portrait?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Digital portraits are typically completed within 3-5 business days. Physical prints with delivery take 7-14 business days depending on your location."
            }
        },
        {
            "@type": "Question",
            "name": "What photo should I send for the best result?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Send a clear, well-lit front-facing photo where the face is clearly visible. Higher resolution photos produce the best cartoon results. You can upload up to 5 reference images."
            }
        },
        {
            "@type": "Question",
            "name": "Can I order a cartoon portrait with a pet?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! You can include your pets in the cartoon portrait. Simply select the pet option during ordering and upload a photo of your pet alongside your own."
            }
        },
        {
            "@type": "Question",
            "name": "What sizes are available for printed portraits?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer A4, A3, A2 and A1 print sizes. All sizes are available on standard paper or premium canvas."
            }
        },
        {
            "@type": "Question",
            "name": "Do you ship internationally?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we ship physical prints worldwide. Digital portraits are delivered instantly by email, so there is no shipping cost or wait time."
            }
        },
        {
            "@type": "Question",
            "name": "What payment methods do you accept?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We accept online card payments via Stripe and cash on delivery for supported regions. All transactions are secure."
            }
        }
    ]
};

const webPageSchema = (data = {}) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.name || "Cartoon Gifts",
    "description": data.description || "Personalised cartoon portrait service",
    "url": data.url || BASE_URL,
    "inLanguage": data.lang || "en",
    "isPartOf": { "@type": "WebSite", "name": "Cartoon Gifts", "url": BASE_URL },
    "breadcrumb": data.breadcrumbs ? {
        "@type": "BreadcrumbList",
        "itemListElement": data.breadcrumbs.map((item, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": item.name,
            "item": `${BASE_URL}${item.url}`
        }))
    } : undefined
});

const breadcrumbSchema = (data = {}) => data.breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": `${BASE_URL}${item.url}`
    }))
} : null;

// ─── Component ─────────────────────────────────────────────────────────────

const SCHEMA_MAP = {
    organization:  () => organizationSchema,
    localBusiness: () => localBusinessSchema,
    product:       (d) => productSchema(d),
    service:       () => serviceSchema,
    website:       () => websiteSchema,
    faq:           () => faqSchema,
    webpage:       (d) => webPageSchema(d),
    breadcrumb:    (d) => breadcrumbSchema(d),
};

const StructuredData = ({ type = "organization", data = {} }) => {
    const types = Array.isArray(type) ? type : [type];

    const schemas = types
        .map((t) => {
            const builder = SCHEMA_MAP[t];
            return builder ? builder(data) : null;
        })
        .filter(Boolean);

    if (!schemas.length) return null;

    return (
        <Head>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </Head>
    );
};

export default StructuredData;
