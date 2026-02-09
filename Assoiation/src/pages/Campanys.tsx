import { useState, useEffect } from 'react';

import image1 from '../../public/images/WhatsApp Image 2026-02-07 at 4.07.57 PM.jpeg';
import image2 from '../../public/images/WhatsApp Image 2026-02-07 at 4.22.59 PM.jpeg';
import image3 from '../../public/images/WhatsApp Image 2026-02-07 at 4.23.11 PM.jpeg';

export default function TaxationServices() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 7;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 10000); // 10 seconds for user readability
    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&sat=-50',
    image1,
    image2,
    image3,
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&sat=-50',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&sat=-50',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&sat=-50'
  ];

  const pageData = [
    { 
      title: ["Aria Sanat", "PROFILE", "PRODUCT CO."], 
      desc: [
        "Aria Sanat Profile Production Co. is a manufacturing and industrial trading company operating out of Herat, Afghanistan.The business is known to be involved in industrial profile production and related steel or metal processing activities.",
        ""
      ] 
    },
    { 
      title: ["Afghanistan Steel", "MANUFACTURING", "FACTORIES UNION."], 
      desc: [
        "Supporting the industrial growth and integration of manufacturing sectors across the region with a focus on steel and metal excellence.Providing essential infrastructure components for national development projects.",
        ""
      ] 
    },
    { 
      title: ["Folad Sanat", "IRON & STEEL", "FACTORY."], 
      desc: [
        "Leading the way in heavy industry and steel processing in Afghanistan. Equipped with modern technology to deliver high-quality construction materials for the local market.",
        ""
      ] 
    },
    { 
      title: ["Fazlli Ganzhawi", "PIPE PRODUCTION", "COMPANY."], 
      desc: [
        "Specializing in high-quality pipe manufacturing and industrial solutions.Dedicated to delivering professional infrastructure components for major construction projects.",
        ""
      ] 
    },
    { 
      title: ["Industrial Manufacturing", "HERAT,", "AFGHANISTAN."], 
      desc: [
        "A hub of industrial innovation and production excellence located in Herat's business district. Driving regional economic growth through dedicated manufacturing and trade services.",
        ""
      ] 
    },
    { 
      title: ["Nawid Mazar", "INDUSTRIAL", "COMPANY."], 
      desc: [
        "Expanding the reach of industrial manufacturing excellence to Mazar-i-Sharif and beyond.Providing localized production solutions for large-scale infrastructure and industrial needs.",
        ""
      ] 
    },
    { 
      title: ["General Metal", "AND STEEL", "CONSTRUCTION."], 
      desc: [
        "Building a stronger future for Afghanistan through advanced metal processing and engineering. A committed member of the manufacturing union focusing on quality and sustainability.",
        ""
      ] 
    }
  ];

  return (
    <div className="relative bg-[#050505]">
      <div className="relative overflow-hidden min-h-[80vh] flex items-center">
        {pageData.map((page, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center items-center p-4 md:p-8 ${
              index === currentPage ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 -z-0'
            }`}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center -z-10 transition-transform duration-[10000ms]"
              style={{ 
                backgroundImage: `url(${backgroundImages[index]})`,
                filter: 'brightness(0.25)',
                transform: index === currentPage ? 'scale(1.1)' : 'scale(1)'
              }}
            ></div>

            <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
              {/* Title Section */}
              {Array.isArray(page.title) ? (
                <div className="mb-8 md:mb-4 flex flex-col items-center">
                  {page.title.map((line, i) => (
                    <h1 
                      key={i} 
                      className={`leading-tight inline-block ${
                        i >= 1 
                          ? 'text-3xl md:text-[40px] lg:text-[58px] 2xl:text-[90px] text-[#FACC15] font-extrabold mt-1 uppercase tracking-tight' 
                          : 'text-xl md:text-[24px] lg:text-[36px] 2xl:text-[56px] text-white font-bold opacity-90'
                      }`}
                    >
                      {line}
                    </h1>
                  ))}
                </div>
              ) : (
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight uppercase tracking-tight">
                  {page.title}
                </h1>
              )}

              {/* Description Section */}
              {Array.isArray(page.desc) ? (
                <div className="max-w-3xl md:max-w-md mx-auto space-y-6 md:space-y-1 mt-5 md:mt-[30px]">
                  {page.desc.map((paragraph, i) => (
                    <p key={i} className="text-[13px] sm:text-base md:text-[14px] lg:text-[18px] 2xl:text-[26px] text-gray-300 leading-relaxed md:leading-snug text-center font-medium opacity-90">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-[13px] sm:text-base md:text-[16px] lg:text-[18px] 2xl:text-[26px] text-gray-300 max-w-3xl md:max-w-md mx-auto leading-relaxed md:leading-snug text-center font-medium opacity-90 mt-5 md:mt-[30px]">
                  {page.desc}
                </p>
              )}
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 md:px-12 transform -translate-y-1/2 z-20">
          <button
            onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
            className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#FACC15] hover:text-black transition-all group"
          >
            <span className="text-lg sm:text-xl md:text-2xl leading-none">&lsaquo;</span>
          </button>
          <button
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#FACC15] hover:text-black transition-all group"
          >
            <span className="text-lg sm:text-xl md:text-2xl leading-none">&rsaquo;</span>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
          {pageData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentPage ? 'w-8 bg-[#FACC15]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}