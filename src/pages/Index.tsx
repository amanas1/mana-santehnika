import { Link, useNavigate } from "react-router-dom";
import seoData from "../data/seo-data.json";
import SEO from "../components/SEO";
import { Clock, ShieldCheck, ThumbsUp, Wrench, MapPin, Star, ArrowRight, CheckCircle2, Calendar, Phone, Award } from "lucide-react";
import { useState } from "react";

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
        title="Сантехник Алматы — Вызов сантехника 24/7 — Услуги сантехника в Алматы | Мастер Манас"
        description="Профессиональный сантехник в Алматы. Срочный вызов мастера на дом за 30 минут, круглосуточно 24/7. Ремонт труб, устранение протечек, замена бойлера, установка смесителей. Гарантия до 12 месяцев. ☂ +7 (705) 553-53-32"
        keywords="сантехник алматы, вызвать сантехника, услуги сантехника, сантехнические работы, вызов сантехника, сантехник на дом, срочный сантехник алматы, ремонт сантехники алматы, монтаж труб, замена смесителяⰝ ремонт унитаза, замена бойлера алматы, сантехник 24 7"
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
              Профессиональные услуги <br /> сантехника в Алматы
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
              { value: "10 лет", label: "на рынке" },
              { value: "24/7", label: "работаем" },
              { value: "4.9/5", label: "рейтинг" },
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
                    <span className="text-[#1173D4] font-extrabold">от {service.price}</span>
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
                <p>Мы работаем на рынке Алматы более 10 лет. За это время мы сформировали команду профессионалов, которые обожают свое дело и ценят доверие клиентов.</p>
                <p>Наша цель — качественный сервис по разумной цене, где вы получаете надежность и безопасность для своего дома.</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Только сертифицированные материалы",
                  "Свой профессиональный инструмент",
                  "Чистота и порядок после работы",
                  "Работаем круглосуточно, без выходных"
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
                  alt="Сантехник Манас в Алматы — вызов мастера на дом 24/7" 
                  title="Сантехник Манас — надёжные услуги сантехника без посредников"
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-8 bg-[#f8f9fc] px-8 py-5 rounded-[1.5rem] shadow-xl border border-white hidden md:block z-10">
                <div className="flex items-center gap-5">
                  <div className="w-[52px] h-[52px] bg-[#ebf4ff] text-[#1173D4] rounded-full flex items-center justify-center shrink-0">
                    <Award size={26} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[22px] font-extrabold text-slate-900 leading-none mb-1">№1</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">В рейтинге Алматы</div>
                  </div>
                </div>
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
                    <div className="text-[13px] text-slate-400 font-medium mb-1">Звоните круглосуточно</div>
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

      {/* SEO Text Article Block */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <article className="prose prose-slate max-w-none">
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Сантехник в Алматы — Профессиональные услуги 24/7
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
              Если вам срочно нужен <strong>сантехник в Алматы</strong>, мастер Манас готов выехать в течение 30 минут в любой район города. Мы предоставляем полный спектр <strong>сантехнических услуг в Алматы</strong> — от мелкого ремонта смесителя до капитальной замены труб водоснабжения и канализации в квартире, доме или офисе. Наши специалисты работают <strong>круглосуточно, без выходных</strong>, включая праздничные дни.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">Когда вызывают сантехника?</h3>
                <ul className="space-y-2 text-[14px] text-slate-600">
                  {[
                    "Капает или течет кран, смеситель",
                    "Засорилась канализация, стоит вода",
                    "Не работает или протекает бойлер",
                    "Прорвало трубу или стояк",
                    "Нужно установить новый унитаз или раковину",
                    "Подключить стиральную или посудомоечную машину",
                    "Заменить радиатор или батарею отопления",
                    "Протечка в ванной, сырость под раковиной",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#1173D4] mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
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
              Цены на <strong>услуги сантехника в Алматы</strong> у мастера Манаса начинаются от 3 000 тенге. Стоимость зависит от сложности работы и необходимых материалов. <strong>Выезд и диагностика — бесплатно</strong> при заказе ремонта. Все цены озвучиваются заранее — никаких скрытых доплат. Гарантия на все выполненные работы составляет <strong>до 12 месяцев</strong>. Принимаем оплату наличными и переводом.
            </p>

            <div className="bg-[#EBF4FF] border border-blue-100 rounded-2xl p-6 mt-6">
              <p className="text-slate-700 font-medium text-[14px] leading-relaxed m-0">
                <strong className="text-[#1173D4]">Мастер Манас</strong> — профессиональный сантехник в Алматы с опытом более 10 лет и более 1000 выполненных работ. 
                Позвоните по номеру <a href="tel:+77055535332" className="font-bold text-[#1173D4] hover:underline">+7 (705) 553-53-32</a> или напишите в 
                <a href="https://wa.me/77074791020" className="font-bold text-[#1173D4] hover:underline ml-1" target="_blank" rel="noopener noreferrer">WhatsApp +7 (707) 479-10-20</a> — 
                мастер приедет в течение 30 минут в любой район Алматы.
              </p>
            </div>

          </article>
        </div>
      </section>
      
    </div>
  );
};

export default Index;

