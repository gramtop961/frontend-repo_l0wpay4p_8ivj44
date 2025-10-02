export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About the Studio</h2>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            Studio Arc is led by principal architect Alex Rivera, whose work explores daylight, material tactility, and the dialogue between landscape and the built environment.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Our practice focuses on residential, cultural, and adaptive reuse projects. We believe in simple gestures that bring clarity and comfort, and in details that age gracefully.
          </p>
        </div>
        <ul className="space-y-4">
          <li className="p-5 rounded-lg border border-neutral-200 bg-white/60">
            <p className="font-medium">Approach</p>
            <p className="text-neutral-600 text-sm mt-1">Context-first, client-centered, and grounded in sustainability.</p>
          </li>
          <li className="p-5 rounded-lg border border-neutral-200 bg-white/60">
            <p className="font-medium">Services</p>
            <p className="text-neutral-600 text-sm mt-1">Full architectural services from concept to construction administration.</p>
          </li>
          <li className="p-5 rounded-lg border border-neutral-200 bg-white/60">
            <p className="font-medium">Recognition</p>
            <p className="text-neutral-600 text-sm mt-1">Projects featured in regional design awards and publications.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
