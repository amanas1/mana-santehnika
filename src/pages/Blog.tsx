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
      title: "Как выбрать смеситель для ванной и кухни без лишних трат",
      excerpt: "Простым языком разбираем, какой смеситель прослужит дольше, на что смотреть при покупке и когда лучше не экономить на картридже и корпусе.",
      date: "01 Марта 2024",
      author: "Мастер Манас",
      image: "/images/services/smesitel-install.jpg",
      category: "Сантехприборы",
      link: "/blog/article"
    },
    {
      id: 2,
      title: "Что делать, если прорвало трубу до приезда сантехника",
      excerpt: "Короткая инструкция: как перекрыть воду, что выключить в квартире и как не ухудшить аварию до приезда мастера.",
      date: "25 Февраля 2024",
      author: "Мастер Манас",
      image: "/images/services/protechki.jpg",
      category: "Аварийная служба",
      link: "/blog/leak-repair"
    },
    {
      id: 3,
      title: "Как убрать засор на кухне и не повредить трубы",
      excerpt: "Разбираем, почему забивается кухня, что можно сделать самому и когда нужна профессиональная прочистка канализации.",
      date: "15 Февраля 2024",
      author: "Мастер Манас",
      image: "/images/services/unitaz-repair.jpg",
      category: "Канализация",
      link: "/blog/clog-removal"
    },
    {
      id: 4,
      title: "Почему капает кран и как понять, что менять внутри",
      excerpt: "Показываем, как определить проблему в смесителе, когда помогает замена картриджа и когда лучше звать мастера.",
      date: "12 Марта 2024",
      author: "Мастер Манас",
      image: "/images/services/smesitel-repair.jpg",
      category: "Ремонт",
      link: "/blog/faucet-repair"
    },
    {
      id: 5,
      title: "Прорвало трубу: первая помощь до приезда мастера",
      excerpt: "Что сделать в первые минуты, чтобы остановить воду, защитить технику и не получить лишний ущерб в квартире.",
      date: "14 Марта 2024",
      author: "Мастер Манас",
      image: "/images/services/shower-repair.jpg",
      category: "Экстренно",
      link: "/blog/leak-prevention"
    },
    {
      id: 6,
      title: "Почему батареи холодные и как найти причину",
      excerpt: "Понятно объясняем, что мешает батарее греть: воздух, засор, слабая циркуляция или неисправный вентиль.",
      date: "10 Марта 2024",
      author: "Мастер Манас",
      image: "/images/services/batarei-repair.jpg",
      category: "Отопление",
      link: "/blog/heating-maintenance"
    },
    {
      id: 7,
      title: "Как безопасно подключить стиральную и посудомоечную машину",
      excerpt: "Какие ошибки делают при установке техники, почему важен слив и как не допустить протечек после подключения.",
      date: "08 Марта 2024",
      author: "Мастер Манас",
      image: "/images/services/washer-install.jpg",
      category: "Установка",
      link: "/blog/appliance-installation"
    },
    {
      id: 8,
      title: "Как подготовить батареи к зиме и не остаться без тепла",
      excerpt: "Что проверить до сезона отопления, как заметить слабые места и когда радиатор лучше поменять заранее.",
      date: "10 Февраля 2024",
      author: "Мастер Манас",
      image: "/images/services/boiler-repair.jpg",
      category: "Отопление",
      link: "/blog/heating-repair"
    },
    {
      id: 9,
      title: "Типичные ошибки при установке бытовой техники",
      excerpt: "Почему забывают про болты, слив и уровень, и как избежать протечки после установки техники.",
      date: "05 Февраля 2024",
      author: "Мастер Манас",
      image: "/images/services/dishwasher-install.jpg",
      category: "Бытовая техника",
      link: "/blog/appliances-install"
    },
    {
      id: 10,
      title: "Как снизить расход воды без потери комфорта",
      excerpt: "Какая сантехника реально экономит воду, какие мелочи помогают платить меньше и что можно поставить в квартире.",
      date: "15 Марта 2024",
      author: "Мастер Манас",
      image: "/images/services/filter-install.jpg",
      category: "Советы",
      link: "/blog/water-saving"
    },
    {
      id: 11,
      title: "Почему гудят трубы и что с этим делать",
      excerpt: "Разбираем причины шума в трубах, как понять источник проблемы и когда нужно регулировать давление или менять узел.",
      date: "16 Марта 2024",
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
        title="Блог профессионального сантехника | Полезные статьи и советы"
        description="Полезные статьи о ремонте сантехники, монтаже оборудования, выборе материалов и решении бытовых проблем своими руками. Советы от профессионалов Алматы."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Блог о сантехнике</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Полезные статьи, советы и инструкции от профессиональных мастеров Алматы. Узнайте больше о правильном уходе за коммуникациями и современных технологиях.
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
