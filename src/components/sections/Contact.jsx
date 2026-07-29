import { useScrollReveal } from '../../hooks/useScrollReveal'
import Button from '../ui/Button'

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-bg-secondary section-padding border-t border-border"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p
          className={`text-xs font-mono text-text-accent uppercase tracking-widest mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Contacto
        </p>

        <h2
          id="contact-heading"
          className={`text-3xl md:text-4xl font-semibold mb-6 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          ¿Trabajamos juntos?
        </h2>

        <p
          className={`text-text-secondary mb-10 max-w-lg mx-auto transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Abierto a nuevas oportunidades y colaboraciones.
          Si tienes un proyecto en mente, no dudes en contactarme.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            href="mailto:juanfy.business@gmail.com"
            variant="primary"
            size="lg"
          >
            Enviar email
          </Button>
          <Button
            href="https://www.linkedin.com/in/juanfy-flores/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}