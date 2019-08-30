import React, { Component } from 'react'
import Safe from 'react-safe'
import Footer from './footer'
import reset from './reset.css'
import base from './base.css'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: null,
    }
  }

  componentDidMount() {
    const URL = window.location.pathname

    if (URL.endsWith('wedding')) {
      this.setState({
        currentPage: 'weddings',
      })
    } else if (URL.endsWith('about')) {
      this.setState({
        currentPage: 'about',
      })
    } else if (URL.endsWith('/')) {
      this.setState({
        currentPage: 'home',
      })
    } else {
      this.setState({
        currentPage: '',
      })
    }
  }

  render() {
    const { children } = this.props

    return (
      <>
        <div className="page" id={this.state.currentPage}>
          {children}
          <Footer />
        </div>
        <Safe.script
          src="https://embed.small.chat/TMUR1BVEYGMHRHUHKL.js"
          async
        ></Safe.script>
      </>
    )
  }
}

export default Container
