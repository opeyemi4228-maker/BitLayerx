"use client";

import { useState } from "react";

/**
 * Four dashboards behind one gate.
 *
 * Tabs rather than separate routes: every dataset is already loaded on the
 * server, so switching should be instant rather than a round trip.
 */
export default function AdminTabs({ tabs }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <>
      <nav
        className="mb-8 flex gap-1 overflow-x-auto border-b border-black/10"
        aria-label="Admin sections"
      >
        {tabs.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              aria-current={on ? "page" : undefined}
              className={`whitespace-nowrap border-b-2 px-4 py-3 text-[14.5px] font-semibold transition-colors ${
                on
                  ? "border-[#0040FF] text-[#0040FF]"
                  : "border-transparent text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              {t.label}
              {typeof t.count === "number" && (
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-[11.5px] font-bold tabular-nums ${
                    on ? "bg-[#0040FF]/10 text-[#0040FF]" : "bg-black/[0.06] text-[#6e6e73]"
                  }`}
                >
                  {t.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {tabs.map((t) => (
        <div key={t.id} hidden={t.id !== active}>
          {t.content}
        </div>
      ))}
    </>
  );
}
