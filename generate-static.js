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

seoData.services.forEach(service => {
  seoData.districts.forEach(district => {
    // Generate Metadata
    const serviceTitle = service.seoTitle || service.title;
    const title = `${serviceTitle} в ${district.name} районе | Мастер Алматы 24/7`;
    const description = `Срочный ${service.title.toLowerCase()} в ${district.name} районе Алматы. Выезд за 30 мин! Гарантия на работы до 1 года. Звоните ☎ +7 (705) 553-53-32, +7 (707) 479-10-20`;
    const keywords = `${service.title.toLowerCase()}, ${service.title.toLowerCase()} алматы, ${service.title.toLowerCase()} ${district.name} район, вызов сантехника, ремонт сантехники, услуги сантехника`;
    const url = `${BASE_URL}/uslugi/${service.id}/${district.id}`;

    // Generate Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Мастер Манас — Сантехник Алматы",
        "telephone": "+7-705-553-53-32, +7-707-479-10-20"
      },
      "areaServed": {
        "@type": "City",
        "name": "Алматы",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": `${district.name} район`
        }
      },
      "description": description,
      "url": url
    };
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(structuredData, null, 2)}\n</script>`;

    // Replace tags in template
    let html = template
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${description}" />`)
      .replace(/<meta name="keywords" content=".*?"\s*\/>/, `<meta name="keywords" content="${keywords}" />`)
      .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${url}" />`)
      .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${title}" />`)
      .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${description}" />`)
      .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${url}" />`)
      .replace(/<meta name="twitter:title" content=".*?"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
      .replace(/<meta name="twitter:description" content=".*?"\s*\/>/, `<meta name="twitter:description" content="${description}" />`);

    // Inject structured data right before closing head
    html = html.replace('</head>', `  ${schemaScript}\n  </head>`);

    // Define output path
    const routeDir = path.join(DIST_DIR, 'uslugi', service.id, district.id);
    ensureDir(routeDir);
    
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    generatedCount++;
    
    // Also generate specific sub-routes for generic ones if necessary, but this covers what's needed.
  });
});

// Generate District Landing Pages: /santehnik-:districtId-rayon
seoData.districts.forEach(district => {
  const service = seoData.services.find(s => s.id === 'vyzov-santehnika'); // Use generic service
  const title = `Сантехник ${district.name} Алматы | Вызов мастера 24/7`;
  const description = `Профессиональный сантехник в ${district.nameGenitive} Алматы. Срочный выезд за 30 минут, стаж 15 лет. Цены от 3500 тг. Звоните прямо сейчас!`;
  const url = `${BASE_URL}/santehnik-${district.id}-rayon`;
  
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${url}" />`);

  const routeDir = path.join(DIST_DIR, `santehnik-${district.id}-rayon`);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

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
