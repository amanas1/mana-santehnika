import { useState } from "react";
import SEO from "../components/SEO";
import { Wrench, Phone, CheckCircle2, Zap, Droplets, Flame, AlertTriangle, ShowerHead } from "lucide-react";

interface PriceItem {
  name: string;
  unit: string;
  price: string;
  popular?: boolean;
}

interface PriceCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    id: "drainage",
    name: "Канализация",
    icon: Droplets,
    items: [
      { name: "Прочистка канализации (трос)", unit: "за услугу", price: "от 5 000 ₸", popular: true },
      { name: "Прочистка канализации (гидродинамика)", unit: "за услугу", price: "от 12 000 ₸" },
      { name: "Устранение засора раковины", unit: "за услугу", price: "от 3 500 ₸", popular: true },
      { name: "Устранение засора унитаза", unit: "за услугу", price: "от 4 000 ₸" },
      { name: "Замена канализационных труб", unit: "за погонный метр", price: "от 3 000 ₸" },
      { name: "Установка ревизии", unit: "за точку", price: "от 3 000 ₸" },
      { name: "Замена стояка канализации", unit: "за стояк", price: "от 15 000 ₸" },
      { name: "Видеодиагностика труб", unit: "за услугу", price: "от 8 000 ₸" },
    ],
  },
  {
    id: "water",
    name: "Водоснабжение",
    icon: ShowerHead,
    items: [
      { name: "Замена труб водоснабжения", unit: "за точку", price: "от 5 000 ₸", popular: true },
      { name: "Установка счётчика воды", unit: "за шт.", price: "от 4 000 ₸", popular: true },
      { name: "Установка фильтра воды", unit: "за услугу", price: "от 4 000 ₸" },
      { name: "Замена стояков водоснабжения", unit: "за стояк", price: "от 12 000 ₸" },
      { name: "Устранение протечки", unit: "за услугу", price: "от 3 500 ₸", popular: true },
      { name: "Подключение стиральной машины", unit: "за услугу", price: "от 4 500 ₸" },
      { name: "Подключение посудомоечной машины", unit: "за услугу", price: "от 5 000 ₸" },
      { name: "Установка обратного осмоса", unit: "за услугу", price: "от 6 000 ₸" },
    ],
  },
  {
    id: "plumbing",
    name: "Сантехника",
    icon: Wrench,
    items: [
      { name: "Установка смесителя", unit: "за шт.", price: "от 5 000 ₸", popular: true },
      { name: "Ремонт смесителя", unit: "за услугу", price: "от 3 000 ₸" },
      { name: "Замена сифона", unit: "за шт.", price: "от 3 000 ₸" },
      { name: "Установка раковины", unit: "за шт.", price: "от 5 000 ₸" },
      { name: "Ремонт унитаза", unit: "за услугу", price: "от 4 000 ₸", popular: true },
      { name: "Установка унитаза", unit: "за шт.", price: "от 6 000 ₸" },
      { name: "Установка ванны", unit: "за шт.", price: "от 8 000 ₸" },
      { name: "Ремонт душевой кабины", unit: "за услугу", price: "от 6 000 ₸" },
      { name: "Установка инсталляции", unit: "за шт.", price: "от 10 000 ₸" },
    ],
  },
  {
    id: "heating",
    name: "Отопление",
    icon: Flame,
    items: [
      { name: "Установка радиатора", unit: "за шт.", price: "от 8 000 ₸", popular: true },
      { name: "Замена радиатора", unit: "за шт.", price: "от 8 000 ₸" },
      { name: "Промывка системы отопления", unit: "за услугу", price: "от 15 000 ₸" },
      { name: "Ремонт бойлера", unit: "за услугу", price: "от 5 000 ₸" },
      { name: "Установка полотенцесушителя", unit: "за шт.", price: "от 6 000 ₸" },
      { name: "Тёплый пол (монтаж)", unit: "за м²", price: "от 2 500 ₸" },
    ],
  },
  {
    id: "emergency",
    name: "Аварийные",
    icon: AlertTriangle,
    items: [
      { name: "Аварийный выезд (ночь/выходные)", unit: "за выезд", price: "от 5 000 ₸", popular: true },
      { name: "Устранение прорыва трубы", unit: "за услугу", price: "от 6 000 ₸", popular: true },
      { name: "Аварийная прочистка канализации", unit: "за услугу", price: "от 7 000 ₸" },
      { name: "Устранение потопа", unit: "за услугу", price: "от 8 000 ₸" },
      { name: "Замена аварийного участка трубы", unit: "за услугу", price: "от 5 000 ₸" },
      { name: "Перекрытие подачи воды", unit: "за услугу", price: "от 2 000 ₸" },
    ],
  },
];

const Prices = () => {
  const [activeTab, setActiveTab] = useState("drainage");

  const activeCategory = priceCategories.find((c) => c.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-16 md:pt-20">
      <SEO 
        title="Цены на услуги сантехника в Алматы 2025 — Прайс-лист | От 1500₸"
        description="Актуальный прайс-лист на все виды сантехнических услуг в Алматы. Прозрачные цены, без скрытых платежей. Выезд и диагностика — бесплатно!"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1173D4] to-[#13B6EC] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20 blur-3xl mix-blend-overlay" />
          <div className="absolute w-64 h-64 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Наши цены</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Точная стоимость озвучивается до начала работ после диагностики.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-10 px-6 relative z-20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            
            {/* Free Diagnostics Banner */}
            <div className="bg-white rounded-2xl p-6 mb-10 shadow-lg border border-gray-100 flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-50 text-[#1173D4] rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Выезд и диагностика — БЕСПЛАТНО!*</h3>
                <p className="text-gray-500 text-sm">*При согласии на проведение ремонтных работ. В случае отказа от ремонта оплачивается вызов мастера в размере 3000 тенге.</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-2 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-x-auto hide-scrollbar">
              {priceCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrapflex-1 min-w-max ${
                      isActive
                        ? "bg-gray-50 text-[#1173D4] shadow-sm"
                        : "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50/50"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-[#1173D4]" : "text-gray-400"} />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Price Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12 animate-fade-in" key={activeTab}>
              <div className="p-8 pb-4">
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <activeCategory.icon className="text-[#1173D4]" size={28} />
                  {activeCategory.name}
                </h2>
              </div>
              <div className="divide-y divide-gray-50 px-8 pb-8">
                {activeCategory.items.map((item, idx) => (
                  <div key={idx} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1173D4] transition-colors">{item.name}</h3>
                        {item.popular && (
                          <span className="bg-gradient-to-r from-[#1173D4] to-[#13B6EC] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                            Популярно
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{item.unit}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-xl font-extrabold text-[#1173D4] bg-blue-50 px-4 py-2 rounded-xl inline-block group-hover:scale-105 transition-transform">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-[#1173D4] to-[#13B6EC] rounded-3xl p-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-64 h-64 rounded-full bg-white -top-10 -right-10 blur-3xl mix-blend-overlay" />
                <div className="absolute w-40 h-40 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Не нашли нужную услугу?</h3>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto text-lg leading-relaxed">
                  Мы выполняем более 100 видов работ. Позвоните нам прямо сейчас, опишите вашу проблему, и мастер назовет ориентировочную стоимость.
                </p>
                <a 
                  href="tel:+77055535332"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl text-[#1173D4] bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1 gap-3 hover:shadow-2xl"
                >
                  <Phone size={24} />
                  Узнать точную цену
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
