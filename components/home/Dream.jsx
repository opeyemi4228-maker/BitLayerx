import { Check } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { DIGITALISED } from "@/content/company";

/**
 * The dream.
 *
 * One number carries the whole company: 30% of African businesses digital
 * before 2030. It is set as large as the page allows, and beside it the five
 * checks that say what "digital" means, so the goal can be measured rather
 * than admired.
 */

export default function Dream() {
  return (
    <section
      aria-labelledby="dream-heading"
      className="border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="text-[14px] font-semibold text-[#0040FF]">Our dream</p>
            <h2 id="dream-heading" className="mt-4 text-[#111111]">
              <span className="block text-[clamp(6rem,19vw,15rem)] font-semibold leading-[0.85] tracking-[-0.06em]">
                30<span className="text-[#0040FF]">%</span>
              </span>
              <span className="mt-6 block max-w-[18ch] text-[clamp(1.8rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
                of African businesses, digital before 2030.
              </span>
            </h2>
            <p className="mt-6 max-w-[54ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55] text-[#5E5E5E]">
              Most African businesses still run on paper, phone calls and
              memory. We believe that by 2030 nearly one in three should run on
              digital tools, and BitLayerX Technologies will lead that change.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-24">
            <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-[#111111]">
              What &ldquo;digital&rdquo; means to us.
            </h3>
            <p className="mt-2 text-[15px] text-[#5E5E5E]">A business counts when it:</p>
            <ul className="mt-6 divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {DIGITALISED.map((d) => (
                <li key={d} className="flex gap-3.5 py-4 text-[1.0625rem] leading-snug text-[#111111]">
                  <Check size={19} strokeWidth={2.25} aria-hidden="true" className="mt-[2px] flex-shrink-0 text-[#0040FF]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
