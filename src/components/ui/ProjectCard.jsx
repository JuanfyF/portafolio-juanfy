import Badge from './Badge'

export default function ProjectCard({ project, featured = false }) {
  const { name, description, tags, url, icon, status } = project

  return (
    <article
      className={`bg-surface-1 rounded-xl border transition-all duration-300 hover-lift group ${
        featured ? 'border-text-accent/30 p-6' : 'border-border p-5'
      }`}
      aria-label={`Proyecto: ${name}`}
    >
      {featured && (
        <Badge variant="accent" className="mb-4">
          Proyecto insignia
        </Badge>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-text-accent/10">
              {icon}
            </div>
          )}
          <h3
            className={`font-semibold ${
              featured ? 'text-lg' : 'text-base'
            }`}
          >
            {name}
          </h3>
        </div>
        {status && (
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              status === 'Activo'
                ? 'bg-green-500/10 text-green-400'
                : 'bg-yellow-500/10 text-yellow-400'
            }`}
            aria-label={`Estado: ${status}`}
          >
            {status}
          </span>
        )}
      </div>

      <p className="text-sm text-text-secondary mb-4 line-clamp-2 leading-relaxed">{description}</p>

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
          className="inline-flex items-center gap-2 text-sm font-medium text-text-accent hover:underline focus-ring"
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
    </article>
  )
}