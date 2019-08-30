import React, { Component } from 'react'
import get from 'lodash/get'

class WeddingGridTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: '',
      src: '-still.gif',
    }
  }
  animateGIF() {
    this.setState({
      src: '.gif',
      hover: 'hovered',
    })
  }

  staticGIF() {
    this.setState({
      src: '-still.gif',
      hover: '',
    })
  }

  render() {
    const detail = get(this.props, 'details')

    return (
      <a
        href={`/wedding/${detail.slug}`}
        key={detail.slug}
        className={`center-text ${this.state.hover}`}
        onMouseEnter={() => this.animateGIF()}
        onMouseLeave={() => this.staticGIF()}
      >
        <span className={`image-container`}>
          <img src={`${detail.slug}${this.state.src}`} />
        </span>
        <span className={`title`}>{detail.title}</span>
      </a>
    )
  }
}

export default WeddingGridTile
