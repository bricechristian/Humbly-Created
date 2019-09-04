import React, { Component } from 'react'
import get from 'lodash/get'

class WeddingGridTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: '',
      src: '-still.gif',
      didImageLoad: false,
    }
  }

  handleImageLoading() {
    this.setState({ didImageLoad: true })
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

    const hiddenImages = {
      display: 'none',
    }

    return (
      <a
        href={`/wedding/${detail.slug}`}
        key={detail.slug}
        className={`center-text ${this.state.hover}`}
        onMouseEnter={() => this.animateGIF()}
        onMouseLeave={() => this.staticGIF()}
      >
        <span
          className={`image-container ${
            this.state.didImageLoad ? '' : 'blurred'
          }`}
        >
          {this.state.didImageLoad ? (
            <img src={`/${detail.slug}${this.state.src}`} />
          ) : (
            <img src={`/${detail.slug}-lowres.jpg`} />
          )}
        </span>
        <span className={`title`}>{detail.title}</span>
        <span className="hidden-images" style={hiddenImages}>
          <img
            src={`/${detail.slug}.gif`}
            onLoad={() => this.handleImageLoading()}
          />
          {/* <img src={`/${detail.slug}-still.gif`} alt="" /> */}
        </span>
      </a>
    )
  }
}

export default WeddingGridTile
