---
title: "Why Nigerian Customers Abandon Your Checkout"
excerpt: "The payment went through and the order never appeared. Here is what actually breaks at checkout in Nigeria, and what it costs you every month."
category: growth
author: Opeyemi T. Ojurongbe
authorRole: Team Lead
published: 2026-09-04
tags: [payments, conversion, ecommerce, nigeria, growth]
cover: /images/blog/why-customers-abandon-your-checkout.jpg
coverAlt: "A customer paying with a phone at a shop counter while the assistant watches."
---

Most businesses looking at a poor checkout rate assume the problem is price. Usually it is not. Usually it is that the checkout is frightening, slow, or has quietly failed on somebody before and they told their friends.

## The failure that costs you the most

A customer taps Pay. The bank sends the OTP. The network drops for four seconds. The page reloads.

Now nobody knows what happened. Not the customer, and often not your system either. The customer can see money has left their account and no order exists. What they do next is not fill in the form again. What they do next is call you, angrily, or tell people not to buy from you.

This is not an edge case in Nigeria, it is a weekly event, and the fix is a technical one. Every payment attempt needs a key generated once on the customer's device and reused on every retry, so the server can recognise the second attempt as the same payment rather than a new one. Tap four times, get charged once.

We wrote about the pattern in detail in [building for unreliable networks](/blog/building-for-unreliable-networks). If your developer does not know what an idempotency key is, that is the thing to ask about before you launch anything that takes money.

## Say what will happen before it happens

Nigerian customers have been burned. They approach an unfamiliar checkout expecting it to go wrong, and every small ambiguity confirms the suspicion.

So remove the ambiguity out loud:

- Name the payment methods on the page, with logos, before they commit
- Say what the total is, including delivery, before the final screen
- Say when the order will arrive, in days, not "shortly"
- Say what happens if it goes wrong, and put a phone number next to it

That last one converts better than almost anything else you can add. A visible Nigerian phone number on a checkout page is worth more than any trust badge, because it says a person exists.

## Stop asking for things you do not need

Every field is a chance to leave. Ask yourself what you genuinely need to fulfil the order and delete the rest.

The usual offenders:

- **Forced account creation.** Let people buy as a guest. You can invite them to create an account afterwards, when they are happy
- **Two password fields.** One, with a show password toggle
- **Separate first and last name.** One name field
- **Address line 2**, when almost nobody uses it
- **Asking how they heard about you** on the checkout, of all places

## Make the phone experience the real one

Almost all of your customers are on a phone, and most checkouts are still designed on a laptop.

Test it properly. Not in a desktop browser made narrow, but on an actual phone, on mobile data, away from your office wifi. Complete a real purchase with a real card.

The things that break, every time:

- Number fields that open the letter keyboard instead of the number pad
- Buttons too small or too close to the bottom edge to hit
- A form that loses everything typed when the OTP screen returns
- Text so small people have to pinch, and then the layout breaks

## Show a real status afterwards

The moment the payment leaves, tell the truth about what is happening:

- *"Sending your payment"* while it is in flight
- *"Still trying, your connection is slow"* after a few seconds
- *"We could not reach the bank. You have not been charged."* on failure, and be explicit about what did **not** happen

Then send a confirmation email or SMS immediately, containing an order number. That message is not administrative politeness. It is the proof the customer keeps, and it is what stops the angry phone call.

## What this is worth

Work out roughly what one order is worth to you, and how many people reach your checkout in a month.

If a hundred people start checkout and thirty finish, the other seventy are not all price sensitive. A meaningful share of them hit one of the problems above. Recovering even ten of them changes the month, and unlike advertising, you only pay for the fix once.

That is the real argument for fixing checkout before spending more on ads: ads increase the number of people arriving at a broken door.

If you are not sure whether your problem is the checkout or the traffic, [getting found on Google in Nigeria](/blog/getting-found-on-google-in-nigeria) covers the other half.
