import Link from "next/link";
import { SITE } from "@/lib/seo";
import { Section, Container, Heading, Lede } from "@/components/ui/primitives";

const url = `${SITE.url}/cookies`;

export const metadata = {
  title: "Cookie Policy",
  description:
    "Which cookies this site sets, what each one does, and how to refuse them. Short, because we set very few.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Cookie Policy, BitLayerX",
    description: "Which cookies this site sets and how to refuse them.",
    siteName: SITE.name,
  },
};

const LAST_UPDATED = "15 August 2026";

export default function CookiesPage() {
  return (
    <>
      <Section tone="white" rhythm="tight">
        <Container width="text">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13.5px] text-[#6e6e73]">
            <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <span>Cookies</span>
          </nav>

          <Heading as="h1" size="xl">Cookie policy</Heading>
          <Lede className="mt-5">
            This site sets no advertising cookies and does not track you across
            other websites. Blocking everything below will not break anything
            here.
          </Lede>
          <p className="mt-6 text-[14px] text-[#6e6e73]">
            Last updated {LAST_UPDATED}
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="tight">
        <Container width="text">
          <div className="blx-prose">
            <h2>What a cookie is</h2>
            <p>A small text file a website asks your browser to keep. Some are
            needed for a site to work at all. Others exist to watch what you do.
            We use the first kind, and a limited amount of the second.</p>

            <h2>What this site sets</h2>

            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Purpose</th>
                  <th>Lasts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>blx_admin</code></td>
                  <td>Keeps our own team signed in to the admin area. Never set for visitors.</td>
                  <td>12 hours</td>
                </tr>
                <tr>
                  <td><code>_ga</code>, <code>_ga_*</code></td>
                  <td>Google Analytics, if enabled. Counts visits and which pages are useful. IP addresses are anonymised.</td>
                  <td>Up to 14 months</td>
                </tr>
                <tr>
                  <td><code>_clck</code>, <code>_clsk</code></td>
                  <td>Microsoft Clarity, if enabled. Shows us where people get stuck on a page.</td>
                  <td>Up to 12 months</td>
                </tr>
              </tbody>
            </table>

            <p>Analytics cookies are only set when the matching key is
            configured. If it is not, they never appear at all.</p>

            <h2>What this site does not set</h2>

            <ul>
              <li>No advertising or retargeting cookies.</li>
              <li>No cookies that follow you to other websites.</li>
              <li>No device fingerprinting.</li>
              <li>No selling of anything to data brokers, ever.</li>
            </ul>

            <h2>How to refuse them</h2>

            <p>Every browser lets you block or delete cookies in its settings,
            usually under Privacy. You can also turn on Do Not Track, which we
            honour. Nothing on this site stops working if you do.</p>

            <p>If you want the analytics cookies gone specifically, Google
            publishes a browser add on that opts you out of Analytics on every
            site at once.</p>

            <h2>Questions</h2>

            <p>Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with
            "cookies" in the subject and a person will reply. See also our{" "}
            <Link href="/privacy">privacy policy</Link>, which covers everything
            else we hold.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
