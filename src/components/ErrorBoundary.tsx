import { Component, ErrorInfo, ReactElement } from "react";

class ErrorBoundary extends Component<{
  errorMessage: ReactElement;
  children: ReactElement;
}> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("ErrorBoundary caught error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorMessage;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
