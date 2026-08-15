import Link from "next/link";

/**
 * The shared layout primitives.
 *
 * Every page on this site was previously setting its own vertical padding,
 * container width and heading sizes, which is why no two pages felt like the
 * same product. These components own those decisions now. Pages compose them
 * and do not set padding directly.
 *
 * The structural language is Apple's: full-bleed panels that alternate between
 * white, a very slightly warm off-white and near-black; text measured to a
 * narrow column and centred; oversized display type with tight tracking; and a
 * single blue action link instead of a wall of buttons.
 */

// ─── Panel tones ──────────────────────────────────────────────────────────────
// Apple separates sections by background alone, no rules, no borders. The
// eye reads a tone change as a new chapter more cleanly than a hairline does.
const TONES = {
  white: "bg-white text-[#1d1d1f]",
  offwhite: "bg-[#fbfbfd] text-[#1d1d1f]",
  dark: "bg-[#0B0B0F] text-white",
  brand: "bg-[#0B0B0F] text-white",
};

// Two rhythms, and only two. Every section on the site is one or the other.
const RHYTHM = {
  default: "py-[clamp(4.5rem,9vw,9rem)]",
  tight: "py-[clamp(2.75rem,5vw,5rem)]",
  flush: "py-0",
};

export function Section({
  children,
  tone = "white",
  rhythm = "default",
  className = "",
  id,
  labelledBy,
  ...rest
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${TONES[tone] ?? TONES.white} ${RHYTHM[rhythm] ?? RHYTHM.default} ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

// ─── Container ────────────────────────────────────────────────────────────────
// One width, one gutter, everywhere. `width="text"` is the reading measure, // roughly 60 characters, which is where long-form comprehension peaks.
const WIDTHS = {
  text: "max-w-[720px]",
  narrow: "max-w-[980px]",
  default: "max-w-[1180px]",
  wide: "max-w-[1440px]",
};

export function Container({ children, width = "default", className = "" }) {
  return (
    <div
      className={`${WIDTHS[width] ?? WIDTHS.default} mx-auto px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Eyebrow ──────────────────────────────────────────────────────────────────
export function Eyebrow({ children, tone = "brand", className = "" }) {
  const colour =
    tone === "light" ? "text-white/60" : "text-[#0040FF]";

  return (
    <p
      className={`text-[12px] font-bold tracking-[0.18em] uppercase mb-4 ${colour} ${className}`}
    >
      {children}
    </p>
  );
}

// ─── Display heading ──────────────────────────────────────────────────────────
// The sizes below are the whole reason the site will start to feel coherent.
// `clamp()` means a heading is never hand-tuned per breakpoint, so two pages
// cannot drift apart.
const HEADING_SIZES = {
  hero: "text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.98]",
  xl: "text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.03]",
  lg: "text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.08]",
  md: "text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.15]",
};

export function Heading({
  children,
  as: Tag = "h2",
  size = "xl",
  className = "",
  id,
}) {
  return (
    <Tag
      id={id}
      className={`font-extrabold tracking-[-0.035em] ${HEADING_SIZES[size] ?? HEADING_SIZES.xl} ${className}`}
    >
      {children}
    </Tag>
  );
}

// ─── Lede ─────────────────────────────────────────────────────────────────────
// The paragraph directly under a heading. Apple sets this noticeably larger
// than body copy and in a softer grey; it carries the whole argument for the
// section, so it earns the size.
export function Lede({ children, tone = "dark", className = "" }) {
  const colour = tone === "light" ? "text-white/70" : "text-[#6e6e73]";
  return (
    <p
      className={`text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.5] font-normal ${colour} ${className}`}
    >
      {children}
    </p>
  );
}

// ─── Action link ──────────────────────────────────────────────────────────────
// Apple's signature: a blue text link with a chevron, not a filled button.
// Filled buttons everywhere flatten hierarchy, when everything shouts, the
// primary action stops being findable.
export function ActionLink({
  href,
  children,
  external = false,
  tone = "brand",
  className = "",
}) {
  const colour =
    tone === "light"
      ? "text-[#5C86FF] hover:text-[#8FAEFF]"
      : "text-[#0040FF] hover:text-[#0B0B0F]";

  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  const Tag = external ? "a" : Link;

  return (
    <Tag
      {...props}
      className={`group inline-flex items-center gap-1 text-[1.0625rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded ${colour} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-[3px]"
      >
        ›
      </span>
    </Tag>
  );
}

// ─── Button ───────────────────────────────────────────────────────────────────
// Reserved for the one action that matters on a page.
const BUTTON_VARIANTS = {
  primary:
    "bg-[#0040FF] text-white hover:bg-[#0B0B0F] focus-visible:ring-[#0040FF]",
  onDark:
    "bg-white text-[#1d1d1f] hover:bg-white/90 focus-visible:ring-white",
  outline:
    "border border-[#1d1d1f]/20 text-[#1d1d1f] hover:border-[#1d1d1f]/45 focus-visible:ring-[#1d1d1f]",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-[0.85rem] text-[1.0625rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
    BUTTON_VARIANTS[variant] ?? BUTTON_VARIANTS.primary
  } ${className}`;

  if (!href) {
    return (
      <button className={cls} {...rest}>
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
// The eyebrow + heading + lede cluster, centred, at a fixed measure. Used at
// the top of nearly every section so the opening of each one is identical.
export function SectionHeader({
  eyebrow,
  heading,
  lede,
  align = "center",
  tone = "dark",
  size = "xl",
  id,
  className = "",
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div
      className={`flex flex-col ${alignment} max-w-[760px] ${align === "center" ? "mx-auto" : ""} ${className}`}
    >
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "brand"}>{eyebrow}</Eyebrow>}
      <Heading as="h2" size={size} id={id}>
        {heading}
      </Heading>
      {lede && (
        <Lede tone={tone} className="mt-5">
          {lede}
        </Lede>
      )}
    </div>
  );
}

// ─── Page hero ────────────────────────────────────────────────────────────────
/**
 * The standard hero for every page other than the homepage.
 *
 * It exists so no page invents its own opening. One emphasised word carries
 * the promise, set larger, heavier and in the brand blue, exactly as the
 * homepage does. Emphasising two words cancels both out, so `highlight` takes
 * a single word or short phrase.
 *
 * Pass the headline as three parts: what comes before the emphasised word, the
 * word itself, and what comes after.
 */
export function PageHero({
  eyebrow,
  before = "",
  highlight,
  after = "",
  lede,
  primary,
  secondary,
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd] pt-[clamp(1.75rem,3.5vw,3rem)] pb-[clamp(3rem,6vw,5rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(0,64,255,0.11), transparent 70%)",
        }}
      />

      <Container width="narrow" className="relative text-center">
        {eyebrow && (
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
            {eyebrow}
          </p>
        )}

        <h1 className="mx-auto mt-6 max-w-[15ch] text-[clamp(2.6rem,7.4vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#0B0B0F]">
          {before}
          {highlight && (
            <>
              {before ? " " : ""}
              <span className="text-[1.12em] font-black tracking-[-0.05em] text-[#0040FF]">
                {highlight}
              </span>
              {after ? " " : ""}
            </>
          )}
          {after}
        </h1>

        {lede && (
          <p className="mx-auto mt-7 max-w-[48ch] text-[clamp(1.05rem,1.8vw,1.4rem)] leading-[1.45] text-[#6e6e73]">
            {lede}
          </p>
        )}

        {(primary || secondary) && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            {primary && (
              <Link
                href={primary.href}
                className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-[#0B0B0F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
              >
                {primary.label}
              </Link>
            )}
            {secondary && (
              <ActionLink href={secondary.href}>{secondary.label}</ActionLink>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
