import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const BlogPostAppliances = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Подключение стиральной и посудомоечной машины: проверка | Манас"
        description="Что проверить перед подключением машины: транспортировочные крепления, воду, слив, шланги и электропитание. Подготовка места и тестовый запуск."
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
                src="/images/services/washer-install.jpg" 
                alt="Подключение стиральной машины — профессиональный монтаж в Алматы" 
                title="Установка стиральной и посудомоечной машины в Алматы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#1173D4] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Бытовая техника
                  </span>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Установка
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Подключение стиральной и посудомоечной машины
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 font-medium mb-10">Перед подключением машины подготовьте инструкцию именно к вашей модели и осмотрите место установки. Нужны доступные точки подачи воды и слива, подходящее электропитание и пространство для шлангов. Встраиваемая техника дополнительно требует проверки ниши и положения фасада.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Транспортировочные крепления и установка по уровню</h2>
              <p>У стиральной машины проверяют транспортировочные крепления по инструкции: их вид и количество отличаются. Упаковочные элементы удаляют до запуска, корпус выставляют устойчиво на предусмотренных опорах. Если машина заметно перемещается при отжиме, остановите её и проверьте установку, а не удерживайте руками.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Слив: ориентируйтесь на инструкцию модели</h2>
              <p>Высоту, длину и способ крепления сливного шланга берут из руководства производителя. Единой высоты для всех машин нет. Нельзя пережимать шланг за мебелью или оставлять соединение ненадёжным. При подключении к штуцеру сифона проверяют, что предусмотренная заглушка удалена и слив собран правильно.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Электропитание и доступ к подключениям</h2>
              <p>Питание должно соответствовать требованиям прибора и состоянию проводки. Не используйте случайные тройники и удлинители. Если подходящей розетки нет или её безопасность вызывает сомнения, подготовку подключения поручают электрику. Вода не должна попадать на розетку; к крану и отключению нужен доступ.</p>

              <div className="my-10 p-6 bg-green-50 rounded-2xl border-l-4 border-green-500 flex gap-5 items-start">
                <ShieldCheck size={40} className="text-green-600 shrink-0" />
                <div>
                  <p className="font-bold text-green-900 m-0 text-xl">Что проверяют после монтажа:</p>
                  <p className="text-green-800 m-0 mt-2">Постепенно открывают подачу воды и осматривают соединения. Выполняют предусмотренный инструкцией первый запуск, контролируют набор и слив, отсутствие течей и устойчивость машины. После установки в нишу ещё раз убеждаются, что шланги не зажаты, а кран остаётся доступным.</p>
                </div>
              </div>

              <p>Перед заявкой пришлите модель техники, фото ниши, крана и точки слива. Укажите, требуется ли подготовка подключений или только установка на готовое место. Условия работ: <Link to="/podklyuchenie-stiralnoj-mashiny-almaty">подключение стиральной машины</Link> и <Link to="/podklyuchenie-posudomoechnoj-mashiny-almaty">подключение посудомоечной машины</Link>.</p>
              <ArticleServiceGuide guide="appliances" />
            </div>

            <div className="bg-slate-900 text-white p-8 md:p-12 text-center rounded-b-3xl">
              <h3 className="text-2xl font-bold mb-6">Купили технику? Зовите Манаса!</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-8 py-4 bg-[#1173D4] text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all">
                Заказать профессиональный монтаж
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostAppliances;
