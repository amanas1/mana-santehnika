import SEO from "../components/SEO";
import { Users, Calendar, ShieldCheck, Star, CheckCircle2, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-24 md:pt-32 pb-20">
      <SEO 
        title="О мастере Манасе — Сантехник в Алматы | Мастер Манас"
        description="Мастер Манас — выездной сантехник в Алматы. Работаю ежедневно с 9:00 до 21:00. Гарантия на все работы до 1 месяца. Честные цены без скрытых доплат."
        keywords="сантехник алматы, мастер сантехник алматы, профессиональный сантехник, опытный сантехник алматы, надежный сантехник"
        canonical="https://mana.kz/about"
        ogImage="/images/services/manas-santehnik.jpg"
      />
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex gap-2 text-sm text-slate-500 font-medium mb-6">
            <Link to="/" className="hover:text-[#1173D4] transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-slate-900">О мастере</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">О мастере Манасе</h1>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Обо мне</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Меня зовут Манас, я — выездной сантехник в Алматы. Выполняю все виды сантехнических работ: от замены смесителя до капитального ремонта водопровода.
                </p>
                <div className="my-8 rounded-[2rem] overflow-hidden shadow-lg aspect-video md:aspect-[16/9]">
                  <img 
                  src="/images/services/manas-real.jpg" 
                  alt="Манас — сантехник в Алматы" 
                  title="Мастер Манас — сантехник в Алматы"
                  width="600" height="400"
                  className="w-full rounded-2xl shadow-lg border border-gray-100 object-cover"
                />

                </div>
                <p>
                  Мой главный принцип — делать работу на совесть, не навязывать лишние услуги и приезжать вовремя.
                </p>
                <p>
                  Ценю доверие каждого клиента. Работаю ежедневно с 9:00 до 21:00, обслуживаю все районы Алматы и пригород.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Users size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">9–21</span>
                <span className="text-[15px] text-slate-500 font-medium">ежедневно</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Calendar size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">7/7</span>
                <span className="text-[15px] text-slate-500 font-medium">без выходных</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <ShieldCheck size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4" />
                <span className="text-[17px] font-extrabold text-slate-900 block mb-1">Гарантия 1 месяц</span>
                <span className="text-[15px] text-slate-500 font-medium">на работы</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Star size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4" />
                <span className="text-[17px] font-extrabold text-slate-900 block mb-1">Официальная гарантия</span>
                <span className="text-[15px] text-slate-500 font-medium">на все работы</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Мой путь</h2>
            <p className="text-slate-500 font-medium">От первого заказа до надёжного мастера в Алматы</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1173D4] to-[#13B6EC] -translate-x-1/2" />
            <div className="space-y-10">
              {[
                { year: "Начало", title: "Первые шаги", desc: "Начал работать сантехником, обслуживая квартиры в Ауэзовском районе. Первые клиенты и первые рекомендации.", side: "right" },
                { year: "Рост", title: "Постоянные клиенты", desc: "Появились постоянные клиенты. Специализация на ремонте бойлеров и замене труб.", side: "left" },
                { year: "Развитие", title: "Весь Алматы", desc: "Охват всех районов города. Приобретение профессионального оборудования для диагностики и ремонта.", side: "right" },
                { year: "Сайт", title: "Запуск mana.kz", desc: "Открытие собственного сайта для удобного заказа услуг онлайн.", side: "left" },
              ].map((item, idx) => (
                <div key={idx} className={`relative flex items-start gap-6 md:gap-0 ${item.side === "left" ? "md:flex-row-reverse" : ""}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1173D4] border-4 border-white shadow-md mt-1 z-10" />
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${item.side === "left" ? "md:mr-[10%]" : "md:ml-[55%]"}`}>
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-[#1173D4]/30 hover:shadow-md transition-all">
                      <span className="inline-block bg-[#1173D4] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{item.year}</span>
                      <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Наши принципы */}

      <section className="py-16 md:py-24 bg-slate-100/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Наши принципы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Честность", desc: "Открытые цены без скрытых доплат." },
              { title: "Качество", desc: "Используем только проверенные материалы." },
              { title: "Скорость", desc: "Выезжаем в течение часа." },
              { title: "Ответственность", desc: "Даем гарантию на все работы." },
              { title: "Профессионализм", desc: "Постоянно повышаем квалификацию." },
              { title: "Клиентоориентированность", desc: "Каждый клиент важен для нас." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <CheckCircle2 size={28} strokeWidth={2} className="text-green-500 mb-4" />
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[15px] text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Сертификаты и лицензии */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Подход к работе</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Нормы и стандарты", desc: "Соблюдаю санитарные и строительные нормы при выполнении работ." },
              { title: "Безопасность", desc: "Соблюдаю правила техники безопасности на объекте." },
              { title: "Качественные материалы", desc: "Использую сертифицированные материалы от проверенных поставщиков." },
              { title: "Чистота", desc: "Убираю за собой после завершения работ." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 text-[#1173D4] rounded-full flex items-center justify-center mb-6">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 font-medium leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
