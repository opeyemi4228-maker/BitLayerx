import Link from "next/link";
import { ClosingCTA } from "@/components/ui/primitives";

/**
 * The closing ask.
 *
 * Placed after the proof rather than before it. It removes the last risk in
 * the reader's head at this point: the plan is theirs to keep whether or not
 * they go ahead.
 */
export default function FinalCTA() {
  return (
    <ClosingCTA
      id="cta-heading"
      heading="Tell us what you are building."
      lede="Every business can run on digital. One session, then a written plan with scope, timeline and price within 48 hours, yours to keep either way."
      secondary={{ href: "/contact", label: "Book a call instead" }}
    >
      <p className="mt-8 text-[14px] leading-relaxed text-[#5E5E5E]">
        Abuja · Lagos · London · Dubai · Johannesburg · New York,{" "}
        <Link
          href="/locations"
          className="text-[#111111] underline underline-offset-4 hover:text-[#0040FF]"
        >
          and everywhere else we work
        </Link>
      </p>
    </ClosingCTA>
  );
}
