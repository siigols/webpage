import { useEffect, useRef } from "react";

export function useScrollReveal(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.setAttribute("data-visible", "true");
      return;
    }

    let firstCallback = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (firstCallback) {
            // Elements already in the viewport on mount: delay reveal so the
            // browser paints the opacity:0 state first, making the animation
            // visible to the user.
            requestAnimationFrame(() => {
              el.setAttribute("data-visible", "true");
            });
          } else {
            el.setAttribute("data-visible", "true");
          }
          observer.unobserve(el);
        }
        firstCallback = false;
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return ref;
}
