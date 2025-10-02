import React, { useMemo, useState } from 'react';

function getApiBase() {
  const href = typeof window !== 'undefined' ? window.location.href : '';
  try {
    const url = new URL(href);
    // If running on a dev server with a port, assume backend at 8000
    if (url.port) {
      return `${url.protocol}//${url.hostname}:8000`;
    }
    // In hosted environments, try same origin (a platform proxy may route /api to backend)
    return url.origin;
  } catch {
    return '';
  }
}

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const API_BASE = useMemo(() => getApiBase(), []);
  const exportUrl = `${API_BASE}/api/contact/export`;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || 'Failed to send');
      }
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('error');
      setError(e?.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-16 px-6 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Let's build something timeless</h2>
          <p className="mt-4 max-w-md text-neutral-700">
            For new commissions, collaborations, or press inquiries, please share a few details and I will be in touch.
          </p>
          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
            <dl className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <dt className="text-neutral-600">Location</dt>
                <dd className="text-neutral-900">San Francisco, CA</dd>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <dt className="text-neutral-600">Email</dt>
                <dd className="text-neutral-900">studio@example.com</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-neutral-600">Focus</dt>
                <dd className="text-neutral-900">Residential, Cultural, Small Commercial</dd>
              </div>
            </dl>

            <a
              href={exportUrl}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              Download submissions (CSV)
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm text-neutral-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none ring-0 transition focus:border-neutral-900"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="text-sm text-neutral-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none ring-0 transition focus:border-neutral-900"
                placeholder="jane@studio.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm text-neutral-700">Project details</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none ring-0 transition focus:border-neutral-900"
                placeholder="Timeline, scope, location, and budget range…"
              />
            </div>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
              </button>
              {status === 'success' && (
                <span className="text-sm text-green-700">Thanks—I'll be in touch shortly.</span>
              )}
              {status === 'error' && (
                <span className="text-sm text-red-700">{error}</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
