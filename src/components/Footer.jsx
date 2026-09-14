import React from 'react';
import logo from '../assets/logo-text.png';

export default function Footer() {
  const handleLinkClick = (name, targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 mt-20 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* ================= BRAND BLOCK ================= */}
          <div className="lg:col-span-2 space-y-3">
            <div 
              className="flex items-center space-x-2.5 cursor-pointer group" 
              onClick={() => handleLinkClick('Home', '#hero')}
            >
              <img 
                src={logo} 
                alt="DevStack Logo" 
                className="h-9 w-auto object-contain" 
              />
            </div>
            
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-normal">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Plain Text Social Links */}
            <div className="flex items-center space-x-3 pt-2 text-xs font-semibold text-slate-600">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* ================= LINK GROUP 1: PRODUCT ================= */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">PRODUCT</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#hero" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* ================= LINK GROUP 2: COMPANY ================= */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* ================= LINK GROUP 3: LEGAL ================= */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">LEGAL</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}