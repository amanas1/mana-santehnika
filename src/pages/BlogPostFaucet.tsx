import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Eye, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostFaucet = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Ремонт смесителя: Как устранить течь и заменить картридж | Мастер Манас"
        description="Профессиональные советы по самостоятельному ремонту смесителя. Узнайте основные причины протечек и способы их устранения. Инструкции от опытного сантехника в Алматы."
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
                src="/images/services/ustanovka-smesitelya.jpg" 
                alt="Процесс ремонта и настройки смесителя мастером" 
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
                  Ремонт смесителя: Полное руководство по замене картриджа
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 12 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-[#0095DA] pl-6 py-2 mb-10">
                Капающий кран — это не только раздражающий звук, но и лишние кубы воды в счете в конце месяца. Большинство современных смесителей поддаются ремонту в течение 15 минут, если знать, что именно нужно заменить. В этой статье я расскажу, как самостоятельно вернуть кран к жизни.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Основные причины неисправности</h2>
              <p>
                В 90% случаев поломка однорычажного смесителя связана с износом внутреннего керамического картриджа. Причины могут быть разными: плохое качество воды, попадание песка или просто механический износ пластин со временем. Если вода подтекает из-под рычага или кран капает в закрытом состоянии — время менять "сердце" смесителя.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Что понадобится для работы?</h2>
              <ul>
                <li>Шестигранный ключ (обычно 2.5 мм)</li>
                <li>Разводной ключ или пассатижи</li>
                <li>Тонкая плоская отвертка</li>
                <li>Новый картридж (советую сначала разобрать старый и взять его с собой в магазин для образца)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Пошаговая инструкция</h2>
              <ol>
                <li><strong>Перекройте воду:</strong> Обязательно перекройте краны горячей и холодной воды под мойкой.</li>
                <li><strong>Снимите заглушку:</strong> Подденьте отверткой маленькую сине-красную заглушку на рычаге.</li>
                <li><strong>Ослабьте винт:</strong> Вставьте шестигранник в отверстие и открутите фиксирующий винт на несколько оборотов.</li>
                <li><strong>Снимите рычаг:</strong> Потяните ручку вверх. Если она прикипела, слегка постучите по ней.</li>
                <li><strong>Открутите декоративный колпачок:</strong> Обычно он откручивается руками.</li>
                <li><strong>Открутите прижимную гайку:</strong> Используйте разводной ключ.</li>
                <li><strong>Замените картридж:</strong> Выньте старый картридж, очистите посадочное место от ржавчеины и установите новый, совместив выступы на картридже с отверстиями в корпусе.</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-[#0095DA] p-6 rounded-r-2xl my-8">
                <p className="font-bold text-gray-800 mb-2">Совет от Манаса:</p>
                <p className="m-0 italic">Не затягивайте прижимную гайку слишком сильно! Это может привести к повреждению пластин нового картриджа. Достаточно плотного усилия от руки с легким доворотом ключом.</p>
              </div>

              <p>
                Если после замены картриджа проблема не исчезла или вы чувствуете, что работа требует профессионального подхода — я всегда рядом. В Алматы я выезжаю на дом в течение 30 минут со всем необходимым инструментом.
              </p>
            </div>

            <div className="bg-gray-50 border-t border-gray-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Нужна квалифицированная установка?</h3>
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
