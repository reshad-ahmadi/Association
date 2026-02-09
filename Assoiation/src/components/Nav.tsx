import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-[20px] mt-4 md:mt-[20px]">
      <div className="bg-black/80 backdrop-blur-md text-white py-3 md:py-4 flex items-center justify-between rounded-[10px] px-4 md:px-[60px] border border-white/5 relative">
        {/* Left: Association Name */}
        <Link to="/" className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full overflow-hidden bg-white/10 flex items-center justify-center border border-white/10">
            <img 
              className="w-full h-full object-cover" 
              src="/images/logo.jpeg" 
              alt="Logo"
              style={{ maskImage: 'radial-gradient(circle, black 68%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 68%, transparent 70%)' }}
            />
          </div>
          ASSOCIATION
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <li>
            <Link to="/" className="hover:text-[#FACC15] transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/companies" className="hover:text-[#FACC15] transition-colors">Companies</Link>
          </li>
          <li>
            <a href="/#contact" className="hover:text-[#FACC15] transition-colors">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-[#FACC15] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-[10px] p-6 shadow-2xl md:hidden animate-in fade-in zoom-in duration-300">
            <ul className="flex flex-col gap-6 text-center text-sm font-medium uppercase tracking-[0.2em]">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-[#FACC15] transition-colors border-b border-white/5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/companies" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-[#FACC15] transition-colors border-b border-white/5"
                >
                  Companies
                </Link>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-[#FACC15] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}