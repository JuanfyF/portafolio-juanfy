import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

const About = lazy(() => import('./components/sections/About'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Contact = lazy(() => import('./components/sections/Contact'))

function LoadingFallback() {
  return (
    <div className="section-padding flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-text-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App