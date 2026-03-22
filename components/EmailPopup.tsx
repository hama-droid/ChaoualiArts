"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "chaouali_email_popup_closed_v1";
const EMAIL_TO = "mtalebled@gmail.com";

export default function EmailPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const closed = localStorage.getItem(STORAGE_KEY);
      if (!closed) {
        // small delay so it feels intentional
        const t = setTimeout(() => setOpen(true), 700);
        return () => clearTimeout(t);
      }
    } catch {
      // if storage blocked, just show it
      setOpen(true);
    }
  }, []);

  function close() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-neutral-600">
              CHAOUALI ARTS
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Get early access to new drops
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Limited editions, originals, ceramics, and studio updates.
            </p>
          </div>

          <button
            onClick={close}
            className="rounded-full border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form
          className="mt-5 flex flex-col gap-3 sm:flex-row"
          action={`mailto:${EMAIL_TO}`}
          method="post"
          encType="text/plain"
        >
          <input
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
            placeholder="Enter your email"
            name="email"
            type="email"
            required
          />
          <button className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90">
            Join
          </button>
        </form>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-neutral-500">
            You can unsubscribe anytime.
          </p>
          <button onClick={close} className="text-xs underline text-neutral-700">
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}