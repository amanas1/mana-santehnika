import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostHeating = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Ремонт и обслуживание систем отопления в Алматы | Мастер Манас"
        description="Ваши батареи холодные или текут? Все о ремонте радиаторов, замене кранов Маевского и промывке систем отопления от эксперта."
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
                src="/images/services/underfloor-heating.jpg" 
                alt="Регулировка радиатора и проверка температуры" 
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
                  Как подготовить батареи к зиме и почему они не греют?
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 10 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-orange-500 pl-6 py-2 mb-10">
                Отопительный сезон — самое напряженное время. Батарея может греть наполовину, шуметь или начать подтекать в самый неподходящий момент. Поймем причины проблем и способы их решения.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Проблема №1: Воздушная пробка</h2>
              <p>
                Самая частая причина, по которой часть радиатора остается холодной. В системе скапливается воздух, который блокирует ток воды. Решение: использование крана Маевского. Слегка открутите его специальным ключом или отверткой до появления характерного шипения. Как только пойдет вода без пузырьков — закрутите обратно.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Проблема №2: Засорение радиатора</h2>
              <p>
                Со временем на дне батарей оседает шлам, ржавчина и песок. Если верх батареи горячий, а низ ледяной — необходима промывка. В условиях квартиры это сложный процесс, требующий демонтажа отопительного прибора. Самостоятельно это делать крайне опасно!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-orange-600">Когда звать профессионала?</h2>
              <ul>
                <li><strong>Влажные пятна:</strong> Под батареей или на стыках труб появилась влага.</li>
                <li><strong>Шум и стук:</strong> Внутри радиатора слышны удары или постоянное бульканье.</li>
                <li><strong>Замена вентилей:</strong> Старые вентили не поворачиваются или начали "сопливеть".</li>
              </ul>

              <div className="bg-gray-900 text-white p-8 rounded-2xl my-10 relative overflow-hidden text-center">
                <p className="text-xl font-bold mb-4">Важное предупреждение!</p>
                <p className="m-0 text-gray-300">Никогда не пытайтесь самостоятельно менять батареи в разгар отопительного сезона без согласования с КСК. Давление в системе огромно, а температура воды может достигать 90 градусов. Ожог и затопление нескольких этажей гарантированы.</p>
              </div>

              <p>
                Я помогу вам грамотно заменить старые чугунные гармошки на современные биметаллические радиаторы с высокой теплоотдачей. Все сделаю аккуратно, быстро и с гарантией на герметичность всех швов.
              </p>
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
