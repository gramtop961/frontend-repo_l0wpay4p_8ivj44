export default function Work() {
  const projects = [
    {
      title: 'Ridge House',
      image:
        'https://images.unsplash.com/photo-1598300188933-0f56b38e8da8?q=80&w=2070&auto=format&fit=crop',
      desc: 'A hillside residence that frames expansive views with warm, minimal interiors.',
    },
    {
      title: 'Civic Pavilion',
      image:
        'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=2062&auto=format&fit=crop',
      desc: 'Light, timber, and steel combine in a flexible community gathering space.',
    },
    {
      title: 'Atelier Conversion',
      image:
        'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1974&auto=format&fit=crop',
      desc: 'Adaptive reuse of an industrial loft into a bright artist workspace.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-xl overflow-hidden border border-neutral-200 bg-white/60">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
