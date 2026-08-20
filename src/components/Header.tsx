import { animate, stagger } from "animejs";
import { animated } from "@react-spring/web";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useTilt } from "../useTilt";

export interface HeaderProps extends React.ComponentProps<"header"> {
  name: string;
  /** Role or title, e.g. "Software Engineer" */
  title: string;
  /** Avatar image URL */
  avatar?: string;
  children?: React.ReactNode;
}

/**
 * Extract up to two initials from a full name.
 * "Sigurd Olsen" → "SO", "Sigurd" → "S"
 */
function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

const trailContainer = (delay: number) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: delay } },
});

const trailItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Header({
  name,
  title,
  avatar,
  children,
  className,
  ...rest
}: HeaderProps) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const tilt = useTilt({ max: 14, scale: 1.08 });

  // One-time character-by-character reveal of the name, driven by anime.js.
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    el.innerHTML = name
      .split("")
      .map(
        (char) =>
          `<span style="display:inline-block;opacity:0">${char === " " ? "&nbsp;" : char}</span>`,
      )
      .join("");

    animate(el.querySelectorAll("span"), {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 550,
      delay: stagger(26, { start: 250 }),
      easing: "easeOutExpo",
    });

    return () => {
      el.textContent = name;
    };
  }, [name]);

  const trailDelay = Math.min(0.35 + name.length * 0.026, 1.3);

  return (
    <header
      className={`flex flex-col items-center px-6 py-12 text-center ${className ?? ""}`}
      {...rest}
    >
      {/* Avatar: entrance fade/scale + pointer-driven tilt (react-spring) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4"
      >
        <animated.div
          style={tilt.style}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--code-bg)]"
        >
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover scale-[1.6] object-[center_0%]"
            />
          ) : (
            <span className="text-2xl font-semibold text-[var(--text-h)]">
              {getInitials(name)}
            </span>
          )}
        </animated.div>
      </motion.div>

      {/* Name: revealed character-by-character by anime.js */}
      <h1
        ref={nameRef}
        className="font-[var(--heading)] text-3xl font-medium text-[var(--text-h)]"
      >
        {name}
      </h1>

      {/* Title + social slot: staggered entrance timed to land after the name reveal */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={trailContainer(trailDelay)}
        className="contents"
      >
        <motion.p variants={trailItem} className="text-[var(--text)]">
          {title}
        </motion.p>

        {children && (
          <motion.div
            variants={trailItem}
            className="mt-4 flex flex-wrap justify-center gap-2"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </header>
  );
}
