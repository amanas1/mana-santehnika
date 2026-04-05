import SEO from "../components/SEO";
import { Star, MessageCircle, CheckCircle2, Calendar } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  
  const ratingTexts = ["", "Ужасно 😠", "Плохо 😞", "Нормально 🙂", "Хорошо! 😁", "Отлично! 🤩"];

  const reviews = [
    {
      name: "Айгерим",
      letter: "А",
      color: "bg-blue-500",
      date: "02 Марта 2025",
      service: "Установка смесителя",
      text: "Очень благодарна Манасу за быструю работу. Смеситель на кухне потек в выходной день. Мастер приехал через 30 минут, сам купил нужные запчасти. Все сделал аккуратно и дал гарантию. Рекомендую!",
      rating: 5
    },
    {
      name: "Тимур",
      letter: "Т",
      color: "bg-emerald-500",
      date: "25 Февраля 2025",
      service: "Ремонт бойлера",
      text: "Бойлер перестал греть воду. Вызвал Манаса, он приехал через 40 минут. Оказалось потек ТЭН. Заменил быстро, почистил бак от накипи. Теперь все отлично работает. Спасибо за оперативность!",
      rating: 5
    },
    {
      name: "Елена",
      letter: "Е",
      color: "bg-purple-500",
      date: "18 Февраля 2025",
      service: "Монтаж люстры",
      text: "Мастер повесил три люстры и бра после ремонта. Сделал все очень ровно, никаких торчащих проводов. Мусор за собой убрал. Очень вежливый и пунктуальный специалист.",
      rating: 5
    },
    {
      name: "Данияр",
      letter: "Д",
      color: "bg-amber-500",
      date: "10 Февраля 2025",
      service: "Ремонт инсталляции Geberit",
      text: "Потекла инсталляция унитаза. Другие сантехники предлагали ломать плитку. Манас приехал, разобрал кнопку, достал механизм и поменял прокладку за 20 минут. Прямо спас наш ремонт! Огромное спасибо.",
      rating: 5
    },
    {
      name: "Асель",
      letter: "А",
      color: "bg-rose-500",
      date: "05 Февраля 2025",
      service: "Установка стиральной машины",
      text: "Нужно было подключить стиралку в нестандартном месте. Мастер провел трубы, сделал врезку в канализацию и все настроил. Все работает как часы. Сервис на высшем уровне.",
      rating: 5
    },
    {
      name: "Руслан",
      letter: "Р",
      color: "bg-indigo-500",
      date: "28 Января 2025",
      service: "Разводка труб в новостройке",
      text: "Делал ремонт с нуля. Манас полностью сделал сантехнику: трубы Рехау, гребенки, фильтры, канализация. Сделано на совесть, опрессовали систему. Качество материалов и работы - топ.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col pt-16 md:pt-20">
      <SEO 
        title="Отзывы клиентов | Вызов сантехника в Алматы"
        description="Читайте отзывы наших клиентов о работе сантехника Мастер Манас в Алматы. Мы ценим вашу обратную связь и гарантируем качество услуг."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1173D4] to-[#13B6EC] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20 blur-3xl mix-blend-overlay" />
          <div className="absolute w-64 h-64 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Отзывы клиентов</h1>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-2xl">4.9 / 5</span>
            </div>
          </div>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            Основано на более чем 500 успешных вызовах в Алматы. Мы дорожим своей репутацией.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-10 relative z-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-sm shrink-0`}>
                      {review.letter}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900 leading-tight">{review.name}</p>
                        <span className="flex items-center gap-1 bg-gray-50 text-emerald-600 text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0">
                          <CheckCircle2 size={10} strokeWidth={3} />
                          Проверен
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1 font-medium">
                        <Calendar size={12} />
                        {review.date}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">"{review.text}"</p>
                </div>
                
                <div className="mt-auto">
                  <span className="inline-block bg-blue-50 text-[#1173D4] text-[11px] font-bold px-3 py-1.5 rounded-lg border border-blue-100 uppercase tracking-wider">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Leave Review Form matching screenshot */}
          <div className="mt-20 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                🙂
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Поделитесь своим опытом! 📝✨
              </h3>
              <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
                Ваш отзыв поможет другим клиентам сделать правильный выбор
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Ваше имя *</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all text-sm"
                    placeholder="Как к вам обращаться?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Телефон *</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all text-sm"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Какую услугу оказывали? (необязательно)</label>
                <div className="relative">
                  <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all text-sm appearance-none">
                    <option value="">Выберите услугу</option>
                    <option value="Прочистка канализации">Прочистка канализации</option>
                    <option value="Замена смесителя">Замена смесителя</option>
                    <option value="Установка унитаза">Установка унитаза</option>
                    <option value="Ремонт труб">Ремонт труб</option>
                    <option value="Установка раковины">Установка раковины</option>
                    <option value="Устранение засора">Устранение засора</option>
                    <option value="Ремонт сливного бачка">Ремонт сливного бачка</option>
                    <option value="Установка водонагревателя">Установка водонагревателя</option>
                    <option value="Другое">Другое</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Оценка работы *</label>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        type="button" 
                        key={star} 
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className={`transition-all duration-200 hover:scale-110 ${
                          star <= (hoverRating || rating) ? 'text-amber-400' : 'text-gray-300'
                        }`}
                      >
                        <Star size={24} strokeWidth={1.5} className={star <= (hoverRating || rating) ? 'fill-current' : ''} />
                      </button>
                    ))}
                  </div>
                  {(hoverRating > 0 || rating > 0) && (
                    <span className="text-sm font-semibold text-gray-700 animate-in fade-in zoom-in duration-300">
                      {ratingTexts[hoverRating || rating]}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Ваш отзыв *</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all text-sm resize-none"
                  placeholder="Поделитесь впечатлениями о работе нашего мастера..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 bg-[#1173D4] text-white font-bold rounded-xl hover:bg-[#0084c0] shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Отправить отзыв 🚀
              </button>

              <div className="text-center mt-4">
                <p className="text-xs text-gray-400 font-medium">
                  * Обязательные поля. Отзыв будет проверен перед публикацией 📋
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
