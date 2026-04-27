import fs from 'fs';
const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));

const BASE_URL = 'https://mana.kz';
const currentDate = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Homepage
  xml += `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // Static pages (без trailing slash)
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

  // Service landing pages
  seoData.services.forEach(service => {
    xml += `  <url>
    <loc>${BASE_URL}/${service.id}-almaty</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  });

  // Blog pages
  const blogPages = [
    '/blog/article',
    '/blog/clog-removal',
    '/blog/faucet-repair',
    '/blog/leak-repair',
    '/blog/leak-prevention',
    '/blog/heating-maintenance',
    '/blog/heating-repair',
    '/blog/appliance-installation',
    '/blog/appliances-install',
    '/blog/water-saving',
    '/blog/noisy-pipes'
  ];

  blogPages.forEach(page => {
    xml += `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  fs.writeFileSync('./public/sitemap.xml', xml);
  if (fs.existsSync('./dist')) {
    fs.writeFileSync('./dist/sitemap.xml', xml);
  }
  const total = 1 + staticPages.length + seoData.services.length + blogPages.length;
  console.log(`✅ Sitemap: ${total} URLs (1 главная + ${staticPages.length} статич. + ${seoData.services.length} услуги + ${blogPages.length} блог)`);
};

generateSitemap();
