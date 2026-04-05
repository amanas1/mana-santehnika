import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostAppliances = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Установка стиральных и посудомоечных машин в Алматы | Мастер Манас"
        description="Как правильно подключить бытовую технику к водопроводу и канализации? Советы по безопасности, выравниванию и врезке от профессионала."
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
                src="/images/services/mixer-install.jpg" 
                alt="Подключение стиральной машины" 
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
                  Ставим стиралку и посудомойку: Главные ошибки монтажа
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 08 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 font-medium mb-10">
                Купив новую стиральную или посудомоечную машину, владельцы часто решают сэкономить на монтаже. Но именно ошибки при подключении приводят к быстрой поломке сливных насосов, вибрациям и даже коротким замыканиям.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ошибка №1: Транспортировочные болты</h2>
              <p>
                Если вы включите стиральную машину, не выкрутив эти болты, она "побежит" по ванной, круша всё на своем пути. Это прямой путь к замене подшипников барабана в первый же день. Всегда проверяйте заднюю стенку прибора перед запуском!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ошибка №2: Неправильная высота слива</h2>
              <p>
                У посудомоечных и стиральных машин шланг слива должен иметь определенный изгиб. Если он лежит просто на полу, вода будет уходить самотеком, и насос будет работать "на износ". Если же слив слишком высоко — нагрузка на помпу возрастет вдвое. Результат один — дорогой ремонт через полгода.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ошибка №3: Подключение к электричеству через тройники</h2>
              <p>
                Бытовая техника с ТЭНами потребляет большую мощность. Обычный тонкий удлинитель или тройник может расплавиться при первом же нагреве воды. Идеальный вариант — отдельная влагозащищенная розетка с заземлением.
              </p>

              <div className="my-10 p-6 bg-green-50 rounded-2xl border-l-4 border-green-500 flex gap-5 items-start">
                <ShieldCheck size={40} className="text-green-600 shrink-0" />
                <div>
                  <p className="font-bold text-green-900 m-0 text-xl">Мой золотой стандарт установки:</p>
                  <p className="text-green-800 m-0 mt-2">Я провожу врезку в канализацию через сифоны с обратным клапаном (чтобы запахи не шли в машину), использую качественные латунные тройники и обязательно выставляю технику по лазерному уровню.</p>
                </div>
              </div>

              <p>
                Берегите свою технику и свои нервы. Доверьте установку профессионалу, который отвечает за каждое соединение головой.
              </p>
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
