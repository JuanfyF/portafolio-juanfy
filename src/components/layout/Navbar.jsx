import { useState, useEffect, useRef } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'

const navLinks = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()
  const mobileMenuRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstLink = mobileMenuRef.current?.querySelector('button')
      firstLink?.focus()
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="skip-nav"
      >
        Saltar al contenido principal
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface-1/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-lg font-medium hover:text-text-accent transition-colors focus-ring"
              aria-label="Ir al inicio"
            >
              JFC<span className="text-text-accent">_</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8" role="menubar">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-text-accent focus-ring ${
                    activeSection === link.id
                      ? 'text-text-accent'
                      : 'text-text-secondary'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  role="menuitem"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              className="md:hidden p-2 text-text-secondary hover:text-text-accent transition-colors focus-ring"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              ref={mobileMenuRef}
              className="md:hidden py-4 border-t border-border bg-surface-1/95 backdrop-blur-sm"
              role="menu"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left py-3 px-4 text-sm font-medium transition-colors hover:text-text-accent hover:bg-surface-2 focus-ring ${
                    activeSection === link.id
                      ? 'text-text-accent bg-surface-2'
                      : 'text-text-secondary'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  role="menuitem"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}