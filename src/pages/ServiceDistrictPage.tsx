import { useParams, Link } from "react-router-dom";
import seoData from "../data/seo-data.json";
import SEO from "../components/SEO";
import { Phone, Clock, Shield, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const ServiceDistrictPage = () => {
  const { serviceId, districtId } = useParams();

  // Handle single-param SEO URLs where service or district might be implied
  const effectiveServiceId = serviceId || "vyzov-santehnika";
  const service = seoData.services.find((s) => s.id === effectiveServiceId);
  
  // If districtId is missing, it's an "Almaty overall" page
  const district = seoData.districts.find((d) => d.id === districtId) || {
    id: "almaty",
    name: "Алматы",
    nameGenitive: "Алматы"
  };

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Страница не найдена</h1>
        <Link to="/" className="text-[#0095DA] hover:underline font-medium">← Вернуться на главную</Link>
      </div>
    );
  }

  const title = `${service.title} в ${district.nameGenitive}${district.id !== "almaty" ? " Алматы" : ""} | Мастер Манас`;
  const description = `${service.title} в ${district.nameGenitive}${district.id !== "almaty" ? " Алматы" : ""} — ${service.price}. Выезд мастера 24/7 за 30 минут. Гарантия 12 месяцев. ☎ +7 (705) 553-53-32`;

  // Get other services for cross-linking
  const otherServices = seoData.services.filter((s) => s.id !== serviceId).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={description} />

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
            <span>Услуги</span>
            <span>/</span>
            <span>{service.title}</span>
            <span>/</span>
            <span>{district.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {service.title} в {district.nameGenitive}{district.id !== "almaty" ? " Алматы" : ""}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            {service.description}
          </p>
          <div className="flex items-center gap-2 mb-6 text-white bg-white/10 w-fit px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm">
            <MapPin size={18} className="text-amber-400 shrink-0" />
            <span className="text-sm font-medium">{district.feature}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <Clock size={16} /> {service.time}
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <Shield size={16} /> Гарантия 12 мес.
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <MapPin size={16} /> {district.name}
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
              <h2 className="text-2xl font-bold mb-4">О услуге</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.longDescription || service.description}
              </p>

              <h3 className="text-xl font-bold mb-4">Наши преимущества в {district.nameGenitive}:</h3>
              <ul className="space-y-3">
                {[
                  `Быстрый выезд 24/7 в ${district.name} — приедем за 30 минут`,
                  "Гарантия на работы до 12 месяцев",
                  "Честные цены без накруток и скрытых платежей",
                  "Опытные мастера со стажем более 15 лет",
                  "Бесплатная диагностика при заказе работ",
                  "Чистота после работы — убираем за собой",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#4ADE80] shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img
                src={service.image}
                alt={service.alt}
                title={service.title}
                className="w-full h-64 object-cover"
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

            {/* Other Districts */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">{service.title} в других районах</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {seoData.districts
                  .filter((d) => d.id !== districtId)
                  .map((d) => (
                    <Link
                      key={d.id}
                    to={`/uslugi/${effectiveServiceId}/${d.id}`}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-[#0095DA] hover:text-white text-sm font-medium transition-all"
                    >
                      <MapPin size={16} className="shrink-0" />
                      {d.name}
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
                  <span>Гарантия до 12 месяцев</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={18} className="text-amber-500 shrink-0" />
                  <span>Выезд по {district.nameGenitive}</span>
                </div>
              </div>

              <a
                href="tel:+77055535332"
                className="w-full flex items-center justify-center gap-2 bg-[#4ADE80] hover:bg-[#3dca72] text-gray-900 py-4 rounded-xl font-bold text-lg transition-colors shadow-md"
              >
                <Phone size={20} />
                Заказать
              </a>
              
              <a
                href="https://wa.me/77055535332"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0095DA] hover:bg-[#0084c0] text-white py-3 rounded-xl font-bold text-sm transition-colors mt-3"
              >
                💬 WhatsApp
              </a>

              <p className="text-xs text-gray-400 text-center mt-3">Бесплатная консультация</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDistrictPage;
