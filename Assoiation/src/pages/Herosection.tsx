import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden flex flex-col justify-center items-center pt-32 pb-[30px] mb-5 md:mb-[130px]">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)]
       bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>



      {/* Main Content Container */}
      <div className="relative z-10  w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-2 sm:px-6 min-[320px]:pt-[40px]
       min-[320px]:mb-[-30px] lg:px-8 text-center transition-all duration-300">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-gray-800 bg-gray-900/40 backdrop-blur-md
         mb-6 sm:mb-8 hover:border-gray-700 transition-colors cursor-pointer transform hover:scale-105 duration-300">
          <span className="text-yellow-400 text-[10px] sm:text-xs">✦</span>
          <span className="text-gray-300 text-[10px] sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap">Powered by Community</span>
          <span className="text-yellow-400 text-[10px] sm:text-xs">✦</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-[23px] lg:text-[38px] 2xl:text-[55px] font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.2] sm:leading-tight">
          Union of Afghan Manufacturing Companies of <br className="hidden sm:block" />
          <span className="bg-gradient-to-b from-[#FACC15] text-[34px] md:text-[22px] 2xl:text-[48px] to-[#EAB308] bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
            Cans, Profiles, Iron and Galvanized Pipes
          </span>
        </h1>

        {/* Subheadline description */}
        <p className="mt-8 sm:mt-12 max-w-2xl 2xl:max-w-5xl mx-auto text-xs sm:text-base md:text-[16px]
         md:max-w-[600px] 2xl:text-[25px] text-gray-400 mb-8 sm:mb-12 leading-relaxed">
          The union was established in 2024 (1403 in the Afghan calendar) to improve coordination among manufacturing companies and strengthen cooperation with government and non-government institutions, supporting the growth of Afghanistan’s manufacturing sector.
 
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-5 sm:mb-6 w-full px-4 sm:px-0">
          <button className="w-full sm:w-auto min-w-[140px] px-5 py-2 sm:px-7 sm:py-3 bg-[#FACC15] hover:bg-[#EAB308] text-black 
          text-sm sm:text-base md:py-[9px] font-bold rounded-[7px] transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            JOIN NOW
          </button>
    
    
    
    
        </div>

        {/* Bottom Label / Supported Chains equivalent */}
      
      
      
      
      

      </div>
    </section>
  );
};

export default HeroSection;
