import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { skills, softSkills } from '../../data/skills'

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
      className="bg-bg-secondary section-padding border-t border-border"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p
          id="about-heading"
          className={`text-xs font-mono text-text-accent uppercase tracking-widest mb-8 transition-all duration-500 ${
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
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            Ingeniero de Software Full Stack especializado en el diseño y desarrollo de soluciones backend robustas y escalables bajo entornos Linux. Domino el ecosistema Java (Spring Boot), JavaScript (Node.js) y React, con enfoque en seguridad (OWASP Top 10), pruebas automatizadas y arquitecturas limpias.
          </p>
          <p className="text-base text-text-muted leading-relaxed">
            Integro herramientas de desarrollo asistido por IA en mi flujo de trabajo para acelerar la entrega sin sacrificar calidad de código.
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
            <div
              key={category.category}
              className="bg-surface-1 rounded-lg p-4 border border-border hover:border-border-strong transition-colors"
            >
              <h3 className="text-xs font-mono text-text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="text-sm">{category.icon}</span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill, index) => (
                  <span
                    key={skill}
                    className={`stagger-item px-2 py-1 text-xs font-medium bg-bg-accent text-text-secondary rounded border border-border hover:border-text-accent hover:text-text-accent transition-colors ${
                      visibleSkills.has(index) ? 'visible' : ''
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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
                className="flex items-center gap-2 px-3 py-2 bg-surface-1 rounded-lg border border-border hover:border-text-accent transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-text-accent opacity-60 group-hover:opacity-100 transition-opacity"></span>
                <div>
                  <p className="text-sm font-medium text-text-primary group-hover:text-text-accent transition-colors">
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