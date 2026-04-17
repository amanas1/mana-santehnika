import fs from 'fs';
import path from 'path';

const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));

const DIST_DIR = path.resolve('./dist');
const BASE_URL = 'https://mana.kz';

// Ensure dist exists (incase run standalone)
if (!fs.existsSync(DIST_DIR)) {
  console.log("dist directory doesn't exist. Please run npm run build first.");
  process.exit(1);
}

// Read the base index.html built by Vite
const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

let generatedCount = 0;

// Skip district generation since districts array was removed.
// We now only generate service landing pages.

// Skip district landing pages.

// Generate Service Landing Pages: /:serviceId-almaty
seoData.services.forEach(service => {
  const title = `${service.title} Алматы | Цены от ${service.price} | Выезд за 20 мин`;
  const description = `${service.title} в Алматы круглосуточно. Качественный ремонт и установка. Гарантия 12 месяцев. Профессиональные мастера. ☎ +7 (705) 553-53-32, +7 (707) 479-10-20`;
  const url = `${BASE_URL}/${service.id}-almaty`;

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${url}" />`);

  const routeDir = path.join(DIST_DIR, `${service.id}-almaty`);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});


// Generate 404.html for Google Search Console
fs.writeFileSync(path.join(DIST_DIR, '404.html'), template);

console.log(`✅ Static pre-rendering complete. Generated ${generatedCount} HTML pages for SEO and 404.html.`);
