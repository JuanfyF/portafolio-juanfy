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
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-text-accent focus:ring-offset-2 focus:ring-offset-bg-primary min-h-[44px] min-w-[44px]'

  const variantStyles = {
    primary: 'bg-text-accent text-bg-primary hover:bg-text-accent/90 font-semibold',
    secondary:
      'bg-transparent text-text-secondary border border-border hover:border-text-accent hover:text-text-accent',
    ghost: 'text-text-secondary hover:text-text-accent hover:bg-surface-2',
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