import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Navigation from '../components/navigation';

const companies = [
  {
    id: 1,
    name: "Aria Sanat",
    category: "Profile Production",
    image: "/images/ARIYA_PROFILE.jpg-removebg-preview.png",
    description: "A manufacturing and industrial trading company operating out of Herat, Afghanistan. Known for industrial profile production and metal processing.",
    location: "Herat, Afghanistan"
  },
  {
    id: 2,
    name: "Folad Sanat",
    category: "Iron & Steel",
    image: "/images/FOLAD_PROFILE.jpg-removebg-preview.png",
    description: "Leading the way in heavy industry and steel processing in Afghanistan, providing high-quality construction materials.",
    location: "Herat, Afghanistan"
  },
  {
    id: 3,
    name: "Fazlli Ganzhawi",
    category: "Pipe Production",
    image: "/images/GHAZNAWI_PROFILE.jpg-removebg-preview.png",
    description: "Specializing in high-quality pipe manufacturing and industrial solutions for major construction and infrastructure projects.",
    location: "Kabul, Afghanistan"
  },
  {
    id: 4,
    name: "Herat Afghan",
    category: "Industrial Profile",
    image: "/images/HERAT_AFGHAN_PROFILE.jpg-removebg-preview.png",
    description: "A hub of industrial innovation and production excellence, leading regional economic growth through quality manufacturing.",
    location: "Herat, Afghanistan"
  },
  {
    id: 5,
    name: "Nawid Mazar",
    category: "Industrial Solutions",
    image: "/images/MAZAR_PROFILE.jpg-removebg-preview.png",
    description: "Providing localized production solutions for large-scale infrastructure and industrial needs in Mazar-i-Sharif.",
    location: "Mazar-i-Sharif, Afghanistan"
  },
  {
    id: 6,
    name: "General Metal",
    category: "Steel Construction",
    image: "/images/RIAL_PROFILE.jpg-removebg-preview.png",
    description: "Building a stronger future through advanced metal processing and engineering, focused on quality and sustainability.",
    location: "Herat, Afghanistan"
  }
];

export default function Companies() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-[70px]">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <span className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-4 block">( OUR MEMBERS )</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Leading <span className="text-[#FACC15]">Companies</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the premier industrial manufacturers and factories that form the backbone of Afghanistan's steel and profile industry.
          </p>
        </div>

        {/* Logo Strip Integration */}
        <div className="mb-20">
          <Navigation />
        </div>

        {/* Search & Filter (Visual only for now) */}
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search companies..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 focus:ring-2 focus:ring-[#FACC15] outline-none transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-[#FACC15] text-black font-bold text-sm">All</button>
            <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:border-[#FACC15] transition-all">Steel</button>
            <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:border-[#FACC15] transition-all">Profiles</button>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div 
              key={company.id}
              className="group bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-[#FACC15]/50 transition-all duration-500 flex flex-col"
            >
              <div className="h-48 mb-6 flex items-center justify-center bg-white/5 rounded-2xl p-6 group-hover:bg-white/10 transition-colors">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[#FACC15] text-xs font-bold uppercase tracking-widest">{company.category}</span>
                    <h3 className="text-2xl font-bold mt-1 group-hover:text-[#FACC15] transition-colors">{company.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {company.description}
                </p>
                
                <div className="flex items-center text-gray-500 text-xs mb-8">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {company.location}
                </div>
              </div>

              <button className="w-full py-4 rounded-xl border border-white/10 font-bold text-sm tracking-wider uppercase group-hover:bg-[#FACC15] group-hover:text-black group-hover:border-[#FACC15] transition-all">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
