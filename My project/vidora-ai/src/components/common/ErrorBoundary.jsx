import { Component } from "react";

/**
 * Top-level error boundary to catch render-time errors
 * anywhere below it in the component tree.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-screen items-center justify-center text-[rgb(var(--color-text-muted))]">
            Something went wrong.
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
