import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-100" aria-hidden="true" />
      <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-neutral-200/80 via-white to-neutral-100 blur-3xl" aria-hidden="true" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-semibold tracking-tight text-neutral-900">
          Modern Architecture Studio
        </a>
        <nav className="hidden gap-8 text-sm text-neutral-700 sm:flex">
          <a href="#work" className="hover:text-neutral-900">Work</a>
          <a href="#about" className="hover:text-neutral-900">About</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 sm:pb-28 sm:pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-6xl">
            Contemporary architecture crafted with restraint and clarity.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
            We design homes and spaces that balance form and function through honest materials, precise proportions, and light.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900/10">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
