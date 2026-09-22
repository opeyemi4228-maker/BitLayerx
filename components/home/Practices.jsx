import Link from "next/link";
import { Container, ActionLink } from "@/components/ui/primitives";
import { AUDIENCES } from "@/content/company";

/**
 * Our services.
 *
 * The products are the foundation; the services put businesses on it and
 * keep them growing. Buyers arrive knowing who they are before they know what
 * they need, so the section is three doors, by audience. The full list lives
 * on /services.
 */
export default function Practices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container width="wide">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[14px] font-semibold text-[#0040FF]">Our services</p>
            <h2
              id="services-heading"
              className="mt-4 text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]"
            >
              Everything it takes to go digital.
            </h2>
          </div>
          <p className="max-w-[46ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55] text-[#5E5E5E] lg:col-span-5 lg:pb-2">
            We work with every business, from a single shop to a national
            institution. One team, from first idea to lasting growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="group flex flex-col rounded-[24px] bg-white p-8 ring-1 ring-black/[0.1] transition-shadow hover:ring-[#0040FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF]"
            >
              <span className="text-[13px] font-semibold text-[#0040FF]">{a.label}</span>
              <span className="mt-4 text-[1.6rem] font-semibold tracking-[-0.03em] text-[#111111]">
                {a.title}
              </span>
              <span className="mt-3 flex-1 text-[15.5px] leading-relaxed text-[#5E5E5E]">{a.body}</span>
              <span aria-hidden="true" className="mt-6 text-[1.25rem] text-[#111111] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0040FF]">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <ActionLink href="/services">See all services</ActionLink>
        </div>
      </Container>
    </section>
  );
}
