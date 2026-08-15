---
title: "Design Systems for Teams of Three"
excerpt: "You do not need Material Design. You need eleven decisions written down and obeyed."
category: design
author: Opeyemi T. Ojurongbe
authorRole: Team Lead
published: 2026-08-02
tags: [design, design systems, css, frontend]
coverAlt: "A wall of pinned interface screens connected with string."
cover: /images/blog/design-systems-for-small-teams.jpg
---

Small teams read about design systems, see the scale of Material or Carbon, and conclude the whole idea is for companies with a platform team. Then they ship eleven pages with nine different heading sizes.

The useful version is much smaller than the famous ones.

## The problem it actually solves

Inconsistency is not an aesthetic complaint. It is a trust signal.

Users cannot articulate why a site feels amateur, but they register it. Two buttons with slightly different corner radii, section padding that changes between pages, four blues that are nearly the same, none of it is noticed individually, and all of it accumulates.

The fix is not talent. It is a short list of decisions, made once.

## The eleven decisions

**1. One type scale.** Six sizes, no more.

```css
--text-xs:  0.8125rem;
--text-sm:  0.9375rem;
--text-base: 1.0625rem;
--text-lg:  1.375rem;
--text-xl:  2rem;
--text-2xl: clamp(2.5rem, 5vw, 4.5rem);
```

If a design needs a seventh, the design is wrong.

**2. One spacing scale.** Powers of a base unit. 4, 8, 12, 16, 24, 32, 48, 64, 96. Nothing between.

**3. Two section rhythms.** A standard section and a tight one. Every section on the site uses one or the other:

```css
--section-y:    clamp(4.5rem, 9vw, 9rem);
--section-y-sm: clamp(2.5rem, 5vw, 5rem);
```

This one decision fixes more visual inconsistency than any other. Pages feel different from each other almost entirely because their vertical rhythm differs.

**4. One container width and one gutter.** Pick `1200px` or `1440px`. Use it everywhere. Never hand-tune a section to `max-w-5xl` because it "looked better".

**5. Three text colours.** Primary, secondary, muted. Not seven greys.

**6. One brand colour plus one accent.** Then tints of them. Four similar blues is the single most common failure.

**7. Two radii.** A small one for controls, a large one for cards and images.

**8. One shadow ramp.** Three steps. Same colour, same direction.

**9. One transition.** A duration and an easing curve, used for everything.

```css
--ease: cubic-bezier(0.22, 1, 0.36, 1);
--duration: 350ms;
```

**10. One focus ring.** Visible, on brand, on every interactive element. This is accessibility, not decoration.

**11. One set of components that own these.** Section, Container, Heading, Eyebrow, Button, Card. Six components. Pages compose them and are forbidden from setting padding directly.

That last rule is what makes it stick. A system nobody is forced to use is a document, not a system.

## Enforcing it without a platform team

**Put the tokens in CSS custom properties, not in a Figma file.** The Figma file drifts from the code within a month.

**Make the wrong thing hard.** If `<Section>` owns vertical padding, a developer has to actively fight the system to produce a page with the wrong rhythm.

**Review for tokens, not for taste.** "This uses a hard-coded `48px` instead of `--space-12`" is a reviewable, unarguable comment. "This feels off" is not.

## What to skip

At three people you do not need: a component playground, versioned releases, contribution guidelines, a design-system website, or a token pipeline that compiles JSON into four platforms.

You need eleven decisions in one CSS file and six components that use them.

## The test

Open two pages of your site side by side and measure the gap above the first heading.

If they differ, you do not have a system yet, and that single measurement predicts almost everything else a visitor will feel about whether your company is serious.
