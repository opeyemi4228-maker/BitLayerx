import { pageMetadata, SITE } from "@/lib/seo";
import PackagesClient from "./PackagesClient";

// Server wrapper. The page body is a presentational component, so the route's
// title, description and self-referencing canonical are declared here.
export const metadata = pageMetadata("/packages");

/**
 * Offer schema.
 *
 * Now that real starting prices are published, Google can show them in the
 * result itself. A price in the search listing filters out people who were
 * never going to buy and pre-qualifies the ones who click, which is worth more
 * than the extra traffic a vague listing attracts.
 *
 * `lowPrice` must match what the page actually says. If the numbers in
 * PackagesClient change, change them here too or the structured data becomes a
 * misrepresentation.
 */
const OFFERS = [
  { name: "Launchpad", price: "500000", description: "A website of up to five pages, written for your customers and set up so Google can find it." },
  { name: "Growth Engine", price: "1500000", description: "Everything in Launchpad, plus monthly search work, paid adverts and email marketing." },
  { name: "Brand Authority", price: "3500000", description: "Full brand identity, a brand guide your team can follow, and a brand film with advert cuts." },
  { name: "Tech Powerhouse", price: "8000000", description: "A custom web or mobile app with logins, payments, dashboards and a proper handover." },
  { name: "Digital Dominance", price: "20000000", description: "Everything above, six months of marketing, and a dedicated account lead." },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${SITE.url}/packages#catalog`,
    name: "BitLayerX Packages",
    url: `${SITE.url}/packages`,
    provider: { "@id": `${SITE.url}/#organization` },
    itemListElement: OFFERS.map((o, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: o.name,
      description: o.description,
      priceCurrency: "NGN",
      price: o.price,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "NGN",
        minPrice: o.price,
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/start-a-project`,
      seller: { "@id": `${SITE.url}/#organization` },
      areaServed: ["NG", "GB", "US", "AE", "ZA"],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PackagesClient />
    </>
  );
}
