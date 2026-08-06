export default function Badge({ children, variant = 'default', dot = false, className = '' }) {
  const variantStyles = {
    default: 'bg-surface-container text-on-surface-variant border border-border-muted',
    primary: 'bg-surface-tint/10 text-primary border border-surface-tint/20',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
    success: 'bg-terminal-green/10 text-terminal-green border border-terminal-green/20',
    warning: 'bg-tertiary/10 text-tertiary border border-tertiary/20',
    error: 'bg-error/10 text-error border border-error/20',
  }

  const dotColors = {
    default: 'bg-on-surface-variant',
    primary: 'bg-surface-tint',
    secondary: 'bg-secondary',
    success: 'bg-terminal-green',
    warning: 'bg-tertiary',
    error: 'bg-error',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  )
}