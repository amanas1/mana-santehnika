import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Tag, Share2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Как выбрать смеситель для ванной и кухни | Мастер Манас"
        description="Что проверить перед покупкой смесителя: крепление, длину излива, подводки, материал и доступность картриджа. Советы по выбору и установке в Алматы."
      />

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-[#0095DA] transition-colors mb-8 group font-medium">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Назад к списку статей
          </Link>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header / Hero of the post */}
            <div className="h-80 md:h-[450px] relative overflow-hidden">
              <img 
                src="/images/services/smesitel-install.jpg" 
                alt="Современный смеситель для ванной — установка сантехника в Алматы" 
                title="Профессиональная установка смесителей в Алматы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Сантехника
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Выбор материалов
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Как выбрать смеситель для ванной и кухни
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                  <span className="flex items-center gap-2"><Eye size={18} /> Практическое руководство</span>
                </div>
              </div>
            </div>

            {/* Article body */}
            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              
              <p className="lead text-xl md:text-2xl text-gray-600 font-normal mb-10 italic border-l-4 border-[#0095DA] pl-6 py-2">Выбирать смеситель лучше с размеров и подключения, а не с фотографии в каталоге. Для кухни важны высота и вылет излива, для ванной — положение выводов и совместимость с душем. Ниже — что измерить дома, какие вопросы задать продавцу и когда стоит сначала обсудить монтаж с сантехником.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Корпус: что проверить в магазине</h2>
              <p>Найдите в документации материал корпуса, название модели и условия гарантии. Латунь и нержавеющая сталь используются в сантехнике, но само название материала не подтверждает качество конкретного изделия. Важно, чтобы у товара были понятные характеристики и возможность обратиться к продавцу за запчастями.</p>
              <p>Осмотрите резьбу, посадочные места, покрытие и комплект крепежа. Не должно быть трещин, сколов и заметного люфта деталей. Вес может помочь сравнить похожие изделия, но по одному весу или цвету металла нельзя достоверно определить состав сплава и срок службы.</p>
              <p>Попросите показать паспорт и полный комплект: корпус, крепление, прокладки, подводки, а для ванной — переключатель и душевой набор, если они предусмотрены. Сравнивайте стоимость всего подключения: иногда к недорогому смесителю приходится отдельно покупать подходящие шланги и крепёж.</p>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 pb-4">
                <img 
                  src="/images/services/pipes-detail.jpg" 
                  alt="Мастер Манас проверяет латунные фитинги и материалы для монтажа" 
                  title="Выбор качественных материалов — залог долговечной сантехники"
                  className="w-full object-cover m-0 h-auto" 
                />
                <p className="text-center text-sm text-gray-500 mt-4 px-4 italic m-0">Размеры соединений и комплектность стоит проверить до оплаты, а не после снятия старого смесителя.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Картридж и кран-буксы: можно ли заменить деталь</h2>
              <p>У однорычажного смесителя воду регулирует картридж, у двухвентильного — кран-буксы. Уточните артикул сменной детали и её доступность. Одинаковый наружный диаметр картриджей ещё не означает совместимость: различаются высота штока, расположение выступов и уплотнений.</p>
              <h3>Почему рычаг начинает двигаться туго</h3>
              <p>Если рычаг стал тугим или кран капает при закрытом положении, причина может быть в картридже, загрязнении или уплотнениях. Усилие на ручке не устраняет неисправность. Для выбора запчасти нужны модель смесителя или образец снятой детали, а не только фотография ручки.</p>
              <p>Если в воде появляются частицы после отключения или ремонта стояка, стоит проверить состояние предусмотренных системой фильтров. Степень очистки и обслуживание подбирают по оборудованию и состоянию воды. Универсальное обещание, что любой смеситель прослужит дольше после установки одного определённого фильтра, некорректно.</p>
              <p>Термостатический смеситель требует проверки схемы горячего и холодного подключения, а также условий давления из инструкции. До покупки проверьте, подходит ли он к существующей разводке. Для обычной замены часто удобнее модель с доступными запчастями и понятной схемой обслуживания.</p>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 pb-4">
                <img 
                  src="/images/services/smesitel-repair.jpg" 
                  alt="Процесс установки смесителя со скрытой подводкой в ванной комнате" 
                  title="Профессиональный монтаж смесителя — работа любой сложности"
                  className="w-full object-cover m-0 h-auto" 
                />
                <p className="text-center text-sm text-gray-500 mt-4 px-4 italic m-0">При монтаже важно сохранить покрытие и проверить герметичность всех доступных соединений.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Крепление и подводки: подойдёт ли смеситель</h2>
              <p>Для настенного смесителя измерьте расстояние между выводами и положение относительно ванны. Для установки на мойку проверьте отверстие, толщину поверхности и доступ снизу. Струя должна попадать в чашу без сильных брызг; слишком высокий или короткий излив может оказаться неудобным.</p>
              <h3>Как подобрать длину шлангов</h3>
              <p>Измерьте путь от смесителя до запорных кранов с учётом свободного изгиба. Шланг не должен быть натянут, перекручен или прижат мебелью. Тип резьбы, прокладки и допустимые условия работы проверяют по документации. Старую подводку с повреждённой оплёткой или следами коррозии оставлять нельзя.</p>
              <h3>Что учесть при скрытом монтаже</h3>
              <p>У скрытого смесителя заранее проверяют совместимость наружной и внутренней частей, глубину установки и возможность обслуживания. Замена декоративной панели не всегда означает, что она подойдёт к уже установленному блоку. Сначала определите точную модель, затем выбирайте комплект.</p>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 pb-4">
                <img 
                  src="/images/services/tools.jpg" 
                  alt="Инструменты сантехника — ФУМ-лента для герметизации резьбовых соединений" 
                  title="Герметичность соединений — важный этап сантехнических работ"
                  className="w-full object-cover m-0 h-auto" 
                />
                <p className="text-center text-sm text-gray-500 mt-4 px-4 italic m-0">Доступ к кранам и соединениям нужен и после монтажа: не закрывайте его наглухо мебелью или отделкой.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Покрытие и уход без повреждений</h2>
              <p>Осмотрите поверхность при хорошем свете. Затем прочитайте правила ухода именно за выбранным покрытием: хром, окрашенная поверхность и декоративные покрытия могут иметь разные ограничения. Средство для очистки плитки не обязательно подходит для смесителя.</p>
              <h3>Как очищать поверхность</h3>
              <p>Начните с мягкой салфетки и средства, разрешённого производителем. Не используйте абразивную губку и не оставляйте чистящий состав надолго. Уксус, лимонная кислота и другие домашние средства также могут повредить отдельные покрытия и уплотнения, поэтому считать их универсально безопасными нельзя.</p>
              <p>После очистки смойте остатки средства и вытрите поверхность мягкой тканью. Если напор стал слабым только у одного крана, сначала проверьте аэратор и его инструкцию по очистке. Когда одинаково слабая струя во всей квартире, причина может находиться раньше смесителя.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Что проверить перед покупкой</h2>
              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <ul className="list-disc list-inside space-y-3 m-0 text-gray-800">
                  <li>Документы: понятная модель, материал и условия гарантии.</li>
                  <li>Размеры: крепление, вылет излива и место для монтажа.</li>
                  <li>Запчасти: доступный совместимый картридж или кран-букса.</li>
                  <li>Подводки: нужная длина и тип соединений без натяжения.</li>
                  <li>Обслуживание: доступ к кранам и разрешённый уход.</li>
                </ul>
              </div>
              <p>Для предварительной консультации пришлите фотографию старого смесителя, выводов и пространства под мойкой. По ним можно уточнить размеры и объём работ. Стоимость установки и необходимых материалов согласую отдельно; доступные варианты работ есть на странице установки смесителя.</p>
              <ArticleServiceGuide guide="mixer-selection" />
            </div>

            {/* Post Footer CTA */}
            <div className="bg-gray-50 border-t border-gray-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Нужна помощь с выбором и установкой?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Пришлите фото места установки и выбранную модель. Обсудим совместимость, необходимые материалы и стоимость работы.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:+77055535332"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0095DA] text-white font-bold rounded-xl hover:bg-[#0084c0] shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                >
                  Вызвать мастера на установку
                </a>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-bold border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Share2 size={20} className="mr-2" />
                  Поделиться опытом
                </button>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
