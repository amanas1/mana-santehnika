import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageCircle, Droplet, ChevronRight } from "lucide-react";
import { trackConversion } from "../utils/googleAds";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1173D4] to-[#13B6EC] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                <Droplet size={22} className="fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold leading-none text-[#1173D4] tracking-tight">Сантехник Алматы</h3>
                <p className="text-xs text-gray-500 font-medium">Мастер Манас</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Профессиональные сантехнические услуги в Алматы. Работаем с 2010 года.
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-50 px-3 py-2 rounded-lg text-center">
                <div className="font-extrabold text-[#1173D4] text-lg leading-tight">1000+</div>
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Клиентов</div>
              </div>
              <div className="bg-green-50 px-3 py-2 rounded-lg text-center">
                <div className="font-extrabold text-green-600 text-lg leading-tight">10</div>
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Лет опыта</div>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-gray-900 font-extrabold mb-6 text-lg tracking-tight">Популярные услуги</h4>
            <ul className="space-y-3">
              {[
                { name: "Вызов сантехника", path: "/vyzov-santehnika-almaty" },
                { name: "Установка смесителя", path: "/ustanovka-smesitelya-almaty" },
                { name: "Ремонт унитаза", path: "/remont-unitaza-almaty" },
                { name: "Ремонт бойлера", path: "/remont-boilera-almaty" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 text-sm hover:text-[#1173D4] transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gray-400 group-hover:text-[#1173D4] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Articles */}
          <div>
            <h4 className="text-gray-900 font-extrabold mb-6 text-lg tracking-tight">Полезные статьи</h4>
            <ul className="space-y-3">
              {[
                { name: "Как выбрать смеситель", path: "/blog/article" },
                { name: "Почему капает кран", path: "/blog/faucet-repair" },
                { name: "Засор канализации", path: "/blog/clog-removal" },
                { name: "Ремонт батарей", path: "/blog/heating-maintenance" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 text-sm hover:text-[#1173D4] transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gray-400 group-hover:text-[#1173D4] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-gray-900 font-extrabold mb-6 text-lg tracking-tight">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex flex-col gap-3">
                  <a href="tel:+77055535332" onClick={trackConversion} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#1173D4] transition-colors">
                      <Phone size={14} className="text-[#1173D4] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#1173D4] transition-colors">+7 (705) 553-53-32</div>
                    </div>
                  </a>
                  <a href="tel:+77074791020" onClick={trackConversion} className="flex items-start gap-3 group ml-11">
                    <div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#1173D4] transition-colors">+7 (707) 479-10-20</div>
                    </div>
                  </a>
                  <div className="text-xs text-gray-500 ml-11 mt-1">Круглосуточно, без выходных</div>
                </div>
              </li>
              <li>
                <a href="https://wa.me/77055535332" target="_blank" rel="noopener noreferrer" 
                   onClick={trackConversion}
                   className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle size={14} className="text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#25D366] transition-colors">Написать в WhatsApp</div>
                    <div className="text-xs text-gray-500">Ответим за 5 минут</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">г. Алматы</div>
                  <div className="text-xs text-gray-500">мкр. Аксай 4-11</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 font-medium tracking-wide">
            © {new Date().getFullYear()} Мастер Манас. Все права защищены.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="/about" className="hover:text-[#1173D4] transition-colors">О нас</Link>
            <Link to="/privacy-policy" className="hover:text-[#1173D4] transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
