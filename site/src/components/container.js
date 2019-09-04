import React, { Component } from 'react'
import reset from './reset.css'
import base from './base.css'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      currentPage: null,
    }
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    onWaiting().then(() => this.setState({ loading: false }))
  }

  render() {
    const { children } = this.props

    const { loading } = this.state

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null // render null when app is not ready
    }

    return (
      <div className={`container ${this.state.loading ? '' : 'ready'}`}>
        {children}
      </div>
    )
  }
}

function onWaiting() {
  return new Promise(resolve => setTimeout(() => resolve(), 100))
}

export default Container
