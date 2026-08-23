import { useScrollReveal } from "../useScrollReveal";
import { Spacer } from "./Spacer";

export interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  description?: string;
  /** 1-based position among page sections, shown as a "0N" index label. */
  index?: number;
  children: React.ReactNode;
}

export function Section({
  title,
  description,
  index,
  children,
  className,
  id,
  ...rest
}: SectionProps) {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      data-animate="fade-up"
      id={id}
      className={`border-b border-[var(--border)] px-4 py-8 md:px-6 md:py-12 ${className ?? ""}`}
      {...rest}
    >
      {index != null && (
        <span className="section-index">{String(index).padStart(2, "0")}</span>
      )}
      <h2 className="text-left text-[var(--text-h)]">{title}</h2>
      {description && <p className="mb-6 text-[var(--text)]">{description}</p>}

      <Spacer size="sm" />
      {children}
    </section>
  );
}
