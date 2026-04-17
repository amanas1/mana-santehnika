import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostWater = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Как сэкономить на воде: Советы эксперта по сантехнике | Мастер Манас"
        description="Практические советы по выбору экономной сантехники. Узнайте, как сократить расходы на воду без потери комфорта с помощью современных технологий."
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
                src="/images/services/filter-install.jpg" 
                alt="Установка водяного фильтра и экономия воды в квартире" 
                title="Экономия воды и установка фильтров в Алматы" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Экономия
                  </span>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Советы
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Как сэкономить на воде: Выбираем правильную сантехнику
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 15 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-green-500 pl-6 py-2 mb-10">
                Тарифы на воду растут, и это отличный повод задуматься о модернизации вашей сантехники. В этой статье я расскажу, какие простые решения помогут вам платить меньше.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Аэраторы: маленькая деталь, большая экономия</h2>
              <p>
                Современные аэраторы смешивают воду с воздухом, создавая объемную струю при значительно меньшем расходе. Замена старого аэратора на экономный может сократить потребление воды из крана до 50%.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Двухрежимные смывные бачки</h2>
              <p>
                Установка унитаза с двойной кнопкой смыва (3 и 6 литров вместо стандартных 9) — это самый эффективный способ экономии воды в туалете. За год такая система бережет тысячи литров.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Хотите установить экономную сантехнику? Я помогу подобрать и смонтировать оборудование, которое начнет окупать себя с первого дня.</p>
              </div>
            </div>

            <div className="bg-green-50 border-t border-green-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Нужна консультация по выбору сантехники?</h3>
              <a href="tel:+77074791020" className="inline-flex items-center justify-center px-10 py-5 bg-[#0095DA] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0084c0] transition-all text-xl">
                Связаться с Мастером
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostWater;
