import Link from "next/link";
import { SITE } from "@/lib/seo";
import { Section, Container, Heading, Lede } from "@/components/ui/primitives";

const url = `${SITE.url}/privacy`;

export const metadata = {
  title: "Privacy Policy",
  description:
    "What BitLayerX collects, why, how long we keep it, and how to have it deleted. Written to be read rather than to be survived.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Privacy Policy, BitLayerX",
    description: "What we collect, why, and how to have it deleted.",
    siteName: SITE.name,
  },
};

const LAST_UPDATED = "15 August 2026";

export default function PrivacyPage() {
  return (
    <>
      <Section tone="white" rhythm="tight">
        <Container width="text">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13.5px] text-[#6e6e73]">
            <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <span>Privacy</span>
          </nav>

          <Heading as="h1" size="xl">Privacy policy</Heading>
          <Lede className="mt-5">
            The short version: we collect what you send us and basic analytics.
            We do not sell anything to anyone, and you can have your data
            deleted by sending one email.
          </Lede>
          <p className="mt-6 text-[14px] text-[#6e6e73]">
            Last updated {LAST_UPDATED}
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="tight">
        <Container width="text">
          <div className="blx-prose">
            <h2>What we collect</h2>

            <p><strong>What you send us.</strong> When you complete a form on this
            site, we receive your name, email address, and whatever else you
            chose to include, company, phone number, budget range, timeline and
            your description of the project. Nothing on our forms is collected
            without you typing it.</p>

            <p><strong>When you send a form, we also record where it came
            from.</strong> Your IP address, the country and city your network
            reports, your time zone, your browser, and which page on this site
            you sent it from. We keep this for two reasons: to block automated
            abuse of our forms, and to know which markets and which pages
            produce real enquiries.</p>

            <p>This is recorded only when you choose to submit a form. We do not
            log the address of every visitor who reads the site.</p>

            <p><strong>Analytics.</strong> If analytics is enabled, we collect
            aggregate usage data: pages visited, approximate location at country
            or city level, device type, and how you arrived. Analytics IP
            addresses are anonymised. We use this to understand which pages are
            useful, not to identify individuals.</p>

            <p><strong>What we do not collect.</strong> We do not take payment
            details on this website. We do not use fingerprinting. We do not buy
            contact data, and we do not upload your details to advertising
            platforms to build audiences.</p>

            <h2>Why we hold it</h2>

            <p>To reply to you, to prepare a proposal you asked for, and to keep
            a record of work we have quoted. If we end up working together, to
            deliver and invoice for that work.</p>

            <p>We do not add form submissions to a marketing list. If we ever
            start a newsletter, joining it will be a separate, explicit action
            on your part.</p>

            <h2>How long we keep it</h2>

            <ul>
              <li><strong>Enquiries that do not become projects</strong>, 24 months, then deleted, including the IP address and location recorded with them.</li>
              <li><strong>Client records</strong>, for the duration of the engagement plus seven years, because tax law in the relevant jurisdictions requires it.</li>
              <li><strong>Analytics</strong>, 14 months, aggregated.</li>
            </ul>

            <h2>Who else sees it</h2>

            <p>A small number of service providers process data on our behalf:
            our hosting provider, our email provider, and our analytics
            provider. Each is bound by their own data processing terms. We do
            not sell, rent or trade personal data, and we never have.</p>

            <p>We will disclose information if legally compelled to. If that
            happens and we are permitted to tell you, we will.</p>

            <h2>Where it is stored</h2>

            <p>Our infrastructure is hosted in the EU and the US. If you are in
            Nigeria, the UK, the EU, the UAE or South Africa, your data may be
            processed outside your country. Transfers rely on standard
            contractual clauses where required.</p>

            {/* Anchored: the footer's "Data protection" link lands here, so
                the promise in the nav and the section that keeps it stay
                attached to each other. */}
            <h2 id="your-rights">Your rights</h2>

            <p>Wherever you are, we will honour these, we would rather apply
            the strongest standard everywhere than track which rules apply to
            whom:</p>

            <ul>
              <li><strong>Access</strong>, ask what we hold about you.</li>
              <li><strong>Correction</strong>, have anything wrong put right.</li>
              <li><strong>Deletion</strong>, have it removed, except where we are legally required to keep it.</li>
              <li><strong>Portability</strong>, receive it in a machine-readable format.</li>
              <li><strong>Objection</strong>, tell us to stop processing it.</li>
            </ul>

            <p>Email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
              with the word "privacy" in the subject. We respond within 30 days
              and usually much sooner. There is no form to fill in and we will
              not ask you why.</p>

            <h2>Cookies</h2>

            <p>This site sets no advertising cookies. Analytics, where enabled,
            uses first-party cookies only. Blocking them in your browser will
            not break anything on this site.</p>

            <h2>Children</h2>

            <p>This is a business-to-business site and is not directed at
            children. We do not knowingly collect data from anyone under 16.</p>

            <h2>Changes</h2>

            <p>If we change this policy materially, we will update the date at
            the top and, where we hold your contact details and the change
            affects you, tell you directly.</p>

            <h2>Contact</h2>

            <p>
              BitLayerX Technologies<br />
              6th Avenue, Gwarinpa, Abuja, FCT, Nigeria<br />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
              <a href={`tel:${SITE.phone.replace(/-/g, "")}`}>{SITE.phone}</a>
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-black/[0.07] bg-[#f5f5f7] p-7">
            <p className="text-[15.5px] leading-relaxed text-[#6e6e73]">
              Questions about any of this before you send us a brief? Ask first, that is entirely reasonable.{" "}
              <Link
                href="/contact"
                className="font-medium text-[#0040FF] underline underline-offset-4"
              >
                Get in touch
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
