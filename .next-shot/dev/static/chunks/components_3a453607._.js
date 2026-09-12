(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/primitives.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
_c = Section;
// ─── Container ────────────────────────────────────────────────────────────────
// One width, one gutter, everywhere. `width="text"` is the reading measure, // roughly 60 characters, which is where long-form comprehension peaks.
const WIDTHS = {
    text: "max-w-[720px]",
    narrow: "max-w-[980px]",
    default: "max-w-[1180px]",
    wide: "max-w-[1440px]"
};
function Container({ children, width = "default", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${WIDTHS[width] ?? WIDTHS.default} mx-auto px-5 sm:px-8 lg:px-10 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c1 = Container;
function Eyebrow({ children, tone = "brand", className = "" }) {
    const colour = tone === "light" ? "text-white/60" : "text-[#0040FF]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-[12px] font-bold tracking-[0.18em] uppercase mb-4 ${colour} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c2 = Eyebrow;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: `font-extrabold tracking-[-0.035em] ${HEADING_SIZES[size] ?? HEADING_SIZES.xl} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c3 = Heading;
function Lede({ children, tone = "dark", className = "" }) {
    const colour = tone === "light" ? "text-white/70" : "text-[#6e6e73]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.5] font-normal ${colour} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/primitives.jsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_c4 = Lede;
function ActionLink({ href, children, external = false, tone = "brand", className = "" }) {
    const colour = tone === "light" ? "text-[#5C86FF] hover:text-[#8FAEFF]" : "text-[#0040FF] hover:text-[#1d1d1f]";
    const props = external ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer"
    } : {
        href
    };
    const Tag = external ? "a" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ...props,
        className: `group inline-flex items-center gap-1 text-[1.0625rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded ${colour} ${className}`,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c5 = ActionLink;
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c6 = Button;
function SectionHeader({ eyebrow, heading, lede, align = "center", tone = "dark", size = "xl", id, className = "" }) {
    const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col ${alignment} max-w-[760px] ${align === "center" ? "mx-auto" : ""} ${className}`,
        children: [
            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                tone: tone === "light" ? "light" : "brand",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 239,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                as: "h2",
                size: size,
                id: id,
                children: heading
            }, void 0, false, {
                fileName: "[project]/components/ui/primitives.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            lede && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lede, {
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
_c7 = SectionHeader;
function PageHero({ eyebrow, before = "", highlight, after = "", lede, primary, secondary, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-white pt-[clamp(1.75rem,3.5vw,3rem)] pb-[clamp(3rem,6vw,5rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
                width: "narrow",
                className: "relative text-center",
                children: [
                    eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/components/ui/primitives.jsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mx-auto mt-6 max-w-[15ch] text-[clamp(2.6rem,7.4vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#1d1d1f]",
                        children: [
                            before,
                            highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    before ? " " : "",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    lede && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-7 max-w-[48ch] text-[clamp(1.05rem,1.8vw,1.4rem)] leading-[1.45] text-[#6e6e73]",
                        children: lede
                    }, void 0, false, {
                        fileName: "[project]/components/ui/primitives.jsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    (primary || secondary) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8",
                        children: [
                            primary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: primary.href,
                                className: "inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2",
                                children: primary.label
                            }, void 0, false, {
                                fileName: "[project]/components/ui/primitives.jsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this),
                            secondary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionLink, {
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
_c8 = PageHero;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "Container");
__turbopack_context__.k.register(_c2, "Eyebrow");
__turbopack_context__.k.register(_c3, "Heading");
__turbopack_context__.k.register(_c4, "Lede");
__turbopack_context__.k.register(_c5, "ActionLink");
__turbopack_context__.k.register(_c6, "Button");
__turbopack_context__.k.register(_c7, "SectionHeader");
__turbopack_context__.k.register(_c8, "PageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/Newsletter.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Newsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Newsletter() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle"); // idle | sending | done
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function onSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        setError("");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            const data = await res.json().catch(()=>({}));
            if (!res.ok) {
                throw new Error(data.message || "Could not subscribe. Please try again.");
            }
            setStatus("done");
            setEmail("");
        } catch (err) {
            setStatus("idle");
            setError(err.message);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        tone: "offwhite",
        rhythm: "tight",
        labelledBy: "newsletter-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "newsletter-heading",
                                className: "text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]",
                                children: "One email a fortnight."
                            }, void 0, false, {
                                fileName: "[project]/components/home/Newsletter.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 max-w-[46ch] text-[1.0625rem] leading-relaxed text-[#6e6e73]",
                                children: "What we are building, and what we learned building it. Written by the people doing the work. No campaigns, no filler, and one click to stop."
                            }, void 0, false, {
                                fileName: "[project]/components/home/Newsletter.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Newsletter.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: status === "done" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 rounded-2xl border border-black/[0.07] bg-white p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0040FF]/10 text-[#0040FF]",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Newsletter.jsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[1.0625rem] font-semibold text-[#1d1d1f]",
                                            children: "You are on the list."
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Newsletter.jsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[14px] text-[#6e6e73]",
                                            children: "The next one goes out in a fortnight."
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Newsletter.jsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Newsletter.jsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Newsletter.jsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: onSubmit,
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "newsletter-email",
                                            className: "sr-only",
                                            children: "Email address"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Newsletter.jsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "newsletter-email",
                                            name: "email",
                                            type: "email",
                                            required: true,
                                            autoComplete: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "you@company.com",
                                            disabled: status === "sending",
                                            className: "w-full flex-1 rounded-full border border-black/[0.14] bg-white px-6 py-[0.85rem] text-[16px] text-[#1d1d1f] placeholder:text-[#9a9aa0] transition-colors focus:border-[#0040FF] focus:outline-none focus:ring-2 focus:ring-[#0040FF]/20 disabled:opacity-60"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Newsletter.jsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: status === "sending",
                                            className: "whitespace-nowrap rounded-full bg-[#0040FF] px-8 py-[0.85rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60",
                                            children: status === "sending" ? "Subscribing…" : "Subscribe"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Newsletter.jsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Newsletter.jsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-[9999px]",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "newsletter-website",
                                            children: "Do not fill this in"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Newsletter.jsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "newsletter-website",
                                            name: "website",
                                            tabIndex: -1,
                                            autoComplete: "off"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Newsletter.jsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Newsletter.jsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "mt-3 text-[14px] text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Newsletter.jsx",
                                    lineNumber: 121,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[13px] text-[#6e6e73]",
                                    children: "We never sell or share your address."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Newsletter.jsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Newsletter.jsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/Newsletter.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Newsletter.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/Newsletter.jsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Newsletter.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Newsletter, "NJgOczByfqLyPPyz6rtpFCy92sk=");
_c = Newsletter;
var _c;
__turbopack_context__.k.register(_c, "Newsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_3a453607._.js.map