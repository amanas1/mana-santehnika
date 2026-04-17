import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostLeak = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Устранение протечек: Первая помощь и профессиональное решение | Мастер Манас"
        description="Что делать, если прорвало трубу или закапало из-под раковины? Инструкция по экстренному устранению протечек от профессионального сантехника в Алматы."
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
                src="/images/services/protechki.jpg" 
                alt="Мастер проводит диагностику и устранение протечки труб" 
                title="Устранение протечек труб в Алматы" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Экстренно
                  </span>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Протечки
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Прорвало трубу? Действуйте немедленно: Инструкция
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 14 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Затопление квартиры — это страшный сон любого владельца. Паника — ваш главный враг. В этом материале я дам четкий алгоритм действий, который поможет минимизировать ущерб до приезда профессионального мастера.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-red-600">Шаг 1: Перекройте стояк!</h2>
              <p>
                Ваша первая и самая главная задача — остановить поступление воды. Вы обязаны знать, где находятся ваши запорные вентили. Обычно они расположены в сантехническом шкафу в туалете или под раковиной. Поверните их по часовой стрелке до упора. Если краны старые и не поддаются — не дергайте их слишком сильно, чтобы не сорвать, лучше вызовите аварийную службу или подложите ветошь под место течи.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Шаг 2: Обесточьте приборы</h2>
              <p>
                Если вода попала на пол и растеклась в сторону розеток или бытовой техники — немедленно выключите автоматы в электрощитке. Сочетание воды и электричества смертельно опасно. Не входите в воду, если видите, что она контактирует с электроприборами.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Временные меры до приезда мастера</h2>
              <p>
                Если протечка небольшая (свищ в трубе), можно попробовать использовать временный хомут: кусочек резины (от старой велосипедной камеры или перчатки) плотно обмотайте вокруг пробоины и закрепите проволокой или автомобильным хомутом. Это даст вам пару часов спокойствия.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Помните: в Алматы я работаю 24/7. Даже ночью я готов приехать к вам со всеми запчастями и сварочным аппаратом, чтобы полностью восстановить целостность системы.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Почему нельзя оставлять микропротечки?</h2>
              <p>
                "Ну оно же просто капает чуть-чуть" — фраза, приводящая к плесени, гниению перекрытий и внезапному прорыву, когда вас не будет дома. Давление в городской сети нестабильно, и маленький свищ может превратиться в фонтан за считанные секунды.
              </p>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6">Нужна экстренная помощь прямо сейчас?</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white font-bold rounded-2xl shadow-xl hover:bg-red-700 transition-all text-xl">
                Вызвать Манаса (24/7)
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostLeak;
