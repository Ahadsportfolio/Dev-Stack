import React from 'react';
import logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <img src={logo} alt="DevStack Logo" className="h-9 w-auto" />
        <nav className="hidden md:flex space-x-8 text-xs font-semibold">
          <a href="#hero">Home</a>
          <a href="#technologies">Technologies</a>
        </nav>
      </div>
    </header>
  );
}