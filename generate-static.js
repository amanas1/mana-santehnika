import fs from 'fs';
import path from 'path';

const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));

const DIST_DIR = path.resolve('./dist');
const BASE_URL = 'https://mana.kz';
const PHONE = '+77055535332';
const DISPLAY_PHONE = '+7 (705) 553-53-32';

if (!fs.existsSync(DIST_DIR)) {
  console.log("dist directory doesn't exist. Please run npm run build first.");
  process.exit(1);
}

const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const stripHtml = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const injectSchema = (html, schema) => {
  if (!schema) return html;
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  return html.replace('</head>', `    <script type="application/ld+json">${json}</script>\n  </head>`);
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PlumbingBusiness'],
  name: 'Мастер Манас — сантехник в Алматы',
  url: BASE_URL,
  telephone: PHONE,
  image: `${BASE_URL}/images/services/manas-real.jpg`,
  logo: `${BASE_URL}/favicon.png`,
  priceRange: 'от 3500 ₸',
  currenciesAccepted: 'KZT',
  paymentAccepted: 'Наличные, Kaspi',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'мкр. Аксай 4-11',
    addressLocality: 'Алматы',
    addressCountry: 'KZ'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.2220,
    longitude: 76.8512
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '21:00'
  }],
  areaServed: [
    'Алматы', 'Ауэзовский район', 'Бостандыкский район', 'Алмалинский район',
    'Медеуский район', 'Жетысуский район', 'Алатауский район', 'Наурызбайский район', 'Турксибский район'
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит вызов сантехника в Алматы?',
      acceptedAnswer: { '@type': 'Answer', text: 'Стоимость зависит от задачи. Базовые работы начинаются от 3500 ₸, точная цена называется после диагностики до начала ремонта.' }
    },
    {
      '@type': 'Question',
      name: 'В каких районах Алматы работает мастер?',
      acceptedAnswer: { '@type': 'Answer', text: 'Мастер выезжает во все районы Алматы: Ауэзовский, Бостандыкский, Алмалинский, Медеуский, Жетысуский, Алатауский, Наурызбайский и Турксибский.' }
    },
    {
      '@type': 'Question',
      name: 'Есть ли гарантия на сантехнические работы?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, на выполненные работы предоставляется гарантия до 1 месяца. Если проблема возникнет по вине мастера, она устраняется по гарантии.' }
    }
  ]
};

const generatePage = (route, title, description, keywords, canonical, schema) => {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description.slice(0, 320));
  const safeCanonical = escapeHtml(canonical);
  const keywordsMeta = keywords ? `<meta name="keywords" content="${escapeHtml(keywords)}" />` : '';

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${safeDescription}" />`)
    .replace(/<meta name="robots" content=".*?"\s*\/>/, '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />')
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${safeCanonical}" />`);

  html = html
    .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${safeDescription}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${safeCanonical}" />`)
    .replace(/<meta name="twitter:title" content=".*?"\s*\/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta name="twitter:description" content=".*?"\s*\/>/, `<meta name="twitter:description" content="${safeDescription}" />`);

  if (keywordsMeta && !html.includes('name="keywords"')) {
    html = html.replace(/<meta name="robots"/, `${keywordsMeta}\n    <meta name="robots"`);
  }

  return injectSchema(html, schema);
};

const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@graph': [
    businessSchema,
    {
      '@type': 'Service',
      name: `${service.title} в Алматы`,
      description: stripHtml(service.longDescription || service.description).slice(0, 900),
      provider: { '@type': 'PlumbingBusiness', name: businessSchema.name, telephone: PHONE, url: BASE_URL },
      areaServed: { '@type': 'City', name: 'Алматы' },
      serviceType: service.title,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KZT',
        price: String(service.price || '').replace(/[^0-9]/g, '') || undefined,
        availability: 'https://schema.org/InStock',
        url: `${BASE_URL}/${service.id}-almaty`
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Сантехнические услуги в Алматы'
      }
    },
    faqSchema
  ]
});

let generatedCount = 0;

seoData.services.forEach(service => {
  const title = `${service.title} в Алматы — цена ${service.price} | Мастер Манас`;
  const description = `${service.title} в Алматы: аккуратный выезд мастера, диагностика, честная цена до начала работ, гарантия до 1 месяца. ${service.description} Звоните: ${DISPLAY_PHONE}`;
  const keywords = `${service.title.toLowerCase()} алматы, ${service.title.toLowerCase()}, сантехник алматы, вызвать сантехника, услуги сантехника, сантехнические работы`;
  const url = `${BASE_URL}/${service.id}-almaty`;
  const html = generatePage(`/${service.id}-almaty`, title, description, keywords, url, serviceSchema(service));
  const routeDir = path.join(DIST_DIR, `${service.id}-almaty`);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

const staticPages = [
  { route: 'services', title: 'Услуги сантехника в Алматы — цены и виды работ | Мастер Манас', description: 'Полный каталог сантехнических услуг в Алматы: вызов мастера, ремонт труб, установка смесителей, ремонт унитаза, прочистка кухни от засора, подключение техники. Работаем ежедневно с 9:00 до 21:00.', keywords: 'услуги сантехника алматы, сантехнические работы алматы, ремонт сантехники, вызвать сантехника алматы, сантехник алматы цены' },
  { route: 'prices', title: 'Цены на услуги сантехника в Алматы | Мастер Манас', description: 'Актуальные цены на сантехнические услуги в Алматы. Вызов от 3500 ₸, ремонт смесителя, устранение протечек, замена труб, монтаж сантехники. Цена согласуется до начала работ.', keywords: 'цены сантехника алматы, стоимость услуг сантехника, сколько стоит вызвать сантехника алматы, прейскурант сантехника' },
  { route: 'blog', title: 'Блог сантехника в Алматы — советы мастера | Мастер Манас', description: 'Полезные статьи о ремонте сантехники, засорах, протечках, смесителях, трубах и отоплении. Практические советы профессионального сантехника из Алматы.', keywords: 'блог сантехника алматы, советы сантехника, ремонт сантехники, как починить кран, устранение засора' },
  { route: 'portfolio', title: 'Портфолио сантехнических работ в Алматы | Мастер Манас', description: 'Примеры выполненных сантехнических работ в Алматы: разводка труб, монтаж сантехники, установка ванн, душевых систем, радиаторов и бытовой техники.', keywords: 'портфолио сантехника алматы, примеры работ сантехника, монтаж сантехники фото, ремонт сантехники алматы' },
  { route: 'reviews', title: 'Отзывы о сантехнике в Алматы | Мастер Манас', description: 'Отзывы клиентов о работе сантехника в Алматы. Аккуратный выезд, честные цены, гарантия на работы, помощь по всем районам города.', keywords: 'отзывы сантехника алматы, мастер сантехник алматы отзывы, надежный сантехник алматы' },
  { route: 'about', title: 'О мастере Манасе — сантехник в Алматы с опытом', description: 'Мастер Манас — сантехник в Алматы. Выполняю ремонт труб, смесителей, унитазов, протечек, монтаж сантехники и подключение техники с гарантией.', keywords: 'сантехник алматы, мастер сантехник алматы, профессиональный сантехник, опытный сантехник алматы' },
  { route: 'contacts', title: 'Контакты сантехника в Алматы — вызвать мастера | Мастер Манас', description: `Контакты сантехника в Алматы. Телефон: ${DISPLAY_PHONE}. WhatsApp, выезд по всем районам города, работа ежедневно с 9:00 до 21:00.`, keywords: 'контакты сантехника алматы, телефон сантехника алматы, вызвать сантехника алматы номер' }
];

staticPages.forEach(page => {
  const url = `${BASE_URL}/${page.route}`;
  const html = generatePage(`/${page.route}`, page.title, page.description, page.keywords, url, { '@context': 'https://schema.org', '@graph': [businessSchema, faqSchema] });
  const routeDir = path.join(DIST_DIR, page.route);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

const blogPages = [
  { route: 'blog/article', title: 'Как выбрать надёжный смеситель для ванной — советы сантехника', description: 'Разбор материалов, картриджей и производителей смесителей. Советы сантехника из Алматы: как выбрать смеситель, чтобы он служил долго.', keywords: 'выбрать смеситель для ванной, смеситель алматы, замена смесителя алматы, установка смесителя алматы' },
  { route: 'blog/clog-removal', title: 'Почему засоряется кухонная мойка — советы сантехника', description: 'Почему появляется засор на кухне, как жир забивает сифон и слив под раковиной, когда нужна профессиональная прочистка кухни в Алматы.', keywords: 'засор кухни алматы, прочистка кухни алматы, прочистка кухонной мойки, вода не уходит на кухне' },
  { route: 'blog/faucet-repair', title: 'Капает кран: причины и ремонт смесителя | Мастер Манас', description: 'Почему капает кран, когда нужно менять картридж или прокладки, и когда лучше вызвать сантехника для ремонта смесителя в Алматы.', keywords: 'ремонт крана алматы, капает кран, замена картриджа смесителя, починить кран алматы' },
  { route: 'blog/leak-repair', title: 'Протечка воды: что делать до приезда сантехника', description: 'Что делать при протечке воды: как перекрыть воду, защитить пол и мебель, когда срочно вызывать сантехника в Алматы.', keywords: 'устранение протечек алматы, прорвало трубу алматы, авария водопровод алматы, перекрыть воду алматы' },
  { route: 'blog/leak-prevention', title: 'Прорвало трубу: первая помощь при затоплении', description: 'Пошаговые действия при прорыве трубы в квартире. Как уменьшить ущерб и подготовиться к приезду сантехника.', keywords: 'прорвало трубу алматы, авария сантехника алматы, аварийный сантехник алматы, затопили соседи алматы' },
  { route: 'blog/heating-maintenance', title: 'Почему батареи холодные и когда менять радиаторы', description: 'Причины холодных батарей: воздух, засор, слабая циркуляция, неисправная арматура. Советы сантехника по отоплению в Алматы.', keywords: 'ремонт батарей алматы, холодные батареи, замена радиатора алматы, воздушная пробка батарея' },
  { route: 'blog/heating-repair', title: 'Подготовка отопления к зиме — советы сантехника', description: 'Как проверить радиаторы, краны Маевского и соединения перед отопительным сезоном. Когда требуется замена батарей.', keywords: 'подготовка отопления к зиме алматы, ремонт батарей алматы, замена батарей алматы, замена радиаторов алматы' },
  { route: 'blog/appliance-installation', title: 'Установка стиральной и посудомоечной машины — ошибки', description: 'Ошибки при подключении стиральной и посудомоечной машины: транспортировочные болты, слив, уровень, герметичность.', keywords: 'установка стиральной машины алматы, подключение посудомойки алматы, установка бытовой техники алматы' },
  { route: 'blog/appliances-install', title: 'Подключение стиральной и посудомоечной машины в Алматы', description: 'Профессиональное подключение бытовой техники к воде и канализации в Алматы: стиральные машины, посудомойки, фильтры.', keywords: 'установка стиральной машины алматы, подключение техники алматы, мастер подключить стиралку' },
  { route: 'blog/water-saving', title: 'Как экономить воду: аэраторы, лейки и бачки', description: 'Практические способы снизить расход воды дома: аэраторы, экономные душевые лейки, настройка бачка унитаза.', keywords: 'экономия воды алматы, установка аэратора алматы, снизить потребление воды, водосберегающая арматура' },
  { route: 'blog/noisy-pipes', title: 'Почему гудят и стучат трубы — причины и решения', description: 'Причины шума в трубах: давление, гидроудары, прокладки, крепления. Как сантехник диагностирует и устраняет шум.', keywords: 'гудят трубы алматы, шум в трубах алматы, гидроудар в трубах, стучат трубы отопление алматы' }
];

blogPages.forEach(page => {
  const url = `${BASE_URL}/${page.route}`;
  const html = generatePage(`/${page.route}`, page.title, page.description, page.keywords, url, { '@context': 'https://schema.org', '@graph': [businessSchema] });
  const routeDir = path.join(DIST_DIR, page.route);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

const notFoundHtml = generatePage('/404', 'Страница не найдена | Сантехник Алматы — Мастер Манас', 'Страница не найдена. Вернитесь на главную страницу сайта сантехника в Алматы или позвоните мастеру.', 'сантехник алматы, вызвать сантехника', `${BASE_URL}/`, businessSchema);
fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml);

console.log(`✅ Static pre-rendering complete.`);
console.log(`   Service pages: ${seoData.services.length}`);
console.log(`   Static pages:  ${staticPages.length}`);
console.log(`   Blog pages:    ${blogPages.length}`);
console.log(`   404.html:      1`);
console.log(`   Total:         ${generatedCount} HTML pages + 404.html`);
