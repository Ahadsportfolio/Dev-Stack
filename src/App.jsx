import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStackSidebar from './components/YourStackSidebar';
import Footer from './components/Footer';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTechData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/data/technologies.json');
        if (!response.ok) throw new Error("Failed to load technologies");
        const data = await response.json();
        setTechnologies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTechData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />
      <Hero />
      <main id="technologies" className="max-w-7xl mx-auto px-4 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {loading ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <Loader2 className="w-8 h-8 text-pink-600 animate-spin" />
                <p className="text-sm font-semibold mt-2">Loading Technologies...</p>
              </div>
            ) : error ? (
              <div className="p-6 text-center text-red-600 bg-red-50 rounded-xl">{error}</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {technologies.map((tech) => (
                  <TechCard key={tech.id} tech={tech} />
                ))}
              </div>
            )}
          </div>
          <div className="lg:col-span-4">
            <YourStackSidebar stack={[]} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}