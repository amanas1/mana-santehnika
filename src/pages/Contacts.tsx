import SEO from "../components/SEO";
import { Phone, MapPin, Mail, Clock, MessageCircle, Calendar, ShieldCheck, Star, PhoneCall } from "lucide-react";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Здравствуйте! Меня зовут ${formData.name}. Хочу записаться на сантехника. Телефон: ${formData.phone}. Адрес: ${formData.address}. Удобное время: ${formData.time}.${formData.message ? ' ' + formData.message : ''}`);
    window.open(`https://wa.me/77055535332?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col pt-24 md:pt-32 pb-20">
      <SEO 
        title="Контакты сантехника в Алматы — Позвоните прямо сейчас | Мастер Манас"
        description="Контакты профессионального сантехника в Алматы. Телефон: +7 (705) 553-53-32. WhatsApp: +7 (707) 479-10-20. Работаем с 9:00 до 21:00 без выходных и праздников, выезд за 30 минут."
        keywords="контакты сантехника алматы, телефон сантехника алматы, вызвать сантехника алматы номер"
        canonical="https://mana.kz/contacts"
        ogImage="/images/services/master-working.jpg"
      />
      
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Контакты</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Свяжитесь с мастером Манасом для решения любых сантехнических проблем в Алматы
          </p>
        </div>

        {/* 4 Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <a href="tel:+77055535332" className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group flex flex-col items-center">
            <Phone size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-[17px] font-bold text-gray-900 mb-3">Основной номер</h3>
            <span className="text-xl font-extrabold text-[#1173D4] block mb-1">+7 (705) 553-53-32</span>
            <span className="text-[13px] text-gray-400 font-medium">Звоните в любое время</span>
          </a>

          <a href="https://wa.me/77074791020" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group flex flex-col items-center">
            <MessageCircle size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-[17px] font-bold text-gray-900 mb-3">WhatsApp / Telegram</h3>
            <span className="text-xl font-extrabold text-[#1173D4] block mb-1">+77074791020</span>
            <span className="text-[13px] text-gray-400 font-medium">Быстрые сообщения</span>
          </a>

          <a href="mailto:amanas5535332@gmail.com" className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group flex flex-col items-center">
            <Mail size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-[17px] font-bold text-gray-900 mb-3">Email</h3>
            <span className="text-xl font-extrabold text-[#1173D4] block mb-1 truncate w-full">amanas5535332@gmail.com</span>
            <span className="text-[13px] text-gray-400 font-medium">Для заявок и вопросов</span>
          </a>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group flex flex-col items-center">
            <Clock size={32} strokeWidth={1.5} className="text-[#1173D4] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-[17px] font-bold text-gray-900 mb-3">Режим работы</h3>
            <span className="text-xl font-extrabold text-[#1173D4] block mb-1">9:00 – 21:00</span>
            <span className="text-[13px] text-gray-400 font-medium">Без выходных и праздников</span>
          </div>

        </div>

        {/* Middle Two Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Address Card */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={24} strokeWidth={2} className="text-[#1173D4]" />
              <h2 className="text-2xl font-extrabold text-gray-900">Адрес офиса</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-extrabold text-gray-900 mb-1">г. Алматы, микрорайон Аксай 4-11</h3>
              <p className="text-gray-500 font-medium text-[15px]">Офис мастера Манаса</p>
            </div>

            <h4 className="text-[15px] font-bold text-gray-900 mb-4">Районы обслуживания:</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[15px] text-gray-600">
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Алмалинский</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Ауэзовский</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Бостандыкский</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Жетысуский</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Медеуский</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Наурызбайский</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Турксибский</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-400" /> Алатауский</div>
            </div>
          </div>

          {/* How to Order Card */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={24} strokeWidth={2} className="text-[#1173D4]" />
              <h2 className="text-2xl font-extrabold text-gray-900">Как заказать услугу</h2>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#1173D4] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">1</div>
                <p className="text-[15px] text-gray-700 font-medium leading-relaxed">Позвоните по телефону или напишите в WhatsApp</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#1173D4] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">2</div>
                <p className="text-[15px] text-gray-700 font-medium leading-relaxed">Опишите проблему и удобное время</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#1173D4] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">3</div>
                <p className="text-[15px] text-gray-700 font-medium leading-relaxed">Мастер приедет в течение 30-60 минут</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#1173D4] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">4</div>
                <p className="text-[15px] text-gray-700 font-medium leading-relaxed">Диагностика, ремонт и гарантия на работы</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Mini Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <ShieldCheck size={28} strokeWidth={1.5} className="text-green-600 mb-3" />
            <span className="font-extrabold text-gray-900 text-[15px] mb-1">Гарантия 1 год</span>
            <span className="text-[13px] text-gray-500 font-medium">На все выполненные работы</span>
          </div>
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <Clock size={28} strokeWidth={1.5} className="text-[#1173D4] mb-3" />
            <span className="font-extrabold text-gray-900 text-[15px] mb-1">Быстрый выезд</span>
            <span className="text-[13px] text-gray-500 font-medium">В течение 30-60 минут</span>
          </div>
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <Star size={28} strokeWidth={1.5} className="text-amber-500 mb-3" />
            <span className="font-extrabold text-gray-900 text-[15px] mb-1">Официальная гарантия</span>
            <span className="text-[13px] text-gray-500 font-medium text-center leading-tight">На все работы</span>
          </div>
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <PhoneCall size={28} strokeWidth={1.5} className="text-[#1173D4] mb-3" />
            <span className="font-extrabold text-gray-900 text-[15px] mb-1">Выезд бесплатно</span>
            <span className="text-[13px] text-gray-500 font-medium">При заказе работ</span>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-blue-50 text-[#1173D4] rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={28} strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Бронирование услуги</h2>
            <p className="text-gray-500 font-medium">Запишитесь на удобное время для вызова сантехника</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Имя *</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all placeholder-gray-400 font-medium text-sm"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">Телефон *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all placeholder-gray-400 font-medium text-sm"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-bold text-gray-900 mb-2">Адрес *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    id="address" 
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-11 pr-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all placeholder-gray-400 font-medium text-sm"
                    placeholder="Укажите ваш адрес в Алматы"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">Необходимая услуга *</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all text-gray-600 font-medium text-sm appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Выберите услугу</option>
                  <option value="plumbing">Сантехника</option>
                  <option value="complex">Комплексный ремонт</option>
                  <option value="other">Другое / Не уверен</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-bold text-gray-900 mb-2">Дата *</label>
                <input 
                  type="date" 
                  id="date" 
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all text-gray-600 font-medium text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-bold text-gray-900 mb-2">Время *</label>
                <select 
                  id="time" 
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all text-gray-600 font-medium text-sm appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Выберите время</option>
                  <option value="morning">Утром (09:00 - 13:00)</option>
                  <option value="afternoon">Днем (13:00 - 18:00)</option>
                  <option value="evening">Вечером (18:00 - 22:00)</option>
                  <option value="urgent">Срочно (в течение часа)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Описание проблемы (необязательно)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#1173D4] outline-none transition-all placeholder-gray-400 font-medium text-sm resize-none"
                  placeholder="Опишите детали проблемы для более точной оценки..."
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#1173D4] text-white font-bold rounded-xl hover:bg-[#0f67be] shadow-sm transition-colors text-[15px] mt-4"
            >
              <Calendar size={18} />
              Забронировать время
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contacts;

