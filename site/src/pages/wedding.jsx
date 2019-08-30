import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import ArticlePreview from '../components/article-preview'
import WeddingGrid from '../components/wedding-grid'
import '../components/weddings.css'
import '../components/media-queries.css'

class WeddingIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulWedding.edges')
    // const arr = posts.map(item => <div key={item.slug}>{item.title}</div>)
    // console.log(arr)

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

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Navigation />
        <div className={`section hero`}>
          <div className={`wrapper lg center-text`}>
            {/* <h1 className={`blue-color shadow`}>Weddings</h1> */}
            <h1 className={`blue-color`}>
              Stay awhile and give our most recent
              <span className={`shadow`}>wedding reel</span> a look over.
            </h1>
          </div>
        </div>
        <div className="section grid">
          <div className="wrapper">
            <WeddingGrid weddings={uniqueArr} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default WeddingIndex

export const pageQuery = graphql`
  query WeddingIndexQuery {
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
          about {
            json
          }
        }
      }
    }
  }
`
