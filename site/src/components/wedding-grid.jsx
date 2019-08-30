import React, { Component } from 'react'
import get from 'lodash/get'
import WeddingGridTile from './wedding-grid-tile'

class WeddingGrid extends Component {
  render() {
    const weddings = get(this.props, 'weddings')

    // console.log(weddings)

    return (
      <div className={`flex grid`}>
        {weddings.map(item => {
          return <WeddingGridTile key={item.slug} details={item} />
        })}
      </div>
    )
  }
}

export default WeddingGrid
