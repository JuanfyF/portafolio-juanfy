import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })
  const { containerRef: gridRef, visibleItems } = useStaggerReveal(4, { delay: 100 })

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-bg-secondary section-padding border-t border-border"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p
          id="projects-heading"
          className={`text-xs font-mono text-text-accent uppercase tracking-widest mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Proyectos
        </p>

        {/* Featured Project */}
        {featuredProject && (
          <div
            className={`mb-8 transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ProjectCard project={featuredProject} featured />
          </div>
        )}

        {/* Other Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className={`stagger-item ${visibleItems.has(index) ? 'visible' : ''}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}