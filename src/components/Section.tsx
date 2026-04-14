import { useScrollReveal } from "../useScrollReveal";

export interface SectionProps extends React.ComponentProps<'section'> {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({
  title,
  description,
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
      className={`border-b border-[var(--border)] px-4 py-8 md:px-6 md:py-12 ${className ?? ''}`}
      {...rest}
    >
      <h2 className="text-left text-[var(--text-h)]">{title}</h2>
      {description && (
        <p className="mb-6 text-[var(--text)]">{description}</p>
      )}
      {children}
    </section>
  );
}
