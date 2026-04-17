import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { useState } from "react";
import seoData from "../data/seo-data.json";
import { ArrowRight, Wrench } from "lucide-react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("Все услуги");

  const categories = [
    { id: "all", name: "Все услуги" },
    { id: "plumbing", name: "Сантехника" }
  ];

  const filteredServices = activeCategory === "Все услуги" 
    ? seoData.services 
    : seoData.services.filter(s => {
        if (activeCategory === "Сантехника" && s.category === "plumbing") return true;
        return false;
      });
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Услуги сантехника в Алматы — все виды сантехнических работ | Мастер Манас"
        description="Все услуги профессионального сантехника в Алматы: вызов мастера, устранение протечек, ремонт бойлера, установка смесителей, монтаж стиральных машин. Цены от 3 500 ₸. Выезд 24/7."
        keywords="услуги сантехника алматы, сантехнические работы алматы, ремонт сантехники, вызвать сантехника алматы, установка сантехники алматы, сантехник на дом алматы"
        canonical="https://mana.kz/services"
        ogImage="/images/services/tools.jpg"
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Наши услуги</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Выполняем полный комплекс сантехнических работ в Алматы любой сложности. Даем официальную гарантию на все виды работ.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Wrench className="text-[#0095DA]" size={32} />
              Каталог услуг
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Выберите интересующую вас услугу, чтобы узнать подробности. Мы регулярно обновляем оборудование и используем современные технологии.
            </p>
          </div>

          <div className="mb-8 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-2 min-w-max justify-center md:justify-start lg:justify-center border-b border-gray-100 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.name
                      ? "bg-[#0095DA] text-white shadow-md shadow-[#0095DA]/20"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0095DA]/10 group-hover:bg-[#0095DA]/0 transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    title={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {index < 3 && (
                    <div className="absolute top-4 left-4 bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg shadow-[#0095DA]/30">
                      Популярно
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#0095DA] z-20 shadow-sm">
                    {service.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1 text-sm line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="block text-2xl font-extrabold text-[#0095DA]">
                          {service.price}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1">⏱️ {service.time}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/${service.id}-almaty`} 
                        className="bg-[#0095DA] hover:bg-[#0084c0] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-md text-center"
                      >
                        Заказать
                      </Link>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 22-8-4.5v-9L12 4l8 4.5v9Z"/><path d="m9 12 2 2 4-4"/></svg>
                      Гарантия 1 год
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-[#0095DA] to-[#0070a3] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Нужна срочная помощь мастера?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
              Напишите нам в WhatsApp или позвоните. Дежурный мастер готов выехать к вам через 5 минут после звонка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a 
                href="tel:+77055535332"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-[#0095DA] bg-white hover:bg-gray-50 shadow-lg transition-all hover:scale-105"
              >
                Позвонить сейчас
              </a>
              <a 
                href="https://wa.me/77055535332"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 shadow-lg transition-all hover:scale-105"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
