import Link from "next/link";
import { locationLabel } from "@/lib/geo";

/** Shared presentational pieces for the admin dashboards. */

export function Stat({ label, value, sub }) {
  return (
    <div className="bg-white p-6">
      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5E5E5E]">
        {label}
      </span>
      <span className="mt-2 block text-[2.25rem] font-extrabold leading-none tracking-[-0.035em] text-[#111111]">
        {value}
      </span>
      {sub && <span className="mt-2 block text-[13px] text-[#5E5E5E]">{sub}</span>}
    </div>
  );
}

export function StatRow({ children }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}

export function Panel({ title, children, note }) {
  return (
    <div>
      <h3 className="border-b-2 border-[#111111] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#111111]">
        {title}
      </h3>
      {note && <p className="mt-3 text-[13px] text-[#5E5E5E]">{note}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

/** A ranked list with a proportional bar, which reads faster than numbers alone. */
export function Ranking({ data, limit = 10, empty = "Nothing yet." }) {
  const rows = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);

  if (rows.length === 0) {
    return (
      <p className="rounded-2xl border border-black/[0.07] bg-white px-5 py-6 text-[14.5px] text-[#5E5E5E]">
        {empty}
      </p>
    );
  }

  const max = rows[0][1] || 1;

  return (
    <dl className="divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
      {rows.map(([key, count]) => (
        <div key={key} className="px-5 py-3.5">
          <div className="flex items-center justify-between gap-3">
            <dt className="min-w-0 truncate text-[14.5px] text-[#111111]">{key}</dt>
            <dd className="flex-shrink-0 text-[14.5px] font-bold tabular-nums text-[#0040FF]">
              {count}
            </dd>
          </div>
          <div
            aria-hidden="true"
            className="mt-2 h-1 rounded-full bg-black/[0.06]"
          >
            <div
              className="h-1 rounded-full bg-[#0040FF]"
              style={{ width: `${Math.max(4, (count / max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </dl>
  );
}

export function EmptyState({ title, body, actions }) {
  return (
    <div className="rounded-2xl border border-black/[0.07] bg-white p-8">
      <p className="text-[1.0625rem] font-semibold text-[#111111]">{title}</p>
      <p className="mt-2 max-w-[75ch] text-[14.5px] leading-relaxed text-[#5E5E5E]">
        {body}
      </p>
      {actions && <div className="mt-5 flex flex-wrap gap-3">{actions}</div>}
    </div>
  );
}

export function formatDateTime(iso) {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

/** Enquiry table, shared by the contact and project dashboards. */
export function EnquiryTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[14.5px]">
          <thead>
            <tr className="border-b border-black/[0.09] bg-white">
              {["Received", "Name", "Contact", "Wants", "Budget", "Timeline", "Location", "Device", "From page", "Message"].map((h) => (
                <th
                  key={h}
                  className={`px-5 py-3 font-bold text-[#111111] ${h === "Message" ? "" : "whitespace-nowrap"}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((l) => (
              <tr key={l.id} className="border-b border-black/[0.06] align-top last:border-0">
                <td className="whitespace-nowrap px-5 py-4 text-[13px] text-[#5E5E5E]">
                  {formatDateTime(l.receivedAt)}
                </td>
                <td className="px-5 py-4">
                  <span className="block font-semibold text-[#111111]">{l.name}</span>
                  {l.company && (
                    <span className="mt-0.5 block text-[13px] text-[#5E5E5E]">{l.company}</span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <a
                    href={`mailto:${l.email}`}
                    className="block break-all font-medium text-[#0040FF] underline underline-offset-2"
                  >
                    {l.email}
                  </a>
                  {l.phone && (
                    <a
                      href={`tel:${l.phone.replace(/\s/g, "")}`}
                      className="mt-0.5 block text-[13px] text-[#5E5E5E]"
                    >
                      {l.phone}
                    </a>
                  )}
                </td>
                <td className="px-5 py-4 text-[#111111]">{l.service || "Not stated"}</td>
                <td className="px-5 py-4 text-[#5E5E5E]">{l.budget || "Not stated"}</td>
                <td className="px-5 py-4 text-[#5E5E5E]">{l.timeline || "Not stated"}</td>
                <td className="whitespace-nowrap px-5 py-4 text-[#5E5E5E]">
                  {locationLabel(l.origin)}
                  <span className="mt-0.5 block font-mono text-[11.5px] text-[#5E5E5E]/70">
                    {l.origin?.ip || "no ip"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-[#5E5E5E]">
                  {l.origin?.device || "Unknown"}
                </td>
                <td className="max-w-[180px] px-5 py-4 text-[12.5px] text-[#5E5E5E]">
                  <span className="block truncate">
                    {l.source && l.source !== "direct"
                      ? l.source.replace(/^https?:\/\/[^/]+/, "") || "/"
                      : "Direct"}
                  </span>
                </td>
                <td className="max-w-[380px] px-5 py-4 text-[#5E5E5E]">{l.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
