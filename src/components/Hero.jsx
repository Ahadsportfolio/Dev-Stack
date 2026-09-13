import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl font-black text-slate-900">
            Build Your Ideal <span className="text-pink-600">Development Stack</span>
          </h1>
          <p className="text-slate-500 text-sm">
            Explore frontend, backend, database, and tooling options.
          </p>
          <a href="#technologies" className="inline-block px-6 py-3 bg-pink-600 text-white rounded-xl text-xs font-bold">
            Explore Technologies
          </a>
        </div>
        <div className="lg:col-span-5">
          <img src="/assets/hero_3d_stack.png" alt="Hero 3D" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}