"use client";

import { useState, FormEvent } from "react";
import { Icons } from "../icons";

export function EmailForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto w-full space-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          required
          type="email"
          placeholder="Enter your email"
          disabled={isSubmitted}
          className="flex-grow px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white placeholder:text-slate-500 disabled:opacity-50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSubmitted}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
        >
          {isSubmitted ? "Subscribed" : "Notify Me"}
        </button>
      </form>

      {isSubmitted && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-sm">
          <div className="animate-in slide-in-from-bottom-full fade-in duration-500 p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 flex items-center gap-3">
            <div className="flex-shrink-0 text-emerald-500">
              <Icons.CheckCircle />
            </div>
            <div className="flex-grow">
              <p className="text-sm font-semibold text-emerald-400">
                Thank you
              </p>
              <p className="text-xs text-slate-400">
                You have been added to the waitlist.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors"
            >
              <svg
                xmlns="www.w3.org"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
