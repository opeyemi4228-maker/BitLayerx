module.exports = [
"[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionLink",
    ()=>ActionLink,
    "Button",
    ()=>Button,
    "Container",
    ()=>Container,
    "Eyebrow",
    ()=>Eyebrow,
    "Heading",
    ()=>Heading,
    "Lede",
    ()=>Lede,
    "PageHero",
    ()=>PageHero,
    "Section",
    ()=>Section,
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
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
 */ // ─── Panel tones ──────────────────────────────────────────────────────────────
// Apple separates sections by background alone, no rules, no borders. The
// eye reads a tone change as a new chapter more cleanly than a hairline does.
const TONES = {
    white: "bg-white text-[#1d1d1f]",
    // Was a grey fill. Grey panels are the cheapest way to separate sections and
    // they make a site look like a template, because every generated layout
    // reaches for them. White throughout with a single hairline makes the page
    // read as one continuous document, which is how a printed publication works.
    offwhite: "bg-white text-[#1d1d1f] border-t border-black/[0.08]",
    dark: "bg-black text-white",
    brand: "bg-black text-white"
};
// Two rhythms, and only two. Every section on the site is one or the other.
const RHYTHM = {
    default: "py-[clamp(4.5rem,9vw,9rem)]",
    tight: "py-[clamp(2.75rem,5vw,5rem)]",
    flush: "py-0"
};
function Section({ children, tone = "white", rhythm = "default", className = "", id, labelledBy, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        "aria-labelledby": labelledBy,
        className: `${TONES[tone] ?? TONES.white} ${RHYTHM[rhythm] ?? RHYTHM.default} ${className}`,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
// ─── Container ────────────────────────────────────────────────────────────────
// One width, one gutter, everywhere. `width="text"` is the reading measure, // roughly 60 characters, which is where long-form comprehension peaks.
const WIDTHS = {
    text: "max-w-[720px]",
    narrow: "max-w-[980px]",
    default: "max-w-[1180px]",
    wide: "max-w-[1440px]"
};
function Container({ children, width = "default", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${WIDTHS[width] ?? WIDTHS.default} mx-auto px-5 sm:px-8 lg:px-10 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function Eyebrow({ children, tone = "brand", className = "" }) {
    const colour = tone === "light" ? "text-white/60" : "text-[#0040FF]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-[12px] font-bold tracking-[0.18em] uppercase mb-4 ${colour} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
// ─── Display heading ──────────────────────────────────────────────────────────
// The sizes below are the whole reason the site will start to feel coherent.
// `clamp()` means a heading is never hand-tuned per breakpoint, so two pages
// cannot drift apart.
const HEADING_SIZES = {
    hero: "text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.98]",
    xl: "text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.03]",
    lg: "text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.08]",
    md: "text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.15]"
};
function Heading({ children, as: Tag = "h2", size = "xl", className = "", id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: `font-extrabold tracking-[-0.035em] ${HEADING_SIZES[size] ?? HEADING_SIZES.xl} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function Lede({ children, tone = "dark", className = "" }) {
    const colour = tone === "light" ? "text-white/70" : "text-[#6e6e73]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.5] font-normal ${colour} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
function ActionLink({ href, children, external = false, tone = "brand", className = "" }) {
    const colour = tone === "light" ? "text-[#5C86FF] hover:text-[#8FAEFF]" : "text-[#0040FF] hover:text-[#1d1d1f]";
    const props = external ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer"
    } : {
        href
    };
    const Tag = external ? "a" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ...props,
        className: `group inline-flex items-center gap-1 text-[1.0625rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded ${colour} ${className}`,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "transition-transform duration-200 group-hover:translate-x-[3px]",
                children: "›"
            }, void 0, false, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
// ─── Button ───────────────────────────────────────────────────────────────────
// Reserved for the one action that matters on a page.
const BUTTON_VARIANTS = {
    primary: "bg-[#0040FF] text-white hover:bg-black focus-visible:ring-[#0040FF]",
    onDark: "bg-white text-[#1d1d1f] hover:bg-white/90 focus-visible:ring-white",
    outline: "border border-[#1d1d1f]/20 text-[#1d1d1f] hover:border-[#1d1d1f]/45 focus-visible:ring-[#1d1d1f]"
};
function Button({ href, children, variant = "primary", external = false, className = "", ...rest }) {
    const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-[0.85rem] text-[1.0625rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${BUTTON_VARIANTS[variant] ?? BUTTON_VARIANTS.primary} ${className}`;
    if (!href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: cls,
            ...rest,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/primitives.jsx",
            lineNumber: 198,
            columnNumber: 7
        }, this);
    }
    if (external) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: cls,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/primitives.jsx",
            lineNumber: 206,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: cls,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
function SectionHeader({ eyebrow, heading, lede, align = "center", tone = "dark", size = "xl", id, className = "" }) {
    const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col ${alignment} max-w-[760px] ${align === "center" ? "mx-auto" : ""} ${className}`,
        children: [
            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                tone: tone === "light" ? "light" : "brand",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 239,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                as: "h2",
                size: size,
                id: id,
                children: heading
            }, void 0, false, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            lede && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Lede, {
                tone: tone,
                className: "mt-5",
                children: lede
            }, void 0, false, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 244,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
function PageHero({ eyebrow, before = "", highlight, after = "", lede, primary, secondary, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-white pt-[clamp(1.75rem,3.5vw,3rem)] pb-[clamp(3rem,6vw,5rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-x-0 top-0 h-[70%]",
                style: {
                    background: "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(0,64,255,0.05), transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
                width: "narrow",
                className: "relative text-center",
                children: [
                    eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/components/ui/primitives.jsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mx-auto mt-6 max-w-[15ch] text-[clamp(2.6rem,7.4vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#1d1d1f]",
                        children: [
                            before,
                            highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    before ? " " : "",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[1.12em] font-black tracking-[-0.05em] text-[#0040FF]",
                                        children: highlight
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/primitives.jsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this),
                                    after ? " " : ""
                                ]
                            }, void 0, true),
                            after
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/primitives.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    lede && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-7 max-w-[48ch] text-[clamp(1.05rem,1.8vw,1.4rem)] leading-[1.45] text-[#6e6e73]",
                        children: lede
                    }, void 0, false, {
                        fileName: "[project]/components/ui/primitives.jsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    (primary || secondary) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8",
                        children: [
                            primary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: primary.href,
                                className: "inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2",
                                children: primary.label
                            }, void 0, false, {
                                fileName: "[project]/components/ui/primitives.jsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this),
                            secondary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionLink, {
                                href: secondary.href,
                                children: secondary.label
                            }, void 0, false, {
                                fileName: "[project]/components/ui/primitives.jsx",
                                lineNumber: 323,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/primitives.jsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Page not found",
    robots: {
        index: false,
        follow: true
    }
};
const DESTINATIONS = [
    {
        href: "/services",
        label: "Services",
        note: "What we do, and how it is priced"
    },
    {
        href: "/portfolio",
        label: "Work",
        note: "Live projects you can open right now"
    },
    {
        href: "/packages",
        label: "Packages",
        note: "Scopes and prices, published"
    },
    {
        href: "/blog",
        label: "Insight",
        note: "Writing from the team"
    },
    {
        href: "/about",
        label: "About",
        note: "Who you would be working with"
    },
    {
        href: "/contact",
        label: "Contact",
        note: "Start a conversation"
    }
];
function NotFound() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "narrow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]",
                    children: "Error 404"
                }, void 0, false, {
                    fileName: "[project]/app/not-found.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                    as: "h1",
                    size: "xl",
                    className: "mt-4",
                    children: "That page is not here."
                }, void 0, false, {
                    fileName: "[project]/app/not-found.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Lede"], {
                    className: "mt-5 max-w-[560px]",
                    children: "The link may be old, or we may have moved something. Nothing is broken on your side, here is where most people were heading."
                }, void 0, false, {
                    fileName: "[project]/app/not-found.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid sm:grid-cols-2 gap-px bg-black/10 rounded-2xl overflow-hidden",
                    children: DESTINATIONS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: d.href,
                            className: "group bg-white p-6 hover:bg-black/[0.02] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 text-[1.0625rem] font-semibold text-[#1d1d1f] group-hover:text-[#0040FF] transition-colors",
                                    children: [
                                        d.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "transition-transform duration-200 group-hover:translate-x-[3px]",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/app/not-found.jsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/not-found.jsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 block text-[14.5px] text-[#6e6e73]",
                                    children: d.note
                                }, void 0, false, {
                                    fileName: "[project]/app/not-found.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, d.href, true, {
                            fileName: "[project]/app/not-found.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/not-found.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-10 text-[15px] text-[#6e6e73]",
                    children: [
                        "Arrived from a link that should work?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "text-[#0040FF] font-medium underline underline-offset-4",
                            children: "Tell us where it was"
                        }, void 0, false, {
                            fileName: "[project]/app/not-found.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        " ",
                        "and we will fix it."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/not-found.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/not-found.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/not-found.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.react-server.js.map
}),
];

//# sourceMappingURL=_b60ba8ad._.js.map