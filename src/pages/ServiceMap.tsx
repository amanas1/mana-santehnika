import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Map, Car, ShieldCheck } from "lucide-react";

interface DistrictInfo {
  id: string;
  name: string;
  arrivalTime: string;
  zone: "green" | "blue" | "yellow";
}

const districts: DistrictInfo[] = [
  { id: "almalinskij", name: "Алмалинский", arrivalTime: "20–25 мин", zone: "green" },
  { id: "medeuskij", name: "Медеуский", arrivalTime: "20–30 мин", zone: "green" },
  { id: "bostandykskij", name: "Бостандыкский", arrivalTime: "25–30 мин", zone: "green" },
  { id: "auezovskij", name: "Ауэзовский", arrivalTime: "30–35 мин", zone: "blue" },
  { id: "zhetysuskij", name: "Жетысуский", arrivalTime: "35–40 мин", zone: "blue" },
  { id: "turksibskij", name: "Турксибский", arrivalTime: "35–45 мин", zone: "blue" },
  { id: "alatauskij", name: "Алатауский", arrivalTime: "40–50 мин", zone: "yellow" },
  { id: "nauryzbajskij", name: "Наурызбайский", arrivalTime: "45–50 мин", zone: "yellow" },
];

const ServiceMapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col pt-16 md:pt-20">
      <SEO
        title="Карта обслуживания — Районы Алматы | Время приезда мастера"
        description="Карта обслуживания районов Алматы. Узнайте время приезда мастера в ваш исходный район. Работаем во всех 8 районах города."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1173D4] to-[#13B6EC] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20 blur-3xl mix-blend-overlay" />
          <div className="absolute w-64 h-64 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
            <Map size={18} />
            Карта обслуживания
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">География выездов</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            Работаем во всех 8 районах Алматы. Среднее время приезда мастера составляет от 30 до 45 минут в любую точку.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 -mt-10 px-6 relative z-20">
        <div className="container mx-auto max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Col: Interactive Map */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden h-[500px] lg:h-[700px] relative order-2 lg:order-1">
                {/* Embed Yandex Map as the central visual piece */}
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=76.928610%2C43.238949&z=11" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Карта обслуживания Алматы"
                ></iframe>
                
                {/* Overlay Legend */}
                <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-sm" />
                       <span className="text-sm font-bold text-gray-800">20–30 мин <span className="text-gray-400 font-medium">— центр</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm" />
                      <span className="text-sm font-bold text-gray-800">35–45 мин <span className="text-gray-400 font-medium">— спальные</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-amber-500 shadow-sm" />
                      <span className="text-sm font-bold text-gray-800">45–50 мин <span className="text-gray-400 font-medium">— окраины</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Sidebar with Districts & Stats */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6 order-1 lg:order-2">
              
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-[#1173D4] to-[#13B6EC] rounded-[2rem] p-8 text-white shadow-lg overflow-hidden relative">
                <div className="absolute -right-10 -bottom-10 opacity-20">
                  <Car size={150} />
                </div>
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-extrabold mb-1">100%</h4>
                      <p className="text-sm font-medium text-blue-50">Покрытие всех районов Алматы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-extrabold mb-1">~30 м</h4>
                      <p className="text-sm font-medium text-blue-50">Среднее время приезда на вызов</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Districts List */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex-grow">
                <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-[#1173D4]" /> Выберите район:
                </h3>
                
                <div className="flex flex-col gap-3">
                  {districts.map((d) => (
                    <Link
                      key={d.id}
                      to={`/uslugi/vyzov-santehnika/${d.id}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all"
                    >
                      <span className="font-bold text-gray-900 group-hover:text-[#1173D4] transition-colors">{d.name}</span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                        <Clock size={12} />
                        {d.arrivalTime}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4 text-center">Бесплатный выезд мастера при заказе работы!</p>
                  <a
                    href="tel:+77055535332"
                    className="w-full flex items-center justify-center px-6 py-4 text-[15px] font-bold rounded-xl text-white bg-[#1173D4] hover:bg-[#0084c0] shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 gap-2"
                  >
                    <Phone size={18} />
                    Связаться с нами
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMapPage;
