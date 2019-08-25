import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

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
        <div className={styles.hero}>Weddings</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent weddings</h2>
          <ul className="article-list">
            {uniqueArr.map(node => {
              return (
                <li key={node.slug}>
                  <a href={`wedding/${node.slug}`}>{node.title}</a>
                </li>
              )
            })}
          </ul>
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
