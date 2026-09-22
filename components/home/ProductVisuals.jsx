import Image from "next/image";

/**
 * Product visuals for the showcase.
 *
 * Poll360 is shown as a real screenshot of the live product. The others are
 * built as working interface pieces in HTML, with the real labels and flows
 * from each product, and each one is captioned "Illustrative" so it is never
 * mistaken for a screenshot of something that is not yet public.
 */

const ink = "text-[#111111]";
const muted = "text-[#5E5E5E]";

function Frame({ children, caption }) {
  return (
    <figure className="flex h-full flex-col">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[24px] bg-white p-5 ring-1 ring-black/[0.08] sm:p-8">
        {children}
      </div>
      {caption && <figcaption className={`mt-3 text-[12.5px] ${muted}`}>{caption}</figcaption>}
    </figure>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`w-full rounded-2xl bg-white ring-1 ring-black/[0.09] shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function Tag({ children, tone = "blue" }) {
  const cls =
    tone === "green"
      ? "text-[#0A7D3E] ring-[#0A7D3E]/25"
      : tone === "amber"
      ? "text-[#9A5B00] ring-[#9A5B00]/25"
      : "text-[#0040FF] ring-[#0040FF]/25";
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold tracking-[0.04em] ring-1 ${cls}`}>
      {children}
    </span>
  );
}

function DataBank() {
  const bars = [
    ["Compute", 64],
    ["Storage", 48],
    ["Databases", 57],
    ["Vault records", 81],
  ];
  return (
    <Frame caption="Illustrative console. Capacity use shown per service.">
      <Card className="max-w-[460px] p-6">
        <div className="flex items-center justify-between">
          <p className={`text-[15px] font-semibold ${ink}`}>Data Bank Console</p>
          <span className="flex items-center gap-1.5 text-[12px] text-[#0A7D3E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0A7D3E]" /> All systems normal
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 border-y border-black/[0.08] py-5">
          {[
            ["99.99%", "Uptime target"],
            ["2", "Nigerian regions at launch"],
            ["100%", "Data kept in Africa"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className={`text-[1.35rem] font-semibold tracking-[-0.03em] ${ink}`}>{v}</p>
              <p className={`mt-0.5 text-[11.5px] leading-snug ${muted}`}>{l}</p>
            </div>
          ))}
        </div>
        <ul className="mt-5 space-y-3.5">
          {bars.map(([l, v]) => (
            <li key={l}>
              <div className="flex justify-between text-[12.5px]">
                <span className={ink}>{l}</span>
                <span className={`tabular-nums ${muted}`}>{v}%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-black/[0.07]">
                <div className="h-full rounded-full bg-[#0040FF]" style={{ width: `${v}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </Frame>
  );
}

function Poll360() {
  return (
    <figure className="flex h-full flex-col">
      <div className="relative flex-1 overflow-hidden rounded-[24px] ring-1 ring-black/[0.08]">
        <Image
          src="/images/products/poll360.jpg"
          alt="The Poll360 website: From the booth to the broadcast."
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover object-left-top"
        />
      </div>
      <figcaption className={`mt-3 text-[12.5px] ${muted}`}>
        The live Poll360 site.
      </figcaption>
    </figure>
  );
}

function Bubble({ from = "them", children }) {
  const me = from === "me";
  return (
    <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
      <p
        className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[12.5px] leading-snug ${
          me ? "rounded-br-md bg-[#0040FF] text-white" : `rounded-bl-md bg-white ring-1 ring-black/[0.09] ${ink}`
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function Agent360() {
  return (
    <Frame caption="Illustrative conversation on the agent line.">
      <Card className="max-w-[340px] overflow-hidden">
        <div className="flex items-center gap-3 border-b border-black/[0.08] px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0040FF] text-[13px] font-bold text-white">P</span>
          <div>
            <p className={`text-[13.5px] font-semibold ${ink}`}>Party Agent Line</p>
            <p className="text-[11px] text-[#0A7D3E]">Verified business</p>
          </div>
        </div>
        <div className="space-y-2.5 px-4 py-4">
          <Bubble from="me">START</Bubble>
          <Bubble>Welcome. You are posted to PU 33/01/01/001. Share your location to check in.</Bubble>
          <Bubble from="me">📍 Location shared</Bubble>
          <Bubble>Checked in at 07:42. Presence confirmed.</Bubble>
          <Bubble from="me">📄 Result sheet</Bubble>
          <Bubble>Figures match the sheet. Result filed.</Bubble>
        </div>
      </Card>
    </Frame>
  );
}

function Row({ label, value, tag, tone }) {
  return (
    <div className="flex items-start justify-between gap-3 border-t border-black/[0.08] py-3 first:border-t-0">
      <div>
        <p className={`text-[11.5px] ${muted}`}>{label}</p>
        <p className={`mt-0.5 text-[13.5px] font-medium ${ink}`}>{value}</p>
      </div>
      {tag && <Tag tone={tone}>{tag}</Tag>}
    </div>
  );
}

function QuickDrive() {
  return (
    <Frame caption="Illustrative booking. Launching 2027.">
      <Card className="max-w-[380px] p-5">
        <p className={`text-[15px] font-semibold ${ink}`}>Quick Drive</p>
        <div className="mt-3">
          <Row label="Pickup" value="Shop 14, Wuse Market" />
          <Row label="Drop-off" value="Plot 22, Gwarinpa" />
          <Row label="Package" value="Small parcel · fragile" />
          <Row label="Driver assigned" value="Arriving in 6 min" tag="VERIFIED" tone="green" />
          <Row label="Pickup photo" value="Stored in Data Bank" tag="SEALED" />
        </div>
        <p className="mt-3 rounded-full bg-[#0040FF] py-2.5 text-center text-[13.5px] font-medium text-white">
          Track delivery
        </p>
      </Card>
    </Frame>
  );
}

function Relay() {
  const steps = [
    ["Warehouse · Lagos", "Released 06:10 · sealed", "done"],
    ["Hub · Ibadan", "Received 09:02 · sealed", "done"],
    ["Hub · Abuja", "Received 17:45 · sealed", "done"],
    ["Rider · last mile", "Out for delivery", "now"],
    ["Customer", "Code confirmation pending", "next"],
  ];
  return (
    <Frame caption="Illustrative consignment. Launching 2027.">
      <Card className="max-w-[380px] p-5">
        <div className="flex items-center justify-between">
          <p className={`text-[15px] font-semibold ${ink}`}>Relay</p>
          <span className={`text-[12px] tabular-nums ${muted}`}>RLY-20418</span>
        </div>
        <ol className="mt-5">
          {steps.map(([t, d, s], i) => (
            <li key={t} className="relative flex gap-3.5 pb-4 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[11px] top-6 h-[calc(100%-18px)] w-px ${s === "done" ? "bg-[#0040FF]" : "bg-black/[0.12]"}`}
                />
              )}
              <span
                className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                  s === "done"
                    ? "bg-[#0040FF] text-white"
                    : s === "now"
                    ? "bg-white text-[#0040FF] ring-2 ring-[#0040FF]"
                    : `bg-white ring-1 ring-black/[0.15] ${muted}`
                }`}
              >
                {i + 1}
              </span>
              <div>
                <p className={`text-[13.5px] font-medium ${ink}`}>{t}</p>
                <p className={`text-[12px] ${muted}`}>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </Frame>
  );
}

function GoTrack() {
  return (
    <Frame caption="Illustrative fleet map. Launching 2027.">
      <div className="relative w-full max-w-[480px]">
        <Card className="overflow-hidden">
          <svg viewBox="0 0 480 300" className="block w-full" role="img" aria-label="A map with vehicle routes">
            <rect width="480" height="300" fill="#fff" />
            {[40, 100, 160, 220, 280].map((y) => (
              <line key={y} x1="0" x2="480" y1={y} y2={y} stroke="#000" strokeOpacity="0.05" />
            ))}
            {[60, 140, 220, 300, 380, 460].map((x) => (
              <line key={x} y1="0" y2="300" x1={x} x2={x} stroke="#000" strokeOpacity="0.05" />
            ))}
            <path d="M30 250 C 120 230, 150 150, 240 140 S 380 70, 450 50" fill="none" stroke="#0040FF" strokeWidth="3" strokeLinecap="round" />
            <path d="M40 60 C 140 90, 200 200, 300 210 S 420 250, 460 240" fill="none" stroke="#111" strokeOpacity="0.25" strokeWidth="2.5" strokeDasharray="5 6" strokeLinecap="round" />
            {[[240, 140], [120, 205], [380, 78], [300, 210], [420, 238]].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="11" fill="#0040FF" fillOpacity="0.12" />
                <circle cx={x} cy={y} r="5" fill={i === 3 ? "#9A5B00" : "#0040FF"} />
              </g>
            ))}
          </svg>
        </Card>
        <Card className="absolute -bottom-4 left-4 max-w-[230px] p-3.5 sm:left-6">
          <p className={`text-[13px] font-semibold ${ink}`}>Van 07 · on route</p>
          <p className={`text-[12px] ${muted}`}>3 of 8 drops complete</p>
          <p className="mt-1 text-[12px] text-[#0A7D3E]">Next stop in 12 min · on time</p>
        </Card>
        <Card className="absolute -top-4 right-4 max-w-[200px] p-3.5 sm:right-6">
          <p className={`text-[13px] font-semibold ${ink}`}>Fleet live</p>
          <p className={`text-[12px] ${muted}`}>24 vehicles moving</p>
          <p className="text-[12px] text-[#9A5B00]">2 delays flagged</p>
        </Card>
      </div>
    </Frame>
  );
}

const VISUALS = {
  databank: DataBank,
  poll360: Poll360,
  agent360: Agent360,
  quickdrive: QuickDrive,
  relay: Relay,
  gotrack: GoTrack,
};

export default function ProductVisual({ kind }) {
  const V = VISUALS[kind] ?? DataBank;
  return <V />;
}
