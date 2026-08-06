export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-surface-tint focus:ring-offset-2 focus:ring-offset-background min-h-[44px] min-w-[44px]'

  const variantStyles = {
    primary: 'bg-surface-tint text-on-primary hover:shadow-glow font-semibold',
    secondary:
      'bg-transparent text-primary border border-border-muted hover:bg-neon-cyan-glow hover:text-primary',
    ghost: 'text-on-surface-variant hover:text-surface-tint hover:bg-surface-container',
  }

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm font-semibold',
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}