import { useState } from "react";
import { useLanguage } from "../useLanguage";
import { Icon } from "./Icon";

export interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
}

export function ContactItem({ icon, label, value }: ContactItemProps) {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  function handleClick() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Copy ${label}`}
      className="inline-flex items-center gap-2 rounded-lg bg-[var(--social-bg)] px-3 py-2 text-[var(--text-h)] transition-all hover:shadow-[var(--shadow)] cursor-pointer"
    >
      <Icon name={icon} size={18} />
      <span>
        {copied ? (language === "no" ? "Kopiert!" : "Copied!") : value}
      </span>
    </button>
  );
}
