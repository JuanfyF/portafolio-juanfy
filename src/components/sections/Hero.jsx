import { useState, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Button from '../ui/Button'

export default function Hero() {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.1 })
  const [displayText, setDisplayText] = useState('')
  const fullText = '$ whoami'

  useEffect(() => {
    if (!isVisible) return
    let index = 0
    let isDeleting = false
    let pauseTimeout = null
    const timer = setInterval(() => {
      if (!isDeleting) {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index))
          index++
        } else {
          pauseTimeout = setTimeout(() => {
            isDeleting = true
          }, 2000)
        }
      } else {
        if (index > 0) {
          index--
          setDisplayText(fullText.slice(0, index))
        } else {
          isDeleting = false
        }
      }
    }, 100)
    return () => {
      clearInterval(timer)
      clearTimeout(pauseTimeout)
    }
  }, [isVisible])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-background section-padding pt-20 relative"
      aria-label="Bienvenida"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Disponibilidad */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-terminal-green/10 border border-terminal-green/20 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green">Disponible para trabajar</span>
        </div>

        {/* Terminal prompt */}
        <p
          className={`font-mono text-xs tracking-widest text-surface-tint mb-6 uppercase transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {displayText}
          <span className="animate-pulse text-surface-tint">_</span>
        </p>

        {/* Nombre */}
        <h1
          className={`text-4xl md:text-5xl lg:text-display-xl font-display font-extrabold mb-6 text-balance transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-on-surface">Juan Fernando </span>
          <span className="text-surface-tint neon-text">Flores Culqui</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-on-surface-variant mb-3 font-light transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Full Stack Engineer · Desktop & Mobile
        </p>

        <p
          className={`text-sm text-outline mb-10 font-mono transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Guaranda, Ecuador · Java · TypeScript · React · Flutter · Electron
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button onClick={scrollToProjects} variant="primary" size="lg">
            Ver proyectos
          </Button>
          <Button onClick={scrollToContact} variant="secondary" size="lg">
            Contáctame
          </Button>
        </div>

        <div
          className={`mt-20 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="text-outline hover:text-surface-tint transition-colors focus-ring"
            aria-label="Ir a sección Sobre mí"
          >
            <svg
              className="w-5 h-5 mx-auto animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}