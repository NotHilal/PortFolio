import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "../lib/lenis";

const NAV_OFFSET = -96;

// Renders nothing — just wires up inertial scrolling and makes in-page
// #hash links (nav, hero CTAs, footer) scroll smoothly through Lenis
// instead of jumping.
export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    });
    setLenis(lenis);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function handleClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: NAV_OFFSET });
      history.pushState(null, "", `#${id}`);
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
