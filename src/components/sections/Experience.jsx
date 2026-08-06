import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { experience } from '../../data/experience'
import TerminalWindow from '../ui/TerminalWindow'

export default function Experience() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })
  const { containerRef: timelineRef, visibleItems } = useStaggerReveal(experience.length, {
    delay: 150,
  })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-surface section-padding border-t border-border-muted"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-container mx-auto">
        <p
          id="experience-heading"
          className={`text-xs font-mono font-bold uppercase tracking-wider text-surface-tint mb-8 transition-all duration-500 ${
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
                <div className="w-2 h-2 rounded-full bg-surface-tint transition-all duration-300 hover:scale-150"></div>
                <div className="w-px flex-1 bg-border-muted mt-2"></div>
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <TerminalWindow title={job.company}>
                  <h3 className="font-display font-semibold text-base mb-1">{job.role}</h3>
                  <p className="text-sm text-surface-tint mb-1">{job.company}</p>
                  <p className="text-xs font-mono text-outline mb-3">{job.period}</p>
                  <p className="text-sm text-on-surface-variant mb-4">{job.description}</p>

                  {job.achievements && (
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-on-surface-variant"
                        >
                          <span className="text-surface-tint mt-0.5" aria-hidden="true">→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </TerminalWindow>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}