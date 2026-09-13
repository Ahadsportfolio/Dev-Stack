import React from 'react';
import { Star, Check } from 'lucide-react';

export default function TechCard({ tech, isAdded, onAddToStack }) {
  const getBadgeStyle = (badge) => {
    switch (badge) {
      case 'Popular':
      case 'Top SQL':
      case 'Essential':
      case 'Robust':
      case 'Containers':
        return 'bg-sky-50 text-sky-600 border border-sky-100';
      case 'Versatile':
      case 'Standard':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
      case 'Fast':
      case 'Cache':
        return 'bg-amber-50 text-amber-600 border border-amber-100';
      case 'Ubiquitous':
        return 'bg-yellow-50 text-amber-700 border border-yellow-100';
      case 'Modern':
        return 'bg-cyan-50 text-cyan-600 border border-cyan-100';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className={`bg-white border rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
      isAdded ? 'border-emerald-200 bg-slate-50/50' : 'border-slate-100'
    }`}>
      <div>
        {/* Header: Icon + Badge Pill */}
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
              }}
            />
          </div>

          {tech.badge && (
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${getBadgeStyle(tech.badge)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        {/* Tech Name & Description */}
        <h3 className="text-base font-bold text-slate-900 mt-4">
          {tech.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3 font-normal min-h-[2.75rem]">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Tags Row: Category, Difficulty, Rating */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100 text-[11px]">
          
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
              {tech.category}
            </span>
            <span className="text-slate-500 font-medium">
              {tech.difficulty}
            </span>
          </div>

          <div className="flex items-center space-x-1 font-semibold text-slate-800">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{tech.rating.toFixed(1)}</span>
          </div>

        </div>

        {/* Add to Stack Button */}
        <button
          type="button"
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full mt-4 py-2.5 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-1.5 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-[#0b0f19] text-white hover:bg-slate-800 shadow-xs'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Added to Stack</span>
            </>
          ) : (
            <span>Add to Stack</span>
          )}
        </button>
      </div>

    </div>
  );
}
