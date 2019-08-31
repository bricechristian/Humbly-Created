import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
// import PageTransition from '@steveeeie/react-page-transition'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        {/* <PageTransition
          preset="moveToLeftFromRight"
          transitionKey={location.pathname}
        > */}
        {children}
        {/* </PageTransition> */}
      </Container>
    )
  }
}

export default Template
