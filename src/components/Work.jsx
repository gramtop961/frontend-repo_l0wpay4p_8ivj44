import React from 'react';

const projects = [
  {
    title: 'Cliff House',
    location: 'Big Sur, CA',
    image: 'https://images.unsplash.com/photo-1527021595371-069ee206c182?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGlmZiUyMEhvdXNlfGVufDB8MHx8fDE3NTkzOTgxNjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Courtyard Residence',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1759325422116-66a3fbd75bb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3VydHlhcmQlMjBSZXNpZGVuY2V8ZW58MHwwfHx8MTc1OTM5ODE2Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Studio Pavilion',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1697869812795-8a8014cd53a8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW8lMjBQYXZpbGlvbnxlbnwwfDB8fHwxNzU5Mzk4MTYzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Ridge Line Retreat',
    location: 'Jackson, WY',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-16 sm:py-24">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Selected Work</h2>
          <div className="mt-4 h-1 w-16 rounded bg-neutral-900" />
        </div>
        <span className="text-sm text-neutral-600">2020—2025</span>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <figure key={p.title} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} — ${p.location}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <figcaption className="flex items-center justify-between px-4 py-4">
              <div>
                <h3 className="text-base font-medium text-neutral-900">{p.title}</h3>
                <p className="text-sm text-neutral-600">{p.location}</p>
              </div>
              <span className="text-xs text-neutral-500">View</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
