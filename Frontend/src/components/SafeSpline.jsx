import React, { Component } from 'react';
import Spline from '@splinetool/react-spline';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Spline Error Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div className="spline-fallback" />;
    }

    return this.props.children;
  }
}

const SafeSpline = (props) => {
  return (
    <ErrorBoundary fallback={props.fallback}>
      <Spline {...props} />
    </ErrorBoundary>
  );
};

export default SafeSpline;
