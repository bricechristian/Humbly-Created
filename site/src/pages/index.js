import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Navigation from '../components/navigation'
import Layout from '../components/layout'
import Preloader from '../components/Preloader'
import Footer from '../components/footer'
import HeroSlider from '../components/hero-slider'

class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  loadingIsFinished = () => {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1500)
    console.log('video finished loading!')
  }

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const posts = get(this.props, 'data.allContentfulWedding.edges')

    function getUnique(arr, comp) {
      //store the comparison  values in array
      const unique = arr
        .map(e => e[comp])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & return unique objects
        .filter(e => arr[e])
        .map(e => arr[e])

      return unique
    }

    const arr = posts.map(({ node }) => ({
      title: node.title,
      slug: node.slug,
    }))

    const uniqueArr = getUnique(arr, 'title')

    const { isLoading } = this.state

    return (
      <Layout location={this.props.location}>
        <SEO homePath={this.props.path} />
        <Preloader isLoading={isLoading} />
        <div className="page" id="home">
          <Navigation />
          <div className={`section hero flex align-center pink-bg`}>
            <div className={`wrapper full center-text`}>
              {/* <h1 className="section-headline">Humbly Created Co.</h1> */}
              {/* <h2 className={`blue-color`}>
                I’ m Brice.I’ m a web - developer and videographer with a love for
                all things creative based out of Charleston, South Carolina.
              </h2> */}
              <HeroSlider
                weddings={uniqueArr}
                loadingIsFinished={this.loadingIsFinished}
              />
            </div>
            {/* <div className={`wedding-menu`}>
              <div className="wrapper">
                <ul className="flex">
                  {uniqueArr.map(item => {
                    return (
                      <li key={item.slug}>
                        <a href={`wedding/${item.slug}`}> {item.title} </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div> */}
          </div>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulWedding(sort: { fields: [date], order: DESC }, limit: 4) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          about {
            json
          }
        }
      }
    }
  }
`
