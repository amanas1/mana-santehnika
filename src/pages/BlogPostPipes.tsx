import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Почему гудят и стучат трубы: как найти причину | Манас",
  "description": "Гул при открытии крана, удар после закрытия и щелчки при нагреве: чем отличаются симптомы, что записать и когда обращаться к сантехнику.",
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
  "mainEntityOfPage": "https://mana.kz/blog/noisy-pipes",
  "image": "https://mana.kz/images/services/remont-plastikovyh-trub.jpg"
};

const BlogPostPipes = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        schema={articleSchema}
        title="Почему гудят и стучат трубы: как найти причину | Манас"
        description="Гул при открытии крана, удар после закрытия и щелчки при нагреве: чем отличаются симптомы, что записать и когда обращаться к сантехнику."
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
                src="/images/services/remont-plastikovyh-trub.jpg" 
                alt="Диагностика и устранение шума и стука в трубах водопровода" 
                title="Ремонт трубопроводов и устранение гидроударов в Алматы" 
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
                  Почему гудят и стучат трубы в квартире
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-orange-500 pl-6 py-2 mb-10">Для диагностики важнее момент появления звука, чем его громкость. Запишите: шум возникает при открытии одного крана, после закрытия воды, при наборе бачка или сам по себе. По одному гулу нельзя утверждать, что давление слишком высокое или трубы обязательно нужно менять.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Гул, удар и щелчки требуют разной проверки</h2>
              <p>Гул при расходе воды может быть связан с арматурой или вибрацией детали. Короткий удар после быстрого закрытия требует проверки возможного гидроудара. Щелчки при нагреве могут быть связаны с перемещением трубы и её креплениями. Давление проверяют измерением; редуктор подбирают по результатам диагностики, а не только по звуку.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Как понять, где искать источник</h2>
              <p>Проверьте, совпадает ли звук с использованием конкретного прибора, не разбирая соединения и не вращая закисшие вентили силой. Если шум сохраняется при отсутствии расхода в квартире, источник может быть в общем стояке или соседнем узле. Уточните ситуацию у соседей и в обслуживающей организации. Короткое видео со звуком поможет мастеру, но не заменяет осмотр.</p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Для заявки укажите время появления шума, затронутые приборы и недавние работы с водопроводом. В Алматы я проверяю доступные краны, соединения и крепления. Сначала определяем причину, затем согласуем ремонт; замена всей разводки без диагностики может не убрать звук.</p>
              </div>
              <ArticleServiceGuide guide="pipes" />
            </div>

            <div className="bg-orange-50 border-t border-orange-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Нужно найти причину шума в трубах?</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#0095DA] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0084c0] transition-all text-xl">
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
