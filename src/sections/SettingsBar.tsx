import { LanguageToggle, ThemeToggle } from "../components";

export function SettingsBar() {
  return (
    <div className="flex items-center justify-end gap-2 border-b border-[var(--border)] px-4 py-2 motion-safe:animate-[fade-in_0.5s_ease-out_both]">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}
