import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStackSidebar from './components/YourStackSidebar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stack, setStack] = useState([]);

  // Fetch JSON data asynchronously from public/data/technologies.json
  useEffect(() => {
    const fetchTechData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/data/technologies.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch technologies data (Status ${response.status})`);
        }
        const data = await response.json();
        setTechnologies(data);
      } catch (err) {
        console.error('Error loading JSON data:', err);
        setError(err.message);
        toast.error(`Failed to load technologies: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTechData();
  }, []);

  // Handler: Add to Stack
  const handleAddToStack = (tech) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warn(`⚠️ ${tech.name} is already in your stack!`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: "top-right",
      autoClose: 2500,
      theme: "light",
    });
  };

  // Handler: Remove single item from Stack
  const handleRemoveFromStack = (tech) => {
    setStack((prev) => prev.filter((item) => item.id !== tech.id));
    toast.info(`Removed ${tech.name} from your stack.`, {
      position: "top-right",
      autoClose: 2500,
      theme: "light",
    });
  };

  // Handler: Remove All from Stack
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error(`Cleared all items from your stack.`, {
      position: "top-right",
      autoClose: 2500,
      theme: "light",
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      
      {/* Toast Notification Container */}
      <ToastContainer toastClassName={() => "bg-white text-slate-800 font-semibold rounded-xl p-4 shadow-lg border border-slate-100 text-xs"} />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Hero Banner */}
      <Hero />

      {/* ================= TECHNOLOGIES & YOUR STACK SECTION ================= */}
      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        
        {/* Section Header (No Search, No Category Filters) */}
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-normal">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* ================= MAIN CONTENT GRID & SIDEBAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8 COLUMNS: 3-COLUMN RESPONSIVE CARDS GRID */}
          <div className="lg:col-span-8">
            
            {/* LOADING STATE */}
            {loading ? (
              <div className="py-20 text-center rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center space-y-3">
                <Loader2 className="w-8 h-8 text-pink-600 animate-spin" />
                <p className="text-sm font-semibold text-slate-700">Loading Technologies...</p>
              </div>
            ) : error ? (
              /* ERROR STATE */
              <div className="py-12 text-center rounded-2xl bg-red-50 border border-red-100 p-6">
                <p className="text-xs font-semibold text-red-600">{error}</p>
              </div>
            ) : (
              /* 3-COLUMN RESPONSIVE GRID (1 col mobile, 2 tablet, 3 desktop) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {technologies.map((tech) => {
                  const isAdded = stack.some((item) => item.id === tech.id);
                  return (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      isAdded={isAdded}
                      onAddToStack={handleAddToStack}
                    />
                  );
                })}
              </div>
            )}

          </div>

          {/* RIGHT 4 COLUMNS: YOUR STACK SIDEBAR */}
          <div className="lg:col-span-4">
            <YourStackSidebar
              stack={stack}
              onRemoveFromStack={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
