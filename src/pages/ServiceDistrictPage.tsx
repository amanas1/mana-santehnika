import { useParams, Link, useLocation, Navigate } from "react-router-dom";
import seoData from "../data/seo-data.json";
import serviceIntentData from "../data/service-intent.json";
import SEO from "../components/SEO";
import { Phone, Clock, Shield, MapPin, CheckCircle, MessageCircle } from "lucide-react";
import { cleanServiceCopy } from "../utils/seoText";

const ServiceDistrictPage = () => {
  let { serviceId, districtId } = useParams();
  const location = useLocation();

  // If parameters weren't extracted properly due to RRv6 suffix rules (e.g. /:serviceId-almaty)
  if (!serviceId && !districtId) {
    const path = location.pathname.substring(1);
    if (path.endsWith('-almaty')) {
      serviceId = path.replace('-almaty', '');
    } else if (path.startsWith('santehnik-') && path.endsWith('-rayon')) {
      districtId = path.replace('santehnik-', '').replace('-rayon', '');
    }
  }

  // Handle single-param SEO URLs where service or district might be implied
  const effectiveServiceId = serviceId || "vyzov-santehnika";
  const rawService = seoData.services.find((s) => s.id === effectiveServiceId);
  
  // If districtId is missing, it's an "Almaty overall" page
  const district = {
    id: "almaty",
    name: "Алматы",
    nameGenitive: "Алматы",
    feature: "Обслуживаем все районы города Алматы, ежедневно с 9:00 до 21:00"
  };

  if (!rawService) {
    return <Navigate to="/" replace />;
  }
  const service = cleanServiceCopy(rawService);
  const intent = serviceIntentData[effectiveServiceId as keyof typeof serviceIntentData];

  const title = service.seoTitle || `${service.title} в ${district.nameGenitive}${district.id !== "almaty" ? " Алматы" : ""} | Мастер Манас`;
  const rawDescription = service.searchDescription || `${service.title} в ${district.nameGenitive}${district.id !== "almaty" ? " Алматы" : ""} — ${service.price}. ${intent?.intro || service.description} Манас: +7 (705) 553-53-32.`;
  const description = rawDescription.length > 170
    ? `${rawDescription.slice(0, 169).replace(/\s+\S*$/, "")}…`
    : rawDescription;

  // Rotate related services so every service page receives useful internal links,
  // instead of repeatedly linking only to the first items in the catalog.
  const currentServiceIndex = seoData.services.findIndex((item) => item.id === effectiveServiceId);
  const rotatedServices = [
    ...seoData.services.slice(currentServiceIndex + 1),
    ...seoData.services.slice(0, currentServiceIndex),
  ];
  const otherServices = rotatedServices.slice(0, 4).map(cleanServiceCopy);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={title} 
        description={description}
        keywords={`${service.title.toLowerCase()} алматы, ${intent?.aliases?.map((alias) => `${alias} алматы`).join(", ") || ""}, сантехник алматы, услуги сантехника`}
        canonical={`https://mana.kz/${service.id}-almaty`}
        ogImage={service.image}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Plumber",
              "@id": "https://mana.kz/#business",
              name: "Мастер Манас — сантехник в Алматы",
              url: "https://mana.kz/",
              telephone: "+77055535332",
              address: { "@type": "PostalAddress", addressLocality: "Алматы", addressCountry: "KZ" },
              image: "https://mana.kz/images/services/manas-real.jpg",
              openingHours: "Mo-Su 09:00-21:00",
              areaServed: { "@type": "City", name: "Алматы" },
            },
            {
              "@type": "Service",
              name: `${service.title} в Алматы`,
              url: `https://mana.kz/${service.id}-almaty`,
              description: service.description,
              provider: { "@id": "https://mana.kz/#business" },
              offers: {
                "@type": "Offer",
                priceCurrency: "KZT",
                price: service.price.replace(/[^0-9]/g, ""),
                url: `https://mana.kz/${service.id}-almaty`,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Главная", item: "https://mana.kz/" },
                { "@type": "ListItem", position: 2, name: "Услуги", item: "https://mana.kz/services" },
                { "@type": "ListItem", position: 3, name: service.title, item: `https://mana.kz/${service.id}-almaty` },
              ],
            },
            ...(intent ? [{
              "@type": "FAQPage",
              mainEntity: intent.faq.map((item) => ({
                "@type": "Question", name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            }] : []),
          ],
        }}
      />

      {/* Hero Banner with Image */}
      <div className="relative min-h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
          title={service.title}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0095DA]/95 to-[#0074b3]/85" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
          <nav className="mb-6 text-sm text-white/80 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Услуги</Link>
            <span>/</span>
            <span>{service.title}</span>
            
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {service.title} в {district.nameGenitive}{district.id !== "almaty" ? " Алматы" : ""}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            {service.description}
          </p>
          <div className="flex items-center gap-2 mb-6 text-white bg-white/10 w-fit px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm">
            <CheckCircle size={18} className="text-[#4ADE80] shrink-0" />
            <span className="text-sm font-medium">Обслуживаем все районы города Алматы</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <Clock size={16} /> {service.time}
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <Shield size={16} /> Гарантия 1 мес.
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <CheckCircle size={16} /> Без выходных
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column — Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Об услуге</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {service.description}
              </p>

              {intent && (
                <div className="space-y-8 border-t border-gray-100 pt-8">
                  <section>
                    <h2 className="text-2xl font-bold text-[#0095DA] mb-4">Что входит в услугу</h2>
                    <p className="text-gray-600 leading-relaxed mb-5">{intent.intro}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {intent.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                          <CheckCircle size={20} className="text-[#4ADE80] shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#0095DA] mb-4">От чего зависит стоимость</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Цена начинается {service.price.replace(/^от\s*/i, "от ")}. Точную стоимость называю после осмотра и согласовываю до начала основной работы.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      {intent.priceFactors.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#0095DA] mb-4">Частые вопросы</h2>
                    <div className="space-y-4">
                      {intent.faq.map((item) => (
                        <div key={item.q} className="rounded-xl border border-gray-100 p-5">
                          <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              <h2 className="text-2xl font-bold text-[#0095DA] mt-10 mb-4">Как я выполняю работу</h2>
              <ul className="space-y-3">
                {[
                  "Выезжаю ежедневно с 9:00 до 21:00 по всему Алматы",
                  "Объясняю причину неисправности до начала ремонта",
                  "Согласовываю стоимость и необходимые материалы",
                  "Предоставляю гарантию до одного месяца",
                  "Проверяю соединения и работу оборудования после монтажа",
                  "Оставляю рабочее место в аккуратном состоянии",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#4ADE80] shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8 mt-4">
              <img
                src={service.secondaryImage || service.image}
                alt={service.secondaryImageAlt || service.alt}
                title={service.title}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Other Services */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Другие услуги в {district.nameGenitive}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherServices.map((s) => (
                  <Link
                    key={s.id}
                    to={districtId ? `/uslugi/${s.id}/${districtId}` : `/${s.id}-almaty`}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#0095DA] hover:text-white transition-all group"
                  >
                    <img
                      src={s.image}
                      alt={s.alt}
                      title={s.title}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-sm">{s.title}</p>
                      <p className="text-xs text-gray-400 group-hover:text-white/70">{s.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column — Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sticky top-24">
              <h3 className="text-lg font-bold mb-2 text-center">Стоимость услуги</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-extrabold text-[#0095DA]">{service.price}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock size={18} className="text-[#0095DA] shrink-0" />
                  <span>{service.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield size={18} className="text-[#4ADE80] shrink-0" />
                  <span>Гарантия до 1 месяца</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={18} className="text-amber-500 shrink-0" />
                  <span>Выезд по всему Алматы</span>
                </div>
              </div>

              <a
                href="tel:+77055535332"
                className="w-full flex items-center justify-center gap-2 bg-[#4ADE80] hover:bg-[#3dca72] text-gray-900 py-4 rounded-xl font-bold text-lg transition-colors shadow-md"
              >
                <Phone size={20} />
                Позвонить
              </a>
              <a href="tel:+77055535332" className="block text-center mt-3 font-bold text-[#0095DA]">
                +7 (705) 553-53-32
              </a>
              
              <a
                href="https://wa.me/77055535332"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0095DA] hover:bg-[#0084c0] text-white py-3 rounded-xl font-bold text-sm transition-colors mt-3"
              >
                <MessageCircle size={18} /> Написать в WhatsApp
              </a>

              <p className="text-xs text-gray-400 text-center mt-3">Можно заранее прислать фотографию задачи</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDistrictPage;
