import fs from 'fs';
const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));


const BASE_URL = 'https://mana.kz';
const currentDate = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add Homepage
  xml += `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // Add static pages
  const staticPages = [
    '/services',
    '/prices',
    '/about',
    '/contacts',
    '/blog',
    '/portfolio',
    '/reviews'
  ];

  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Skip district-specific URLs

  // Skip district landing pages

  // Add Service landing pages
  seoData.services.forEach(service => {
    xml += `  <url>
    <loc>${BASE_URL}/${service.id}-almaty</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  fs.writeFileSync('./public/sitemap.xml', xml);
  if (fs.existsSync('./dist')) {
    fs.writeFileSync('./dist/sitemap.xml', xml);
  }
  console.log('✅ Sitemap generated successfully with', seoData.services.length + staticPages.length + 1, 'URLs');
};

generateSitemap();
