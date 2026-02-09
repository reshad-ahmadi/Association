import React, { useEffect, useState } from 'react';

export default function Navigation() {
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

    <div>
   <div className="flex items-center justify-center gap-4 mb-6 text-gray-500 text-[10px] sm:text-sm md:text-xs font-medium tracking-widest uppercase opacity-60">
    <div className="h-[1px] w-8 sm:w-12 md:w-10 bg-gray-700"></div>
    <span className="whitespace-nowrap">Trusted by Leaders</span>
    <div className="h-[1px] w-8 sm:w-12 md:w-10 bg-gray-700"></div>
  </div>
 
    <div className="relative w-full overflow-hidden bg-[#050505] py-[18px] border-y border-white/5">
      {/* Main scrolling container */}
      <div className="flex w-max animate-scroll hover:pause items-center">
        {duplicatedImages.map((src, index) => (
          <div 
            key={index}
            className="relative flex-shrink-0 group px-6 md:px-8"
          >
            {/* Image container */}
            <div className="relative h-10 w-24 md:h-10 md:w-28 flex items-center justify-center transition-all duration-300">
              <img 
                src={src} 
                alt={`Partner ${index % images.length + 1}`}
                className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10"></div>
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-20">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      )}
    </div>
         
   </div>
  );
}