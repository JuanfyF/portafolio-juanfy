export default function Badge({ children, variant = 'default', className = '' }) {
  const variantStyles = {
    default: 'bg-surface-2 text-text-secondary border border-border',
    accent: 'bg-text-accent/10 text-text-accent border border-text-accent/20',
    success: 'bg-green-500/10 text-green-400 border border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}