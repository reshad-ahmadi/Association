import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = ['about_us', 'our_mission', 'events', 'membership', 'news_updates'];
  const resourceLinks = ['documentation', 'support_center', 'privacy_policy', 'terms_service', 'community'];

  return (
    <footer className="relative bg-[#050505] text-white pt-10 sm:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-white/5">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-[70px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 sm:mb-16">
          {/* Brand/About Column - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/40 backdrop-blur-md">
              <span className="text-[#FACC15] text-[10px] sm:text-xs">✦</span>
              <span className="text-gray-300 text-[10px] sm:text-xs font-medium tracking-wide uppercase">Association</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm max-w-xs">
              {t('association_desc')}
            </p>
            <div className="flex space-x-3 pt-1">
              {['X', 'Facebook', 'LinkedIn'].map((social, idx) => (
                <a key={idx} href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300 group">
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" opacity="0.5"/> 
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Half width on mobile */}
          <div className="col-span-1 space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">{t('quick_links')}</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FACC15] transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#FACC15] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Half width on mobile */}
          <div className="col-span-1 space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">{t('resources')}</h4>
             <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FACC15] transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#FACC15] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">{t('stay_updated')}</h4>
            <p className="text-gray-400 text-xs sm:text-sm">{t('newsletter_desc')}</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder={t('email_placeholder')} 
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-[#FACC15]/50 focus:ring-1 focus:ring-[#FACC15]/50 transition-all text-xs sm:text-sm placeholder-gray-600"
              />
              <button className="absolute right-1 top-1 bg-[#FACC15] hover:bg-[#EAB308] text-black p-2 rounded-lg transition-colors duration-200 shadow-lg scale-90 sm:scale-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] sm:text-xs md:text-sm text-gray-500 text-center md:text-left">
          <p>© {currentYear} {t('rights_reserved_text')}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#" className="hover:text-[#FACC15] transition-colors duration-200 whitespace-nowrap">{t('privacy_policy')}</a>
            <a href="#" className="hover:text-[#FACC15] transition-colors duration-200 whitespace-nowrap">{t('terms_service')}</a>
            <a href="#" className="hover:text-[#FACC15] transition-colors duration-200 whitespace-nowrap">{t('cookies_settings')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
