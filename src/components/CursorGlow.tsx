import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Hide on touch devices or if user prefers reduced motion
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      el.style.display = "none";
      return;
    }

    let visible = false;

    function handleMouseMove(e: MouseEvent) {
      el!.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (!visible) {
        el!.classList.add("cursor-glow-visible");
        visible = true;
      }
    }

    function handleMouseLeave() {
      el!.classList.remove("cursor-glow-visible");
      visible = false;
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}
