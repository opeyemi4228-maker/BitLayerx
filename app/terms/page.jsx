import Link from "next/link";
import { SITE } from "@/lib/seo";
import { Section, Container, Heading, Lede } from "@/components/ui/primitives";

const url = `${SITE.url}/terms`;

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms we work under: what we owe you, what you owe us, who owns the work, and how either side ends an engagement.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Terms of Service, BitLayerX",
    description: "The terms we work under, written plainly.",
    siteName: SITE.name,
  },
};

const LAST_UPDATED = "15 August 2026";

export default function TermsPage() {
  return (
    <>
      <Section tone="white" rhythm="tight">
        <Container width="text">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13.5px] text-[#6e6e73]">
            <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <span>Terms</span>
          </nav>

          <Heading as="h1" size="xl">Terms of service</Heading>
          <Lede className="mt-5">
            Written to be read. If anything here is unclear, ask before you sign
            rather than after. A signed contract nobody understood is a dispute
            waiting for a date.
          </Lede>
          <p className="mt-6 text-[14px] text-[#6e6e73]">
            Last updated {LAST_UPDATED}
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="tight">
        <Container width="text">
          <div className="blx-prose">
            <h2>Who these cover</h2>
            <p>These terms apply to work carried out by BitLayerX Technologies
            for a client. Where we sign a separate written agreement for a
            project, that agreement wins wherever the two disagree.</p>

            <h2>What we agree to do</h2>
            <p>We deliver what is written in your project plan. That plan states
            the scope, the sequence, the timeline and the price before work
            begins. If it is not in the plan, it is not in the price, and we
            will tell you what a change costs before we do it rather than after.</p>

            <p>We will tell you promptly if something is going to be late. Every
            project has a bad week; hiding it is what turns a bad week into a
            failed project.</p>

            <h2>What we ask of you</h2>
            <ul>
              <li>A single named person who can make decisions.</li>
              <li>Feedback within five working days, or the timeline moves by
              the same amount.</li>
              <li>Content, access and approvals when the plan says they are
              needed.</li>
              <li>That you own, or have the right to use, anything you give us
              to publish.</li>
            </ul>

            <h2>Who owns the work</h2>
            <p>You do. On final payment, all rights in the deliverables transfer
            to you. Code, designs, brand assets, footage and copy are yours to
            use, change, extend or hand to another supplier.</p>

            <p>Your domains, hosting and third party accounts are registered in
            your name from day one, not transferred at the end. We keep the
            right to describe the work publicly and show it in our portfolio
            unless you ask us in writing not to.</p>

            <p>Anything we built before your project, and any general tools or
            libraries we reuse across clients, stay ours. You get a permanent
            licence to use them as part of your deliverable.</p>

            <h2>Money</h2>
            <ul>
              <li>Payment terms are set in your project plan. Typically a
              deposit to start, then staged payments against milestones.</li>
              <li>Invoices are due within 14 days unless the plan says
              otherwise.</li>
              <li>Late payment beyond 30 days pauses work until it is settled.
              We will warn you first.</li>
              <li>Prices exclude tax, third party fees and licences, which are
              listed separately.</li>
            </ul>

            <h2>Ending an engagement</h2>
            <p>Either side can end a project with 30 days written notice. You
            pay for work completed up to that point and we hand over everything
            produced so far, in working formats, along with account access.</p>

            <p>We will not hold your work, your accounts or your domain to
            ransom over a dispute. If you leave, you leave with everything.</p>

            <h2>What we do not promise</h2>
            <p>We do not guarantee specific commercial outcomes: a search
            ranking, a conversion rate, a revenue figure. Anyone who does is
            guessing. What we do commit to is the work described in your plan,
            done to the standard described in it.</p>

            <p>We are not responsible for third party services we do not
            control, for problems caused by changes made by others after
            handover, or for losses that were not reasonably foreseeable. Our
            total liability is capped at the fees you paid us for the project in
            question.</p>

            <h2>Confidentiality</h2>
            <p>Anything you tell us about your business stays between us, both
            during the project and after it. We will sign your NDA if you have
            one. This works both ways.</p>

            <h2>Law</h2>
            <p>These terms are governed by the laws of the Federal Republic of
            Nigeria. For clients contracting through our UK arrangements, the
            laws of England and Wales apply. We would always rather resolve a
            disagreement in a conversation than a courtroom, and in practice we
            always have.</p>

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
              Want any of this explained before you commit? That is a reasonable
              thing to ask.{" "}
              <Link
                href="/contact"
                className="font-medium text-[#0040FF] underline underline-offset-4"
              >
                Get in touch
              </Link>
              . See also our{" "}
              <Link
                href="/privacy"
                className="font-medium text-[#0040FF] underline underline-offset-4"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
