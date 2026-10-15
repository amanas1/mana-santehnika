import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import SEO from "../components/SEO";
import seoData from "../data/seo-data.json";
import { trackConversion } from "../utils/googleAds";
import { cleanServiceCopy } from "../utils/seoText";

const PHONE = "+77055535332";
const WHATSAPP = "https://wa.me/77055535332";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-slate-900">{question}</span>
        <ChevronDown className={`shrink-0 text-[#1173D4] transition-transform ${open ? "rotate-180" : ""}`} size={20} />
      </button>
      <div hidden={!open} className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-600">
        {answer}
      </div>
    </div>
  );
};

const Index = () => {
  const services = seoData.services.map(cleanServiceCopy);
  const featuredServices = services.slice(0, 8);
  const priceIds = [
    "vyzov-santehnika",
    "ustranenie-protechek",
    "remont-smesitelya",
    "ustanovka-smesitelya",
    "remont-unitaza",
    "prochistka-kuhni",
    "podklyuchenie-stiralnoj-mashiny",
    "ustanovka-unitaza",
  ];
  const priceServices = priceIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  const districts = [
    "Алмалинский",
    "Бостандыкский",
    "Ауэзовский",
    "Медеуский",
    "Жетысуский",
    "Турксибский",
    "Алатауский",
    "Наурызбайский",
  ];

  const faqItems = [
    {
      q: "Сколько стоит вызов сантехника в Алматы?",
      a: "Стоимость зависит от задачи. Работы начинаются от 3 500 ₸. После осмотра я объясняю причину неисправности и называю цену до начала ремонта.",
    },
    {
      q: "Как быстро вы сможете приехать?",
      a: "Время приезда зависит от вашего адреса и текущих заказов. Я работаю ежедневно с 9:00 до 21:00 и выезжаю во все восемь районов Алматы.",
    },
    {
      q: "Есть ли гарантия на работу?",
      a: "Да, на выполненные работы предоставляю гарантию до одного месяца. Срок и условия зависят от вида ремонта и состояния существующего узла.",
    },
    {
      q: "Можно заранее узнать стоимость по фотографии?",
      a: "По фотографии я могу оценить характер задачи и назвать ориентир. Точная цена определяется после осмотра, когда видны доступ, состояние резьбы, кранов и соседних соединений.",
    },
    {
      q: "Нужно ли покупать детали до приезда мастера?",
      a: "Лучше сначала прислать фото или дождаться осмотра. Неподходящий размер, тип резьбы или способ подключения часто приводит к лишним расходам.",
    },
  ];

  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Plumber",
      "@id": "https://mana.kz/#business",
      name: "Мастер Манас — сантехник в Алматы",
      url: "https://mana.kz/",
      telephone: PHONE,
      image: "https://mana.kz/images/services/manas-real.jpg",
      priceRange: "от 3500 ₸",
      address: { "@type": "PostalAddress", addressLocality: "Алматы", addressCountry: "KZ" },
      areaServed: { "@type": "City", name: "Алматы" },
      openingHours: "Mo-Su 09:00-21:00",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.slice(0, 3).map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });
  const submitRequest = (event: React.FormEvent) => {
    event.preventDefault();
    trackConversion();
    const text = encodeURIComponent(
      `Здравствуйте, Манас. Меня зовут ${formData.name}. Телефон: ${formData.phone}. Задача: ${formData.service}.`,
    );
    window.open(`${WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Сантехник в Алматы — от 3 500 ₸ | Мастер Манас"
        description="Сантехник на дом в Алматы: протечки, засоры, ремонт и установка сантехники от 3 500 ₸. Работаю лично, цену согласую до ремонта. Ежедневно 9:00–21:00."
        keywords="сантехник алматы, вызвать сантехника алматы, услуги сантехника, сантехник на дом, сантехнические работы алматы"
        canonical="https://mana.kz/"
        ogImage="/images/services/hero-plumber.jpg"
        schema={homeSchema}
      />

      <section className="relative flex min-h-[650px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/hero-plumber.jpg')" }}
          role="img"
          aria-label="Мастер выполняет сантехнические работы в ванной комнате"
        >
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Личный выездной мастер</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Сантехник в Алматы — мастер Манас
            </h1>
            <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-200 md:text-xl">
              Устраняю протечки и засоры, ремонтирую и устанавливаю сантехнику. Работаю лично, стоимость — от 3 500 ₸. До ремонта согласовываю цену, после — проверяю результат. Выезжаю по всем районам Алматы ежедневно с 9:00 до 21:00.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-xl bg-[#1173D4] px-7 py-4 font-bold text-white shadow-lg shadow-blue-900/30 transition hover:bg-[#0f67be]">
                <Phone size={20} /> Позвонить Манасу
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-bold text-white shadow-lg shadow-green-950/20 transition hover:bg-[#20bd5a]">
                <MessageCircle size={20} /> Написать в WhatsApp
              </a>
            </div>
            <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["9:00–21:00", "ежедневный приём заявок"],
                ["8 районов", "выезд по всему Алматы"],
                ["до 1 месяца", "гарантия на работу"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md">
                  <div className="text-2xl font-extrabold">{value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Популярные сантехнические услуги</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Ремонтирую бытовую сантехнику в квартирах, частных домах и небольших коммерческих помещениях.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Link key={service.id} to={`/${service.id}-almaty`} className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width="800" height="533" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Wrench className="mb-3 text-[#1173D4]" size={20} />
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-slate-500">{service.description}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="font-extrabold text-[#1173D4]">{service.price}</span>
                    <ArrowRight size={18} className="text-slate-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 font-bold text-white transition hover:bg-slate-800">
              Все услуги <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img src="/images/services/manas-real.jpg" alt="Мастер Манас — сантехник в Алматы" className="h-full w-full object-cover" loading="lazy" width="800" height="533" />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Работаю лично и объясняю решение</h2>
            <div className="space-y-4 leading-relaxed text-slate-600">
              <p>Меня зовут Манас. Я выезжаю на заявки сам: осматриваю узел целиком, нахожу источник проблемы и показываю заказчику, что именно неисправно.</p>
              <p>Не начинаю с замены случайной детали. Сначала проверяю соединения, запорные краны, подводки и работу оборудования. После ремонта постепенно открываю воду и повторно осматриваю каждое соединение.</p>
            </div>
            <ul className="mt-7 space-y-3">
              {[
                "Цена согласуется до начала основной работы",
                "Исправные детали не предлагаю менять без причины",
                "Использую подходящий инструмент и расходные материалы",
                "После монтажа проверяю герметичность и работу оборудования",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-semibold text-slate-800">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={20} /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-[#1173D4]">Подробнее обо мне <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Как проходит вызов сантехника</h2>
            <p className="mt-4 text-slate-600">Понятная последовательность без неожиданной замены деталей и скрытых работ.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              ["1", "Вы описываете задачу", "По телефону или в WhatsApp сообщите адрес, симптомы и пришлите фотографию."],
              ["2", "Я осматриваю узел", "Проверяю не только место течи, но и доступные соседние соединения."],
              ["3", "Согласовываем решение", "Объясняю причину, нужные материалы и стоимость до начала ремонта."],
              ["4", "Ремонт и проверка", "Выполняю работу, включаю воду и контролирую узел под нагрузкой."],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-3xl border border-slate-200 p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-black text-[#1173D4]">{number}</div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Цены на основные работы</h2>
            <p className="mt-4 text-slate-300">Указана начальная стоимость. Итог зависит от доступа, состояния соединений и необходимых материалов.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priceServices.map((service) => (
              <Link key={service.id} to={`/${service.id}-almaty`} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <div className="mb-2 text-sm font-semibold text-slate-200">{service.title}</div>
                <div className="text-xl font-extrabold text-sky-300">{service.price}</div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/prices" className="inline-flex items-center gap-2 rounded-xl bg-[#1173D4] px-7 py-4 font-bold text-white">Открыть полный прайс <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Выезд по всем районам Алматы</h2>
              <p className="mt-4 leading-relaxed text-slate-600">Приезжаю в квартиры, частные дома, новостройки, офисы и небольшие коммерческие помещения. Время приезда называю после получения адреса.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {districts.map((district) => (
                  <span key={district} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                    <MapPin size={15} className="text-[#1173D4]" /> {district}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="mb-5 text-2xl font-bold text-slate-900">Когда лучше позвонить сразу</h3>
              <ul className="space-y-4 text-slate-600">
                {[
                  "Вода течёт из трубы, крана, подводки или под сантехникой.",
                  "Запорный кран не перекрывает воду или поворачивается с трудом.",
                  "Слив работает медленно, вода возвращается или появился запах.",
                  "Бачок постоянно набирает воду, не смывает или подтекает.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={19} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Примеры сантехнических работ</h2>
            <p className="mt-4 text-slate-600">Разные виды задач: сантехнический узел, подключение техники и ремонт оборудования.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ["/images/services/pipe-welding-detail.jpg", "Монтаж и ремонт пластиковых труб"],
              ["/images/services/washer-install-detail.jpg", "Подключение стиральной машины"],
              ["/images/services/unitaz-repair-detail.jpg", "Ремонт арматуры бачка унитаза"],
            ].map(([src, alt]) => (
              <figure key={src} className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
                <img src={src} alt={alt} className="h-64 w-full object-cover" loading="lazy" width="1200" height="800" />
                <figcaption className="p-5 font-semibold text-slate-800">{alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-[#1173D4]">Смотреть больше работ <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Вопросы перед вызовом мастера</h2>
          </div>
          <div className="space-y-4">{faqItems.map((item) => <FAQItem key={item.q} question={item.q} answer={item.a} />)}</div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Опишите проблему — я отвечу в рабочее время</h2>
            <p className="mt-5 leading-relaxed text-slate-300">Пришлите фотографию места течи или оборудования. Так я заранее пойму задачу и возьму подходящий инструмент.</p>
            <div className="mt-8 space-y-4">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-xl font-extrabold"><Phone className="text-sky-300" /> +7 (705) 553-53-32</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-green-400"><MessageCircle /> WhatsApp на этот же номер</a>
              <div className="flex items-center gap-3 text-slate-300"><Clock className="text-sky-300" /> Ежедневно, 9:00–21:00</div>
              <div className="flex items-center gap-3 text-slate-300"><ShieldCheck className="text-sky-300" /> Гарантия до одного месяца</div>
            </div>
          </div>
          <form onSubmit={submitRequest} className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="mb-6 text-2xl font-extrabold">Заявка в WhatsApp</h3>
            <div className="space-y-5">
              <label className="block text-sm font-bold">Ваше имя<input required value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" /></label>
              <label className="block text-sm font-bold">Телефон<input required type="tel" inputMode="tel" minLength={10} maxLength={20} pattern="(?:[+]?[7]|8)?[ ()-]*[0-9]{3}[ ()-]*[0-9]{3}[ ()-]*[0-9]{2}[ ()-]*[0-9]{2}" title="Введите номер в формате +7 705 123-45-67" value={formData.phone} onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))} placeholder="+7 (___) ___-__-__" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" /></label>
              <label className="block text-sm font-bold">Что нужно сделать?<textarea required value={formData.service} onChange={(event) => setFormData((current) => ({ ...current, service: event.target.value }))} rows={4} className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" /></label>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition hover:bg-[#20bd5a]"><MessageCircle size={20} /> Отправить Манасу</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
