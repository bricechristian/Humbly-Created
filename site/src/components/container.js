import React, { Component } from 'react'
import reset from './reset.css'
import base from './base.css'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    // onWaiting().then(() => this.setState({ loading: false }))
  }

  render() {
    const { children } = this.props

    return <>{children}</>
  }
}

function onWaiting() {
  return new Promise(resolve => setTimeout(() => resolve(), 100))
}

export default Container
