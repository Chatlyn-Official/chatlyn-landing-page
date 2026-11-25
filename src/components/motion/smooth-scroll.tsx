"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const HEADER_OFFSET = -96;

/**
 * Site-wide inertial smooth scrolling. In-page "#section" links glide; when a
 * route change lands on "/#section" it glides there, otherwise it starts at the top.
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: HEADER_OFFSET },
      autoRaf: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    const hash = window.location.hash;
    // Let the new page paint before measuring where to go.
    const t = window.setTimeout(() => {
      const target = hash ? document.querySelector<HTMLElement>(hash) : null;
      if (target) {
        if (lenis) lenis.scrollTo(target, { offset: HEADER_OFFSET });
        else target.scrollIntoView();
      } else if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }, 60);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
