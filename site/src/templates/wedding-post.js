import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

class WeddingPostTemplate extends React.Component {
  render() {
    const currentPost = get(this.props, 'data.contentfulWedding')
    const allPosts = get(this.props, 'data.allContentfulWedding.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

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

    const arr = allPosts.map(({ node }) => ({
      title: node.title,
      slug: node.slug,
    }))

    const uniqueArr = getUnique(arr, 'title')
    console.log(uniqueArr)

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${currentPost.title} | ${siteTitle}`} />
        <h1>{currentPost.title}</h1>
        <hr></hr>
        <h2>Recent Weddings</h2>
        {uniqueArr.map(item => {
          return (
            <div key={item.slug}>
              <a href={`/wedding/${item.slug}`}>{item.title}</a>
            </div>
          )
        })}
        <a href="/wedding">Head back to More Weddings</a>
      </Layout>
    )
  }
}

export default WeddingPostTemplate

export const pageQuery = graphql`
  query WeddingPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulWedding(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      description {
        childMarkdownRemark {
          html
        }
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
