"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Sends one beacon per page view.
 *
 * Deliberately small and deliberately last: it fires after paint, uses
 * sendBeacon where available so it never competes with rendering, and it
 * honours Do Not Track. A visitor who has asked not to be measured is not
 * measured, which is both the law in several of the markets this site targets
 * and the right thing regardless.
 */
export default function PageViewTracker() {
  const pathname = usePathname();
  const lastSent = useRef(null);

  useEffect(() => {
    if (!pathname) return;

    // React can re-run this on a re-render; only send once per path.
    if (lastSent.current === pathname) return;
    lastSent.current = pathname;

    if (
      navigator.doNotTrack === "1" ||
      window.doNotTrack === "1" ||
      navigator.globalPrivacyControl
    ) {
      return;
    }

    const payload = JSON.stringify({
      path: pathname,
      referrer: document.referrer || null,
      screen: `${window.innerWidth}x${window.innerHeight}`,
    });

    // Queue it after paint so it cannot delay anything the visitor is waiting for.
    const send = () => {
      try {
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            "/api/track",
            new Blob([payload], { type: "application/json" })
          );
        } else {
          fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        // Measurement must never break a page.
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(send, { timeout: 2000 });
    } else {
      setTimeout(send, 800);
    }
  }, [pathname]);

  return null;
}
