import { Link, useNavigate } from "react-router-dom";
import seoData from "../data/seo-data.json";
import SEO from "../components/SEO";
import { Clock, ShieldCheck, ThumbsUp, Wrench, MapPin, Star, ArrowRight, CheckCircle2, Calendar, Phone, Award, ChevronDown, Droplet, AlertTriangle, Zap, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

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
        title="Сантехник в Алматы — Вызов сантехника на дом | Мастер Манас"
        description="Профессиональный сантехник в Алматы. Срочный вызов мастера на дом за 30 минут. Работаем с 9:00 до 21:00 без выходных и праздников. Ремонт труб, устранение протечек, замена бойлера, установка смесителей. Гарантия до 12 месяцев. ☎ +7 (705) 553-53-32"
        keywords="сантехник алматы, вызвать сантехника, услуги сантехника, сантехнические работы, вызов сантехника, сантехник на дом, срочный сантехник алматы, ремонт сантехники алматы, монтаж труб, замена смесителя, ремонт унитаза, замена бойлера алматы, цены сантехник алматы"
        canonical="https://mana.kz/"
        ogImage="/images/services/master-working.jpg"
      />

      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/remont-plastikovyh-trub.jpg')" }}
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
              Профессиональные сантехнические услуги с гарантией до 12 месяцев. Выезд во все районы Алматы.
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
                Выезд и диагностика БЕСПЛАТНО!
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl">
            {[
              { value: "1000+", label: "клиентов" },
              { value: "15 лет", label: "на рынке" },
              { value: "12/7", label: "работаем" },
              { value: "1 год", label: "гарантии" },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Услуги сантехника от мастера Манаса</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoData.services.slice(0, 8).map((service, index) => (
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
            ))}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Быстрый приезд", desc: "Мастер будет у вас в течение 30-45 минут после звонка." },
              { icon: ShieldCheck, title: "Гарантия качества", desc: "Даем официальную гарантию до 12 месяцев на все работы." },
              { icon: ThumbsUp, title: "Опытные мастера", desc: "Стаж работы наших специалистов не менее 7 лет." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">О компании "Мастер Манас"</h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-medium leading-relaxed mb-8">
                <p>Мы работаем на рынке Алматы более 15 лет. За это время мы сформировали команду профессионалов, которые обожают свое дело и ценят доверие клиентов.</p>
                <p>Наша цель — качественный сервис по разумной цене, где вы получаете надежность и безопасность для своего дома.</p>
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
            <p className="mt-4 text-lg text-slate-500 font-medium flex items-center justify-center gap-2">
              <Star size={20} className="fill-amber-400 text-amber-400" />
              <span>Рейтинг <strong className="text-slate-900">4.9</strong> из 5 на основе <strong>27</strong> отзывов</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { bg: "bg-[#1173D4]", letter: "А", name: "Айгуль С.", date: "15 янв 2025", text: "Вызывала сантехника для замены смесителя. Мастер приехал через 25 минут, всё сделал аккуратно и быстро. Рекомендую!", rating: 5 },
              { bg: "bg-green-500", letter: "К", name: "Кайрат М.", date: "10 фев 2025", text: "Отличный мастер! Установил бойлер и подключил фильтры для воды. Работает чисто, всё объяснил. Гарантию дал на год.", rating: 5 },
              { bg: "bg-purple-500", letter: "Н", name: "Наталья П.", date: "28 фев 2025", text: "Срочно нужен был ремонт унитаза в выходной. Манас приехал за 30 минут, починил быстро. Оплата по факту.", rating: 5 },
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
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
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
                a: "Выезд и диагностика — бесплатно при заказе ремонта. Стоимость работ начинается от 3 000 ₸. Точная цена озвучивается мастером после осмотра, до начала работ — никаких сюрпризов."
              },
              {
                q: "Как быстро приедет сантехник?",
                a: "В среднем мастер прибывает за 30–45 минут после вашего звонка. Мы работаем по всем районам Алматы: Алмалинский, Бостандыкский, Ауэзовский, Медеуский, Жетысуский и другие."
              },
              {
                q: "Есть ли гарантия на выполненные работы?",
                a: "Да! На все виды работ предоставляется официальная гарантия до 12 месяцев. Если в гарантийный период возникнет проблема по нашей вине — устраним бесплатно."
              },
              {
                q: "В какое время работает сантехник?",
                a: "Принимаем заявки с 9:00 до 21:00 ежедневно, без выходных и праздников. Мастер Манас обслуживает все районы Алматы."
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
                Оставьте заявку, и наш менеджер свяжется с вами в течение 5 минут для уточнения деталей. 
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
                    <div className="text-[13px] text-slate-400 font-medium mb-1">Наш адрес</div>
                    <div className="text-[15px] font-bold">г. Алматы, мкр. Аксай 4-11</div>
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
              Экстренная помощь
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Сантехник в Алматы: от катастрофы к комфорту за 30 минут
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Авария никогда не случается вовремя. Когда счет идет на минуты, вам нужен не просто мастер, а проверенный <strong>сантехник</strong>. Посмотрите, как мы решаем самые частые проблемы:
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
                Профессиональные услуги сантехника под микроскопом
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                Мы не просто «крутим гайки». Качественные <strong>услуги сантехника</strong> — это строгий алгоритм, современные материалы и ювелирная точность.
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
              Сантехнические работы: анатомия правильного ремонта
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Капитальные <strong>сантехнические работы</strong> не терпят дилетантства. Посмотрите, чем отличается подход "Мастер Манас" от типичных ошибок дешевых подрядчиков:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <div className="flex items-center gap-3 mb-3">
                  <XCircle size={24} className="text-red-500" />
                  <h3 className="text-lg font-bold text-slate-900">Как делают халтурщики</h3>
                </div>
                <ul className="space-y-3 text-[14px] text-slate-600">
                  <li>— Экономят на диаметре труб (слабый напор воды)</li>
                  <li>— Замуровывают резьбовые соединения в стену (риск потопа)</li>
                  <li>— Не соблюдают уклон канализации (постоянные засоры)</li>
                  <li>— Исчезают после получения денег без гарантий</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-md relative overflow-hidden ring-1 ring-green-500/20">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={24} className="text-green-500" />
                  <h3 className="text-lg font-bold text-slate-900">Как делаем мы (по ГОСТу)</h3>
                </div>
                <ul className="space-y-3 text-[14px] text-slate-600">
                  <li><strong className="text-green-700">✓</strong> Точный расчет гидравлики для стабильного напора</li>
                  <li><strong className="text-green-700">✓</strong> В стену прячется только цельная труба без стыков</li>
                  <li><strong className="text-green-700">✓</strong> Идеальный уклон 2-3 см на метр для самоочистки</li>
                  <li><strong className="text-green-700">✓</strong> Выдаем официальную гарантию до 12 месяцев</li>
                </ul>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/services/remont-plastikovyh-trub.jpg" 
                alt="Профессиональные сантехнические работы" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-2xl font-bold mb-2">Работаем на совесть</div>
                  <p className="opacity-90">Используем только сертифицированные материалы европейского качества.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO BLOCK 4: ВЫЗВАТЬ САНТЕХНИКА (CTA) */}
      <section className="py-16 bg-[#1173D4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Как вызвать сантехника и спать спокойно?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
                Не ждите, пока маленькая течь превратится в капитальный ремонт. Чтобы <strong>вызвать сантехника</strong>, вам не нужно никуда ехать. Просто позвоните: мы проведем бесплатную диагностику (при заказе работ) и назовем честную цену до начала ремонта.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+77055535332" className="bg-white text-[#1173D4] px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl">
                  <Phone size={20} className="fill-current" />
                  Позвонить сейчас
                </a>
                <a href="https://wa.me/77074791020" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-xl">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-auto shrink-0 flex gap-4 justify-center mt-8 lg:mt-0">
              <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center w-36 h-36">
                <div className="text-4xl font-black text-[#1173D4] mb-2">15</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Лет<br/>опыта</div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center w-36 h-36">
                <div className="text-4xl font-black text-[#1173D4] mb-2">12</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Месяцев<br/>гарантии</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;

