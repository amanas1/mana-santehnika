import SEO from "../components/SEO";
import { Users, Calendar, ShieldCheck, Star, CheckCircle2, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-24 md:pt-32 pb-20">
      <SEO 
        title="О мастере Манасе — Профессиональный сантехник в Алматы с 10-летним опытом"
        description="Мастер Манас — профессиональный сантехник в Алматы с опытом более 10 лет. Более 1000 выполненных заказов. Гарантия на все работы. Честные цены без скрытых доплат."
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
            <span className="text-slate-900">О компании</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">О компании Мастер Манас</h1>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Наша история</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Компания "Мастер Манас" была основана в 2015 году с одной главной целью — предоставлять жителям Алматы качественные и честные услуги в сфере сантехники. 
                </p>
                <div className="my-8 rounded-[2rem] overflow-hidden shadow-lg aspect-video md:aspect-[16/9]">
                  <img 
                  src="/images/services/manas-real.jpg" 
                  alt="Сантехник Манас" 
                  title="Сантехник Манас"
                  className="w-full rounded-2xl shadow-lg border border-gray-100 object-cover"
                />

                </div>
                <p>
                  Мы начинали как небольшая бригада мастеров, объединенных общими принципами: делать работу на совесть, не навязывать лишние услуги и всегда приезжать вовремя.
                </p>
                <p>
                  Сегодня мы гордимся тем, что стали надежным партнером для тысяч семей и компаний. Наша команда разрослась, но принципы остались неизменными: профессионализм, ответственность и уважение к каждому клиенту.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Users size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">1000+</span>
                <span className="text-[15px] text-slate-500 font-medium">клиентов</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Calendar size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">10 лет</span>
                <span className="text-[15px] text-slate-500 font-medium">на рынке</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <ShieldCheck size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4" />
                <span className="text-[17px] font-extrabold text-slate-900 block mb-1">Гарантия 1 год</span>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Сертификаты и лицензии</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ГОСТ Стандарты", desc: "Строгое соблюдение всех санитарных и строительных норм." },
              { title: "Техника безопасности", desc: "Соблюдение правил ТБ при проведении работ." },
              { title: "Пожарная безопасность", desc: "Сертификат прохождения обучения ПТМ." },
              { title: "Сварные соединения", desc: "Лицензия на проведение сварочных работ." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 text-[#1173D4] rounded-full flex items-center justify-center mb-6">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 font-medium leading-loose">{item.desc}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-green-50 text-green-600 text-[11px] font-bold uppercase tracking-wider rounded-md border border-green-100">
                  Сертифицировано
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
