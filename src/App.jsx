import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="text-center py-20 font-bold">Project Setup Initialized</div>
    </div>
  );
}