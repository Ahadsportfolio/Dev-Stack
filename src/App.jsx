import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Footer from './components/Footer';

const dummyTech = {
  id: "react",
  name: "React",
  category: "Frontend",
  badge: "Popular",
  rating: 4.9,
  description: "A JavaScript library for building user interfaces.",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
};

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <TechCard tech={dummyTech} />
        </main>
      </div>
      <Footer />
    </div>
  );
}