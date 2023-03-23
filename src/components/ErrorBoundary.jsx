import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
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
