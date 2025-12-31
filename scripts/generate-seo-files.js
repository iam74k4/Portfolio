const fs = require('fs');
const path = require('path');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
// Remove basePath from siteUrl if it's already included
let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iam74k4.github.io/Portfolio';
if (basePath && siteUrl.endsWith(basePath)) {
  siteUrl = siteUrl.slice(0, -basePath.length);
}

// Generate robots.txt
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
const robotsContent = `# robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}${basePath}/sitemap.xml
`;

fs.writeFileSync(robotsPath, robotsContent);
console.log('✅ Generated robots.txt');

// Generate sitemap.xml
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const currentDate = new Date().toISOString().split('T')[0];
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}${basePath}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemapContent);
console.log('✅ Generated sitemap.xml');

