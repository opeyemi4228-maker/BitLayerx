---
title: "Building for Unreliable Networks: Lessons From Nigerian Fintech"
excerpt: "Most web performance advice assumes a good connection. Here is what changes when you cannot."
category: engineering
author: Opeyemi T. Ojurongbe
authorRole: Team Lead
published: 2026-08-05
tags: [engineering, performance, fintech, africa]
coverAlt: "A payment confirmation screen on a mobile phone."
---

Western performance guidance optimises for a fast connection that occasionally stutters. Large parts of the world run on a slow connection that occasionally works. Those need different engineering.

## Assume the request will fail

On a good network, a failed request is an exception. On a bad one it is a routine event, and the interface has to treat it as such.

The pattern that matters most is the idempotent retry. If a user taps "Pay" and the network drops before the response arrives, they do not know whether the payment went through, and neither does your client code.

```js
// Client generates the key once, reuses it across every retry.
const idempotencyKey = crypto.randomUUID();

async function pay(amount) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      return await fetch("/api/payments", {
        method: "POST",
        headers: { "Idempotency-Key": idempotencyKey },
        body: JSON.stringify({ amount }),
      }).then((r) => r.json());
    } catch {
      // Exponential backoff with jitter, so a recovering network is not
      // hit by every stalled client at the same instant.
      await new Promise((r) =>
        setTimeout(r, 2 ** attempt * 300 + Math.random() * 300)
      );
    }
  }
  throw new Error("unreachable");
}
```

The server stores the key and returns the original result on a repeat. The user can tap four times; they get charged once.

Without this, the user's only options are to risk a double charge or to abandon the payment. Most abandon.

## Show state honestly

An indefinite spinner is a lie. The user learns nothing and cannot decide what to do.

Say what is happening:, *"Sending…"*, request in flight, *"Still trying, poor connection"*, after three seconds, *"We could not reach the server. Your card has not been charged."*, on failure, and be specific about what did **not** happen

That last sentence prevents more support tickets than any amount of visual polish.

## Cut the payload before you optimise it

The fastest request is the one you never make., Ship JSON, not HTML fragments, for anything you re-render, Do not lazy-load below-the-fold images on slow connections, batch them, because connection setup costs more than the bytes, Inline critical CSS; a blocking stylesheet on 2G costs seconds, Serve WebP or AVIF, always, and get real dimensions in the markup so nothing shifts

A 200KB page that works beats a 2MB page that is beautiful when it loads.

## Make the offline case a feature

Once you accept that connectivity is intermittent, some product decisions become obvious:

**Queue writes locally.** A user filling a form on the road should not lose it because a tunnel ate the connection. Persist to `localStorage` on change, drain the queue when connectivity returns.

**Cache aggressively for reads.** Yesterday's balance with a timestamp is more useful than a spinner. Label it, *"as of 4:12pm"*, and let the user decide whether it is good enough.

**Never block the whole screen on a non-critical fetch.** If the notifications endpoint is slow, the notifications area is slow. The rest of the page should not be.

## Test on the network your users have

Chrome DevTools' "Slow 3G" is a reasonable start and still optimistic. It simulates consistent latency; real degraded networks are bursty and lossy.

```bash
# macOS, Network Link Conditioner gives more honest results
# than DevTools throttling for this kind of work.
```

The cheapest useful test: take the actual phone your customers use, on the actual network, to a place with poor reception, and try to complete the primary task. Once. Most teams have never done it, and every team that does it comes back with a list.

## Why this is a competitive advantage

Products that work on bad networks work superbly on good ones. The reverse is not true.

Teams that build for Lagos traffic, Abuja outages and rural coverage end up with software that is simply more robust everywhere, and that resilience is worth more than the feature you would have shipped instead.
