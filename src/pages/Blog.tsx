import SEO from "../components/SEO";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все статьи");

  const posts = [
    {
      id: 1,
      title: "Как выбрать смеситель для ванной и кухни",
      excerpt: "Что проверить перед покупкой смесителя: крепление, длину излива, подводки, материал и доступность картриджа. Советы по выбору и установке в Алматы.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/smesitel-install.jpg",
      category: "Сантехприборы",
      link: "/blog/article"
    },
    {
      id: 2,
      title: "Прорвало трубу: действия до приезда сантехника",
      excerpt: "Как действовать при протечке: остановить подачу воды, избежать контакта с электричеством и подготовить доступ. Что сообщить сантехнику в Алматы.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/protechki.jpg",
      category: "Аварийная служба",
      link: "/blog/leak-repair"
    },
    {
      id: 3,
      title: "Засор на кухне: что можно проверить самому",
      excerpt: "Вода стоит в кухонной мойке: как отличить засор сифона от проблемы дальше в трубе, чего избегать и что сообщить сантехнику перед прочисткой.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/sink.jpg",
      category: "Засор кухни",
      link: "/blog/clog-removal"
    },
    {
      id: 4,
      title: "Капает кран: что проверить перед ремонтом",
      excerpt: "Как отличить течь из излива, под ручкой и у основания смесителя. Когда помогает замена картриджа, какие данные нужны для подбора детали и ремонта.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/smesitel-repair.jpg",
      category: "Ремонт",
      link: "/blog/faucet-repair"
    },
    {
      id: 6,
      title: "Батарея не греет: как разобраться в причине",
      excerpt: "Холодная батарея, шум или течь: как описать симптом, отличить проблему радиатора от стояка и подготовить ремонт отопления в квартире.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/batarei-repair.jpg",
      category: "Отопление",
      link: "/blog/heating-repair"
    },
    {
      id: 7,
      title: "Подключение стиральной и посудомоечной машины",
      excerpt: "Что проверить перед подключением машины: транспортировочные крепления, воду, слив, шланги и электропитание. Подготовка места и тестовый запуск.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/washer-install.jpg",
      category: "Установка",
      link: "/blog/appliances-install"
    },
    {
      id: 10,
      title: "Как уменьшить расход воды в квартире",
      excerpt: "С чего начать экономию воды: проверить скрытые потери, подобрать аэратор и настроить исправный бачок. Простой замер расхода без обещаний процентов.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/filter-install.jpg",
      category: "Советы",
      link: "/blog/water-saving"
    },
    {
      id: 11,
      title: "Почему гудят и стучат трубы в квартире",
      excerpt: "Гул при открытии крана, удар после закрытия и щелчки при нагреве: чем отличаются симптомы, что записать и когда обращаться к сантехнику.",
      date: "Обновлено 18 октября 2026",
      author: "Мастер Манас",
      image: "/images/services/remont-plastikovyh-trub.jpg",
      category: "Диагностика",
      link: "/blog/noisy-pipes"
    }
  ];

  const categoriesWithCount = [
    { name: "Все статьи", count: posts.length },
    ...Array.from(new Set(posts.map(post => post.category))).map(cat => ({
      name: cat,
      count: posts.filter(post => post.category === cat).length
    }))
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Все статьи" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Советы сантехника в Алматы — блог мастера Манаса"
        description="Статьи мастера Манаса: протечки, засоры, смесители, отопление и подключение техники. Что проверить перед вызовом сантехника в Алматы."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Блог о сантехнике</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Объясняю, как распознать неисправность, подготовить место ремонта и выбрать сантехнику. Для каждой ситуации — понятные проверки и подходящая услуга в Алматы.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 border-0 focus:ring-4 focus:ring-white/20 outline-none shadow-lg text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Horizontal Scroll */}
      <section className="bg-white border-b sticky top-[72px] z-40 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {categoriesWithCount.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full font-semibold transition-all ${
                  activeCategory === cat.name 
                    ? "bg-[#0095DA] text-white shadow-md shadow-[#0095DA]/30" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  activeCategory === cat.name ? "bg-white text-[#0095DA]" : "bg-white text-gray-500"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Рекомендуемые статьи</h2>
            <p className="text-gray-500 text-lg">Самые полезные и популярные материалы от наших экспертов</p>
          </div>

          {filteredPosts.length === 0 ? (
             <div className="text-center py-20">
               <div className="text-4xl mb-4">🔍</div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Ничего не найдено</h3>
               <p className="text-gray-500">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col group">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={`${post.title} — полезные советы и инструкции от профессионального мастера в Алматы`} 
                    title={`${post.title}: Узнать больше в блоге Мастера Манаса`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0095DA] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={post.link} 
                    className="inline-flex items-center text-[#0095DA] font-bold hover:text-[#0084c0] transition-colors group/link w-fit"
                  >
                    Читать статью
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
            </div>
          )}

          <div className="mt-12 text-center">
             <button className="px-8 py-3 border-2 border-[#0095DA] text-[#0095DA] font-bold rounded-xl hover:bg-blue-50 transition-colors">
               Загрузить еще
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
