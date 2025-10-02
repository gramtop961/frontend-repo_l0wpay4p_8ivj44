import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Modern architecture that elevates everyday life
            </h1>
            <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
              We are a boutique architecture studio crafting refined, sustainable spaces — from intimate residences to adaptive reuse and cultural projects.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-700 transition-colors">
                <Rocket className="h-4 w-4" /> View Portfolio
              </a>
              <a href="#contact" className="inline-flex rounded-md border border-neutral-300 px-5 py-3 text-sm hover:bg-neutral-100 transition-colors">Start a Project</a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl bg-neutral-200/60 border border-neutral-200 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1504457047772-27f3a4d7d59a?q=80&w=2069&auto=format&fit=crop"
              alt="Minimalist architectural facade"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
