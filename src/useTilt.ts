import { useSpring } from "@react-spring/web";

const RESET_TRANSFORM = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";

/**
 * Pointer-driven 3D tilt effect backed by a react-spring physics spring.
 * Returns an `animated.div`-compatible style plus the mouse handlers to spread
 * onto the tilted element.
 */
export function useTilt(options?: { max?: number; scale?: number }) {
  const max = options?.max ?? 10;
  const scale = options?.scale ?? 1.04;

  const [style, api] = useSpring(() => ({
    transform: RESET_TRANSFORM,
    config: { mass: 1, tension: 300, friction: 22 },
  }));

  const reduceMotion = () =>
    typeof window !== "undefined" &&
    (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduceMotion()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    api.start({
      transform: `perspective(600px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) scale(${scale})`,
    });
  }

  function onMouseLeave() {
    api.start({ transform: RESET_TRANSFORM });
  }

  return { style, onMouseMove, onMouseLeave };
}
