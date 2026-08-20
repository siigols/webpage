import { motion, useScroll, useSpring } from "motion/react";

/** Slim animated bar at the very top of the viewport tracking scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  );
}
