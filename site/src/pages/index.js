import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../components/home.css'
import '../components/media-queries.css'

class RootIndex extends React.Component {
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
    // console.log(uniqueArr)

    return (
      <Layout location={this.props.location}>
        <div className={`section hero flex align-center pink-bg`}>
          <Helmet title={siteTitle} />
          <div className={`wrapper md center-text`}>
            {/* <h1 className="section-headline">Humbly Created Co.</h1> */}
            <h2 className={`blue-color`}>
              I’m Brice. I’m a web-developer and videographer with a love for
              all things creative based out of Charleston, South Carolina.
            </h2>
          </div>
          <div className={`wedding-menu`}>
            <div className="wrapper">
              <ul className="flex">
                {uniqueArr.map(item => {
                  return (
                    <li key={item.slug}>
                      <a href={`wedding/${item.slug}`}>{item.title}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
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
    allContentfulWedding(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
