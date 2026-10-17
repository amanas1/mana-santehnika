import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleServiceGuide from "../components/ArticleServiceGuide";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Засор на кухне: что проверить и когда нужен мастер | Манас",
  "description": "Вода стоит в кухонной мойке: как отличить засор сифона от проблемы дальше в трубе, чего избегать и что сообщить сантехнику перед прочисткой.",
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
  "mainEntityOfPage": "https://mana.kz/blog/clog-removal",
  "image": "https://mana.kz/images/services/sink.jpg"
};

const BlogPostClog = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        schema={articleSchema}
        title="Засор на кухне: что проверить и когда нужен мастер | Манас"
        description="Вода стоит в кухонной мойке: как отличить засор сифона от проблемы дальше в трубе, чего избегать и что сообщить сантехнику перед прочисткой."
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
                src="/images/services/sink.jpg"
                alt="Чистая кухонная раковина после удаления засора"
                title="Как убрать засор на кухне"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Канализация
                  </span>
                  <span className="bg-emerald-500/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Советы
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Засор на кухне: что можно проверить самому
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> Обновлено 18 октября 2026</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                  <span className="flex items-center gap-2"><Eye size={18} /> Практическое руководство</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl md:text-2xl text-gray-600 font-normal mb-10 italic border-l-4 border-emerald-500 pl-6 py-2">Если вода стоит в кухонной мойке, сначала прекратите пользоваться сливом и проверьте, работают ли остальные приборы. Медленный слив только на кухне и подъём воды сразу в нескольких местах требуют разного подхода. Не добавляйте средство за средством: это усложняет поиск причины и последующую разборку.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Почему вода перестаёт уходить</h2>
              <p>Жир и пищевые остатки могут постепенно сужать проход в сифоне и канализационной трубе. Но медленный слив бывает также при перегнутом шланге, неправильной сборке или недостаточном уклоне участка. По скорости ухода воды нельзя точно определить место пробки.</p>
              <p>Если проблема появилась после замены мойки или сифона, сообщите об этом мастеру. Если вода поднимается в мойку при работе посудомоечной машины, остановите её: слив может быть общим. Если вода приходит из трубы даже при закрытых кранах, возможен засор общего участка.</p>
              <p>Горячая вода не устраняет все виды засоров. Не лейте кипяток в неизвестную систему и не рассчитывайте, что он восстановит слив при плотной пробке. Сначала выясните, можно ли безопасно обслужить сифон и не залита ли в него химия.</p>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 pb-4">
                <img
                  src="/images/services/protechki.jpg"
                  alt="Сантехник очищает сифон под кухонной раковиной"
                  title="Чистка сифона"
                  className="w-full object-cover m-0 h-[400px]"
                />
                <p className="text-center text-sm text-gray-500 mt-4 px-4 italic m-0">Под мойкой важно проверить и слив, и сухость соединений. Вода на дне тумбы может указывать на течь, которая требует отдельного ремонта.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Что проверить до разборки слива</h2>
              <p>Если химическое средство уже использовано, не разбирайте сифон и не работайте вантузом: возможны брызги. Сохраните название средства и сообщите мастеру, сколько и когда заливали. При отсутствии химии начните с осмотра доступных частей.</p>

              <ol className="list-decimal list-outside ml-6 space-y-6">
                <li><strong>Проверьте остальные сливы.</strong> Если вода поднимается и в ванной или унитазе, не продолжайте пролив: проблема может быть в общем участке.</li>
                <li><strong>Осмотрите доступные соединения.</strong> Посмотрите, нет ли перегиба и течи под мойкой. Не тяните шланги и не откручивайте неизвестные детали.</li>
                <li><strong>Оцените возможность обслуживания сифона.</strong> Самостоятельная очистка допустима только при понятной конструкции, отсутствии химии и возможности собрать всё герметично. Иначе оставьте разборку мастеру.</li>
                <li><strong>Подготовьте доступ.</strong> Уберите вещи из тумбы и сообщите о подключённой посудомоечной или стиральной машине.</li>
              </ol>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 p-8 border-l-8 border-red-500">
                <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4 flex items-center gap-3"><span className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl">Важно</span> Чего избегать при засоре</h3>
                <ul className="list-disc list-inside space-y-2 m-0 text-gray-800 text-lg">
                  <li>Не смешивайте средства для труб с другими чистящими составами.</li>
                  <li>Не проталкивайте пробку случайной проволокой и не разбирайте заполненный химией слив.</li>
                  <li>Если стоки поднимаются из общего участка, прекратите пользоваться водой и обратитесь в обслуживающую организацию дома.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Когда нужна профессиональная прочистка</h2>
              <p>Если после обслуживания сифона слив остаётся медленным, потребуется проверка участка дальше по трубе. При повторяющемся засоре важно искать причину возвращения: прочистка не исправляет неправильный уклон, повреждение или неудачно собранное подключение.</p>
              <p>Мастер подбирает способ прочистки по материалу трубы, доступу и характеру засора. После работы проверяют слив при обычном расходе воды и герметичность разобранных соединений. Если проблема касается общего стояка, подключают обслуживающую организацию дома.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Как уменьшить риск повторного засора</h2>
              <p>Собирайте жир и остатки еды до мытья посуды, используйте сетку на выпуске. Не смывайте в мойку кофейную гущу, наполнитель и строительные смеси. Плановую очистку сифона выполняйте по его конструкции и фактическому загрязнению.</p>
              <p>Если засор возвращается через несколько дней, запишите, после каких действий это происходит. Фото сифона и подключения к стене помогут заранее понять доступ к трубе. Повторное применение химии без выяснения причины часто лишь откладывает решение.</p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">В Алматы можно заказать прочистку кухонного слива. Перед вызовом сообщите, стоит ли вода постоянно, затронуты ли другие приборы и применялась ли химия. Объём работ и стоимость согласую после уточнения ситуации.</p>
              </div>
              <ArticleServiceGuide guide="clog" />
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Засор не уходит после простых действий?</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                Если вода стоит и слив не восстановился после чистки сифона, лучше сразу вызвать мастера и не рисковать трубами.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+77055535332"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg transition-all hover:scale-105 hover:bg-gray-50 uppercase tracking-wide"
                >
                  Вызвать мастера
                </a>
                <a
                  href="https://wa.me/77055535332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold border-2 border-transparent rounded-xl shadow-lg transition-all hover:bg-[#20bd5a] hover:scale-105"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostClog;
