import { useEffect, useMemo, useState } from 'react';

function getBackendUrl() {
  const url = import.meta.env.VITE_BACKEND_URL || '';
  return url.replace(/\/$/, '');
}

export default function Contact() {
  const backend = useMemo(getBackendUrl, []);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [downloading, setDownloading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || 'Failed to send');
      }

      setStatus({ type: 'success', message: 'Thanks — we will be in touch.' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong' });
    }
  }

  async function handleDownload() {
    setDownloading(true);
    try {
      const res = await fetch(`${backend}/api/contact/export`);
      if (!res.ok) throw new Error('Failed to download');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contact_submissions.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  }

  useEffect(() => {
    if (!backend) {
      setStatus({ type: 'error', message: 'Backend URL is not configured.' });
    }
  }, [backend]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Start a conversation</h2>
      <p className="text-neutral-600 mt-3">Tell us a bit about your project and how to reach you.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 disabled:opacity-60"
            disabled={status.type === 'loading' || !backend}
          >
            {status.type === 'loading' ? 'Sending...' : 'Send message'}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex rounded-md border border-neutral-300 px-5 py-2.5 text-sm hover:bg-neutral-100 disabled:opacity-60"
            disabled={!backend || downloading}
          >
            {downloading ? 'Downloading...' : 'Download CSV'}
          </button>
        </div>
        {status.type !== 'idle' && (
          <p
            className={
              status.type === 'success'
                ? 'text-sm text-green-600'
                : status.type === 'error'
                ? 'text-sm text-red-600'
                : 'text-sm text-neutral-600'
            }
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
