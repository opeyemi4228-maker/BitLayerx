"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const password = new FormData(e.currentTarget).get("password");

    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.message || "Could not sign in.");

      router.replace(next);
      router.refresh();
    } catch (err) {
      setStatus("idle");
      setError(err.message);
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#fbfbfd] px-5 py-16">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 text-center">
          <svg
            viewBox="0 0 64 64"
            className="mx-auto h-12 w-12"
            aria-hidden="true"
          >
            <rect width="64" height="64" rx="14" fill="#0040FF" />
            <g
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.4"
              strokeLinejoin="round"
            >
              <path d="M32 14 L50 24 L32 34 L14 24 Z" />
              <path d="M14 32 L32 42 L50 32" opacity="0.72" />
              <path d="M14 40 L32 50 L50 40" opacity="0.44" />
            </g>
          </svg>
          <h1 className="mt-5 text-[1.75rem] font-extrabold tracking-[-0.03em] text-[#0B0B0F]">
            BitLayerX Admin
          </h1>
          <p className="mt-2 text-[14.5px] text-[#6e6e73]">
            Sign in to see enquiries and site data.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-black/[0.07] bg-white p-7"
        >
          <label
            htmlFor="password"
            className="mb-2 block text-[13.5px] font-semibold text-[#0B0B0F]"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            className="w-full rounded-xl border border-black/[0.14] bg-white px-4 py-3 text-[16px] text-[#0B0B0F] transition-colors focus:border-[#0040FF] focus:outline-none focus:ring-2 focus:ring-[#0040FF]/20"
          />

          {error && (
            <p
              role="alert"
              className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-[#0040FF] px-7 py-[0.85rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-[#0B0B0F] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-[13px] leading-relaxed text-[#6e6e73]">
          Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in your .env file to
          enable access.
        </p>
      </div>
    </div>
  );
}
