import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import AtAGlance from "@/components/home/AtAGlance";
import ProductShowcase from "@/components/home/ProductShowcase";
import Dream from "@/components/home/Dream";
import Practices from "@/components/home/Practices";
import ProductRange from "@/components/home/ProductRange";
import Method from "@/components/home/Method";
import Founder from "@/components/home/Founder";
import InsightPreview from "@/components/home/InsightPreview";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import FinalCTA from "@/components/home/FinalCTA";
import HomeFAQ from "@/components/home/HomeFAQ";

export const metadata = pageMetadata("/");

/**
 * Homepage.
 *
 * The order is the argument, and it is deliberately the order a sceptical
 * first-time visitor thinks in rather than the order we would like to talk in:
 *
 *   1. What do you promise?       hero, with the flagship product on stage
 *   2. Who are you, really?       who we are, what we do, for whom, where
 *   3. What have you built?       the six products
 *   4. Where are you going?       the 30% dream
 *   5. What can you do for me?    services, by who you are
 *   6. What does it cost?         the packages, priced
 *   7. What is it like to buy?    the method, and the risk it removes
 *   8. Do people vouch for you?   testimonials, once real ones exist
 *   9. Do you know anything?      writing
 *  10. Who answers for it?        the CEO, by name and face
 *  11. What else should I know?   the questions people ask first
 *  12. Fine, what now?            one ask, one alternative
 *
 * Client work is deliberately kept to /portfolio. The homepage shows only the
 * products on the hero stage, so it reads as a company, not a gallery.
 *
 * Every section is pure white and separated by a single hairline, the way
 * Ventures Platform, Orange and BMW run their pages. Chapters are marked by
 * the headline that opens each one, not by switching the page to a new colour.
 */
export default function BitLayerXHomePage() {
  return (
    <>
      <Hero />
      <AtAGlance />
      <ProductShowcase />
      <Dream />
      <Practices />
      <ProductRange />
      <Method />
      <Testimonials />
      <InsightPreview />
      <Founder />
      <HomeFAQ />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
