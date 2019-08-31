import React, { Component } from 'react'
import reset from './reset.css'
import base from './base.css'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: null,
    }
  }

  // componentDidMount() {
  //   const URL = window.location.pathname

  //   if (URL.endsWith('wedding')) {
  //     this.setState({
  //       currentPage: 'weddings',
  //     })
  //   } else if (URL.endsWith('about')) {
  //     this.setState({
  //       currentPage: 'about',
  //     })
  //   } else if (URL == '/') {
  //     this.setState({
  //       currentPage: 'home',
  //     })
  //   }
  // }

  render() {
    const { children } = this.props

    return <>{children}</>
  }
}

export default Container
