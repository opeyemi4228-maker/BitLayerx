import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import Practices from "@/components/home/Practices";
import Clients from "@/components/home/Clients";
import Showcase from "@/components/home/Showcase";
import Method from "@/components/home/Method";
import Founder from "@/components/home/Founder";
import WorkPreview from "@/components/home/WorkPreview";
import InsightPreview from "@/components/home/InsightPreview";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = pageMetadata("/");

// The work rail reads a live GitHub feed; refresh it hourly.
export const revalidate = 3600;

/**
 * Homepage.
 *
 * The order is the argument, and it is deliberately the order a sceptical
 * buyer thinks in rather than the order we would like to talk in:
 *
 *   1. What do you do?, hero
 *   2. What can you actually do?, the six practices
 *   3. What is it like to buy?, the method, and the risk it removes
 *   4. Prove it., live deployments, not screenshots
 *   5. Do you know anything?, writing
 *   6. Fine, what now?, one ask, one alternative
 *
 * Alternating panel tones (white, off-white, near-black, brand) mark each of
 * those as a separate chapter without a single dividing rule, which is the
 * structural trick underneath every page on apple.com.
 */
export default function BitLayerXHomePage() {
  return (
    <>
      {/* Panel tones alternate deliberately and never repeat back to back:
          off-white → white → black → off-white → white → black → off-white →
          blue. Two adjacent panels sharing a tone read as one long section and
          the chapter break disappears. */}
      <Hero />          {/* off-white */}
      <Clients />       {/* white, thin proof strip under the hero */}
      <Practices />     {/* white     */}
      <WorkPreview />   {/* black     */}
      <Method />        {/* off-white */}
      <Showcase />      {/* black     */}
      <Testimonials />  {/* off-white, renders only once real quotes exist */}
      <InsightPreview />{/* off-white */}
      <Founder />       {/* white     */}
      <FinalCTA />      {/* blue      */}
    </>
  );
}
