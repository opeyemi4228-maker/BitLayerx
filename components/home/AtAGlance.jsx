import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { SITE } from "@/lib/seo";

/**
 * Who we are, at a glance.
 *
 * The hero says what we promise. This section answers, in plain words and in
 * under a minute, the questions a first-time visitor is actually asking before
 * they will read any further: who is this company, what do they do, who is it
 * for, where are they, and why should I believe them.
 *
 * Every answer is a fact the company can stand behind. There are no client
 * counts or results here, because a number nobody can check costs more trust
 * than it earns.
 */

const FACTS = [
  {
    q: "Who we are",
    a: "A registered Nigerian technology company, headquartered in Gwarinpa, Abuja, and led by our CEO, Opeyemi T. Ojurongbe.",
    link: { href: "/about", label: "Meet the team" },
  },
  {
    q: "What we do",
    a: "Two things. We build and run our own products in cloud, civic intelligence and logistics. And we build digital for other businesses: websites, online stores, apps, custom software, brand and marketing.",
    link: { href: "/services", label: "See every service" },
  },
  {
    q: "Who we work with",
    a: "Every kind of business, from a single shop to a national institution. Small businesses, corporates and government, in every industry.",
    link: { href: "/industries", label: "Industries we know best" },
  },
  {
    q: "Where we work",
    a: "In person in Abuja, and remotely with clients anywhere in Nigeria and abroad. Distance is never the reason a project slows down.",
    link: { href: "/locations", label: "Where we work" },
  },
  {
    q: "Why businesses choose us",
    a: "One team for everything digital, one accountable owner, a written plan and price within 48 hours, and you own everything we build.",
    link: { href: "#how-it-runs", label: "How a project runs" },
  },
  {
    q: "Where we are going",
    a: "Our mission is to help 30% of African businesses run on digital before 2030, with products they trust and love to use.",
    link: { href: "#dream-heading", label: "Read the mission" },
  },
];

export default function AtAGlance() {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-heading"
      className="scroll-mt-24 border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container width="wide">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-[14px] font-semibold text-[#0040FF]">Who we are</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5E5E5E]">
              Everything you need to know about us, in one minute.
            </p>
          </div>

          {/* The definition. Set as the section heading on purpose: it is the
              one sentence a visitor should be able to repeat after leaving. */}
          <div className="lg:col-span-8">
            <h2
              id="who-heading"
              className="text-[clamp(1.9rem,3.9vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-[#111111]"
            >
              BitLayerX Technologies is a Nigerian technology company building
              the digital foundations{" "}
              <span className="text-[#0040FF]">Africa runs on.</span>
            </h2>
          </div>
        </div>

        <dl className="mt-[clamp(3rem,6vw,4.5rem)] grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.q} className="flex flex-col border-t border-black/[0.1] pt-6">
              <dt className="text-[1.25rem] font-semibold tracking-[-0.02em] text-[#111111]">
                {f.q}
              </dt>
              <dd className="mt-3 flex flex-1 flex-col">
                <span className="flex-1 text-[1.0625rem] leading-relaxed text-[#5E5E5E]">
                  {f.a}
                </span>
                <Link
                  href={f.link.href}
                  className="group mt-5 inline-flex w-fit items-center gap-1 text-[15px] font-medium text-[#0040FF] transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded"
                >
                  {f.link.label}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-[3px]">
                    ›
                  </span>
                </Link>
              </dd>
            </div>
          ))}
        </dl>

        {/* The one claim on this page anyone can verify independently. */}
        <p className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-black/[0.08] pt-6 text-[14px] text-[#5E5E5E]">
          <span className="inline-flex items-center gap-2 font-semibold text-[#111111]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#0A7D3E]" />
            Registered with the Corporate Affairs Commission, RC {SITE.cacNumber}
          </span>
          <span aria-hidden="true">·</span>
          <Link
            href="/blog/how-to-verify-a-nigerian-tech-company"
            className="underline underline-offset-4 hover:text-[#0040FF]"
          >
            How to verify any Nigerian tech company, including us
          </Link>
        </p>
      </Container>
    </section>
  );
}
