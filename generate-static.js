import fs from 'fs';
import path from 'path';
import { render } from './dist-server/entry-server.js';

const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));
const serviceIntentData = JSON.parse(fs.readFileSync('./src/data/service-intent.json', 'utf8'));
const DIST_DIR = path.resolve('./dist');
const BASE_URL = 'https://mana.kz';
const PHONE = '+77055535332';
const DISPLAY_PHONE = '+7 (705) 553-53-32';

if (!fs.existsSync(DIST_DIR)) {
  console.error('dist directory does not exist. Run the Vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
const ensureDir = (dirPath) => fs.mkdirSync(dirPath, { recursive: true });
const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');
const stripHtml = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const truncateMeta = (value, max = 170) => {
  const normalized = String(value).replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) return normalized;
  const cut = normalized.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

const businessSchema = {
  '@type': 'Plumber',
  '@id': `${BASE_URL}/#business`,
  name: 'Мастер Манас — сантехник в Алматы',
  url: `${BASE_URL}/`,
  telephone: PHONE,
  image: `${BASE_URL}/images/services/manas-real.jpg`,
  logo: `${BASE_URL}/images/services/manas-real.jpg`,
  priceRange: 'от 3500 ₸',
  currenciesAccepted: 'KZT',
  paymentAccepted: 'Наличные, Kaspi',
  address: {
    '@type': 'PostalAddress',
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
  areaServed: { '@type': 'City', name: 'Алматы' }
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит вызов сантехника в Алматы?',
      acceptedAnswer: { '@type': 'Answer', text: 'Стоимость зависит от задачи. Работы начинаются от 3500 ₸, точную цену мастер называет после осмотра и до начала ремонта.' }
    },
    {
      '@type': 'Question',
      name: 'В каких районах Алматы работает мастер?',
      acceptedAnswer: { '@type': 'Answer', text: 'Мастер выезжает во все восемь районов Алматы. Время приезда зависит от адреса и текущей загрузки.' }
    },
    {
      '@type': 'Question',
      name: 'Есть ли гарантия на сантехнические работы?',
      acceptedAnswer: { '@type': 'Answer', text: 'На выполненные работы предоставляется гарантия до одного месяца. Условия зависят от вида ремонта и состояния существующего узла.' }
    }
  ]
};

const breadcrumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

const graph = (...items) => ({ '@context': 'https://schema.org', '@graph': items });

const buildHtml = ({ route, title, description, keywords = '', canonical, schema, image = '/images/services/hero-plumber.jpg', robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }) => {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(truncateMeta(description));
  const safeCanonical = escapeHtml(canonical);
  const keywordsMeta = keywords ? `<meta name="keywords" content="${escapeHtml(keywords)}" />` : '';

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${safeDescription}" />`)
    .replace(/<meta name="robots" content=".*?"\s*\/>/, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${safeCanonical}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${safeDescription}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${safeCanonical}" />`)
    .replace(/<meta name="twitter:title" content=".*?"\s*\/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta name="twitter:description" content=".*?"\s*\/>/, `<meta name="twitter:description" content="${safeDescription}" />`);

  if (keywordsMeta) {
    html = html.replace(/<meta name="keywords" content=".*?"\s*\/>/, keywordsMeta);
  }
  const imageUrl = escapeHtml(`${BASE_URL}${image}`);
  html = html
    .replace(/<meta property="og:image" content=".*?"\s*\/>/, `<meta property="og:image" content="${imageUrl}" />`)
    .replace(/<meta name="twitter:image" content=".*?"\s*\/>/, `<meta name="twitter:image" content="${imageUrl}" />`);
  if (schema) {
    const json = JSON.stringify(schema).replace(/</g, '\\u003c');
    html = html.replace('</head>', `    <script type="application/ld+json" data-seo-schema="true" data-seo-path="${escapeHtml(route)}">${json}</script>\n  </head>`);
  }
  return html.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
};

const writePage = (page) => {
  const html = buildHtml(page);
  if (page.route === '/') {
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html);
    return;
  }
  const routeDir = path.join(DIST_DIR, page.route.replace(/^\//, ''));
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
};

const indexedPages = [{
  route: '/',
  title: 'Сантехник в Алматы — от 3 500 ₸ | Мастер Манас',
  description: 'Сантехник на дом в Алматы: протечки, засоры, ремонт и установка сантехники от 3 500 ₸. Работаю лично, цену согласую до ремонта. Ежедневно 9:00–21:00.',
  keywords: 'сантехник алматы, вызвать сантехника алматы, услуги сантехника, сантехник на дом, сантехнические работы алматы',
  canonical: `${BASE_URL}/`,
  schema: graph(businessSchema, faqSchema)
}];

for (const service of seoData.services) {
  const route = `/${service.id}-almaty`;
  const url = `${BASE_URL}${route}`;
  const price = String(service.price || '').replace(/[^0-9]/g, '');
  const intent = serviceIntentData[service.id];
  const serviceDescription = service.searchDescription || `${service.title} в Алматы ${service.price}. ${intent?.intro || service.description} Манас: ${DISPLAY_PHONE}.`;
  const serviceFaq = intent?.faq?.length ? {
    '@type': 'FAQPage',
    mainEntity: intent.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  } : null;
  indexedPages.push({
    route,
    title: service.seoTitle || `${service.title} в Алматы — ${service.price} | Мастер Манас`,
    description: serviceDescription,
    keywords: `${service.title.toLowerCase()} алматы, ${(intent?.aliases || []).map((alias) => `${alias} алматы`).join(', ')}, сантехник алматы, услуги сантехника`,
    canonical: url,
    image: service.image,
    schema: graph(
      businessSchema,
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${service.title} в Алматы`,
        description: `${intent?.intro || service.description} ${intent?.included?.join('. ') || ''}`.slice(0, 900),
        provider: { '@id': `${BASE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Алматы' },
        serviceType: service.title,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'KZT',
          ...(price ? { price } : {}),
          availability: 'https://schema.org/InStock',
          url
        }
      },
      breadcrumbs([
        { name: 'Главная', url: `${BASE_URL}/` },
        { name: 'Услуги', url: `${BASE_URL}/services` },
        { name: service.title, url }
      ]),
      ...(serviceFaq ? [serviceFaq] : [])
    )
  });
}

const staticPages = [
  ['services', 'Услуги сантехника в Алматы — виды работ и цены | Мастер Манас', 'Ремонт и установка сантехники в Алматы: протечки, засоры, смесители, унитазы, трубы, радиаторы и подключение техники.', 'услуги сантехника алматы, сантехнические работы алматы, ремонт сантехники'],
  ['prices', 'Цены на услуги сантехника в Алматы — прайс | Мастер Манас', 'Прайс сантехника в Алматы: смесители, унитазы, засоры, трубы и отопление. Начальные цены за работу и условия выезда; итог согласую после осмотра.', 'цены сантехника алматы, стоимость услуг сантехника, прайс сантехника'],
  ['blog', 'Советы сантехника в Алматы — блог мастера Манаса', 'Статьи мастера Манаса: протечки, засоры, смесители, отопление и подключение техники. Что проверить перед вызовом сантехника в Алматы.', 'советы сантехника, ремонт сантехники, блог сантехника алматы'],
  ['portfolio', 'Примеры сантехнических работ в Алматы | Мастер Манас', 'Фотографии выполненных сантехнических работ: монтаж труб, сантехники, ванн, радиаторов и бытовой техники.', 'работы сантехника алматы, портфолио сантехника, сантехнический монтаж'],
  ['reviews', 'Отзывы о сантехнике в Алматы | Мастер Манас', 'Отзывы клиентов о работе мастера Манаса: ремонт сантехники, установка оборудования и выезд по Алматы.', 'отзывы сантехника алматы, мастер манас отзывы'],
  ['about', 'Мастер Манас — сантехник в Алматы', 'Манас — выездной сантехник в Алматы. Диагностика, ремонт и установка сантехники с понятной ценой и проверкой результата.', 'мастер сантехник алматы, сантехник манас'],
  ['contacts', 'Контакты сантехника в Алматы | Мастер Манас', `Телефон сантехника в Алматы: ${DISPLAY_PHONE}. Звонок и WhatsApp, выезд во все районы города ежедневно с 9:00 до 21:00.`, 'телефон сантехника алматы, вызвать сантехника алматы']
];

for (const [routeName, title, description, keywords] of staticPages) {
  const route = `/${routeName}`;
  const url = `${BASE_URL}${route}`;
  indexedPages.push({
    route, title, description, keywords, canonical: url,
    schema: graph(businessSchema, breadcrumbs([
      { name: 'Главная', url: `${BASE_URL}/` },
      { name: title.split(' — ')[0].split(' | ')[0], url }
    ]))
  });
}

const blogPages = [
  ['blog/article', 'Как выбрать смеситель для ванной и кухни | Мастер Манас', 'Что проверить перед покупкой смесителя: крепление, длину излива, подводки, материал и доступность картриджа. Советы по выбору и установке в Алматы.', '/images/services/smesitel-install.jpg'],
  ['blog/clog-removal', 'Засор на кухне: что проверить и когда нужен мастер | Манас', 'Вода стоит в кухонной мойке: как отличить засор сифона от проблемы дальше в трубе, чего избегать и что сообщить сантехнику перед прочисткой.', '/images/services/sink.jpg'],
  ['blog/faucet-repair', 'Капает кран: картридж, прокладки или замена смесителя | Манас', 'Как отличить течь из излива, под ручкой и у основания смесителя. Когда помогает замена картриджа, какие данные нужны для подбора детали и ремонта.', '/images/services/smesitel-cartridge.jpg'],
  ['blog/leak-repair', 'Прорвало трубу: что делать до приезда сантехника | Манас', 'Как действовать при протечке: остановить подачу воды, избежать контакта с электричеством и подготовить доступ. Что сообщить сантехнику в Алматы.', '/images/services/protechki-detail.jpg'],
  ['blog/heating-repair', 'Батарея не греет: что проверить и когда нужен мастер | Манас', 'Холодная батарея, шум или течь: как описать симптом, отличить проблему радиатора от стояка и подготовить ремонт отопления в квартире.', '/images/services/batarei-repair-detail.jpg'],
  ['blog/appliances-install', 'Подключение стиральной и посудомоечной машины: проверка | Манас', 'Что проверить перед подключением машины: транспортировочные крепления, воду, слив, шланги и электропитание. Подготовка места и тестовый запуск.', '/images/services/dishwasher-install-detail.jpg'],
  ['blog/water-saving', 'Как уменьшить расход воды: течи, аэратор и бачок | Манас', 'С чего начать экономию воды: проверить скрытые потери, подобрать аэратор и настроить исправный бачок. Простой замер расхода без обещаний процентов.', '/images/services/filter-install-detail.jpg'],
  ['blog/noisy-pipes', 'Почему гудят и стучат трубы: как найти причину | Манас', 'Гул при открытии крана, удар после закрытия и щелчки при нагреве: чем отличаются симптомы, что записать и когда обращаться к сантехнику.', '/images/services/pipes-detail.jpg']
];

for (const [routeName, title, description, image] of blogPages) {
  const route = `/${routeName}`;
  const url = `${BASE_URL}${route}`;
  indexedPages.push({
    route, title, description, canonical: url, image,
    schema: graph(
      businessSchema,
      {
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: `${BASE_URL}${image}`,
        dateModified: '2026-10-18',
        author: { '@type': 'Person', name: 'Манас', url: `${BASE_URL}/about` },
        publisher: { '@id': `${BASE_URL}/#business` },
        mainEntityOfPage: url
      },
      breadcrumbs([
        { name: 'Главная', url: `${BASE_URL}/` },
        { name: 'Блог', url: `${BASE_URL}/blog` },
        { name: title.split(' — ')[0].split(' | ')[0], url }
      ])
    )
  });
}

indexedPages.forEach(writePage);

const utilityPages = [
  ['privacy-policy', 'Политика конфиденциальности | Мастер Манас'],
  ['tools/calculator', 'Расчёт стоимости сантехнических работ | Мастер Манас'],
  ['tools/booking', 'Запись на вызов сантехника | Мастер Манас'],
  ['tools/feedback', 'Обратная связь | Мастер Манас'],
  ['tools/service-map', 'Карта сантехнических услуг | Мастер Манас']
];

for (const [routeName, title] of utilityPages) {
  const route = `/${routeName}`;
  writePage({
    route,
    title,
    description: 'Служебная страница сайта мастера Манаса.',
    canonical: `${BASE_URL}${route}`,
    schema: graph(businessSchema),
    robots: 'noindex, follow'
  });
}

const notFound = buildHtml({
  route: '/404',
  title: 'Страница не найдена | Мастер Манас',
  description: 'Такой страницы нет. Перейдите на главную страницу сайта сантехника в Алматы.',
  canonical: `${BASE_URL}/404`,
  schema: graph(businessSchema),
  robots: 'noindex, follow'
});
fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFound);

console.log(`✅ Static rendering: ${indexedPages.length} indexable pages, ${utilityPages.length} noindex pages, 1 real 404 page.`);
