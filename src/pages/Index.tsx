import { Link, useNavigate } from "react-router-dom";
import seoData from "../data/seo-data.json";
import SEO from "../components/SEO";
import { Clock, ShieldCheck, ThumbsUp, Wrench, MapPin, ArrowRight, CheckCircle2, Calendar, Phone, Award, ChevronDown, Zap, Droplet, AlertTriangle, Star, XCircle } from "lucide-react";
import { useState } from "react";
import { cleanServiceCopy } from "../utils/seoText";

// FAQ Accordion component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50 hover:border-[#1173D4]/30 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-bold text-slate-900 text-[15px] leading-snug">{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-[#1173D4] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-600 text-[14px] leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};


const Index = () => {
  const navigate = useNavigate();
  const featuredServices = seoData.services.slice(0, 6).map(cleanServiceCopy);
  const districtBadges = [
    "Алмалинский район",
    "Бостандыкский район",
    "Ауэзовский район",
    "Медеуский район",
    "Жетысуский район",
    "Турксибский район",
    "Алатауский район",
    "Наурызбайский район",
  ];
  const faqItems = [
    {
      q: "Сколько стоит вызов сантехника в Алматы?",
      a: "Выезд и диагностика входят в стоимость при заказе ремонта. Стоимость работ начинается от 3 000 ₸. Точная цена озвучивается мастером после осмотра, до начала работ — никаких сюрпризов."
    },
    {
      q: "Как быстро приедет сантехник?",
      a: "Время приезда зависит от вашего района и текущей загрузки. Обслуживаю все районы Алматы: Алмалинский, Бостандыкский, Ауэзовский, Медеуский, Жетысуский и другие."
    },
    {
      q: "Есть ли гарантия на выполненные работы?",
      a: "Да! На все виды работ предоставляется официальная гарантия до 1 месяца. Если в гарантийный период возникнет проблема по нашей вине — устраним по гарантии."
    },
    {
      q: "В какое время работает сантехник?",
      a: "Принимаем заявки с 9:00 до 21:00 ежедневно, без выходных и праздников. Мастер Манас обслуживает все районы Алматы."
    },
    {
      q: "Какие материалы используются при ремонте?",
      a: "Только сертифицированные материалы от проверенных производителей: турецкий полипропилен FIRAT, немецкая арматура Grohe/Hansgrohe, счётчики с поверкой. Качество всех материалов подтверждено документами."
    },
  ];
  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "PlumbingBusiness",
      name: "Мастер Манас",
      url: "https://mana.kz/",
      telephone: "+77055535332",
      image: "https://mana.kz/images/services/manas-real.jpg",
      priceRange: "от 3000 ₸",
      areaServed: "Алматы",
      openingHours: "Mo-Su 09:00-21:00",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `tel:+77055535332`;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Сантехник в Алматы — Мастер Манас, выезд на дом"
        description="Сантехнические услуги в Алматы: ремонт протечек, замена смесителей, установка унитазов, подключение бытовой техники. Выездной мастер, ежедневно с 9:00 до 21:00. ☎ +7 (705) 553-53-32"
        keywords="сантехник алматы, вызвать сантехника, услуги сантехника, сантехнические работы, сантехник на дом, устранение протечек, установка смесителя"
        canonical="https://mana.kz/"
        ogImage="/images/services/master-working.jpg"
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/hero-plumber.jpg')" }}
          title="Профессиональные сантехнические работы"
        >
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Сантехник в Алматы
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-medium">
              Профессиональные сантехнические услуги с гарантией 1 месяц. Выезд во все районы Алматы.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+77055535332"
                className="bg-[#1173D4] hover:bg-[#0f67be] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                <Phone size={20} className="fill-current" />
                Вызвать мастера
              </a>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-4 rounded-xl flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
                Выезд входит в стоимость при заказе работ
              </div>
            </div>
            <p className="mt-6 text-sm md:text-[15px] text-gray-200/90 max-w-2xl leading-relaxed">
              Работаем как выездной сантехник по Алматы: от срочного ремонта труб и устранения протечек до установки смесителей, унитазов, бойлеров и бытовой техники.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl">
            {[
              { value: "9–21", label: "ежедневно" },
              { value: "12/7", label: "без выходных" },
              { value: "1 мес", label: "гарантия" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center text-white">
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-[13px] font-medium opacity-80 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Популярные услуги</h2>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoData.services.slice(0, 8).map((rawService, index) => {
              const service = cleanServiceCopy(rawService);
              return (
              <Link
                key={service.id}
                to={`/${service.id}-almaty`}
                className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    title={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  {index < 4 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#1173D4] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Популярно
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[#1173D4] mb-3">
                    <Wrench size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{service.title}</h3>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                    <span className="text-[#1173D4] font-extrabold">{service.price}</span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#1173D4] group-hover:text-white transition-colors">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            )})}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Почему выбирают мастера Манаса</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Удобный график", desc: "Работаю ежедневно с 9:00 до 21:00, без выходных." },
              { icon: ShieldCheck, title: "Гарантия качества", desc: "Предоставляю гарантию 1 месяц на все работы." },
              { icon: ThumbsUp, title: "Опытный мастер", desc: "Профессиональный подход к каждому заказу." },
              { icon: CheckCircle2, title: "Честные цены", desc: "Озвучиваем стоимость до начала работ, никаких скрытых доплат." },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-[1.5rem] border border-slate-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white text-[#1173D4] rounded-2xl flex items-center justify-center shadow-sm mb-5">
                  <item.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional History / About Short */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">О мастере Манасе</h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-medium leading-relaxed mb-8">
                <p>Меня зовут Манас, я — выездной сантехник в Алматы. Выполняю все виды сантехнических работ: от замены смесителя до капитального ремонта водопровода.</p>
                <p>Моя цель — качественный сервис по разумной цене, где вы получаете надежность и безопасность для своего дома.</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Только сертифицированные материалы",
                  "Свой профессиональный инструмент",
                  "Чистота и порядок после работы",
                  "Работаем с 9:00 до 21:00, без выходных"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] font-bold text-slate-800">
                    <CheckCircle2 size={20} className="text-green-500" />
                    {li}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#1173D4] font-bold text-[15px] hover:gap-3 transition-all">
                Подробнее о нас <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg">
                <img 
                  src="/images/services/manas-real.jpg" 
                  alt="Сантехник Манас" 
                  title="Сантехник Манас"
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Отзывы клиентов</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { bg: "bg-[#1173D4]", letter: "А", name: "Айгуль С.", date: "", text: "Вызывала сантехника для замены смесителя. Мастер приехал вовремя, всё сделал аккуратно и чисто. Рекомендую!", rating: 5 },
              { bg: "bg-green-500", letter: "К", name: "Кайрат М.", date: "", text: "Хороший мастер. Установил бойлер и подключил фильтры для воды. Работает аккуратно, всё объяснил.", rating: 5 },
              { bg: "bg-purple-500", letter: "Н", name: "Наталья П.", date: "", text: "Нужен был ремонт унитаза в выходной. Манас приехал, починил качественно. Оплата по факту, всё прозрачно.", rating: 5 },
            ].map((review) => (
              <div key={review.name} className="bg-slate-50 rounded-[1.5rem] p-8 border border-slate-100">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${review.bg} rounded-full flex items-center justify-center text-white font-bold`}>
                      {review.letter}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-[15px]">{review.name}</div>
                      <div className="text-[12px] text-slate-400 font-medium">{review.date}</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1173D4] bg-blue-50 px-3 py-1.5 rounded-full">
                    <Award size={14} />
                    {review.note}
                  </div>
                </div>
                <p className="text-slate-600 text-[14px] leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 font-bold px-8 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              Все отзывы
            </Link>
          </div>
        </div>
      </section>

      {/* Local Coverage */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Работаем по всему Алматы</h2>
              <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                Приезжаем в квартиры, частные дома, новостройки, офисы и коммерческие помещения. Чаще всего нас вызывают на срочный ремонт труб, устранение протечек, прочистку канализации, замену смесителя и установку сантехники после ремонта.
              </p>
              <div className="flex flex-wrap gap-3">
                {districtBadges.map((district) => (
                  <span key={district} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold">
                    <MapPin size={14} className="text-[#1173D4]" />
                    {district}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[1.5rem] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Когда стоит звонить сразу</h3>
              <ul className="space-y-4 text-slate-600">
                {[
                  "Из трубы капает или уже течет вода.",
                  "Смеситель плохо переключается, шумит или бьет струей в сторону.",
                  "Вода уходит медленно, а из слива идет запах.",
                  "Унитаз не смывает, бачок не набирает воду или подтекает.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Preview Strip */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">Цены на услуги сантехника</h2>
            <p className="text-slate-400 font-medium">Прозрачное ценообразование — стоимость озвучивается <strong className="text-white">до начала работ</strong></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { service: "Ремонт смесителя", price: "от 3 000 ₸", emoji: "🔧" },
              { service: "Устранение протечки", price: "от 3 500 ₸", emoji: "💧" },
              { service: "Ремонт унитаза", price: "от 4 000 ₸", emoji: "🚽" },
              { service: "Установка смесителя", price: "от 5 000 ₸", emoji: "🚿" },
              { service: "Прочистка канализации", price: "от 5 000 ₸", emoji: "🪣" },
              { service: "Установка стиральной машины", price: "от 4 500 ₸", emoji: "🫧" },
              { service: "Ремонт бойлера", price: "от 5 000 ₸", emoji: "♨️" },
              { service: "Замена радиатора", price: "от 8 000 ₸", emoji: "🌡️" },
            ].map((item) => (
              <div key={item.service} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <div className="text-white font-semibold text-sm leading-tight mb-1">{item.service}</div>
                  <div className="text-[#13B6EC] font-extrabold">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/prices" className="inline-flex items-center gap-2 bg-[#1173D4] hover:bg-[#0f67be] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/30">
              Полный прайс-лист <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Популярные страницы услуг</h2>
              <p className="text-slate-500 font-medium mt-2">Быстрые переходы к самым востребованным сантехническим работам в Алматы.</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[#1173D4] font-bold hover:gap-3 transition-all">
              Смотреть все услуги <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                to={`/${service.id}-almaty`}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:border-[#1173D4]/30 hover:bg-white transition-colors"
              >
                <div className="font-bold text-slate-900 mb-2">{service.title}</div>
                <div className="text-sm text-slate-500 mb-3 line-clamp-2">{service.description}</div>
                <div className="text-[#1173D4] font-extrabold">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Часто задаваемые вопросы</h2>
            <p className="text-slate-500 font-medium">Ответы на самые популярные вопросы о наших услугах</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Сколько стоит вызов сантехника в Алматы?",
                a: "Выезд и диагностика входят в стоимость при заказе ремонта. Стоимость работ начинается от 3 000 ₸. Точная цена озвучивается мастером после осмотра, до начала работ — никаких сюрпризов."
              },
              {
                q: "Как быстро приедет сантехник?",
                a: "Время приезда зависит от района и загруженности. Обслуживаю все районы Алматы: Алмалинский, Бостандыкский, Ауэзовский, Медеуский, Жетысуский и другие."
              },
              {
                q: "Есть ли гарантия на выполненные работы?",
                a: "Да, на все виды работ предоставляю гарантию 1 месяц. Если в гарантийный период возникнет проблема по моей вине — исправлю по гарантии."
              },
              {
                q: "В какое время работает сантехник?",
                a: "Принимаю заявки с 9:00 до 21:00 ежедневно, без выходных. Обслуживаю все районы Алматы и пригород."
              },
              {
                q: "Какие материалы используются при ремонте?",
                a: "Только сертифицированные материалы от проверенных производителей: турецкий полипропилен FIRAT, немецкая арматура Grohe/Hansgrohe, счётчики с поверкой. Качество всех материалов подтверждено документами."
              },
            ].map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form (Вызвать мастера Form) */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1173D4] rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1173D4] rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Нужен грамотный специалист?</h2>
              <p className="text-lg text-slate-300 font-medium mb-10 leading-relaxed">
                Позвоните или оставьте заявку — отвечу в рабочее время.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-[#13B6EC]" />
                  </div>
                  <div>
                    <div className="text-[13px] text-slate-400 font-medium mb-1">Работаем с 9:00 до 21:00</div>
                    <a href="tel:+77055535332" className="text-xl font-extrabold block hover:text-[#13B6EC] transition-colors">+7 705 553 53 32</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-[#13B6EC]" />
                  </div>
                  <div>
                    <div className="text-[13px] text-slate-400 font-medium mb-1">Зона обслуживания</div>
                    <div className="text-[15px] font-bold">Алматы и пригород</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl text-slate-900">
              <h3 className="text-2xl font-extrabold mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">Ваше имя</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1173D4] font-medium text-sm transition-all" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">Телефон</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1173D4] font-medium text-sm transition-all" required />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-1.5">Услуга</label>
                  <select id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1173D4] font-medium text-sm transition-all" required>
                    <option value="" disabled>Что нужно сделать?</option>
                    <option value="plumb">Сантехника</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-[#1173D4] text-white font-bold rounded-xl hover:bg-[#0f67be] transition-colors mt-2">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="h-[400px] w-full relative">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=76.928610%2C43.238949&z=11" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen={true}
          className="absolute inset-0 grayscale contrast-125 opacity-90 sepia-[.2]"
          title="Карта обслуживания Алматы"
        ></iframe>
      </section>

      {/* SEO BLOCK 1: САНТЕХНИК В АЛМАТЫ (Проблема-Решение) */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#1173D4] text-sm font-bold mb-6">
              <Zap size={16} className="fill-current" />
              Сантехнические работы
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Сантехник в Алматы: решение сантехнических проблем в вашем доме
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Когда случается авария, важно вызвать опытного <strong>сантехника</strong>. Вот как я решаю самые частые проблемы:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                problem: "Затопление соседей",
                solution: "Мгновенное перекрытие стояков и герметизация муфтами GEBO без разрушения стен.",
                icon: <Droplet size={28} className="text-red-500" />,
                bg: "bg-red-50"
              },
              {
                problem: "Глухой засор канализации",
                solution: "Применяем гидродинамику: вода под давлением 200 бар срезает жир со стенок труб как бритвой.",
                icon: <AlertTriangle size={28} className="text-amber-500" />,
                bg: "bg-amber-50"
              },
              {
                problem: "Нет горячей воды (поломка бойлера)",
                solution: "Чистка от накипи, замена сгоревшего ТЭНа и анода прямо на месте за 40 минут.",
                icon: <Wrench size={28} className="text-slate-500" />,
                bg: "bg-slate-100"
              }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.problem}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  <span className="font-bold text-[#1173D4]">Наше решение:</span> {card.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO BLOCK 2: УСЛУГИ САНТЕХНИКА (Инфографика-Сетка) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1173D4]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 md:flex justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-white">
                Профессиональные услуги сантехника в Алматы
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                Качественные <strong>услуги сантехника</strong> — это строгий алгоритм, современные материалы и ювелирная точность.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold transition-colors border border-white/10">
                Все услуги <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Диагностика", desc: "Эндоскопия труб для поиска скрытых течей и засоров.", icon: <Star /> },
              { title: "Герметизация", desc: "Анаэробные гели вместо устаревшего льна и краски.", icon: <ShieldCheck /> },
              { title: "Разводка труб", desc: "Полипропилен и сшитый полиэтилен с пайкой без сужений.", icon: <MapPin /> },
              { title: "Пусконаладка", desc: "Опрессовка системы давлением в 10 атмосфер перед сдачей.", icon: <CheckCircle2 /> }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                <div className="text-[#13B6EC] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO BLOCK 3: САНТЕХНИЧЕСКИЕ РАБОТЫ (Сравнение) */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Сантехнические работы: как отличить качественный ремонт
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Капитальные <strong>сантехнические работы</strong> требуют опыта и соблюдения технологии. Посмотрите, чем отличается подход "Мастер Манас" от типичных ошибок при монтаже:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <div className="flex items-center gap-3 mb-3">
                  <XCircle size={24} className="text-red-500" />
                  <h3 className="text-lg font-bold text-slate-900">Как работают новички</h3>
                </div>
                <ul className="space-y-3 text-[14px] text-slate-600">
                  <li>— Экономят на диаметре труб (слабый напор воды)</li>
                  <li>— Замуровывают резьбовые соединения в стену (риск потопа)</li>
                  <li>— Не соблюдают уклон канализации (постоянные засоры)</li>
                  <li>— Исчезают после получения денег без гарантий</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">Районы обслуживания в Алматы</h3>
                <ul className="space-y-2 text-[14px] text-slate-600">
                  {[
                    "Алмалинский район — Центр, Арбат",
                    "Бостандыкский район — Горный Гигант, Орбита",
                    "Ауэзовский район — Аксай, Мамыр",
                    "Медеуский район — Самал, Коктем",
                    "Жетысуский район — Шанырак, Айнабулак",
                    "Наурызбайский район — Нурлыжол, Алтау",
                    "Алатауский район — Еркебидай, Акбулак",
                    "Турксибский район — Гагарин, Иман",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#1173D4] mt-0.5 shrink-0">📍</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 mb-4">Какие работы выполняет сантехник Манас?</h3>
            <p className="text-slate-600 leading-relaxed mb-4 text-[15px]">
              <strong>Вызов сантехника на дом в Алматы</strong> — это возможность решить любую проблему с водоснабжением, канализацией или отоплением быстро и профессионально. Мастер Манас выполняет: <strong>прочистку засоров</strong> канализации тросом и гидродинамическим методом, <strong>замену и установку смесителей</strong> любых марок (Grohe, Hansgrohe, IDDIS, Lemark), <strong>ремонт бойлеров</strong> (Thermex, Ariston, Gorenje, Electrolux), <strong>монтаж труб</strong> из полипропилена и металлопластика, <strong>установку счётчиков воды</strong>, <strong>ремонт унитазов</strong> (шуршание, бачок, инсталляция), <strong>установку душевых кабин</strong> и ванн, <strong>монтаж радиаторов</strong> и тёплых полов.
            </p>

            <h3 className="text-xl font-extrabold text-slate-900 mb-4">Стоимость услуг сантехника в Алматы</h3>
            <p className="text-slate-600 leading-relaxed mb-4 text-[15px]">
              Цены на <strong>услуги сантехника в Алматы</strong> у мастера Манаса начинаются от 3 000 тенге. Стоимость зависит от сложности работы и необходимых материалов. <strong>Выезд и диагностика входят в стоимость</strong> при заказе ремонта. Все цены озвучиваются заранее — никаких скрытых доплат. Гарантия на все выполненные работы составляет <strong>1 месяц</strong>. Принимаем оплату наличными и переводом.
            </p>

            <div className="bg-[#EBF4FF] border border-blue-100 rounded-2xl p-6 mt-6">
              <p className="text-slate-700 font-medium text-[14px] leading-relaxed m-0">
                <strong className="text-[#1173D4]">Мастер Манас</strong> — профессиональный сантехник в Алматы. 
                Позвоните по номеру <a href="tel:+77055535332" className="font-bold text-[#1173D4] hover:underline">+7 (705) 553-53-32</a> или напишите в 
                <a href="https://wa.me/77074791020" className="font-bold text-[#1173D4] hover:underline ml-1" target="_blank" rel="noopener noreferrer">WhatsApp +7 (707) 479-10-20</a> — 
                мастер ответит вам и договорится о времени визита.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+77055535332" className="bg-white text-[#1173D4] px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl">
                  <Phone size={20} className="fill-current" />
                  Позвонить сейчас
                </a>
                <a href="https://wa.me/77055535332" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-xl">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-auto shrink-0 flex gap-4 justify-center mt-8 lg:mt-0">
              <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center w-36 h-36">
                <div className="text-4xl font-black text-[#1173D4] mb-2">12/7</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ежедневно</div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center w-36 h-36">
                <div className="text-4xl font-black text-[#1173D4] mb-2">1</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Месяц<br/>гарантии</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
