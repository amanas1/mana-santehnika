import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Eye, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Капает кран: картридж, прокладки или замена смесителя | Манас",
  "description": "Как отличить течь из излива, под ручкой и у основания смесителя. Когда помогает замена картриджа, какие данные нужны для подбора детали и ремонта.",
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
  "mainEntityOfPage": "https://mana.kz/blog/faucet-repair",
  "image": "https://mana.kz/images/services/smesitel-repair.jpg"
};

const BlogPostFaucet = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        schema={articleSchema}
        title="Капает кран: картридж, прокладки или замена смесителя | Манас"
        description="Как отличить течь из излива, под ручкой и у основания смесителя. Когда помогает замена картриджа, какие данные нужны для подбора детали и ремонта."
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
                src="/images/services/smesitel-repair.jpg" 
                alt="Процесс ремонта и настройки смесителя мастером" 
                title="Ремонт смесителя и замена картриджа в Алматы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Сантехника
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Ремонт
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Капает кран: что проверить перед ремонтом
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-[#0095DA] pl-6 py-2 mb-10">Капли из закрытого крана, вода под рычагом и лужа у основания — разные неисправности. Покупать картридж заранее стоит только при известной совместимости. Сначала определите, откуда появляется вода и связан ли симптом с открытием горячей или холодной воды.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">По месту течи можно сузить поиск</h2>
              <p>Если из излива капает при полностью закрытой ручке, проверяют запорный механизм: картридж или кран-буксу. Течь у поворотного излива может быть связана с его уплотнениями. Вода под мойкой бывает от подводки или соединения, а не от картриджа. Точное решение выбирают после осмотра.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Что подготовить для подбора запчастей</h2>
              <ul>
                <li>Название производителя и точная модель, если они известны.</li>
                <li>Фото смесителя целиком и места появления воды.</li>
                <li>Информация о том, работают ли краны перекрытия.</li>
                <li>Фото или артикул старой детали после безопасной разборки мастером.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Как проходит диагностика и ремонт</h2>
              <ol>
                <li><strong>Уточняем симптом:</strong> течёт при закрытом кране, под ручкой, у излива или под мойкой.</li>
                <li><strong>Проверяем перекрытие:</strong> до разборки убеждаемся, что обе подачи остановлены.</li>
                <li><strong>Осматриваем корпус:</strong> ищем повреждения металла, резьбы и соединений.</li>
                <li><strong>Определяем деталь:</strong> картридж, кран-буксу, уплотнение или подводку.</li>
                <li><strong>Подбираем совместимость:</strong> сверяем размер, посадку, шток и уплотнения.</li>
                <li><strong>Согласуем ремонт:</strong> объясняем, что меняется и сколько стоит работа с материалами.</li>
                <li><strong>Проверяем результат:</strong> открываем воду постепенно, проверяем закрытие и сухость соединений.</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="font-bold text-gray-800 mb-2">Перед разборкой нужно убедиться, что исправные краны действительно перекрывают обе подачи. Если вода продолжает идти или вентиль закис, не снимайте детали смесителя. Усилие затяжки, инструмент и порядок сборки зависят от модели — универсального правила «затянуть от руки и довернуть» нет.</p>
                <p className="m-0 italic">Прижимную гайку и крепёж затягивают по инструкции производителя. Чрезмерное усилие может повредить деталь, а недостаточное — оставить течь. После сборки проверяют смеситель в разных положениях ручки и осматривают соединения под рабочим давлением.</p>
              </div>

              <p>Если корпус целый и совместимая деталь доступна, ремонт может быть разумнее полной замены. При трещине корпуса или разрушенной резьбе понадобится другой вариант. В Алматы я принимаю заявки ежедневно 09:00–21:00; пришлите фото и описание симптома, чтобы обсудить ремонт.</p>
              <ArticleServiceGuide guide="faucet" />
            </div>

            <div className="bg-gray-50 border-t border-gray-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Нужно устранить течь смесителя?</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-8 py-4 bg-[#0095DA] text-white font-bold rounded-xl shadow-lg hover:bg-[#0084c0] transition-all">
                Связаться с мастером
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostFaucet;
