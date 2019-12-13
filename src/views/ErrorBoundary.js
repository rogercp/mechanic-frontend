/**
 * Dependencies
 */

import React, { Component } from 'react';
import GenericError from './GenericError';

/**
 * Define view
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error(error)
  }

  render() {
    if (this.state.hasError) {
      return <GenericError />
    } else {
      return this.props.children
    }
  }
}

/**
 * Export view
 */

export default ErrorBoundary