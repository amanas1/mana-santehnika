import { useState, useMemo } from "react";
import SEO from "../components/SEO";
import { Calculator as CalcIcon, Clock, Shield, BadgeCheck } from "lucide-react";

const serviceData: Record<string, { name: string; services: { name: string; basePrice: number }[] }> = {
  drainage: {
    name: "Канализация",
    services: [
      { name: "Прочистка канализации (трос)", basePrice: 5000 },
      { name: "Прочистка канализации (гидродинамика)", basePrice: 12000 },
      { name: "Устранение засора раковины", basePrice: 3500 },
      { name: "Устранение засора унитаза", basePrice: 4000 },
      { name: "Замена канализационных труб", basePrice: 8000 },
      { name: "Установка ревизии", basePrice: 3000 },
    ],
  },
  plumbing: {
    name: "Сантехника",
    services: [
      { name: "Установка смесителя", basePrice: 5000 },
      { name: "Замена сифона", basePrice: 3000 },
      { name: "Ремонт унитаза", basePrice: 4000 },
      { name: "Установка ванны", basePrice: 8000 },
      { name: "Установка раковины", basePrice: 5000 },
      { name: "Подключение стиральной машины", basePrice: 4500 },
    ],
  },
  heating: {
    name: "Отопление",
    services: [
      { name: "Ремонт радиатора", basePrice: 5000 },
      { name: "Замена радиатора", basePrice: 8000 },
      { name: "Промывка системы отопления", basePrice: 15000 },
      { name: "Ремонт бойлера", basePrice: 5000 },
      { name: "Установка полотенцесушителя", basePrice: 6000 },
    ],
  },
};

const complexityOptions = [
  { id: "simple", label: "Простая", multiplier: 1 },
  { id: "medium", label: "Средняя (+30%)", multiplier: 1.3 },
  { id: "complex", label: "Сложная (+60%)", multiplier: 1.6 },
];

const urgencyOptions = [
  { id: "standard", label: "Стандартная", multiplier: 1 },
  { id: "urgent", label: "Срочная (+50%)", multiplier: 1.5 },
  { id: "emergency", label: "Аварийная (+100%)", multiplier: 2 },
];

const CalculatorPage = () => {
  const [category, setCategory] = useState("drainage");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [complexity, setComplexity] = useState("simple");
  const [urgency, setUrgency] = useState("standard");

  const services = serviceData[category].services;
  const selectedService = services[serviceIndex] || services[0];

  const price = useMemo(() => {
    const comp = complexityOptions.find((c) => c.id === complexity)!;
    const urg = urgencyOptions.find((u) => u.id === urgency)!;
    return Math.round(selectedService.basePrice * comp.multiplier * urg.multiplier);
  }, [selectedService, complexity, urgency]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Калькулятор стоимости услуг сантехника в Алматы | Рассчитать цену"
        description="Онлайн-калькулятор стоимости сантехнических услуг в Алматы. Узнайте точную цену работ прямо сейчас!"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0095DA] to-[#0074b3] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-72 h-72 rounded-full bg-white -top-10 -right-10" />
          <div className="absolute w-48 h-48 rounded-full bg-white -bottom-8 -left-8" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <CalcIcon size={18} />
            Калькулятор стоимости
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Рассчитайте стоимость работ</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Выберите параметры и получите ориентировочную стоимость работ мгновенно
          </p>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
            
            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Категория услуг</label>
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value); setServiceIndex(0); }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent transition-all"
              >
                {Object.entries(serviceData).map(([key, val]) => (
                  <option key={key} value={key}>{val.name}</option>
                ))}
              </select>
            </div>

            {/* Service */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Услуга</label>
              <select
                value={serviceIndex}
                onChange={(e) => setServiceIndex(Number(e.target.value))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent transition-all"
              >
                {services.map((s, i) => (
                  <option key={i} value={i}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Complexity */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Сложность работы</label>
              <select
                value={complexity}
                onChange={(e) => setComplexity(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent transition-all"
              >
                {complexityOptions.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>

            {/* Urgency */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">Срочность</label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent transition-all"
              >
                {urgencyOptions.map((u) => (
                  <option key={u.id} value={u.id}>{u.label}</option>
                ))}
              </select>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-[#0095DA] to-[#0074b3] rounded-2xl p-8 text-center text-white">
              <p className="text-sm font-medium opacity-80 mb-2">Ориентировочная стоимость</p>
              <p className="text-5xl font-extrabold mb-2">{price.toLocaleString()} ₸</p>
              <p className="text-sm opacity-70">Окончательная цена после осмотра мастером</p>
            </div>

            <a
              href="tel:+77055535332"
              className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#0095DA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0084c0] transition-colors shadow-lg"
            >
              📞 Заказать услугу
            </a>
          </div>

          {/* Features */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: BadgeCheck, title: "Точный расчёт", desc: "Цены актуальны на 2025 год" },
              { icon: Clock, title: "Работаем 24/7", desc: "Выезд мастера в любое время" },
              { icon: Shield, title: "Без скрытых платежей", desc: "Стоимость фиксируется до начала работ" },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <f.icon size={26} className="text-[#0095DA]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
