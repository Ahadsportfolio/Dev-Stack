import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo-text.png';

export default function Navbar({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (name, href) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
    if (onNavigate) onNavigate(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ================= MOBILE LEFT: HAMBURGER ICON ================= */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-pink-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>

          {/* ================= BRAND LOGO ================= */}
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

          {/* ================= DESKTOP CENTER: NAV LINKS ================= */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name, link.href);
                }}
                className={`text-xs font-semibold tracking-wide transition-colors ${
                  activeLink === link.name
                    ? 'text-[#e91e63]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ================= RIGHT: SIGN IN & SIGN UP ================= */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="px-4 py-2 text-xs font-bold text-white rounded-full bg-brand-gradient hover:opacity-95 shadow-sm transition-all duration-200"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name, link.href);
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeLink === link.name
                  ? 'bg-pink-50 text-[#e91e63]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}