import Badge from './Badge'

export default function ProjectCard({ project, featured = false }) {
  const { name, description, tags, url, status } = project

  return (
    <article
      className={`terminal-window transition-all duration-300 hover-lift group ${
        featured ? 'border-surface-tint/30' : ''
      }`}
      aria-label={`Proyecto: ${name}`}
    >
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="ml-2 text-sm font-mono text-on-surface-variant">{name}</span>
        {status && (
          <Badge 
            variant={status === 'Activo' ? 'success' : 'warning'} 
            dot 
            className="ml-auto"
          >
            {status}
          </Badge>
        )}
      </div>

      <div className="terminal-body">
        {featured && (
          <Badge variant="primary" className="mb-4">
            Proyecto insignia
          </Badge>
        )}

        <div className="flex items-start justify-between mb-4">
          <h3
            className={`font-display font-semibold ${
              featured ? 'text-lg' : 'text-base'
            }`}
          >
            {name}
          </h3>
        </div>

        <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-surface-tint hover:underline focus-ring"
            aria-label={`Ver proyecto ${name} (abre en nueva ventana)`}
          >
            Ver proyecto
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  )
}