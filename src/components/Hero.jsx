import React from 'react';

export default function Hero({ onExploreClick }) {
  const scrollToTech = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const element = document.getElementById('technologies');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Build Your Ideal <br />
              <span className="text-brand-gradient inline-block mt-1">
                Development Stack
              </span>
            </h1>

            {/* Subheading Description */}
            <p className="text-sm sm:text-base text-slate-500 max-w-xl font-normal leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              {/* Button 1: Explore Technologies (Gradient) */}
              <button
                type="button"
                onClick={scrollToTech}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-white bg-brand-gradient hover:opacity-95 shadow-sm transition-all text-xs sm:text-sm cursor-pointer"
              >
                Explore Technologies
              </button>

              {/* Button 2: Learn More (Outlined) */}
              <a
                href="#about"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all text-xs sm:text-sm text-center"
              >
                Learn More
              </a>
            </div>

          </div>

          {/* ================= RIGHT 3D HERO GRAPHIC COLUMN ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/assets/hero_3d_stack.png"
                alt="3D Development Stack Graphic"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
