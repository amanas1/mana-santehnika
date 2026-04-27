import fs from 'fs';
import path from 'path';

const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));

const DIST_DIR = path.resolve('./dist');
const BASE_URL = 'https://mana.kz';

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

const generatePage = (route, title, description, keywords, canonical) => {
  const keywordsMeta = keywords
    ? `<meta name="keywords" content="${keywords}" />`
    : '';

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${canonical}" />`);

  // Replace OG tags too
  html = html
    .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${canonical}" />`);

  if (keywordsMeta && !html.includes('name="keywords"')) {
    html = html.replace(/<meta name="robots"/, `${keywordsMeta}\n    <meta name="robots"`);
  }

  return html;
};

let generatedCount = 0;

// ─── Service Landing Pages: /:serviceId-almaty ────────────────────────────────
seoData.services.forEach(service => {
  const title = `${service.title} в Алматы — цена от ${service.price} | Мастер Манас`;
  const description = `${service.title} в Алматы — выезд мастера за 30 минут, с 9:00 до 21:00, без выходных. ${service.description} Гарантия до 12 месяцев. Телефон: +7 (705) 553-53-32`;
  const keywords = `${service.title.toLowerCase()} алматы, ${service.title.toLowerCase()}, сантехник алматы, вызвать сантехника, услуги сантехника, сантехнические работы`;
  const url = `${BASE_URL}/${service.id}-almaty`;

  const html = generatePage(`/${service.id}-almaty`, title, description, keywords, url);

  const routeDir = path.join(DIST_DIR, `${service.id}-almaty`);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

// ─── Static Pages ─────────────────────────────────────────────────────────────
const staticPages = [
  {
    route: 'services',
    title: 'Все услуги сантехника в Алматы — цены и описание | Мастер Манас',
    description: 'Полный каталог сантехнических услуг в Алматы: вызов мастера, ремонт труб, установка смесителей, замена бойлера, ремонт унитаза и душевых кабин. Работаем с 9:00 до 21:00, без выходных.',
    keywords: 'услуги сантехника алматы, сантехнические работы алматы, ремонт сантехники, вызвать сантехника алматы, сантехник алматы цены'
  },
  {
    route: 'prices',
    title: 'Цены на услуги сантехника в Алматы 2024 | Мастер Манас',
    description: 'Актуальные цены на сантехнические услуги в Алматы. Вызов от 3 500 ₸. Устранение протечек, замена труб, монтаж сантехники. Честные расценки без скрытых доплат.',
    keywords: 'цены сантехника алматы, стоимость услуг сантехника, сколько стоит вызвать сантехника алматы, прейскурант сантехника'
  },
  {
    route: 'blog',
    title: 'Блог сантехника в Алматы — советы и инструкции | Мастер Манас',
    description: 'Полезные статьи о ремонте сантехники, монтаже оборудования и профилактике проблем. Советы профессионального сантехника из Алматы.',
    keywords: 'блог сантехника алматы, советы сантехника, ремонт сантехники своими руками, как починить кран, устранение засора'
  },
  {
    route: 'portfolio',
    title: 'Портфолио — примеры сантехнических работ в Алматы | Мастер Манас',
    description: 'Реальные фотографии выполненных сантехнических работ в Алматы. Разводка труб, монтаж котельных, установка ванн и душевых систем.',
    keywords: 'портфолио сантехника алматы, примеры работ сантехника, монтаж сантехники фото, ремонт сантехники алматы цены'
  },
  {
    route: 'reviews',
    title: 'Отзывы клиентов о сантехнике в Алматы | Мастер Манас',
    description: 'Реальные отзывы о работе сантехника в Алматы. Рейтинг 4.9/5 на основе работ для более 1000 клиентов. Читайте мнения и заказывайте услуги.',
    keywords: 'отзывы сантехника алматы, мастер сантехник алматы отзывы, надежный сантехник алматы'
  },
  {
    route: 'about',
    title: 'О мастере — Профессиональный сантехник в Алматы | Мастер Манас',
    description: 'Мастер Манас — профессиональный сантехник с опытом более 10 лет в Алматы. Сертифицированный специалист по ремонту и монтажу сантехники.',
    keywords: 'сантехник алматы, мастер сантехник алматы, профессиональный сантехник, опытный сантехник алматы'
  },
  {
    route: 'contacts',
    title: 'Контакты сантехника в Алматы — позвоните прямо сейчас | Мастер Манас',
    description: 'Контакты профессионального сантехника в Алматы. Телефон: +7 (705) 553-53-32. WhatsApp. Работаем с 9:00 до 21:00, без выходных и праздников.',
    keywords: 'контакты сантехника алматы, телефон сантехника алматы, вызвать сантехника алматы номер'
  }
];

staticPages.forEach(page => {
  const url = `${BASE_URL}/${page.route}`;
  const html = generatePage(`/${page.route}`, page.title, page.description, page.keywords, url);
  const routeDir = path.join(DIST_DIR, page.route);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

// ─── Blog Article Pages ────────────────────────────────────────────────────────
const blogPages = [
  {
    route: 'blog/article',
    title: 'Как выбрать надёжный смеситель для ванной: советы сантехника — Мастер Манас',
    description: 'Полный разбор материалов, типов картриджей и производителей смесителей. Советы от профессионального сантехника Алматы — что выбрать, чтобы не пожалеть.',
    keywords: 'выбрать смеситель для ванной, смеситель алматы, замена смесителя алматы, установка смесителя алматы'
  },
  {
    route: 'blog/clog-removal',
    title: 'Почему засоряется канализация на кухне — советы сантехника | Мастер Манас',
    description: 'Главные враги кухонных труб: жир, остатки пищи и кофе. Эффективные способы профилактики засоров от профессионального сантехника в Алматы.',
    keywords: 'засор канализации алматы, прочистка труб алматы, устранение засора кухня, засорилась канализация'
  },
  {
    route: 'blog/faucet-repair',
    title: 'Как починить капающий кран за 15 минут: пошаговый гайд | Мастер Манас',
    description: 'Инструкция по замене картриджа в однорычажном смесителе. Необходимые инструменты и советы профессионала. Ремонт крана своими руками или вызов мастера.',
    keywords: 'ремонт крана алматы, капает кран, замена картриджа смесителя, починить кран алматы'
  },
  {
    route: 'blog/leak-repair',
    title: 'Срочное устранение протечек — что делать до приезда сантехника | Мастер Манас',
    description: 'Пошаговая инструкция при аварии: где перекрыть воду, как минимизировать ущерб и что делать до приезда мастера-сантехника в Алматы.',
    keywords: 'устранение протечек алматы, прорвало трубу алматы, авария водопровод алматы, перекрыть воду алматы'
  },
  {
    route: 'blog/leak-prevention',
    title: 'Прорвало трубу? Первая помощь при затоплении | Мастер Манас Алматы',
    description: 'Что делать если прорвало трубу в квартире. Как перекрыть стояк и минимизировать ущерб до приезда аварийного сантехника в Алматы.',
    keywords: 'прорвало трубу алматы, авария сантехника алматы, аварийный сантехник алматы, затопили соседи алматы'
  },
  {
    route: 'blog/heating-maintenance',
    title: 'Почему батареи холодные и когда менять радиаторы — советы | Мастер Манас',
    description: 'Причины неисправности систем отопления: воздушные пробки, засоры и поломка запорных вентилей. Когда нужен ремонт батарей в Алматы.',
    keywords: 'ремонт батарей алматы, холодные батареи, замена радиатора алматы, воздушная пробка батарея'
  },
  {
    route: 'blog/heating-repair',
    title: 'Подготовка отопления к зиме — ремонт и профилактика батарей | Мастер Манас',
    description: 'Как проверить радиаторы на свищи, зачем нужен кран Маевского и когда менять старые батареи на биметаллические. Советы сантехника Алматы.',
    keywords: 'подготовка отопления к зиме алматы, ремонт батарей алматы, замена батарей алматы, замена радиаторов алматы'
  },
  {
    route: 'blog/appliance-installation',
    title: 'Установка стиральной и посудомоечной машины — ошибки и советы | Мастер Манас',
    description: 'Транспортировочные болты, организация слива, уровень установки. Типичные ошибки самостоятельной установки бытовой техники. Вызов мастера в Алматы.',
    keywords: 'установка стиральной машины алматы, подключение посудомойки алматы, установка бытовой техники алматы'
  },
  {
    route: 'blog/appliances-install',
    title: 'Подключение стиральной и посудомоечной машины в Алматы | Мастер Манас',
    description: 'Профессиональная установка и подключение бытовой техники к водопроводу и канализации в Алматы. Цена от 6 000 ₸, выезд 30 минут.',
    keywords: 'установка стиральной машины алматы, подключение техники алматы, мастер подключить стиралку'
  },
  {
    route: 'blog/water-saving',
    title: 'Как сэкономить на воде: аэраторы и экономные краны | Мастер Манас',
    description: 'Практические советы по снижению расхода воды: аэраторы, экономные лейки для душа и двухрежимные бачки. Установка от сантехника Алматы.',
    keywords: 'экономия воды алматы, установка аэратора алматы, снизить потребление воды, водосберегающая арматура'
  },
  {
    route: 'blog/noisy-pipes',
    title: 'Почему гудят и стучат трубы — диагностика и решения | Мастер Манас',
    description: 'Причины шума в водопроводе: высокое давление, гидроудары, изношенные прокладки. Как диагностировать и устранить проблему. Сантехник Алматы.',
    keywords: 'гудят трубы алматы, шум в трубах алматы, гидроудар в трубах, стучат трубы отопление алматы'
  }
];

blogPages.forEach(page => {
  const url = `${BASE_URL}/${page.route}`;
  const html = generatePage(`/${page.route}`, page.title, page.description, page.keywords, url);
  const routeDir = path.join(DIST_DIR, page.route);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

// ─── 404.html ─────────────────────────────────────────────────────────────────
const notFoundHtml = generatePage(
  '/404',
  'Страница не найдена (404) | Сантехник Алматы — Мастер Манас',
  'Страница не найдена. Вернитесь на главную страницу сайта профессионального сантехника в Алматы.',
  'сантехник алматы, вызвать сантехника',
  `${BASE_URL}/`
);
fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml);

console.log(`✅ Static pre-rendering complete.`);
console.log(`   Service pages: ${seoData.services.length}`);
console.log(`   Static pages:  ${staticPages.length}`);
console.log(`   Blog pages:    ${blogPages.length}`);
console.log(`   404.html:      1`);
console.log(`   Total:         ${generatedCount} HTML pages + 404.html`);
