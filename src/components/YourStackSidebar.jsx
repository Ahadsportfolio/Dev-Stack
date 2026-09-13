import React from 'react';
import { X } from 'lucide-react';

export default function YourStackSidebar({ stack, onRemoveFromStack, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] sticky top-24">
      
      {/* Sidebar Title & Subtitle */}
      <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
      <p className="text-xs text-slate-400 font-normal mt-1 mb-5">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {/* Content Area */}
      <div>
        {count === 0 ? (
          
          /* ================= EMPTY STATE ================= */
          <div className="py-10 px-4 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
            <p className="text-xs text-slate-400 font-normal">
              Your stack is empty.
            </p>
          </div>

        ) : (

          /* ================= SELECTED ITEMS LIST ================= */
          <div className="space-y-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
              >
                {/* Item Icon + Name + Category */}
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-7 h-7 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                      }}
                    />
                  </div>
                  <div className="truncate">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-normal block truncate">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Remove (✕) Button */}
                <button
                  type="button"
                  onClick={() => onRemoveFromStack(item)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0 ml-2"
                  title={`Remove ${item.name}`}
                  aria-label={`Remove ${item.name} from stack`}
                >
                  <X className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            ))}
          </div>

        )}
      </div>

      {/* Remove All Button */}
      {count > 0 && (
        <div className="mt-5">
          <button
            type="button"
            onClick={onRemoveAll}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-[#d9381e] hover:text-red-700 bg-white border border-red-200 hover:bg-red-50 transition-colors text-center"
          >
            Remove All
          </button>
        </div>
      )}

    </aside>
  );
}
