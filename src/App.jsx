import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import YourStackSidebar from './components/YourStackSidebar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold">Technologies Area</p>
          </div>
          <div className="lg:col-span-4">
            <YourStackSidebar stack={[]} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}