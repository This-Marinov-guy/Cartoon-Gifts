import Head from "next/head";

const StructuredData = ({ type = "organization", data = {} }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cartoongifts.eu";
    
    // Default organization schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cartoon Gifts",
        "url": baseUrl,
        "logo": `${baseUrl}/assets/images/logo/logo-title.png`,
        "description": "Professional personalized cartoon portrait service. We create unique, handmade cartoon illustrations for any occasion.",
        "email": "cartoongifts.eu@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aleksandrovska 111",
            "addressLocality": "Burgas",
            "addressCountry": "BG"
        },
        "sameAs": [
            "https://www.facebook.com/cartoongiftsbulgaria1/",
            "https://www.instagram.com/cartoongiftsbulgaria/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "cartoongifts.eu@gmail.com",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Bulgarian"]
        }
    };
    
    // Product schema for order/product pages
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": data.name || "Custom Cartoon Portrait",
        "description": data.description || "Personalized cartoon portrait, 100% handmade and customized to your preferences",
        "brand": {
            "@type": "Brand",
            "name": "Cartoon Gifts"
        },
        "offers": {
            "@type": "Offer",
            "price": data.price || "30.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": baseUrl
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        }
    };
    
    // Service schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom Cartoon Portrait Creation",
        "provider": {
            "@type": "Organization",
            "name": "Cartoon Gifts",
            "url": baseUrl
        },
        "areaServed": {
            "@type": "Country",
            "name": ["Bulgaria", "United Kingdom", "Romania", "Serbia"]
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cartoon Portrait Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Cartoon Portrait"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Physical Cartoon Portrait with Canvas"
                    }
                }
            ]
        }
    };
    
    // Breadcrumb schema
    const breadcrumbSchema = data.breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${baseUrl}${item.url}`
        }))
    } : null;
    
    // Website schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Cartoon Gifts",
        "url": baseUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };
    
    // Select the appropriate schema
    let schema;
    switch (type) {
        case "product":
            schema = productSchema;
            break;
        case "service":
            schema = serviceSchema;
            break;
        case "breadcrumb":
            schema = breadcrumbSchema;
            break;
        case "website":
            schema = websiteSchema;
            break;
        case "organization":
        default:
            schema = organizationSchema;
            break;
    }
    
    // If multiple schemas requested
    if (Array.isArray(type)) {
        const schemas = type.map(t => {
            switch (t) {
                case "product":
                    return productSchema;
                case "service":
                    return serviceSchema;
                case "breadcrumb":
                    return breadcrumbSchema;
                case "website":
                    return websiteSchema;
                case "organization":
                default:
                    return organizationSchema;
            }
        }).filter(Boolean);
        
        return (
            <Head>
                {schemas.map((s, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
                    />
                ))}
            </Head>
        );
    }
    
    if (!schema) return null;
    
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </Head>
    );
};

export default StructuredData;

