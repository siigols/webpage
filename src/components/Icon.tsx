export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Icon id from the SVG sprite (e.g. "github-icon") */
  name: string;
  /** Width and height in pixels (default 20) */
  size?: number;
}

export function Icon({ name, size = 20, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
