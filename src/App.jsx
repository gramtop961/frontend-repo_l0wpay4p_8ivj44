import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-neutral-600">
          © {new Date().getFullYear()} Modern Architecture Studio — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
