import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostClog = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Как убрать засор на кухне и не испортить трубы | Мастер Манас"
        description="Понятная инструкция по кухонному засору: что можно сделать самому, как не повредить трубы и когда нужен сантехник в Алматы."
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
                  Как убрать засор на кухне и не повредить трубы
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 15 Февраля 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                  <span className="flex items-center gap-2"><Eye size={18} /> 9 184 просмотра</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl md:text-2xl text-gray-600 font-normal mb-10 italic border-l-4 border-emerald-500 pl-6 py-2">
                Кухонный засор обычно появляется постепенно. Сначала вода уходит чуть медленнее, потом остается в мойке, а затем слив почти встает. Ниже объясняю, что можно сделать самому и когда лучше не рисковать.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Почему забивается кухня</h2>
              <p>
                Главная причина кухонного засора — жир. Он оседает на стенках трубы, цепляет мусор и постепенно превращается в плотную пробку.
              </p>
              <p>
                Когда вы моете жирную посуду, он уходит в слив в жидком виде, но внутри трубы быстро остывает и прилипает к стенкам. К нему добавляются остатки еды, кофейная гуща и мелкий мусор.
              </p>
              <p>
                Поэтому обычная горячая вода иногда помогает только на короткое время. Если причина уже в плотной пробке, нужен механический способ очистки.
              </p>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 pb-4">
                <img
                  src="/images/services/protechki.jpg"
                  alt="Сантехник очищает сифон под кухонной раковиной"
                  title="Чистка сифона"
                  className="w-full object-cover m-0 h-[400px]"
                />
                <p className="text-center text-sm text-gray-500 mt-4 px-4 italic m-0">
                  Чаще всего проблема сидит именно в сифоне или в ближайшем участке трубы под раковиной.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Что можно сделать самому</h2>
              <p>
                Если вода уходит, но медленно, начните с простых и безопасных действий.
              </p>

              <ol className="list-decimal list-outside ml-6 space-y-6">
                <li>
                  <strong>Пролейте трубу горячей водой.</strong> Для металлических труб можно взять почти кипяток. Для пластика лучше использовать очень горячую, но не кипящую воду.
                </li>
                <li>
                  <strong>Проверьте сифон.</strong> Подставьте тазик, аккуратно открутите нижнюю часть и промойте ее от грязи. Часто этого уже достаточно.
                </li>
                <li>
                  <strong>Используйте вантуз.</strong> Закройте переливное отверстие тряпкой, наберите немного воды и сделайте несколько резких движений.
                </li>
                <li>
                  <strong>Для профилактики.</strong> Раз в неделю промывайте слив горячей водой и не выливайте жир в раковину.
                </li>
              </ol>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 p-8 border-l-8 border-red-500">
                <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl">Важно</span>
                  Что не стоит делать
                </h3>
                <ul className="list-disc list-inside space-y-2 m-0 text-gray-800 text-lg">
                  <li>Не лейте в трубу агрессивную химию, если не знаете, из чего сделана система.</li>
                  <li>Не давите на засор металлическим прутом или проволокой.</li>
                  <li>Не оставляйте сильную течь без присмотра.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Когда нужен мастер</h2>
              <p>
                Если вода стоит глубоко в трубе, вантуз не помогает, а после чистки сифона ситуация не меняется, засор уже ушел дальше. В таком случае нужна профессиональная прочистка тросом или машиной.
              </p>
              <p>
                Это быстрее и безопаснее, чем экспериментировать с химией. Так меньше риск повредить гофру, сорвать соединения или затопить соседей.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Как не допускать засоры</h2>
              <p>
                Самый простой способ экономить на сантехнике — не давать мусору попадать в слив. Поставьте сеточку в раковину, не смывайте жир и периодически промывайте трубу горячей водой.
              </p>
              <p>
                Если часто готовите дома, лучше раз в несколько месяцев профилактически чистить сифон. Это дешевле, чем аварийный вызов и ремонт после потопа.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">
                  Если нужен сантехник в Алматы для прочистки кухни от засора, можно сразу вызвать мастера и решить вопрос без лишнего риска для труб.
                </p>
              </div>
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
