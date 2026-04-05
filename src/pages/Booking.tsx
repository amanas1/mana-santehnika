import { useState } from "react";
import SEO from "../components/SEO";
import { CalendarDays, Clock, Phone, MapPin, User, MessageCircle } from "lucide-react";

const timeSlots = [
  "09:00 – 11:00",
  "11:00 – 13:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
  "17:00 – 19:00",
  "19:00 – 21:00",
];

const serviceOptions = [
  "Вызов сантехника",
  "Установка смесителя",
  "Ремонт унитаза",
  "Ремонт душевой кабины",
  "Установка ванны",
  "Ремонт бойлера",
  "Прочистка канализации",
  "Установка фильтра воды",
  "Другое",
];

const BookingPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Онлайн бронирование:\nИмя: ${name}\nТелефон: ${phone}\nАдрес: ${address}\nУслуга: ${service}\nДата: ${date}\nВремя: ${timeSlot}\nОписание: ${description}`;
    window.open(`https://wa.me/77055535332?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Онлайн бронирование мастера в Алматы | Запись на удобное время"
        description="Забронируйте вызов сантехника на удобную дату и время. Быстрая запись онлайн без звонков."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0095DA] to-[#0074b3] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-72 h-72 rounded-full bg-white -top-10 -right-10" />
          <div className="absolute w-48 h-48 rounded-full bg-white -bottom-8 -left-8" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <CalendarDays size={18} />
            Онлайн бронирование
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Запишитесь на удобное время</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Выберите дату, время и услугу — мастер приедет точно в назначенное время
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✅</span>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Заявка отправлена!</h2>
                <p className="text-gray-500 mb-6">Мы свяжемся с вами в ближайшее время для подтверждения записи.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0095DA] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0084c0] transition-colors"
                >
                  Новая запись
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Заполните форму записи</h2>

                {/* Name */}
                <div className="mb-5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Ваше имя *</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Как к вам обращаться?"
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Телефон *</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Адрес *</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      placeholder="Район, улица, дом, квартира"
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="mb-5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Необходимая услуга *</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                  >
                    <option value="">Выберите услугу</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Дата *</label>
                    <div className="relative">
                      <CalendarDays size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Время *</label>
                    <div className="relative">
                      <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        required
                        className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                      >
                        <option value="">Выберите время</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Описание проблемы</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Опишите вашу проблему подробнее (необязательно)"
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0095DA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0084c0] transition-colors shadow-lg"
                >
                  📅 Забронировать время
                </button>
              </form>
            )}
          </div>

          {/* Alternative Contact */}
          <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-center text-gray-500 text-sm mb-4">Или свяжитесь с нами напрямую:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+77055535332"
                className="inline-flex items-center justify-center gap-2 bg-[#0095DA] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0084c0] transition-colors"
              >
                <Phone size={18} />
                +7 (705) 553-53-32
              </a>
              <a
                href="https://wa.me/77055535332"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
