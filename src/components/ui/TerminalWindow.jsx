export default function TerminalWindow({
  title = '',
  children,
  className = '',
  showDots = true,
}) {
  return (
    <div className={`terminal-window ${className}`}>
      {showDots && (
        <div className="terminal-header">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
          {title && (
            <span className="ml-2 text-sm font-mono text-on-surface-variant">
              {title}
            </span>
          )}
        </div>
      )}
      <div className="terminal-body">{children}</div>
    </div>
  )
}