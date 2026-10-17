import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Как уменьшить расход воды: течи, аэратор и бачок | Манас",
  "description": "С чего начать экономию воды: проверить скрытые потери, подобрать аэратор и настроить исправный бачок. Простой замер расхода без обещаний процентов.",
  "dateModified": "2026-10-18",
  "author": {
    "@type": "Person",
    "name": "Манас",
    "url": "https://mana.kz/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Мастер Манас",
    "url": "https://mana.kz/"
  },
  "mainEntityOfPage": "https://mana.kz/blog/water-saving",
  "image": "https://mana.kz/images/services/filter-install.jpg"
};

const BlogPostWater = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        schema={articleSchema}
        title="Как уменьшить расход воды: течи, аэратор и бачок | Манас"
        description="С чего начать экономию воды: проверить скрытые потери, подобрать аэратор и настроить исправный бачок. Простой замер расхода без обещаний процентов."
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
                  Как уменьшить расход воды в квартире
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-green-500 pl-6 py-2 mb-10">Начните с постоянных потерь: капающего крана, струйки в чаше унитаза и влажных соединений. Если все приборы выключены, бачки заполнены, а счётчик продолжает учитывать воду, это повод искать утечку. Само по себе движение счётчика не показывает, где находится неисправность.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Сначала проверьте потери и расход крана</h2>
              <p>Чтобы сравнить расход крана, наберите воду в ёмкость известного объёма и засеките время. Например, 1 литр за 10 секунд соответствует 6 литрам в минуту: объём умножают на 60 и делят на секунды. Повторите замер после очистки или замены аэратора при том же положении ручки. Подбирайте аэратор по резьбе и нужному расходу; фиксированный процент экономии для любой квартиры обещать нельзя.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Сливной бачок: исправность важнее новой кнопки</h2>
              <p>После наполнения бачка набор должен прекращаться, а вода не должна постоянно стекать в чашу. Если течь остаётся, проверяют впускной и сливной механизмы, их настройку и уплотнения. Двойной смыв полезен только при совместимой и исправной арматуре. Нельзя произвольно уменьшать объём ниже предусмотренного производителем: это может ухудшить смыв и потребовать повторного нажатия.</p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Сравнивайте показания счётчика за одинаковое число дней с учётом количества жильцов. Сначала устраните течи, затем оцените результат. В Алматы могу проверить смеситель и бачок, подобрать совместимую деталь и согласовать стоимость ремонта до начала работы.</p>
              </div>
              <ArticleServiceGuide guide="water" />
            </div>

            <div className="bg-green-50 border-t border-green-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Нужна консультация по выбору сантехники?</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#0095DA] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0084c0] transition-all text-xl">
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
