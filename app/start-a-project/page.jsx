import { pageMetadata, SITE } from "@/lib/seo";
import StartProjectClient from "./StartProjectClient";

export const metadata = pageMetadata("/start-a-project", {
  title: "Request a Session, Get a Written Plan in 48 Hours",
  description:
    "Tell us what you are building. You get a call, then a written plan with scope, timeline and price within 48 hours. No obligation, no retainer to see it.",
  keywords: [
    "request a quote",
    "hire a software agency Nigeria",
    "web development quote Abuja",
    "project consultation",
  ],
});

/**
 * The conversion page.
 *
 * Everything here is arranged around a single decision: is it worth this
 * person's next ten minutes to fill in the form? The objections that stop
 * people, "will this be a sales call", "will they tell me the price", "what
 * if my budget is too small", are answered on the page rather than left to be
 * discovered on the call.
 */
export default function QuotePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE.url}/start-a-project#contactpage`,
    url: `${SITE.url}/start-a-project`,
    name: "Request a Session, BitLayerX",
    description:
      "Request a working session with BitLayerX and receive a written plan within 48 hours.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <StartProjectClient />
    </>
  );
}
