import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://wa.me/77055535332"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white text-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-[#25D366] group"
        title="WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
      </a>
      <a
        href="tel:+77074791020"
        className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(239,68,68,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(239,68,68,0.5)]"
        title="Позвонить Манасу"
      >
        <Phone size={24} className="fill-white" />
      </a>
      <a
        href="tel:+77055535332"
        className="w-14 h-14 bg-gradient-to-br from-[#1173D4] to-[#13B6EC] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(17,115,212,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(17,115,212,0.5)]"
        title="Позвонить (основной)"
      >
        <Phone size={24} className="fill-white" />
      </a>
    </div>
  );
};

export default FloatingButtons;
