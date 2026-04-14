export interface SpacerProps extends React.ComponentProps<'div'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses: Record<NonNullable<SpacerProps['size']>, string> = {
  xs: 'h-2',
  sm: 'h-4',
  md: 'h-8',
  lg: 'h-12',
  xl: 'h-16',
};

export function Spacer({
  size = 'md',
  className,
  ...rest
}: SpacerProps) {
  return (
    <div
      aria-hidden="true"
      className={`${sizeClasses[size]} ${className ?? ''}`}
      {...rest}
    />
  );
}
