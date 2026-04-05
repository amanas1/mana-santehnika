import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostPipes = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Почему гудят трубы и как это исправить | Советы сантехника Манаса"
        description="Разбираем причины шума в водопроводе: от высокого давления до изношенных прокладок. Узнайте, как самостоятельно диагностировать и устранить гул в трубах."
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-[#0095DA] transition-colors mb-8 group font-medium">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Назад к списку статей
          </Link>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-80 md:h-[450px] relative overflow-hidden">
              <img 
                src="/images/services/ustanovka-smesitelya.webp" 
                alt="Диагностика шума в трубах" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Диагностика
                  </span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Шум
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Почему гудят трубы и как вернуть тишину в дом
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 16 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-orange-500 pl-6 py-2 mb-10">
                Странные звуки в сантехнике могут раздражать и пугать. Гул, свист или стук в трубах — это всегда симптом проблемы, которую нельзя игнорировать.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Высокое давление в сети</h2>
              <p>
                Чаще всего трубы гудят из-за избыточного давления. Это не только создает шум, но и разрушает ваши приборы и соединения. Решение — установка редуктора давления.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Изношенные прокладки</h2>
              <p>
                Вибрация прокладки в старом кран-буксе может создавать эффект "резонанса", из-за чего гул разносится по всему стояку. Замена копеечной детали часто решает проблему.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Беспокоит шум в сантехнике? Я проведу профессиональную диагностику и устраню причину гула быстро и с гарантией.</p>
              </div>
            </div>

            <div className="bg-orange-50 border-t border-orange-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Устраним гул в трубах сегодня!</h3>
              <a href="tel:+77074791020" className="inline-flex items-center justify-center px-10 py-5 bg-[#0095DA] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0084c0] transition-all text-xl">
                Вызвать Мастера
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPipes;
