import React, { Component } from 'react'
import reset from './reset.css'
import base from './base.css'

class Container extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return <>{children}</>
  }
}

export default Container
