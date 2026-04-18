import { Phone } from "lucide-react";
import { trackConversion } from "../utils/googleAds";

const Hero = () => {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/master-working.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-[#0a1628]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full animate-fade-in">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-[#13B6EC] animate-pulse"></span>
            Выезд и осмотр мастера 5 000 ₸
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Сантехник в Алматы
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B6EC] to-[#4ADE80]">
              за 30 минут
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-medium">
            Профессиональные сантехнические услуги с гарантией до 12 месяцев. Работаем во всех районах Алматы с 9:00 до 21:00 без выходных.
          </p>

          <a
            href="tel:+77055535332"
            onClick={trackConversion}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1173D4] to-[#13B6EC] hover:from-[#0d5ca8] hover:to-[#0f9bc9] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_8px_30px_rgba(17,115,212,0.4)] hover:shadow-[0_8px_30px_rgba(17,115,212,0.6)] animate-pulse"
            style={{ animationDuration: '3s' }}
          >
            <Phone size={22} className="fill-white" />
            Вызвать мастера
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-24 max-w-4xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {[
            { value: "1000+", label: "Довольных клиентов" },
            { value: "15+", label: "Лет опыта" },
            { value: "12/7", label: "Срочный выезд" },
            { value: "1 год", label: "Официальная гарантия" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[#13B6EC] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
