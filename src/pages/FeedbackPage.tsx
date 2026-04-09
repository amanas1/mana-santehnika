import { useState } from "react";
import SEO from "../components/SEO";
import { MessageSquare, Phone, Mail, User, MessageCircle } from "lucide-react";
import { trackConversion } from "../utils/googleAds";

const subjectOptions = [
  "Вопрос",
  "Жалоба",
  "Предложение",
  "Благодарность",
  "Поддержка",
  "Другое",
];

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion();
    const text = `Обратная связь:\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email || "не указан"}\nТема: ${subject}\nСообщение: ${message}`;
    window.open(`https://wa.me/77055535332?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Оставить заявку | Обратная связь — Мастер Манас, Алматы"
        description="Оставьте заявку, задайте вопрос или поделитесь отзывом. Мы ответим в течение 15 минут!"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0095DA] to-[#0074b3] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-72 h-72 rounded-full bg-white -top-10 -right-10" />
          <div className="absolute w-48 h-48 rounded-full bg-white -bottom-8 -left-8" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <MessageSquare size={18} />
            Обратная связь
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Оставить заявку</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Задайте вопрос, оставьте отзыв или запишитесь на услугу — мы ответим в течение 15 минут
          </p>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✅</span>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Сообщение отправлено!</h2>
                <p className="text-gray-500 mb-6">Спасибо за обращение. Мы ответим вам в ближайшее время.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0095DA] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0084c0] transition-colors"
                >
                  Новое сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Заполните форму</h2>

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

                {/* Email */}
                <div className="mb-5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email (необязательно)</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@mail.com"
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Тема обращения *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent"
                  >
                    <option value="">Выберите тему</option>
                    {subjectOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Сообщение *</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Опишите ваш вопрос или проблему подробнее..."
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0095DA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0084c0] transition-colors shadow-lg"
                >
                  ✉️ Отправить сообщение
                </button>
              </form>
            )}
          </div>

          {/* Alternative Contact */}
          <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-center text-gray-500 text-sm mb-4">Или свяжитесь напрямую:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+77055535332"
                onClick={trackConversion}
                className="inline-flex items-center justify-center gap-2 bg-[#0095DA] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0084c0] transition-colors"
              >
                <Phone size={18} />
                +7 (705) 553-53-32
              </a>
              <a
                href="https://wa.me/77055535332"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackConversion}
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

export default FeedbackPage;
