# SEO Quick Start Guide

## Using SEO Components

### 1. Basic Page SEO

```jsx
import SEO from "@components/seo";

export default function MyPage() {
  return (
    <>
      <SEO 
        pageTitle="My Page Title"
        description="A brief description of your page (150-160 characters)"
        keywords="keyword1, keyword2, keyword3"
      />
      {/* Your page content */}
    </>
  );
}
```

### 2. Product/Service Pages

```jsx
import SEO from "@components/seo";
import StructuredData from "@components/structured-data";

export default function ProductPage() {
  return (
    <>
      <SEO 
        pageTitle="Custom Cartoon Portrait"
        description="Get a unique, handmade cartoon portrait"
        keywords="cartoon portrait, custom art, personalized gift"
        ogType="product"
        ogImage="/assets/images/products/cartoon-portrait.jpg"
      />
      <StructuredData 
        type="product" 
        data={{
          name: "Custom Cartoon Portrait",
          description: "Personalized cartoon portrait",
          price: "30.00"
        }}
      />
      {/* Your page content */}
    </>
  );
}
```

### 3. Blog/Article Pages

```jsx
import SEO from "@components/seo";

export default function BlogPost() {
  return (
    <>
      <SEO 
        pageTitle="How to Create Perfect Cartoon Gifts"
        description="Learn the secrets to creating memorable cartoon gifts"
        keywords="cartoon gifts, art tips, personalization"
        ogType="article"
        ogImage="/assets/images/blog/article-image.jpg"
        twitterCard="summary_large_image"
      />
      {/* Your article content */}
    </>
  );
}
```

### 4. Multiple Structured Data Types

```jsx
import SEO from "@components/seo";
import StructuredData from "@components/structured-data";

export default function HomePage() {
  return (
    <>
      <SEO 
        pageTitle="Welcome"
        description="Create unique cartoon portraits"
      />
      {/* Multiple schemas at once */}
      <StructuredData type={["organization", "website", "service"]} />
      {/* Your page content */}
    </>
  );
}
```

### 5. With Breadcrumbs

```jsx
import SEO from "@components/seo";
import StructuredData from "@components/structured-data";

export default function ServiceDetailPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Custom Portraits", url: "/services/portraits" }
  ];
  
  return (
    <>
      <SEO pageTitle="Custom Portraits Service" />
      <StructuredData 
        type="breadcrumb" 
        data={{ breadcrumbs }}
      />
      {/* Your page content */}
    </>
  );
}
```

## SEO Component Props

### SEO Component
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pageTitle` | string | - | Page title (will be appended with site name) |
| `description` | string | default | Meta description for the page |
| `keywords` | string | default | Comma-separated keywords |
| `ogImage` | string | logo | Open Graph image URL |
| `ogType` | string | "website" | Open Graph type (website, product, article) |
| `twitterCard` | string | "summary_large_image" | Twitter card type |
| `noindex` | boolean | false | Prevent page indexing |
| `nofollow` | boolean | false | Prevent link following |
| `canonicalUrl` | string | current URL | Canonical URL for the page |

### StructuredData Component
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string/array | "organization" | Schema type(s) to include |
| `data` | object | {} | Additional data for the schema |

### Available Schema Types
- `organization` - Company information
- `website` - Website-level data
- `product` - Product details
- `service` - Service offerings
- `breadcrumb` - Navigation structure

## Adding Translations

### English (locales/en/pages.json)
```json
{
  "my-page-title": "My Page",
  "my-page-description": "Description of my page for SEO"
}
```

### Bulgarian (locales/bg/pages.json)
```json
{
  "my-page-title": "Моята страница",
  "my-page-description": "Описание на моята страница за SEO"
}
```

### Using Translations
```jsx
import useTranslation from "next-translate/useTranslation";

export default function MyPage() {
  const { t } = useTranslation('pages');
  
  return (
    <SEO 
      pageTitle={t('my-page-title')}
      description={t('my-page-description')}
    />
  );
}
```

## Testing Your SEO

### Tools to Use
1. **Google Search Console** - Monitor search performance
2. **Google PageSpeed Insights** - Check performance
3. **Rich Results Test** - Validate structured data
4. **Open Graph Debugger** - Test social media previews
5. **Twitter Card Validator** - Test Twitter cards

### Quick Tests
```bash
# Check if sitemap is accessible
curl https://cartoongifts.eu/api/sitemap.xml

# Check robots.txt
curl https://cartoongifts.eu/robots.txt

# View structured data
# Use browser dev tools: View Page Source → Search for "application/ld+json"
```

## Common Patterns

### Landing Page
```jsx
<SEO 
  pageTitle="Professional Custom Cartoon Portraits"
  description="Transform your photos into stunning cartoon portraits. 100% handmade, fast delivery, satisfaction guaranteed."
  keywords="custom cartoons, portrait art, personalized gifts"
  ogType="website"
/>
<StructuredData type={["organization", "website", "service"]} />
```

### Contact Page
```jsx
<SEO 
  pageTitle="Contact Us"
  description="Get in touch with our team. We're here to help with your custom cartoon portrait needs."
  keywords="contact, support, customer service"
/>
<StructuredData type="organization" />
```

### Order/Product Page
```jsx
<SEO 
  pageTitle="Order Your Custom Cartoon"
  description="Easy online ordering for personalized cartoon portraits. Choose your style, size, and delivery method."
  keywords="order cartoon, buy custom art, personalized portrait"
  ogType="product"
/>
<StructuredData 
  type="product" 
  data={{
    name: "Custom Cartoon Portrait",
    price: "30.00"
  }}
/>
```

## Tips

1. **Keep titles under 60 characters** - They get truncated in search results
2. **Keep descriptions 150-160 characters** - Optimal length for search snippets
3. **Use unique content per page** - Avoid duplicate descriptions
4. **Include target keywords naturally** - Don't stuff keywords
5. **Update regularly** - Keep content fresh and relevant
6. **Test on mobile** - Most traffic comes from mobile devices
7. **Monitor Core Web Vitals** - Performance affects SEO

## Need Help?

- Check the full [SEO-GUIDE.md](./SEO-GUIDE.md) for detailed information
- Review existing pages for examples
- Test changes in development before deploying

---
Happy optimizing! 🚀

