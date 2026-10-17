import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const BlogPostLeak = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Прорвало трубу: что делать до приезда сантехника | Манас"
        description="Как действовать при протечке: остановить подачу воды, избежать контакта с электричеством и подготовить доступ. Что сообщить сантехнику в Алматы."
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
                  Прорвало трубу: действия до приезда сантехника
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">При сильной протечке сначала ограничьте подачу воды и вызовите помощь. Не тратьте время на герметик или поиск запчасти, пока вода продолжает поступать. Если повреждён стояк или ваши краны не перекрывают воду, сразу свяжитесь с аварийной службой либо обслуживающей организацией дома.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-red-600">Сначала остановите подачу воды</h2>
              <p>Закройте доступный исправный кран подачи на повреждённый прибор или вводные краны квартиры. У шарового крана положение ручки поперёк трубы обычно означает закрытие; у вентильного другая конструкция. Не применяйте силу к закисшей арматуре и не откручивайте соединения под давлением. Общедомовой стояк должна отключать обслуживающая организация.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Если рядом электричество</h2>
              <p>Не касайтесь мокрых розеток, приборов и проводов. Отключить питание в щитке можно только при сухом и безопасном доступе к нему; не идите к щитку через воду. При риске поражения током отойдите от опасной зоны и вызывайте аварийную помощь. Переставлять подключённые мокрые приборы нельзя.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Что делать после остановки воды</h2>
              <p>Если это безопасно, соберите воду и освободите доступ к месту ремонта. Сделайте фото общей схемы и повреждённого узла, предупредите соседей снизу о возможном попадании воды. Не нагружайте повреждённую трубу и не пытайтесь удержать течь рукой или случайной заплатой. Для горячего отопления порядок отключения согласуют с обслуживающей организацией.</p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Заявки на сантехнический ремонт в Алматы принимаю ежедневно 09:00–21:00. Сообщите адрес, что течёт и удалось ли остановить воду. По фото уточню доступ и необходимые материалы; наличие конкретной детали и время приезда нужно согласовать.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Как найти источник небольшой протечки</h2>
              <p>Вода может стекать по трубе от соседнего соединения. После перекрытия и безопасного осушения посмотрите, где появляется первая капля: у подводки, гайки, корпуса прибора или сифона. Не разбирайте узел под давлением. После ремонта нужна проверка при открытой воде; сухая поверхность сразу после вытирания ещё не подтверждает устранение причины.</p>
              <ArticleServiceGuide guide="leak" />
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
