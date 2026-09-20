import { Component, type ErrorInfo, type PropsWithChildren } from 'react'

type AppErrorBoundaryState = {
  hasError: boolean
}

class AppErrorBoundary extends Component<
  PropsWithChildren,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled application error', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <main role="alert" style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <p>Please try again.</p>
          <button type="button" onClick={this.handleReset}>
            Try again
          </button>
        </main>
      )
    }

    return this.props.children
  }
}

export default AppErrorBoundary
