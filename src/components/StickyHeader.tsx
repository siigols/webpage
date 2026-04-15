import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/portrettbilde-mini.png";
import { headerData } from "../data/header";
import { useLanguage } from "../useLanguage";
import { Icon } from "./Icon";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export interface StickyHeaderProps {
  /** If true the bar is always visible (e.g. on detail pages). */
  alwaysVisible?: boolean;
  /**
   * Sentinel element to observe. When it scrolls out of view the bar
   * appears; when it's back in view the bar hides. Ignored when
   * `alwaysVisible` is true.
   */
  sentinelRef?: React.RefObject<HTMLDivElement | null>;
}

export function StickyHeader({
  alwaysVisible = false,
  sentinelRef,
}: StickyHeaderProps) {
  const [visible, setVisible] = useState(alwaysVisible);
  const { language } = useLanguage();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // IntersectionObserver – show bar when sentinel is NOT intersecting
  useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }

    const sentinel = sentinelRef?.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [alwaysVisible, sentinelRef]);

  function handleCopy(value: string, index: number) {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  }

  return (
    <div
      className={[
        "fixed top-0 left-1/2 z-50 flex w-full max-w-[1126px] -translate-x-1/2 items-center gap-3 border-x border-b border-[var(--border)] bg-[var(--bg)]/80 px-4 py-2 backdrop-blur-md",
        "transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      {/* Left: avatar + name */}
      <Link
        to="/"
        className="flex shrink-0 items-center gap-2 text-[var(--text-h)] no-underline"
      >
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--code-bg)]">
          <img
            src={avatar}
            alt={headerData.name}
            className="h-full w-full object-cover scale-[1.6] object-[center_0%]"
          />
        </div>
        <span className="text-sm font-medium">{headerData.name}</span>
      </Link>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right: social links, contact items, settings */}
      <div className="flex items-center gap-1">
        {/* Social links */}
        {headerData.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="inline-flex items-center justify-center rounded-lg p-1.5 text-[var(--text)] transition-colors hover:bg-[var(--social-bg)] hover:text-[var(--text-h)]"
          >
            <Icon name={link.icon} size={18} />
          </a>
        ))}

        {/* Contact items (copy-to-clipboard) */}
        {headerData.contactInfo.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => handleCopy(item.value, i)}
            aria-label={
              copiedIndex === i
                ? language === "no"
                  ? "Kopiert!"
                  : "Copied!"
                : `${language === "no" ? "Kopier" : "Copy"} ${item.label}`
            }
            title={
              copiedIndex === i
                ? language === "no"
                  ? "Kopiert!"
                  : "Copied!"
                : item.value
            }
            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-[var(--text)] transition-colors hover:bg-[var(--social-bg)] hover:text-[var(--text-h)]"
          >
            <Icon
              name={copiedIndex === i ? "check-icon" : item.icon}
              size={18}
            />
          </button>
        ))}

        {/* Divider */}
        <div className="mx-1 h-5 w-px bg-[var(--border)]" />

        {/* Language & theme toggles */}
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
