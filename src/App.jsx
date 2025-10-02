import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-xl">Studio Arc</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-neutral-600 transition-colors">About</a>
            <a href="#work" className="hover:text-neutral-600 transition-colors">Work</a>
            <a href="#contact" className="hover:text-neutral-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-neutral-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Studio Arc. All rights reserved.</p>
          <p className="opacity-80">Crafted with care.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
