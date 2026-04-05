import { Phone, Clock, MapPin, Menu, X, ChevronDown, Droplet, Calculator, Calendar, MessageSquare, Map } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LogoSVG = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 400" className={className}>
    <g transform="translate(-200, -160)">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M 230 380 L 400 210 L 570 380" strokeWidth="36"/>
            <path d="M 290 315 L 290 510" strokeWidth="36"/>
            <path d="M 510 315 L 510 510" strokeWidth="36"/>
            <path d="M 260 510 L 540 510" strokeWidth="36"/>
        </g>
        <g transform="translate(325, 310) scale(0.28)" fill="currentColor">
            <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.6 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
        </g>
    </g>
    <text x="440" y="190" fontFamily="'Inter', 'Montserrat', 'Arial Black', sans-serif" fontWeight="900" fontSize="120" fill="currentColor" textAnchor="start" letterSpacing="0">Сантехник Алматы</text>
    <text x="440" y="325" fontFamily="'Inter', 'Montserrat', 'Arial Black', sans-serif" fontWeight="900" fontSize="130" fill="currentColor" textAnchor="start" letterSpacing="1">Манас Мастер</text>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => `
    transition-all duration-300 px-3 py-2 rounded-lg font-medium text-sm lg:text-base whitespace-nowrap
    ${isActive(path) 
      ? "text-[#1173D4] bg-blue-50/50 border border-blue-100/50 shadow-sm" 
      : "text-gray-600 hover:text-[#1173D4] hover:bg-gray-50"}
  `;

  return (
    <header className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#1173D4] text-white py-2 px-4 flex flex-wrap justify-between items-center text-sm font-medium">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="tel:+77055535332" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone size={16} />
                +7 (705) 553-53-32
              </a>
              <span className="opacity-50 text-white/50">|</span>
              <a href="tel:+77074791020" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                +7 (707) 479-10-20
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Clock size={16} />
              Работаем 24/7
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin size={16} />
              г. Алматы, мкр. Аксай 4-11
            </div>
          </div>
          <div className="hidden sm:block font-bold tracking-wide">
            Вызов мастера БЕСПЛАТНО!
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white py-4 flex justify-center items-center sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md border-b border-gray-100 py-3' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group" title="На главную - Сантехник Манас Алматы">
            <LogoSVG className="h-14 lg:h-16 w-auto text-[#1173D4] group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-2">
            <Link to="/" className={navLinkClass("/")}>Главная</Link>
            <Link to="/services" className={navLinkClass("/services")}>Услуги</Link>
            <Link to="/blog" className={navLinkClass("/blog")}>Блог</Link>
            <Link to="/portfolio" className={navLinkClass("/portfolio")}>Портфолио</Link>
            <Link to="/prices" className={navLinkClass("/prices")}>Цены</Link>
            <Link to="/reviews" className={navLinkClass("/reviews")}>Отзывы</Link>
            <Link to="/about" className={navLinkClass("/about")}>О нас</Link>
            <Link to="/contacts" className={navLinkClass("/contacts")}>Контакты</Link>

            {/* Инструменты Dropdown */}
            <div className="relative ml-2" ref={toolsRef}>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={`flex items-center gap-1 transition-all duration-300 px-3 py-2 rounded-lg font-medium text-sm lg:text-base whitespace-nowrap ${
                  isActive("/tools") || isToolsOpen
                    ? "text-[#1173D4] bg-blue-50/50 border border-blue-100/50 shadow-sm" 
                    : "text-gray-600 hover:text-[#1173D4] hover:bg-gray-50"
                }`}
              >
                Инструменты
                <ChevronDown size={16} className={`transition-transform duration-300 ${isToolsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 transition-all duration-300 origin-top-right
                  ${isToolsOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}`}
              >
                <div className="px-4 pb-2 mb-2 border-b border-gray-50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Полезные сервисы</p>
                </div>
                <Link
                  to="/tools/calculator"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">🧮 Калькулятор</span>
                  <span className="text-xs text-gray-500 mt-0.5">Рассчитать стоимость работ</span>
                </Link>
                <Link
                  to="/tools/booking"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">📅 Бронирование</span>
                  <span className="text-xs text-gray-500 mt-0.5">Оформить вызов онлайн</span>
                </Link>
                <Link
                  to="/tools/feedback"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">✉️ Заявка</span>
                  <span className="text-xs text-gray-500 mt-0.5">Оставить сообщение мастеру</span>
                </Link>
                <Link
                  to="/tools/service-map"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">🗺️ Карта</span>
                  <span className="text-xs text-gray-500 mt-0.5">Проверить зону обслуживания</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-gradient-to-r from-[#1173D4] to-[#13B6EC] text-white px-7 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300">
              Вызвать мастера
            </button>
            
            <button 
              className="xl:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] xl:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute inset-x-4 top-8 bottom-8 bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform ${isMenuOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header of mobile menu */}
          <div className="bg-[#1173D4] p-3 flex items-center gap-3">
            <Link to="/" className="bg-white rounded-2xl p-2 px-3 flex items-center justify-center gap-3 flex-1" onClick={() => setIsMenuOpen(false)}>
              <LogoSVG className="h-10 w-auto text-[#1173D4]" />
            </Link>
            <button 
              className="w-12 h-12 border-2 border-white/20 text-white rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col">
            {/* Main Links */}
            <div className="flex flex-col mb-4">
              {[
                { path: "/", label: "Главная" },
                { path: "/services", label: "Услуги" },
                { path: "/blog", label: "Блог" },
                { path: "/portfolio", label: "Портфолио" },
                { path: "/prices", label: "Цены" },
                { path: "/reviews", label: "Отзывы" },
                { path: "/about", label: "О нас" },
                { path: "/contacts", label: "Контакты" },
              ].map((item, index) => (
                <div key={item.path}>
                  <Link 
                    to={item.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3.5 px-4 font-semibold text-[15px] transition-all rounded-[1rem] ${
                      isActive(item.path) 
                        ? "bg-[#1173D4] text-white shadow-md" 
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {index < 7 && !isActive(item.path) && (
                    <div className="h-px bg-slate-100 mx-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Tools Lists */}
            <div className="flex flex-col mt-2 mb-6">
              <p className="text-[12px] font-bold text-gray-400 mb-3 px-4">Инструменты</p>
              
              <Link to="/tools/calculator" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Calculator size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Калькулятор стоимости</span>
              </Link>
              
              <Link to="/tools/booking" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Calendar size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Онлайн бронирование</span>
              </Link>
              
              <Link to="/tools/feedback" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <MessageSquare size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Оставить заявку</span>
              </Link>
              
              <Link to="/tools/service-map" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Map size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Карта обслуживания</span>
              </Link>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/80 backdrop-blur-sm relative mt-auto">
            {/* WhatsApp Floating Overlay */}
            <a href="https://wa.me/77074791020" target="_blank" rel="noopener noreferrer" 
               className="absolute -top-7 right-8 w-14 h-14 bg-[#22c55e] border-4 border-white text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform z-10"
               title="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.174.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.548-.68.116-.174.231-.144.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.414-.101.819z"/></svg>
            </a>

            <div className="flex flex-col gap-4">
              <a href="tel:+77055535332" className="bg-[#1173D4] text-white py-3.5 rounded-2xl font-bold text-[16px] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95 transition-all">
                <Phone size={18} />
                Позвонить мастеру
              </a>
              
              <div className="flex justify-between items-center gap-3">
                <a href="tel:+77055535332" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl border border-blue-50 text-[13px] font-bold text-[#1173D4] shadow-sm active:bg-blue-50 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  705 553-53-32
                </a>
                <a href="tel:+77074791020" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl border border-blue-50 text-[13px] font-bold text-[#1173D4] shadow-sm active:bg-blue-50 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#13B6EC] animate-pulse"></span>
                  707 479-10-20
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

