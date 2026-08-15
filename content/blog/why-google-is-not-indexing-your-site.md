---
title: "Why Google Is Not Indexing Your Site  -  and How to Actually Fix It"
excerpt: "Crawled - currently not indexed. Duplicate without user-selected canonical. What those Search Console messages really mean, and the fixes that move them."
category: engineering
author: Opeyemi T. Ojurongbe
authorRole: Founder & CEO
published: 2026-08-13
featured: true
tags: [seo, search console, next.js, engineering]
coverAlt: "An analytics dashboard open on a laptop screen."
cover: /images/blog/why-google-is-not-indexing-your-site.jpg
---

You built the site. You submitted the sitemap. Search Console says *Crawled  -  currently not indexed* on half your pages and you have no idea what to do about it.

Here is what each of those statuses actually means, in the order they matter.

## "Duplicate without user-selected canonical"

**What Google is saying:** two or more of your URLs look the same to us, and none of them told us which is the original, so we picked one and dropped the rest.

**The usual cause, in modern frameworks:** a canonical tag set once at the layout level and inherited by every page underneath it.

In Next.js this is a two-line mistake with a site-wide blast radius:

```js
// app/layout.js  -  this is the bug
export const metadata = {
  alternates: {
    canonical: "https://example.com",
  },
};
```

Every route that does not override `alternates.canonical` now claims to be the homepage. Your services page, your pricing page, your contact page  -  all of them tell Google "the real version of me is the homepage." Google believes you and de-indexes them.

**The fix:** each route declares its own absolute, self-referencing canonical.

```js
// app/services/page.jsx
export const metadata = {
  alternates: {
    canonical: "https://example.com/services",
  },
};
```

Centralise it so nobody forgets:

```js
export function pageMetadata(path) {
  const url = `https://example.com${path === "/" ? "" : path}`;
  return { alternates: { canonical: url } };
}
```

## "Crawled  -  currently not indexed"

**What Google is saying:** we fetched it, we read it, we decided it was not worth storing.

This is a quality judgement, and it is the hardest one to argue with. The common causes, in order of how often we see them:

**Thin or templated content.** Six service pages that differ only in the noun. If a human could not tell two pages apart from the text alone, neither can Google.

**No unique title or description.** If eleven pages share one title, ten of them are noise.

**Nothing links to it.** A page reachable only from the sitemap reads as an orphan. Internal links are how you say "this matters"  -  a page with no inbound links from your own site is one you apparently do not care about either.

**It renders empty without JavaScript.** Googlebot does execute JS, but rendering is queued separately and can lag by days or weeks. Server-render the content and the problem disappears.

Test what the crawler actually receives:

```bash
curl -s https://example.com/services | grep -c "<h1"
```

If that returns `0`, your content is not in the HTML.

## "Not found (404)"

**What Google is saying:** you or someone else linked to a URL that does not exist.

Twenty-seven 404s almost never means twenty-seven broken links. It usually means one of:

- **Deleted routes with no redirect.** You removed `/shop` and `/cart`; Google still has them. Redirect them, permanently.
- **Referenced assets that were never uploaded.** `favicon.ico`, `og-image.png`, `site.webmanifest` declared in your `<head>` and missing from `/public`. Each one is a 404 that Search Console counts.
- **Trailing-slash drift.** `/about` and `/about/` treated as different URLs.

The fix for removed pages is a 301, not a 404 page:

```js
// next.config.mjs
async redirects() {
  return [
    { source: "/shop", destination: "/services", permanent: true },
    { source: "/cart", destination: "/", permanent: true },
  ];
}
```

`permanent: true` emits a 301, which transfers whatever ranking signal the old URL had. A 302 does not.

## "Discovered  -  currently not indexed"

**What Google is saying:** we know the URL exists and we have not bothered to fetch it yet.

This is a crawl-budget signal. On a small site it usually means Google does not think the site is worth frequent attention yet. What helps:

- A clean `sitemap.xml` with accurate `lastModified` dates
- Fewer, better pages rather than many thin ones
- Real inbound links from somewhere other than your own domain
- Fast responses  -  slow servers get crawled less

What does not help: resubmitting the sitemap daily.

## The order to fix things in

1. **Canonicals.** One afternoon, sitewide effect. Do this first.
2. **Missing static assets.** Every 404 in your `<head>` is free to fix.
3. **Redirects for deleted routes.** Recovers ranking you already earned.
4. **Unique titles and descriptions per page.** Mechanical, high impact.
5. **Server-rendered content.** Structural, worth it.
6. **Internal linking.** Ongoing, compounding.

Then wait. Re-indexing is not instant  -  expect two to six weeks for the reports to reflect the work, and do not thrash the settings in between.

## The uncomfortable part

Most indexing problems are not technical. They are a site with eleven pages that say roughly the same thing, competing against sites whose pages each answer one specific question well.

Fix the canonicals and the 404s, absolutely. But if you want the traffic, the durable answer is to publish things people are actually searching for  -  like, for instance, [what a website really costs](/blog/what-a-website-costs-in-nigeria), which almost nobody in this market will put in writing.
