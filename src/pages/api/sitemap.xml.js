export default function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cartoongifts.eu";
  
  // Define your static pages
  const staticPages = [
    '',
    '/order',
    '/contact',
    '/comming-soon',
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticPages.map((page) => {
    return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${page}"/>
    <xhtml:link rel="alternate" hreflang="bg" href="${baseUrl}/bg${page}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en${page}"/>
  </url>`;
  }).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
}

