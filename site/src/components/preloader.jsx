import React from 'react'
import './preloader.css'

class Preloader extends React.Component {
  state = {}
  render() {
    return (
      <div className={`preloader ${this.props.isLoading ? '' : 'hidden'}`}>
        Preloader
      </div>
    )
  }
}

export default Preloader
