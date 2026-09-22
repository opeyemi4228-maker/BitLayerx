import Link from "next/link";

/**
 * The shared layout primitives.
 *
 * Every page on this site was previously setting its own vertical padding,
 * container width and heading sizes, which is why no two pages felt like the
 * same product. These components own those decisions now. Pages compose them
 * and do not set padding directly.
 *
 * The structural language is pure white throughout. Sections are separated by
 * a single hairline, never by a tinted or dark panel, so the page reads as one
 * clean, continuous document. Colour is reserved for the one thing on a
 * screen that should be acted on.
 */

// ─── Panel tones ──────────────────────────────────────────────────────────────
// Every tone is pure #FFFFFF. Tinted off-whites read as grey or blue next to
// real white, and dark panels break the page into slabs. "offwhite", "dark"
// and "brand" are kept as names so existing pages keep compiling, and each
// one now means "white, with a hairline above it" to mark a new chapter.
const TONES = {
  white: "bg-white text-[#111111]",
  offwhite: "bg-white text-[#111111] border-t border-black/[0.08]",
  dark: "bg-white text-[#111111] border-t border-black/[0.08]",
  brand: "bg-white text-[#111111] border-t border-black/[0.08]",
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

  // Sentence case, not tracked capitals: spaced-out uppercase labels are the
  // commonest tell of a template.
  return (
    <p
      className={`text-[14px] font-semibold tracking-[-0.005em] mb-4 ${colour} ${className}`}
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
  hero: "text-[clamp(2.6rem,7vw,5.2rem)] leading-[1]",
  xl: "text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05]",
  lg: "text-[clamp(1.7rem,3.2vw,2.7rem)] leading-[1.1]",
  md: "text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.18]",
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
      className={`font-semibold tracking-[-0.035em] ${HEADING_SIZES[size] ?? HEADING_SIZES.xl} ${className}`}
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
  const colour = tone === "light" ? "text-white/70" : "text-[#5E5E5E]";
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
      : "text-[#0040FF] hover:text-[#111111]";

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
    "bg-[#0040FF] text-white hover:bg-black focus-visible:ring-[#0040FF]",
  onDark:
    "bg-white text-[#111111] hover:bg-white/90 focus-visible:ring-white",
  outline:
    "border border-[#111111]/20 text-[#111111] hover:border-[#111111]/45 focus-visible:ring-[#111111]",
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
 * Left-aligned and set on pure white: a large headline on the left, and the
 * supporting line and actions beside it on wide screens, the arrangement
 * Ventures Platform and BMW open with. Nothing sits behind the type.
 *
 * `highlight` takes a single word or short phrase, set in the brand blue.
 * Emphasising two words cancels both out. Pass the headline as three parts:
 * what comes before the emphasised word, the word itself, and what comes after.
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
    <section className="bg-white pt-[clamp(2.5rem,6vw,5.5rem)] pb-[clamp(2.75rem,5.5vw,5rem)]">
      <Container width="wide">
        {eyebrow && (
          <p className="text-[14px] font-semibold tracking-[-0.005em] text-[#0040FF]">
            {eyebrow}
          </p>
        )}

        <div className="mt-5 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <h1 className="max-w-[16ch] text-[clamp(2.6rem,6.4vw,5.6rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#111111] lg:col-span-8">
            {before}
            {highlight && (
              <>
                {before ? " " : ""}
                <span className="text-[#0040FF]">{highlight}</span>
                {after && !/^[.,!?]/.test(after) ? " " : ""}
              </>
            )}
            {after}
          </h1>

          {(lede || primary || secondary) && (
            <div className="lg:col-span-4 lg:pb-3">
              {lede && (
                <p className="max-w-[46ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55] text-[#5E5E5E]">
                  {lede}
                </p>
              )}

              {(primary || secondary) && (
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  {primary && (
                    <Link
                      href={primary.href}
                      className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-7 py-[0.85rem] text-[1rem] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
                    >
                      {primary.label}
                    </Link>
                  )}
                  {secondary && (
                    <ActionLink href={secondary.href}>{secondary.label}</ActionLink>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {children}
      </Container>
    </section>
  );
}

// ─── Closing call to action ───────────────────────────────────────────────────
/**
 * The last section of a page: one ask, one alternative, on white.
 *
 * It used to be a solid blue or black slab. On a white site that slab is the
 * heaviest thing on the page, so it outshouted the work above it; a hairline
 * and a large headline close the page without breaking its tone.
 */
export function ClosingCTA({
  heading,
  lede,
  primary = { href: "/start-a-project", label: "Start a project" },
  secondary,
  children,
  id,
}) {
  return (
    <section
      aria-labelledby={id}
      className="border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container width="wide">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <h2
            id={id}
            className="max-w-[18ch] text-[clamp(2.2rem,5.2vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#111111] lg:col-span-7"
          >
            {heading}
          </h2>

          <div className="lg:col-span-5 lg:pb-2">
            {lede && (
              <p className="max-w-[50ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55] text-[#5E5E5E]">
                {lede}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              {primary && (
                <Link
                  href={primary.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
                >
                  {primary.label}
                </Link>
              )}
              {secondary && (
                <ActionLink href={secondary.href}>{secondary.label}</ActionLink>
              )}
            </div>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
