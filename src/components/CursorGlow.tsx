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
        el!.style.opacity = "0.15";
        visible = true;
      }
    }

    function handleMouseLeave() {
      el!.style.opacity = "0";
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "600px",
        height: "600px",
        marginLeft: "-300px",
        marginTop: "-300px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        opacity: 0,
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(80px)",
        willChange: "transform",
        transition: "opacity 0.4s ease",
      }}
      aria-hidden="true"
    />
  );
}
