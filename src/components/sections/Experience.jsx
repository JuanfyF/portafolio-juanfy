import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { experience } from '../../data/experience'

export default function Experience() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })
  const { containerRef: timelineRef, visibleItems } = useStaggerReveal(experience.length, {
    delay: 150,
  })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-bg-secondary section-padding border-t border-border"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p
          id="experience-heading"
          className={`text-xs font-mono text-text-accent uppercase tracking-widest mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Experiencia
        </p>

        <div ref={timelineRef} className="space-y-10">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className={`flex gap-4 stagger-item ${visibleItems.has(index) ? 'visible' : ''}`}
            >
              {/* Timeline indicator */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-text-accent transition-all duration-300 hover:scale-150"></div>
                <div className="w-px flex-1 bg-border mt-2"></div>
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-semibold text-base mb-1">{job.role}</h3>
                <p className="text-sm text-text-accent mb-1">{job.company}</p>
                <p className="text-xs font-mono text-text-muted mb-3">{job.period}</p>
                <p className="text-sm text-text-secondary mb-4">{job.description}</p>

                {job.achievements && (
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-text-accent mt-0.5" aria-hidden="true">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}