import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Батарея не греет: что проверить и когда нужен мастер | Манас",
  "description": "Холодная батарея, шум или течь: как описать симптом, отличить проблему радиатора от стояка и подготовить ремонт отопления в квартире.",
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
  "mainEntityOfPage": "https://mana.kz/blog/heating-repair",
  "image": "https://mana.kz/images/services/batarei-repair.jpg"
};

const BlogPostHeating = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        schema={articleSchema}
        title="Батарея не греет: что проверить и когда нужен мастер | Манас"
        description="Холодная батарея, шум или течь: как описать симптом, отличить проблему радиатора от стояка и подготовить ремонт отопления в квартире."
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
                src="/images/services/batarei-repair.jpg" 
                alt="Регулировка радиатора и проверка температуры отопления в Алматы" 
                title="Ремонт и замена батарей отопления в Алматы" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <ThermometerSun size={12} /> Отопление
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Обслуживание
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Батарея не греет: как разобраться в причине
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-orange-500 pl-6 py-2 mb-10">Холодная батарея не всегда требует замены. Причина бывает в подаче тепла, воздухе, арматуре или циркуляции. До вызова уточните, холодный весь радиатор или отдельная часть, как греют другие батареи и есть ли такая же проблема у соседей по стояку.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Холодная часть радиатора: воздух или циркуляция</h2>
              <p>Неравномерный нагрев может быть связан с воздухом, но по одному признаку это не определить. Разница температуры между верхом и низом также не доказывает засор. Не откручивайте заглушки и соединения, чтобы «выпустить воздух». Способ обслуживания воздухоотводчика зависит от его конструкции и состояния; если не уверены, поручите проверку мастеру.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Когда проблема может быть в стояке</h2>
              <p>Если холодны несколько батарей на одном стояке, сначала обратитесь в обслуживающую организацию: причина может быть за пределами квартиры. Если соседние приборы греют, а один радиатор нет, проверяют его подключение, доступную арматуру и циркуляцию. Промывку или замену назначают по результатам проверки.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-orange-600">При каких признаках нужна помощь</h2>
              <ul>
                <li><strong>Вода на соединениях:</strong> ограничьте доступ к горячей зоне и сообщите о течи обслуживающей организации.</li>
                <li><strong>Стук или постоянное бульканье:</strong> запишите, когда появляется звук и как при этом меняется нагрев.</li>
                <li><strong>Неисправная арматура:</strong> если ручка не поворачивается или течёт шток, не применяйте силу.</li>
              </ul>

              <div className="bg-gray-900 text-white p-8 rounded-2xl my-10 relative overflow-hidden text-center">
                <p className="text-xl font-bold mb-4">До ремонта важно согласовать возможность и порядок отключения центрального отопления.</p>
                <p className="m-0 text-gray-300">В системе может находиться горячая вода под давлением. Нельзя снимать радиатор, откручивать пробки или менять вентили без подтверждённого отключения и сброса давления. Перекрытие одной ручки не доказывает, что прибор безопасно отсоединять.</p>
              </div>

              <p>Для заявки пришлите фото радиатора, кранов и места течи, укажите этаж и тип дома. Я уточню, можно ли восстановить соединение или нужна замена. Стоимость и материалы согласуются после осмотра, а отключение общего стояка — с обслуживающей организацией.</p>
              <ArticleServiceGuide guide="heating" />
            </div>

            <div className="bg-orange-50 border-t border-orange-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-orange-900 mb-6">Хотите теплый и сухой дом?</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:bg-orange-700 transition-all">
                Вызвать мастера по отоплению
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostHeating;
