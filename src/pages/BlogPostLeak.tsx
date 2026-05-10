import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostLeak = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Что делать, если прорвало трубу: инструкция до приезда сантехника | Мастер Манас"
        description="Пошаговая инструкция, если в квартире прорвало трубу, потек сифон или появилась вода под раковиной. Простые действия до приезда сантехника в Алматы."
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
                src="/images/services/protechki.jpg" 
                alt="Мастер проводит диагностику и устранение протечки труб" 
                title="Устранение протечек труб в Алматы" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Экстренно
                  </span>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Протечки
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Прорвало трубу? Что сделать до приезда сантехника
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 14 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Если вода пошла из трубы или из-под раковины, главное не паниковать. За 5 минут можно сильно снизить ущерб, если действовать по простому алгоритму.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-red-600">Шаг 1: Перекройте стояк!</h2>
              <p>
                Сначала перекройте подачу воды. Обычно вентили находятся в сантехническом шкафу, под мойкой или рядом со стояком. Поверните кран по часовой стрелке до упора. Если вентиль старый и тугой, не ломайте его силой.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Шаг 2: Обесточьте приборы</h2>
              <p>
                Если вода идет к розеткам, бойлеру, стиральной машине или другой технике, выключите автомат в щитке. Вода и электричество вместе опасны, поэтому лучше не рисковать.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Временные меры до приезда мастера</h2>
              <p>
                Если течь небольшая, подставьте ведро, положите сухую тряпку и ограничьте попадание воды на пол. Для слабой протечки можно временно стянуть место резиновым куском и хомутом, но это только короткая мера до ремонта.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Помните: я работаю в Алматы ежедневно с 9:00 до 21:00. Приеду к вам со всеми запчастями и инструментом, чтобы полностью восстановить целостность системы.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Почему нельзя оставлять микропротечки?</h2>
              <p>
                Даже маленькая капля со временем превращается в сырость, плесень и разрушение отделки. Кроме того, слабая течь часто быстро становится сильной, особенно если давление в сети скачет.
              </p>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6">Нужна экстренная помощь прямо сейчас?</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white font-bold rounded-2xl shadow-xl hover:bg-red-700 transition-all text-xl">
                Вызвать Манаса
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostLeak;
