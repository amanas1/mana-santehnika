import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Wrench } from "lucide-react";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0095DA] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0095DA] rounded-full blur-[120px]" />
      </div>

      <SEO 
        title="Страница не найдена (404) | Мастер Манас" 
        description="К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу сайта сантехника в Алматы." 
      />
      
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <div className="relative mb-8 inline-block">
          <Wrench className="w-24 h-24 text-[#0095DA] opacity-20 absolute -top-8 -right-8 animate-bounce transition-all" />
          <div className="text-[120px] md:text-[180px] font-black text-[#0095DA] leading-none select-none tracking-tighter">
            404
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Упс! Кажется, трубу <span className="text-[#0095DA]">прорвало...</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto">
          Страница, которую вы ищете, утекла в неизвестном направлении. Но не волнуйтесь, наш мастер уже в пути!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-700 font-bold px-8 py-4 rounded-2xl border-2 border-gray-100 hover:border-[#0095DA] hover:text-[#0095DA] transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Вернуться назад
          </button>
          
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0095DA] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#0084c0] shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95"
          >
            <Home size={20} />
            На главную
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-400 font-medium">Нужна срочная помощь сантехника?</p>
          <a href="tel:+77074791020" className="text-[#0095DA] text-2xl font-black hover:underline mt-2 block">
            +7 (707) 479-10-20
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
