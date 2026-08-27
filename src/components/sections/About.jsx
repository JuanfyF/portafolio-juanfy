import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { skills, softSkills } from '../../data/skills'
import TerminalWindow from '../ui/TerminalWindow'

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })
  const { containerRef: skillsRef, visibleItems: visibleSkills } = useStaggerReveal(
    skills.flatMap((c) => c.items).length,
    { delay: 30 }
  )

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-surface section-padding border-t border-border-muted"
      aria-labelledby="about-heading"
    >
      <div className="max-w-container mx-auto">
        <p
          id="about-heading"
          className={`text-xs font-mono font-bold uppercase tracking-wider text-surface-tint mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Sobre mí
        </p>

        {/* Bio + Stats */}
        <div
          className={`mb-10 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
            Ingeniero de Software Full Stack con experiencia en el diseño y desarrollo de soluciones completas: sistemas de punto de venta desktop (Electron), aplicaciones móviles multiplataforma (Flutter), y plataformas web escalables (React, Node.js, Spring Boot). Enfoque en seguridad (OWASP Top 10, cifrado zero-knowledge) y arquitecturas limpias.
          </p>
          <p className="text-base text-outline leading-relaxed">
            Integro herramientas de desarrollo asistido por IA en mi flujo de trabajo para acelerar la entrega sin sacrificar calidad de código. Cada proyecto es una oportunidad para aplicar buenas prácticas: pruebas automatizadas, code review, y documentación clara.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {skills.map((category) => (
            <TerminalWindow key={category.category} title={category.category}>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill, index) => (
                  <span
                    key={skill}
                    className={`stagger-item px-2 py-1 text-xs font-mono font-medium bg-surface-container text-on-surface-variant rounded border border-border-muted hover:border-surface-tint hover:text-surface-tint transition-colors ${
                      visibleSkills.has(index) ? 'visible' : ''
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* Competencias */}
        <div
          className={`mt-8 transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-2 bg-surface-charcoal rounded border border-border-muted hover:border-surface-tint transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-surface-tint opacity-60 group-hover:opacity-100 transition-opacity"></span>
                <div>
                  <p className="text-sm font-medium text-on-surface group-hover:text-surface-tint transition-colors">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}