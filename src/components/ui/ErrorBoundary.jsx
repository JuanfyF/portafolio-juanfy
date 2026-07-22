import { Component } from 'react'
import Button from '../ui/Button'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-secondary section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-6xl text-text-accent mb-4">!</p>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              Algo salió mal
            </h1>
            <p className="text-text-secondary mb-8">
              Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
            </p>
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
              size="lg"
            >
              Recargar página
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}