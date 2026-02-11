import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [
    "/images/ARIYA_PROFILE.jpg-removebg-preview.png",
    "/images/FOLAD_PROFILE.jpg-removebg-preview.png",
    "/images/GHAZNAWI_PROFILE.jpg-removebg-preview.png",
    "/images/HERAT_AFGHAN_PROFILE.jpg-removebg-preview.png",
    "/images/KAMRAN_PROFILE.jpg-removebg-preview.png",
    "/images/MAZAR_PROFILE.jpg-removebg-preview.png",
    "/images/RIAL_PROFILE.jpg-removebg-preview.png",
    "/images/SHAMAL_PROFILE.jpg-removebg-preview.png",
    "/images/SHIRZAD_PROFILE.jpg-removebg-preview.png",
    "/images/VICTOR_PIPE.jpg-removebg-preview.png",
  ];

  const duplicatedImages = [...images, ...images, ...images, ...images];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-[#0B1222] text-white overflow-hidden flex flex-col justify-center items-center pt-32 pb-0">
      
      {/* Background Image with High-Intensity Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Industrial Steel and Iron Pipe Manufacturing"
          className="w-full h-full object-cover opacity-160 object-center"
        />
        {/* Advanced Multi-Layer Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1222] via-[#0B1222]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222] via-transparent to-[#0B1222]/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.2),transparent_70%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-2 sm:px-6 min-[320px]:pt-[40px]
       min-[320px]:mb-[-30px] lg:px-8 text-center transition-all duration-300">
        
        {/* Top Badge - Refined for Dark Mode */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-md
         mb-6 sm:mb-8 hover:border-blue-400/50 transition-colors cursor-pointer transform hover:scale-105 duration-300">
          <span className="text-blue-400 text-[10px] sm:text-xs">✦</span>
          <span className="text-blue-100 text-[10px] sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap tracking-widest">{t('powered_by')}</span>
          <span className="text-blue-400 text-[10px] sm:text-xs">✦</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-[30px] lg:text-[36px] 2xl:text-[65px]  font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
          <span className="block  mb-2">{t('hero_title_1')}</span>
          <span className=" uppercase font-black sm:text-4xl md:text-[24px] lg:text-[30px] 2xl:text-[65px] text-gray-200">
            {t('hero_title_2')}
          </span>
        </h1>

        {/* Subheadline description */}
        <p className="mt-8 sm:mt-10 max-w-2xl 2xl:max-w-5xl mx-auto text-sm sm:text-lg md:text-[16px]
         md:max-w-[700px] lg:text-[16px] 2xl:text-[28px] text-blue-100/80 mb-8 sm:mb-12 leading-relaxed font-medium">
          "{t('hero_desc')}"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-5 sm:mb-6 w-full px-4 sm:px-0">
          <button className="w-full sm:w-auto min-w-[160px] px-5 py-4 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white 
          text-sm sm:text-base font-bold rounded-lg whitespace-nowrap">
            {t('join_now')}
          </button>
        </div>
      </div>

      {/* Trusted by Leaders - inside hero with same background */}
      <div className="relative z-10 w-full mt-10 sm:mt-14 pb-6">
        <div className="flex items-center justify-center gap-4 mb-6 text-gray-400 text-[10px] sm:text-sm md:text-xs font-medium tracking-widest uppercase opacity-70">
          <div className="h-[1px] w-8 sm:w-12 md:w-10 bg-gray-500"></div>
          <span className="whitespace-nowrap">{t('trusted_leaders')}</span>
          <div className="h-[1px] w-8 sm:w-12 md:w-10 bg-gray-500"></div>
        </div>

        <div className="relative w-full overflow-hidden py-[18px] border-y border-white/10">
          {/* Main scrolling container */}
          <div className="flex w-max animate-scroll hover:pause items-center">
            {duplicatedImages.map((src, index) => (
              <div 
                key={index}
                className="relative flex-shrink-0 group px-6 md:px-8"
              >
                <div className="relative h-16 w-36 md:h-20 md:w-44 flex items-center justify-center transition-all duration-300">
                  <img 
                    src={src} 
                    alt={`Partner ${index % images.length + 1}`}
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0B1222]/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0B1222]/80 to-transparent pointer-events-none z-10"></div>
          
          {/* Loading indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0B1222]/80 z-20">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
