import Image from "next/image";
import { assets } from "@/assets/assets";

/**
 * The company wordmark: the mark plus "BitLayerX Technologies", the name the
 * company is registered under. Shared by the navbar and the footer so the
 * name can only ever be written one way.
 */
export default function BrandMark({ size = "md", className = "" }) {
  const lg = size === "lg";
  return (
    <span className={`flex items-center gap-2.5 select-none ${className}`}>
      <Image
        src={assets.logo}
        alt=""
        width={60}
        height={45}
        className={`${lg ? "h-11" : "h-8 sm:h-9"} w-auto object-contain`}
        priority={!lg}
      />
      <span
        className={`whitespace-nowrap tracking-[-0.03em] text-[#111111] ${
          lg ? "text-[24px]" : "text-[16px] sm:text-[19px]"
        }`}
      >
        <span className="font-extrabold">BitLayerX</span>{" "}
        <span className="font-medium">Technologies</span>
      </span>
    </span>
  );
}
