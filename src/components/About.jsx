import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-16 px-6 py-16 sm:py-24">
      <div className="grid items-start gap-12 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">About</h2>
          <div className="mt-4 h-1 w-16 rounded bg-neutral-900" />
        </div>
        <div className="sm:col-span-3">
          <p className="text-neutral-700 leading-7">
            I am an architect focused on modern residential and small commercial projects. My work is guided by luminosity, material honesty, and a deep respect for context. Each project is an exercise in restraint—crafting calm, enduring spaces that feel inevitable rather than imposed.
          </p>
          <p className="mt-6 text-neutral-700 leading-7">
            Over the past decade, I have led renovations, new builds, and adaptive reuse projects across urban and coastal sites. I collaborate closely with clients, fabricators, and builders to ensure that concept and detail align from sketch to site.
          </p>
        </div>
      </div>
    </section>
  );
}
