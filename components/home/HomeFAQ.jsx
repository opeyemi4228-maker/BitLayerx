import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { SITE } from "@/lib/seo";
import { PACKAGES } from "@/content/packages";

/**
 * Questions people ask before they get in touch.
 *
 * Two jobs. For a visitor, it answers the last doubts in their head without
 * making them book a call to find out. For search engines, the FAQPage markup
 * below states those same answers in a form Google and AI assistants read
 * directly, which is what appears when someone searches "who is BitLayerX".
 *
 * Prices, phone and email come from the same sources the rest of the site
 * uses, so an answer here can never quietly contradict the packages page.
 *
 * Built on <details>, so it opens and closes with no JavaScript at all.
 */

const starter = PACKAGES[0];
const phoneDisplay = SITE.phone.replace(/^\+234-/, "0").replace(/-/g, " ");

const FAQS = [
  {
    q: "Who is BitLayerX Technologies?",
    a: `BitLayerX Technologies is a Nigerian technology company headquartered in Gwarinpa, Abuja. We build our own products in cloud, civic intelligence and logistics, and we build websites, online stores, apps and software for businesses of every size. The company is led by our CEO, ${SITE.founder}.`,
  },
  {
    q: "What does BitLayerX do?",
    a: "Two things. We build and run our own products, including Data Bank, Poll360 and Agent360. And we work for clients: websites, e-commerce, mobile apps, custom software, UI and UX design, branding, cloud hosting, data and AI, SEO and digital marketing, cybersecurity, and ongoing support.",
    link: { href: "/services", label: "See every service" },
  },
  {
    q: "Is BitLayerX a registered company?",
    a: `Yes. BitLayerX Technologies is registered with the Corporate Affairs Commission in Nigeria under RC ${SITE.cacNumber}. You can confirm it yourself on the CAC public register before you pay us anything, and we encourage you to.`,
    link: { href: "/blog/how-to-verify-a-nigerian-tech-company", label: "How to check" },
  },
  {
    q: "How much does a website cost?",
    a: `Our ${starter.name} package starts from ${starter.price}. ${starter.priceNote} Every package price is published, so you can see what fits your budget before you speak to anyone.`,
    link: { href: "/packages", label: "See all packages and prices" },
  },
  {
    q: "Do you only work with big companies?",
    a: "No. We work with every kind of business, from a single shop to a national institution. The first conversation is the same for everyone, and so is the standard of the work.",
  },
  {
    q: "What happens after I get in touch?",
    a: "We have one conversation about your business. Within 48 hours you receive a written plan with the scope, the timeline and the price. It is yours to keep whether or not you go ahead with us.",
    link: { href: "/start-a-project", label: "Start a project" },
  },
  {
    q: "Do I own what you build?",
    a: "Completely. The code, the accounts and the domain are in your name from day one, not handed over at the end. If you ever want to move to another team, you can.",
  },
  {
    q: "Do you work with clients outside Abuja?",
    a: "Yes. We meet clients in person in Abuja and work remotely with clients anywhere in Nigeria and abroad.",
    link: { href: "/locations", label: "Where we work" },
  },
  {
    q: "How do I contact you?",
    a: `Call or WhatsApp ${phoneDisplay}, email ${SITE.email}, or use the contact form. A real person replies within one working day.`,
    link: { href: "/contact", label: "Contact us" },
  },
];

export default function HomeFAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-[14px] font-semibold text-[#0040FF]">Questions</p>
            <h2
              id="faq-heading"
              className="mt-4 text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]"
            >
              What people ask us first.
            </h2>
            <p className="mt-5 max-w-[34ch] text-[1.0625rem] leading-relaxed text-[#5E5E5E]">
              Something else on your mind?{" "}
              <Link
                href="/contact"
                className="font-medium text-[#0040FF] underline underline-offset-4 hover:text-[#111111]"
              >
                Ask us directly
              </Link>
              .
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-black/[0.1]">
              {FAQS.map((f, i) => (
                <li key={f.q} className="border-b border-black/[0.1]">
                  <details className="group" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[clamp(1.08rem,1.5vw,1.25rem)] font-semibold tracking-[-0.02em] text-[#111111] transition-colors hover:text-[#0040FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-black/[0.14] text-[18px] font-normal leading-none text-[#111111] transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="pb-7 pr-12">
                      <p className="text-[1.0625rem] leading-relaxed text-[#5E5E5E]">{f.a}</p>
                      {f.link && (
                        <Link
                          href={f.link.href}
                          className="group/link mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-[#0040FF] hover:text-[#111111]"
                        >
                          {f.link.label}
                          <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-[3px]">
                            ›
                          </span>
                        </Link>
                      )}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
